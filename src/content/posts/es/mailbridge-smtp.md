---
title: "¿Tu WordPress no envía correos? Te presento MailBridge SMTP"
description: Por qué los correos de WordPress terminan en spam o nunca llegan, y cómo construí un plugin SMTP gratuito, sencillo y seguro para resolverlo de una vez.
date: 2026-10-26
category: wordpress
translationKey: mailbridge-smtp
---

Seguro te ha pasado. Un cliente te escribe preocupado: "Oye, el formulario de contacto no funciona". Lo pruebas, aparece el mensaje de "¡Gracias por escribirnos!" y todo parece estar bien. Pero el correo nunca llega. Ni a la bandeja de entrada, ni a spam, ni a ningún lado.

O tal vez es peor: tu tienda vende, pero los clientes no reciben la confirmación del pedido. Alguien quiere recuperar su contraseña y el enlace nunca aparece. Y lo más frustrante es que WordPress no te avisa de nada. Simplemente, en silencio, los correos se pierden.

Si te sentiste identificado, tranquilo: no es tu culpa y tiene solución. Hoy te cuento por qué pasa, cómo construí una herramienta para arreglarlo y por qué creo que te puede servir.

## El problema de fondo: WordPress envía correos "a la antigua"

Por defecto, WordPress envía todos sus correos con la función `wp_mail()`, que a su vez usa la función `mail()` de PHP del servidor donde está alojado tu sitio. Suena bien, pero en la práctica tiene varios problemas:

- **El correo sale sin autenticación.** Para Gmail, Outlook y compañía, un correo que no viene de un servidor de correo autenticado se parece demasiado al spam. Resultado: va directo a la carpeta de spam o lo rechazan.
- **Muchos hostings limitan o desactivan `mail()`.** Justamente para evitar abusos, así que tus correos ni siquiera salen.
- **No hay visibilidad.** Cuando algo falla, WordPress no te dice qué pasó ni por qué.

La solución estándar es enviar los correos por **SMTP**: en lugar de que el servidor los mande "como pueda", se conectan a un proveedor de correo de verdad (Gmail, Microsoft 365, SendGrid o el que uses), inician sesión con tus credenciales y entregan el mensaje por la puerta grande.

## Cómo nació MailBridge SMTP

Todo empezó con un caso muy concreto: un formulario de Contact Form 7 cuyos mensajes no llegaban. La primera versión del plugin, en abril de 2026, era exactamente eso: un SMTP seguro para Contact Form 7.

Pero rápido me di cuenta de algo: el problema no era Contact Form 7. Era cualquier correo que enviara WordPress. Los formularios, las notificaciones de WooCommerce, el registro de usuarios, los restablecimientos de contraseña... todo pasa por el mismo lugar. Así que generalicé el plugin y lo convertí en **MailBridge SMTP**: un puente entre WordPress y tu proveedor de correo.

### Por qué lo hice: sencillo, práctico y gratis

Existen plugins SMTP muy conocidos, pero muchos se han vuelto pesados: paneles llenos de opciones, funciones bloqueadas detrás de una versión "Pro" y avisos para que actualices. Yo quería algo distinto, con tres reglas:

1. **Sencillo:** una sola pantalla, los campos que necesitas y nada más.
2. **Práctico:** que me dijera claramente qué está fallando cuando algo no funciona.
3. **Gratis de verdad:** sin versión de pago, sin funciones escondidas, con código abierto bajo licencia GPL.

## Cómo funciona por dentro

Aquí viene la parte técnica, pero te prometo que es más simple de lo que parece.

### Un solo punto de conexión

WordPress usa internamente una librería llamada PHPMailer para armar y enviar los correos. Justo antes de enviar cada mensaje, dispara un *hook* llamado `phpmailer_init`. MailBridge se engancha ahí y le dice a PHPMailer: "no uses `mail()`, usa este servidor SMTP con estas credenciales".

```php
public function configure_smtp( $phpmailer ) {
	$options = $this->get_options();

	if ( empty( $options['enabled'] ) || empty( $options['host'] ) ) {
		return;
	}

	$phpmailer->isSMTP();
	$phpmailer->Host = sanitize_text_field( $options['host'] );
	$phpmailer->Port = absint( $options['port'] );

	if ( 'none' !== $options['encryption'] ) {
		$phpmailer->SMTPSecure = $options['encryption'];
	}

	if ( ! empty( $options['authentication'] ) ) {
		$phpmailer->SMTPAuth = true;
		$phpmailer->Username = $options['username'];
		$phpmailer->Password = $this->decrypt_password( $options['password'] );
	}
	// ...remitente y modo debug
}
```

¿La ventaja? Como todo pasa por `wp_mail()`, **no hace falta configurar nada plugin por plugin**. Contact Form 7, WPForms, WooCommerce, tu tema o el mismo WordPress: si usan `wp_mail()`, ya están cubiertos. Y no agrega dependencias externas, porque usa el PHPMailer que ya viene con WordPress.

### Tu contraseña, cifrada de verdad

