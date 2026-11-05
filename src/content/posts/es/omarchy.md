---
title: "Omarchy: el Linux de DHH que conquista a los developers (y qué tan duro es llegar desde Windows)"
description: Qué es Omarchy, por qué tanta gente que programa se está cambiando, cómo es la curva de aprendizaje si vienes de Windows, cómo te puede ayudar un agente de IA en la transición y en qué gana o pierde frente a Ubuntu Desktop.
date: 2026-11-05
category: os
translationKey: omarchy
---

Si pasas tiempo en el X de los developers o en YouTube, seguro ya viste esas capturas: un escritorio oscuro, ventanas acomodadas en mosaico, una terminal preciosa y nada de íconos en el escritorio. Casi siempre es **Omarchy**, la distribución de Linux que lanzó DHH hace un año y medio y que hoy tiene a medio mundo del desarrollo hablando de ella.

Y si vienes de Windows, las preguntas son inevitables: ¿qué tiene de especial?, ¿qué tan difícil es acostumbrarse?, ¿y por qué no simplemente instalar Ubuntu, como hace todo el mundo cuando quiere probar Linux?

Vamos por partes, porque la respuesta tiene matices.

> **La respuesta corta:** Omarchy es un Linux basado en Arch, armado con los gustos de [DHH](https://x.com/dhh), el creador de Ruby on Rails. Viene listo para programar desde el primer minuto, se maneja casi todo con el teclado y trae agentes de IA integrados al sistema. La curva desde Windows existe, sobre todo por las ventanas en mosaico y los atajos, pero el manual calcula unas dos semanas para soltarse. Frente a Ubuntu, Omarchy gana en velocidad y en entorno de developer listo; Ubuntu gana en familiaridad, estabilidad y años de soporte.

## ¿Qué es Omarchy?

Omarchy es una distribución de Linux creada por **David Heinemeier Hansson**, más conocido como DHH: el creador de Ruby on Rails y cofundador de 37signals, la empresa detrás de Basecamp y HEY. Su web la define como "el sistema operativo maleable para la era de los agentes".

Por dentro, son tres piezas:

- **Arch Linux** como base, con actualización continua: no esperas una versión nueva cada dos años, el sistema se va actualizando sobre la marcha.
- **Hyprland**, un gestor de ventanas en mosaico: las ventanas no flotan, se acomodan solas para usar toda la pantalla.
- **Quickshell**, el kit con el que está construido todo el escritorio desde la versión 4.

El manual lo describe como un Linux *omakase*, como ese menú japonés donde el chef decide por ti. Omarchy llega con todo elegido: Neovim como editor (con VS Code, Cursor y Zed a un clic), varias terminales, Docker, Lazygit, mise para manejar versiones de lenguajes, y stacks como Rails, Laravel o Node.js instalables desde su menú. Hasta trae Steam y 22 temas que cambian de un golpe la terminal, la barra, las notificaciones y el fondo. Es software libre, con licencia MIT.

<figure>
<img src="/images/posts/omarchy/tiling.webp" alt="Escritorio de Omarchy con cuatro ventanas en mosaico que llenan toda la pantalla: un navegador con la web de Omarchy, una terminal vacía, un monitor de sistema con uso de CPU y memoria, y el explorador de archivos" width="1400" height="788" loading="lazy" decoding="async">
<figcaption>Así se ve Omarchy con cuatro ventanas en mosaico: nada se superpone y no hay íconos en el escritorio. Imagen: <a href="https://github.com/omacom/omarchy">manual de Omarchy</a>.</figcaption>
</figure>

## ¿Por qué está ganando tanto terreno?

Omarchy salió en **junio de 2025** y, al principio, publicaba versiones nuevas casi cada semana. Pero el gran salto llegó este año con **Omarchy 4.0 "Quattro"**, lanzado el **14 de agosto de 2026**, que reescribió todo el escritorio.

Los números que publica el propio proyecto (son cifras de Omarchy, no auditadas) muestran el tamaño del fenómeno:

<figure>
<img src="/images/posts/omarchy/omarchy-17-meses.webp" alt="Línea de tiempo de Omarchy: primera versión en junio de 2025, versiones 2.0 y 3.0 entre agosto y septiembre de 2025, la polémica de Framework en octubre de 2025, Omarchy 4.0 Quattro el 14 de agosto de 2026, el nacimiento de la Omacom Foundation el 21 de agosto de 2026, 200.000 descargas en 18 días en septiembre de 2026 y un bug bounty de 100.000 dólares en octubre de 2026. Al lado, cifras publicadas por Omarchy: 1.344.823 descargas del ISO en su primer año, 46.199 estrellas en GitHub y 22 temas" width="1400" height="1030" loading="lazy" decoding="async">
<figcaption>Los hitos de Omarchy en 17 meses, con las cifras que publica el proyecto. Diagrama propio con datos de <a href="https://omarchy.org/">omarchy.org</a> y sus <a href="https://omarchy.org/news/">noticias</a>, consultados el 4 de noviembre de 2026.</figcaption>
</figure>

- **Descargas:** más de 1,3 millones de descargas del ISO en su primer año. Quattro pasó las 100.000 en una semana y las 200.000 en 18 días.
- **Una fundación con músculo:** en agosto de 2026 nació la **Omacom Foundation**, una organización sin fines de lucro para financiar el proyecto. Entre sus patrocinadores hay nombres como DigitalOcean, Alibaba Cloud, 1Password y 37signals, y su web habla de más de 23 millones de dólares comprometidos (son promesas, no dinero ya entregado).
- **Gente conocida en el equipo:** contrató al creador de Quickshell para liderar el escritorio, y ThePrimeagen, conocido streamer de programación, se unió al equipo núcleo para encargarse de las pruebas con agentes.
- **Más allá de las PC normales:** ya hay equipos dedicados a llevarlo a hardware de Apple (Omarchy M) y a procesadores Snapdragon (Omarchy Dragon).

### ¿Qué le ven los developers?

- **Instalación exprés:** grabas el ISO en una USB, respondes cinco preguntas y en menos de dos minutos, en la mayoría de equipos, ya estás dentro.
- **Listo para programar el primer día:** nada de pasar una tarde instalando editores, Docker y versiones de Node.
- **Todo con el teclado:** abrir apps, mover ventanas o cambiar de escritorio sin tocar el mouse. Cuando te acostumbras, se siente rapidísimo.
- **Una red de seguridad:** antes de cada actualización, el sistema saca una "foto" completa (sin tu carpeta personal) para que puedas volver atrás si algo sale mal. Eso le quita a Arch su fama de romperse con un update.
- **Se ve bonito, y se presume:** los temas y la estética son parte de la gracia. Por algo está lleno de capturas en redes.
- **Pensado para la era de los agentes:** de esto hablamos en un momento, porque es clave para quien viene de Windows.

## La curva de aprendizaje viniendo de Windows

Seamos honestos: Omarchy no se parece en nada a Windows, y esa es justamente la idea. El manual tiene un capítulo para quienes vienen de Windows o Mac, y estos son los cambios de chip más grandes:

<figure>
<img src="/images/posts/omarchy/de-windows-a-omarchy.webp" alt="Tabla de cambios de Windows a Omarchy: en vez de buscar la app en el menú Inicio, escribes su nombre tras Super más Space; en vez de arrastrar ventanas, se acomodan solas en mosaico; en vez de usar varios monitores, saltas entre escritorios con Super más 1, 2, 3 o 4; en vez de descargar instaladores, instalas desde el menú o con omarchy pkg add; en vez de configurar en ventanas con casillas, editas archivos de texto o se lo pides a tu agente; y en vez de puntos de restauración, hay un snapshot automático antes de cada actualización" width="1400" height="746" loading="lazy" decoding="async">
<figcaption>Los seis cambios de chip más grandes al pasar de Windows a Omarchy. Diagrama propio basado en el <a href="https://omarchy.org/manual/coming-from-mac-or-windows/">manual de Omarchy</a>.</figcaption>
</figure>

La tecla **Super** es la tecla de Windows, y casi todo empieza con ella. Estos son los atajos que conviene aprender el primer día:

| Lo que quieres hacer | En Windows | En Omarchy |
| --- | --- | --- |
| Abrir apps o buscar algo | Menú Inicio | `Super + Space` |
| Abrir la terminal | (la buscas) | `Super + Return` |
| Abrir el navegador | (lo buscas) | `Super + Shift + Return` |
| Cerrar la app | `Alt + F4` | `Super + W` |
| Captura de pantalla | `Win + Shift + S` | `Impr Pant` |
| Historial del portapapeles | `Win + V` | `Super + Ctrl + V` |
| Ver todos los atajos | No hay | `Super + K` |

Si solo vas a memorizar uno, que sea **`Super + K`**: muestra todos los atajos cuando se te olvidan.

Lo que más cuesta al principio es el mosaico. En Windows estás acostumbrado a tener ventanas encimadas y moverlas con el mouse; aquí cada ventana ocupa toda la pantalla y, si abres otra, la pantalla se divide. El manual recomienda darle una oportunidad real antes de activar las ventanas flotantes (`Super + T`), y calcula que en unas **dos semanas** los atajos se vuelven automáticos.

### Cómo hacer la transición sin dolor

- **Pruébalo antes de instalarlo:** Omarchy tiene una opción para correrlo en una máquina virtual desde Windows 10 u 11, sin tocar tu disco.
- **Instálalo junto a Windows:** soporta arranque dual, así que puedes elegir sistema al encender la PC mientras te acostumbras.
- **Ten Windows a mano para lo indispensable:** Omarchy puede montar una máquina virtual de Windows 11 para Office y apps de trabajo que solo existen ahí, con portapapeles y carpeta compartidos. Eso sí, sin aceleración de gráficos, así que no sirve para juegos ni edición pesada.

<figure>
<img src="/images/posts/omarchy/windows-vm.webp" alt="Ventana de una máquina virtual de Windows 11 dentro de Omarchy, con la pantalla de bienvenida del nuevo Outlook y los íconos de Papelera de reciclaje, Microsoft Edge, una carpeta compartida y Google Chrome en el escritorio de Windows" width="1400" height="934" loading="lazy" decoding="async">
<figcaption>La máquina virtual de Windows 11 corriendo dentro de Omarchy, ideal para Office y apps que no existen en Linux. Imagen: <a href="https://omarchy.org/manual/windows-vm/">manual de Omarchy</a>.</figcaption>
</figure>

## La IA como copiloto de la transición

Aquí está lo que hace a Omarchy diferente en 2026, y lo que cambia por completo la conversación sobre la curva de aprendizaje.

Antes, cambiarse a Linux significaba horas en foros buscando por qué no funcionaba el Wi-Fi o cómo cambiar un atajo. Ahora puedes tener un agente de IA al lado que lee los archivos de configuración, te explica qué hace cada cosa y hasta hace el cambio por ti.

Omarchy lo integra al sistema:

- **Eliges tu agente favorito el primer día:** la primera vez que arrancas, te invita a escoger un agente predeterminado. Soporta Claude Code, Codex, OpenCode, Pi, Hermes y muchos más. Si no tienes claro qué es cada uno, en el [post sobre eve](/es/posts/vercel-eve/) explico qué son estos agentes y en qué se diferencian.
- **Lo llamas con un atajo:** `Super + Shift + Ctrl + A` abre tu agente en una ventana dedicada, y `omarchy agent prompt "..."` le pasa una tarea directo desde la terminal.
- **Diagnóstico de fallos:** cuando una app se cae, aparece una notificación; si le das clic, tu agente analiza el error por ti.
- **Sabe de Omarchy:** el sistema le instala a tu agente una *skill* con instrucciones para adaptar el propio Omarchy: cambiar atajos, temas o configuración.

### Hermes Agent: un asistente que te recuerda

En mi caso, el asistente que uso es **Hermes Agent**, de [Nous Research](https://x.com/NousResearch). Es open source, con licencia MIT, y su gracia es que **aprende contigo**: guarda memoria entre sesiones, crea *skills* a partir de lo que va resolviendo y las mejora con el uso. Funciona con el modelo que quieras (Nous Portal, OpenRouter, OpenAI o tu propio servidor) y puedes hablarle desde la terminal o desde Telegram, Discord, Slack o WhatsApp.

Para una transición desde Windows tiene dos ventajas muy concretas:

- **Corre en Windows de forma nativa**, así que puedes empezar a usarlo antes de cambiarte y llegar a Linux con un asistente que ya conoces.
- **Omarchy lo trata como ciudadano de primera:** si lo eliges como agente predeterminado, instala Hermes Desktop, le pone el tema de Omarchy y, si algún día lo quitas, te pregunta antes de borrar tus chats, memorias y skills.

Ejemplos de cosas que le puedes pedir en las primeras semanas:

- "¿Cuál es el equivalente en Omarchy de Snipping Tool?"
- "Explícame qué hace este archivo de configuración de Hyprland antes de cambiar nada."
- "Quiero que `Super + E` abra el explorador de archivos, como en Windows."
- "Mi segundo monitor no se ve, ayúdame a revisar por qué."

### Un consejo importante

El manual de Omarchy lo advierte claramente: los agentes que lanzas con sus atajos corren en **modo de aprobación automática**, o sea, ejecutan cambios sin preguntarte. Sus palabras: "prepárate para que de verdad hagan cosas". Así que, sobre todo al principio, pídele al agente que te **explique primero** y que use su modo de planificación antes de tocar nada. Y si algo sale mal, tienes los snapshots para volver atrás.

## Omarchy vs. Ubuntu Desktop

Ubuntu es, para muchísima gente, la puerta de entrada a Linux. Su versión actual de soporte largo es **Ubuntu 26.04 LTS "Resolute Raccoon"**, lanzada el **23 de abril de 2026**, con GNOME 50 y el kernel Linux 7.0. Así se comparan:

<figure>
<img src="/images/posts/omarchy/omarchy-vs-ubuntu.webp" alt="Comparación entre Omarchy y Ubuntu Desktop 26.04 LTS. Omarchy: base Arch Linux con actualización continua, escritorio Hyprland en mosaico pensado para teclado, instalación de unos 2 minutos con 5 preguntas, todo listo para programar, agentes integrados al sistema, snapshot antes de cada actualización y respaldo de DHH, la comunidad y la Omacom Foundation. Ubuntu: base LTS con nueva versión cada 2 años, escritorio GNOME 50 con ventanas flotantes y mouse, asistente gráfico tradicional, entorno de programación que armas tú, IA según lo que instales, historial de APT con opción de deshacer y respaldo de Canonical con 5 años de soporte, hasta 15 con Pro" width="1400" height="759" loading="lazy" decoding="async">
<figcaption>Omarchy y Ubuntu Desktop, lado a lado. Diagrama propio con datos de <a href="https://omarchy.org/">omarchy.org</a>, <a href="https://ubuntu.com/about/release-cycle">ubuntu.com</a> y las notas de cada versión.</figcaption>
</figure>

### Donde gana Omarchy

- **Entorno de developer listo:** lo que en Ubuntu te toma una tarde configurar, aquí ya viene puesto.
- **Velocidad de uso:** una vez que dominas los atajos, abrir, mover y organizar todo es muchísimo más rápido.
- **Software siempre al día:** por ser Arch, recibes las versiones nuevas de los programas en cuanto salen.
- **Agentes de IA integrados:** en Ubuntu puedes instalar los mismos agentes, pero en Omarchy son parte del sistema, con atajos, skills y diagnóstico de fallos.
- **Snapshots automáticos:** cada actualización tiene su punto de regreso, sin que tengas que acordarte.

### Donde gana Ubuntu

- **Se siente familiar:** GNOME usa ventanas flotantes, mouse y un dock. Para alguien que viene de Windows, la curva es mucho más suave.
- **Estabilidad y soporte largo:** cada versión LTS recibe **5 años** de actualizaciones de seguridad. Con Ubuntu Pro, gratis para uso personal en hasta cinco equipos, llegas a **10**, y con un complemento adicional, hasta **15**.
- **Una empresa detrás:** Canonical lo mantiene y lo certifica en muchísimo hardware, algo importante si lo usas para trabajar.
- **Comunidad gigante:** cuando buscas cómo resolver algo en Linux, es muy probable que la respuesta esté escrita pensando en Ubuntu.
- **Sus propias redes de seguridad:** APT 3.2 trae historial de transacciones con opción de deshacer, y el instalador ya cifra el disco con TPM.

### ¿Y si quiero lo mejor de los dos?

Existe un camino intermedio: el propio DHH tiene **Omakub**, un proyecto hermano de Omarchy basado en Ubuntu. Y si lo que te atrae es el mosaico pero quieres algo más tradicional, The Register recomienda Pop!_OS como alternativa limpia y rápida con ventanas en mosaico por defecto.

## ☕ El chisme: seguridad y polémica

Omarchy crece rápido, pero no sin ruido. Aquí lo importante, con fechas y fuentes. Como siempre: lo que sigue son críticas y acusaciones de terceros, no hechos probados.

**Las críticas de seguridad.** Varias voces cuestionan los valores por defecto de Omarchy. En agosto de 2026, The Register citó a un crítico que abría su análisis con un aviso directo: no usar Omarchy si te importa aunque sea un poco la seguridad de tu máquina. En septiembre, el sitio The CyberSec Guru señaló, por ejemplo, que el usuario se agrega por defecto al grupo `docker`, lo que en la práctica permite llegar a permisos de administrador. Ya en 2025 había un hilo en el foro de Framework pidiendo quitar Omarchy de sus opciones de instalación por motivos parecidos. Del lado del proyecto, Omarchy tiene un equipo de seguridad, publicó una actualización de seguridad (la 4.0.1) a finales de agosto y lanzó en octubre un **programa de recompensas de 100.000 dólares** en HackerOne para quien encuentre fallos.

**La polémica con Framework (2025).** En octubre de 2025, Framework, el fabricante de laptops reparables, patrocinó a Hyprland y promocionó Omarchy. Según The Register, desarrolladores como Antoine Beaupré, de Debian, criticaron la decisión por las posturas públicas de DHH y por la historia de la comunidad de Hyprland. El fundador de Framework, Nirav Patel, respondió que no eligen a sus socios por sus opiniones políticas.

**La polémica con los patrocinadores (2026).** El **21 de julio de 2026**, DHH publicó en su blog el ensayo [Wolves, sheep, and gypsies](https://world.hey.com/dhh/wolves-sheep-and-gypsies-ba44af6a), donde defiende cazar a los lobos de Dinamarca y deportar a las personas gitanas que acampan en Copenhague. En septiembre, cuando 1Password se convirtió en patrocinador de la fundación con 300.000 dólares, The Verge contó la ola de críticas de sus propios clientes y describió a DHH como alguien que ha publicado opiniones "antivacunas y antiinmigrantes". El CEO de 1Password, David Faugno, dijo a su equipo que la empresa no respalda "opiniones odiosas, deshumanizantes o excluyentes", incluidas las que DHH ha compartido públicamente, y que la donación no es un respaldo a sus opiniones personales.

Mi lectura: separar la herramienta de su creador es una decisión personal, y cada quien pone el límite donde le parece. Lo que sí vale para todos es revisar los valores por defecto de seguridad antes de usar Omarchy para trabajo serio, como con cualquier sistema.

## Entonces, ¿cuál elegir?

**Prueba Omarchy si…**

- Programas todos los días y quieres un entorno listo, rápido y bonito sin pasar horas configurando.
- Te emociona la idea de manejar todo con el teclado, y estás dispuesto a darle un par de semanas.
- Quieres un sistema donde los agentes de IA sean parte del día a día, no un programa más.

**Empieza por Ubuntu si…**

- Es tu primer contacto con Linux y quieres algo que se sienta conocido.
- Lo usas para trabajar y valoras la estabilidad y los años de soporte por encima de tener lo último.
- Prefieres el mouse y las ventanas flotantes, al menos por ahora.

Y si vienes de Windows y ya trabajas con un agente como Hermes, la curva se aplana bastante: no estás solo frente a la terminal, tienes a alguien que te explica cada paso. Eso sí, que te explique antes de que lo haga.

¿Te animarías a probarlo?

## Fuentes

- [Omarchy: sitio oficial](https://omarchy.org/) (consultado el 4 de noviembre de 2026) y [noticias](https://omarchy.org/news/)
- Manual de Omarchy: [para quienes vienen de Mac o Windows](https://omarchy.org/manual/coming-from-mac-or-windows/), [atajos](https://omarchy.org/manual/hotkeys/), [IA](https://omarchy.org/manual/ai/) y [máquina virtual de Windows](https://omarchy.org/manual/windows-vm/)
- [Repositorio de Omarchy en GitHub](https://github.com/omacom/omarchy)
- [Omarchy: nace la Omacom Foundation](https://omarchy.org/news/2026/08/omacom-foundation-launches-with-8-million/) (21 de agosto de 2026)
- [Hermes Agent en GitHub](https://github.com/NousResearch/hermes-agent)
- [How-To Geek: probé la distro viral que recaudó millones](https://www.howtogeek.com/i-tried-the-viral-linux-distro-that-raised-millions/) (20 de septiembre de 2026)
- [The Register: Omarchy gana respaldo serio](https://www.theregister.com/os-platforms/2026/08/27/omarchy-distro-gains-serious-backing/5293026) (27 de agosto de 2026)
- [The Register: la guerra de Framework por Omarchy y Hyprland](https://www.theregister.com/software/2025/10/14/framework-flame-war-erupts-over-linux-controversy/1466815) (14 de octubre de 2025)
- [The CyberSec Guru: los fallos de seguridad y el boicot a Omarchy](https://thecybersecguru.com/analysis/omarchy-linux-security-flaws-dhh-boycott/) (14 de septiembre de 2026)
- [Slashdot: 1Password y la polémica por patrocinar Omarchy](https://tech.slashdot.org/story/26/09/02/2055245/), que resume a The Verge (2 de septiembre de 2026)
- [DHH: Wolves, sheep, and gypsies](https://world.hey.com/dhh/wolves-sheep-and-gypsies-ba44af6a) (21 de julio de 2026)
- [It's FOSS: novedades de Ubuntu 26.04 LTS](https://itsfoss.com/ubuntu-26-04-release-features)
- [Ubuntu: ciclo de lanzamientos y soporte](https://ubuntu.com/about/release-cycle)
