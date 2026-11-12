---
title: "Alternativa a Grok Bot y OpenBot: mi experiencia con Hermes y Bot Screen en un VPS propio"
description: Si ya usaste Grok Bot u OpenBot y buscas algo más, así me fue con Hermes Agent, Bot Mode y Bot Screen en un VPS de 4 GB. Qué cambia, qué salió mal y cómo lo dejé seguro.
date: 2026-11-12T16:00:00Z
category: agents
translationKey: hermes-bot-screen-vps
---

Si llegaste hasta aquí, probablemente ya usaste [Grok Bot](https://x.ai/news/introducing-grok-bot), de [SpaceXAI](https://x.com/SpaceXSI), u [OpenBot](https://github.com/mandarwagh9/openbot), su reimplementación de código abierto. Ya sabes lo que se siente tener bots que trabajan solos en su propia computadora. Y también sabes dónde se quedan cortos.

A mí me pasó igual. Probé los dos y quería algo más flexible, que pudiera controlar de punta a punta: mi servidor, el modelo que yo elija y cada bot con su propio escritorio. La alternativa que encontré fue **Hermes Agent**, de [Nous Research](https://x.com/NousResearch), con dos piezas que llegaron entre septiembre y octubre: **Bot Mode**, que convierte tus perfiles en un equipo de bots con nombre, rol y memoria propios, y **Bot Screen**, que le da a cada bot un escritorio Linux que puedes ver en vivo.

La instalación fue lo de menos. Lo interesante estuvo en todo lo que apareció alrededor: un proveedor de internet que me bloqueaba, bots desconocidos tocando la puerta del servidor y un par de trampas silenciosas al clonar agentes.

## Si vienes de Grok Bot u OpenBot, esto es lo que cambia

La idea de fondo es la misma: agentes con nombre, que trabajan en una computadora propia y te llaman cuando te necesitan. Lo que cambia es dónde vive todo y cuánto control tienes.

- **El servidor es tuyo.** Los bots de Grok Bot corren en una computadora en la nube de SpaceXAI. Con Hermes eliges tú la máquina: un VPS, un homelab o Hermes Cloud. Tus sesiones y tus archivos se quedan donde tú decidas.
- **No dependes de un plan.** Grok Bot no se vende suelto: al lanzamiento, en agosto de 2026, venía incluido en SuperGrok Heavy, Cursor Ultra (200 dólares al mes) y Cursor Teams Premium (120 dólares por usuario al mes). Hermes es de código abierto con licencia MIT; pagas el servidor y el modelo que uses.
- **Eliges el modelo.** Funciona con tu suscripción de ChatGPT, con Nous Portal, con OpenRouter o con tu propio servidor de modelos.
- **Cada bot tiene su propio escritorio.** En OpenBot los bots comparten una sola computadora persistente. En Hermes, cada perfil tiene su pantalla, su perfil de navegador y sus cookies.
- **Va más allá de un pre-alpha.** OpenBot se describe a sí mismo como pre-alpha. Hermes ya tiene versiones estables y un equipo publicando parches casi cada semana.

Lo que no cambia: sigues siendo tú quien cuida la seguridad. Y si lo montas en tu propio servidor, todavía más.

## Por qué me quedé con Hermes

Además de lo anterior, me convencieron tres cosas del día a día:

1. **Usa la computadora como una persona.** Con *computer use*, el bot ve la pantalla, hace clic, escribe y navega. No depende de que cada servicio tenga una integración oficial.
2. **Crea sus propias herramientas.** Hermes va armando *skills* reutilizables a partir de lo que le pides. En vez de configurarle todo a mano, le explico lo que necesito y él construye la herramienta.
3. **Me deja intervenir cuando hace falta.** Si llega a un inicio de sesión, un código de verificación o un CAPTCHA, me avisa y se detiene. Yo tomo el control de su pantalla con **Take over**, resuelvo ese paso y se lo devuelvo con **Hand back**. Mientras yo tengo el control, sus herramientas quedan bloqueadas.

<figure>
<img src="/images/posts/hermes-bot-screen-vps/takeover-es.webp" alt="Diagrama de cuatro pasos de Bot Screen: el bot trabaja solo, se topa con un login, código 2FA, CAPTCHA o pago, tú tomas el control con Take over y luego se lo devuelves con Hand back" width="1400" height="567" loading="lazy" decoding="async">
<figcaption>El ciclo de Bot Screen: el bot trabaja y tú resuelves los pasos delicados. Gráfica: glacayo.com, según la <a href="https://hermes-agent.nousresearch.com/docs/user-guide/features/bot-screen">documentación de Bot Screen</a>.</figcaption>
</figure>

Ese tercer punto fue el que más tranquilidad me dio: el bot hace el trabajo pesado, pero las decisiones sensibles siguen en mis manos.

## El servidor: modesto pero suficiente

Usé un VPS sencillo: **2 núcleos, 4 GB de RAM y 100 GB de disco**. No es una bestia, y eso me obligó a cuidar los recursos.

Un dato que conviene saber desde el principio: **el navegador es lo que más memoria consume.** La documentación de Hermes calcula entre 1.1 y 1.5 GB por cada pantalla abierta con navegador, y por defecto se niega a arrancar una pantalla si hay menos de 1.5 GB libres. Su propia guía dice que con 4 GB el escritorio corre y que con 8 GB se trabaja cómodo. Con 4 GB alcanza, pero hay que planificar.

Otro detalle: Bot Screen solo existe para servidores Linux. En macOS y Windows no aparece (WSL2 sí cuenta).

## Primer tropiezo: "Connection timed out"

Lo primero fue conectarme al servidor por SSH, y nada. La conexión se quedaba colgada hasta agotar el tiempo de espera.

Revisé el servidor y estaba perfecto: el servicio SSH funcionaba y el firewall no bloqueaba nada. De hecho, en los registros se veía que **otras conexiones sí llegaban**. Las mías ni aparecían.

La prueba que resolvió el misterio fue muy simple: **me conecté desde el celular con datos móviles y funcionó al instante.** Con el wifi de mi casa, no.

Conclusión: **mi proveedor de internet bloquea el puerto de SSH saliente.** Algo que nunca habría imaginado.

### La solución: una red privada

En vez de pelear con el proveedor, instalé [Tailscale](https://x.com/Tailscale) en el servidor. Tailscale crea una red privada entre tus dispositivos, y como viaja por otro camino, el bloqueo dejó de importar. Desde entonces me conecto al servidor como si estuviera en la red de mi casa.

> **Lección:** cuando algo "no conecta", no asumas que el problema está en el servidor. Prueba desde otra red antes de cambiar configuraciones.

## La sorpresa que me heló la sangre

Mientras revisaba los registros del servidor apareció algo que no esperaba: **bots de todo el mundo intentaban adivinar la contraseña del administrador cada pocos minutos.**

Ninguno había entrado, pero el servidor aceptaba contraseñas desde internet, y eso es una puerta abierta. Le pasa a prácticamente cualquier servidor que se publica en internet; la diferencia está en si estás preparado o no.

Lo que hice:

- **Desactivé el inicio de sesión con contraseña.** Ahora solo se entra con llaves criptográficas, que en la práctica no se pueden adivinar.
- **Dejé una sola excepción:** la consola web de emergencia del proveedor de hosting, para no quedarme afuera si algo falla.
- **Activé un firewall que bloquea todo lo que entra desde internet,** excepto la red privada de Tailscale y esa consola de emergencia.

Un truco que me encantó: antes de activar el firewall, programé que **se desactivara solo a los 5 minutos**. Si algo salía mal y perdía el acceso, se revertía automáticamente. Cuando confirmé que todo funcionaba, cancelé ese temporizador.

> **Lección:** cuando cambies reglas de acceso remoto, deja siempre una red de seguridad. Quedarte afuera de tu propio servidor no es divertido.

## Despedirme de OpenBot

En el servidor ya tenía OpenBot instalado. Al revisar los recursos, el panorama era claro: **OpenBot consumía cerca de 1.6 GB de RAM**, y Hermes con su pantalla necesita al menos 1.5 GB libres para arrancar.

No entraban los dos, así que OpenBot se iba.

Antes de borrarlo hice un respaldo, lo detuve y confirmé que la memoria se liberaba. Recién entonces lo eliminé. La RAM disponible pasó de **1.9 GB a 3.2 GB**.

Un detalle importante: **desinstalar un programa no revoca sus credenciales.** Si un bot estaba conectado a tus cuentas o a servicios de IA, entra a cada servicio y revoca esas sesiones o llaves.

## La instalación de Hermes, paso a paso

Con el terreno limpio, la instalación fue bastante directa:

1. **Memoria de intercambio (swap) de 4 GB**, como colchón para que el sistema no se quede sin memoria.
2. **Actualizaciones del sistema** y un reinicio para cargar el kernel nuevo.
3. **Un usuario sin privilegios exclusivo para Hermes.** El bot no corre como administrador. Si algún día una página o un mensaje intentan manipularlo, el daño queda contenido. La lista de despliegue de Hermes lo dice sin rodeos: nunca corras el gateway como root.
4. **El instalador oficial de Hermes**, que trae su propio navegador y el controlador para usar la computadora.
5. **Los paquetes de Bot Screen**, el escritorio virtual del bot (TigerVNC y los componentes básicos de Xfce). Hermes no los instala en silencio: te muestra el comando y tú decides.

Para ese último paso, estos son los comandos:

```bash
hermes computer-use screen status    # muestra qué falta y el comando de instalación
hermes computer-use screen install   # instala los paquetes del escritorio
hermes computer-use screen start     # enciende la pantalla del bot
```

Para el modelo de lenguaje usé **mi suscripción de ChatGPT**, que Hermes soporta de forma oficial: corres `hermes model`, eliges "ChatGPT or Codex Subscription" y apruebas un código en el navegador. No necesité una API key aparte.

Y algo que recomiendo mucho: dejé las **aprobaciones en modo manual** (`approvals.mode: manual` en la configuración). Por defecto Hermes usa un modo "smart", en el que otro modelo evalúa el riesgo de cada comando; en manual, me pide permiso a mí antes de ejecutar cualquier comando peligroso. El trabajo va un poco más lento, pero mucho más seguro.

## Una interfaz web privada

Al principio manejaba todo desde la terminal, pero Hermes tiene una **interfaz web** con chat, sesiones, configuración y registros. Desde ahí hablo con los bots y reviso lo que hicieron.

La configuré con doble protección:

- **Solo es accesible dentro de mi red privada.** Desde internet, simplemente no existe.
- **Además pide usuario y contraseña.** Hermes directamente se niega a arrancar la interfaz fuera de `localhost` si no hay autenticación configurada, y me pareció una gran decisión de diseño. Ojo: la propia documentación aclara que usuario y contraseña son para redes de confianza o detrás de una VPN, no para exponer el panel a internet.

## Un equipo de bots, cada uno con su memoria

Con el tiempo armé varios bots especializados, cada uno con su rol, y un **Orquestador** que coordina y crea bots nuevos. En Bot Mode cada bot es un perfil de Hermes, con su configuración, sus skills, sus credenciales y su historial.

Quería que recordaran lo aprendido entre sesiones, así que les conecté [Engram](https://github.com/Gentleman-Programming/engram), un sistema de memoria persistente de código abierto. Hermes no lo trae de forma nativa, pero lo soporta a través de MCP, el protocolo estándar para conectar herramientas a los agentes.

Aquí había que decidir: **¿memoria compartida o separada?** Elegí que cada bot tenga la suya. Así lo que aprende uno no se mezcla con lo de otro.

Y descubrí una trampa: **cuando clonas un bot, hereda la memoria del original.** Los dos terminan compartiendo recuerdos sin que te des cuenta. Para evitarlo armé un pequeño script que le asigna a cada bot nuevo su propia memoria, y le indiqué al Orquestador que lo ejecute cada vez que crea uno.

> **Lección:** cuando algo "se copia", revisa qué se copió exactamente. Los errores silenciosos son los más peligrosos.

<figure>
<img src="/images/posts/hermes-bot-screen-vps/setup-es.webp" alt="Esquema del montaje: laptop y celular entran por la red privada Tailscale con llaves SSH a un VPS de 2 vCPU y 4 GB de RAM con firewall, donde un gateway de Hermes atiende a un Orquestador y dos bots, cada uno con su pantalla, su memoria y sus skills" width="1400" height="730" loading="lazy" decoding="async">
<figcaption>El montaje final: un solo camino de entrada y un gateway que atiende a todos los bots. Gráfica: glacayo.com.</figcaption>
</figure>

## Google Chrome para todos

Uno de los bots necesitaba Google Chrome y lo descargó por su cuenta, pero no tenía permisos para instalarlo. Me pidió que lo hiciera yo.

Aquí apliqué una regla que ahora sigo siempre: **cuando un agente te pide instalar algo con permisos de administrador, verifícalo primero.** Comparé el archivo que bajó el bot con una copia descargada directamente del sitio oficial. Eran idénticos byte a byte, y aun así instalé la copia oficial.

Después configuré Chrome en todos los bots, aprovechando un truco que el propio Hermes había inventado: un pequeño lanzador que acorta unas rutas internas que Chrome necesita. Lo probé pidiéndole a un bot que abriera una página y confirmé que todos los procesos eran de Chrome.

## Contraseñas y llaves: con cuidado

Hermes trae una **bóveda cifrada** para las contraseñas de sitios web. El bot nunca ve la contraseña: solo ve el identificador del login, y Hermes escribe la contraseña directamente en el sitio exacto para el que la guardaste. Si el dominio no coincide, no la escribe.

Aun así, mi recomendación es firme:

- **Dale al bot cuentas propias y con permisos mínimos.** Nunca tus cuentas principales.
- **No guardes tarjetas de pago.**
- **Deja los códigos de verificación (2FA) en tus manos.**

Hay un matiz que conviene tener claro. La documentación de Bot Screen lo dice así: las pantallas son superficies de trabajo, no fronteras de seguridad. Los bots de un mismo servidor comparten el usuario del sistema, los archivos y la red. El usuario sin privilegios protege al servidor del bot, pero no protege a un bot de otro. Si necesitas ese nivel de aislamiento, la recomendación oficial es usar servidores separados.

Y si piensas usar una suscripción de Claude con Hermes, revisa antes las reglas de [Anthropic](https://x.com/AnthropicAI). Desde el 4 de abril de 2026, las suscripciones ya no cubren el uso desde herramientas de terceros. Según la documentación de Hermes, hoy ese camino solo funciona con un plan Max que tenga créditos de uso extra comprados, y Claude Pro queda fuera. Para todos los demás, lo correcto es una API key con un límite de gasto.

## Lo que me llevo de esta experiencia

1. **Prueba desde otra red** antes de asumir que el servidor está roto.
2. **Asume que te están atacando**, porque probablemente es así. Usa llaves en vez de contraseñas y un firewall.
3. **Deja siempre una salida de emergencia** antes de cambiar reglas de acceso.
4. **No corras el agente como administrador.** Un usuario sin privilegios contiene los errores.
5. **Mantén las aprobaciones activas.** La velocidad no vale más que la seguridad.
6. **Verifica lo que el agente te pide instalar.**
7. **Revisa qué se hereda al clonar.**
8. **Planifica la memoria RAM**, sobre todo si vas a usar el navegador.

Ahora tengo un equipo de bots trabajando en su propia computadora, con su navegador, su memoria y la capacidad de crear sus propias herramientas. Y con las puertas bien cerradas.

En un próximo post te cuento cómo mejorar la privacidad de tu conexión. Mientras tanto, si ya corres agentes de IA en tu propio servidor, cuéntame cómo te fue en [X](https://x.com/GeovannyLacayo).

## Fuentes

- [Bot Screen, documentación de Hermes Agent](https://hermes-agent.nousresearch.com/docs/user-guide/features/bot-screen)
- [Bot Mode, documentación de Hermes Agent](https://hermes-agent.nousresearch.com/docs/user-guide/bot-mode)
- [Proveedores de modelos (suscripción de ChatGPT y reglas para Claude)](https://hermes-agent.nousresearch.com/docs/integrations/providers)
- [Web dashboard y su autenticación](https://hermes-agent.nousresearch.com/docs/user-guide/features/web-dashboard)
- [Credential vault](https://hermes-agent.nousresearch.com/docs/user-guide/features/credential-vault)
- [Seguridad y aprobación de comandos](https://hermes-agent.nousresearch.com/docs/user-guide/security)
- [Releases de Hermes Agent en GitHub](https://github.com/NousResearch/hermes-agent/releases)
- [Nous Research añade Bot Screen a Hermes Desktop (Tao Media, 24 de septiembre de 2026)](https://www.tao.media/nous-research-adds-live-bot-screen-passthrough-to-hermes-desktop/)
- [Introducing Grok Bot (xAI)](https://x.ai/news/introducing-grok-bot)
- [Lanzamiento de Grok Bot: planes y precios (Unite.AI, agosto de 2026)](https://www.unite.ai/xai-launches-grok-bot-always-on-ai-teammates-with-their-own-cloud-computers/)
- [OpenBot: alternativa de código abierto a Grok Bot (ChatGate)](https://chatgate.ai/post/openbot-2)
- [OpenBot en GitHub](https://github.com/mandarwagh9/openbot)
- [Engram en GitHub](https://github.com/Gentleman-Programming/engram)
- [Anthropic cierra el uso de suscripciones con herramientas de terceros (Hongkiat)](https://www.hongkiat.com/blog/anthropic-closed-openclaw-loophole/)