Este punto me importaba mucho. Muchos plugins guardan la contraseña del SMTP tal cual en la base de datos. Si alguien llega a ver esa tabla, tiene acceso a tu cuenta de correo.

MailBridge cifra la contraseña con **AES-256-GCM** antes de guardarla. La clave se deriva de los *salts* únicos de tu instalación de WordPress, y cada vez se usa un vector de inicialización aleatorio:

```php
$key        = hash_hmac( 'sha256', wp_salt( 'auth' ), 'mailbridge_smtp_v1', true );
$iv         = random_bytes( openssl_cipher_iv_length( 'aes-256-gcm' ) );
$tag        = '';
$ciphertext = openssl_encrypt( $password, 'aes-256-gcm', $key, OPENSSL_RAW_DATA, $iv, $tag );
```

GCM además incluye una etiqueta de autenticación: si alguien modifica el valor guardado, el descifrado falla en lugar de devolver basura.

### Errores que te dicen qué hacer

Mi parte favorita. Cuando un correo de prueba falla, el servidor SMTP responde con algo como `535 5.7.8 Authentication failed`. Útil para un experto, críptico para todos los demás.

MailBridge clasifica cada error en una categoría clara y te dice qué revisar:

| Categoría | Causa típica | Qué revisar |
| --- | --- | --- |
| Autenticación | Inicio de sesión rechazado | Usuario y contraseña (o contraseña de aplicación) |
| Destinatario | El servidor rechazó la dirección | El correo de prueba |
| Remitente | El servidor rechazó el remitente | El correo "From" y los permisos del proveedor |
| Conexión | Tiempo agotado o conexión rechazada | Host, puerto o firewall |
| TLS/SSL | Falla en el cifrado | El tipo de cifrado y el certificado |

Y lo hace sin exponer nada sensible: las respuestas crudas del servidor, contraseñas, usuarios, direcciones de correo y datos de autenticación se ocultan antes de mostrar cualquier cosa.

### Diagnóstico incluido

En la misma pantalla tienes una sección de diagnóstico que revisa tu servidor: versión de PHP, si `mail()` está disponible, qué funciones están desactivadas y la configuración de `sendmail`. También puedes enviar una prueba con el `wp_mail()` nativo, sin SMTP, para comparar y confirmar si el problema es del hosting.

Y para los que disfrutamos la terminal, el repositorio trae una suite de pruebas por línea de comandos que valida la conexión paso a paso (DNS, conexión TCP, saludo del servidor, EHLO, STARTTLS y autenticación) sin necesidad de cargar WordPress.

## Por qué deberías usarlo (y por qué puedes confiar en él)

Resumiendo todo lo que obtienes:

- **Funciona con todo.** Cualquier plugin o tema que use `wp_mail()` queda cubierto automáticamente.
- **Se configura en dos minutos.** Ve a **Herramientas → MailBridge SMTP**, completa host, puerto, cifrado y credenciales, y envía un correo de prueba.
- **Compatible con los proveedores de siempre.** Gmail, Outlook/Microsoft 365, SendGrid y cualquier servidor SMTP estándar, con o sin SSL/TLS.
- **Te ayuda a resolver problemas.** Errores claros, diagnóstico del servidor y modo debug que solo se activa con el registro de WordPress encendido.
- **Gratis y sin letra pequeña.** Sin versión Pro, sin anuncios y sin funciones bloqueadas.

Ahora, entiendo que instalar un plugin que maneja las credenciales de tu correo requiere confianza. Por eso quiero ser transparente sobre cómo está construido:

- **Código abierto.** Todo está en [GitHub](https://github.com/glacayo/mailbridge-smtp). Puedes leer cada línea antes de instalarlo, y no hay nada escondido.
- **Seguridad desde el diseño.** Solo los administradores (`manage_options`) pueden ver o cambiar la configuración. Cada acción está protegida con *nonces* y las pruebas tienen un límite de una cada 30 segundos por usuario.
- **Estándares de WordPress.** El código sigue los WordPress Coding Standards y está preparado para traducciones.
- **Revisión automática de secretos.** Cada cambio en el repositorio pasa por un escaneo con gitleaks para evitar filtrar credenciales por accidente.
- **Al día.** Probado con WordPress 7.1 y PHP 8.5. Requiere WordPress 5.8 o superior y PHP 8.2 o superior.
- **Limpio al irse.** Si lo desinstalas, borra su configuración y sus datos temporales de la base de datos. No deja rastros.

Y para ser completamente honesto: por ahora está pensado para sitios individuales, así que todavía no soporta WordPress multisitio.

## Pruébalo

Descarga el ZIP de la [última versión en GitHub](https://github.com/glacayo/mailbridge-smtp/releases/latest), súbelo desde **Plugins → Añadir nuevo → Subir plugin**, actívalo y configura tu proveedor en **Herramientas → MailBridge SMTP**. Envía un correo de prueba y listo: tus correos vuelven a llegar.

Si encuentras un error o tienes una idea, abre un *issue* en el repositorio. Me encantará leerte. Y si te sirvió, una estrella en GitHub siempre se agradece.
