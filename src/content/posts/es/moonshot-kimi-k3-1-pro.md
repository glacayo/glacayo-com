---
title: "Kimi K3.1 Pro: el modelo chino que le pisa los talones a la frontera (y su polémica)"
description: Quién es Moonshot AI, cuánto cuesta Kimi, cómo evolucionó de K2.6 a K3.1 Pro, cómo se compara con los mejores modelos y el chisme que tiene a medio mundo hablando.
date: 2026-10-27
category: ai
translationKey: moonshot-kimi
---

Si sigues un poco el mundo de la IA, seguro viste el nombre **Kimi** por todos lados esta semana. El 23 de octubre [Moonshot AI](https://x.com/Kimi_Moonshot) lanzó **Kimi K3.1 Pro**, y en cuestión de horas Reddit ya estaba lleno de capturas comparándolo con Claude, GPT y Gemini. Algunos dicen que es el mejor modelo chino del momento; otros, que no es para tanto.

Y por si fuera poco, la empresa arrastra una de las polémicas más jugosas del año.

Hoy repasamos todo: quiénes son, cuánto cuesta, cómo fueron evolucionando sus modelos, qué tan bueno es el nuevo y, claro, el chisme.

## ¿Quiénes son Moonshot AI?

Moonshot AI es una startup china fundada en **2023** en Pekín. Su CEO es **Yang Zhilin**, que estudió en la Universidad de Tsinghua e hizo su doctorado en Carnegie Mellon. La fundó junto a Zhou Xinyu, Wu Yuxin y Zhang Yutao.

El origen del nombre tiene su encanto: en chino, la empresa se llama algo así como "El lado oscuro de la luna", en homenaje al disco de Pink Floyd. Yang y Zhou tocaban juntos en una banda llamada Splay. Y "Kimi", el nombre de su producto estrella, era el nombre en inglés de Yang.

### El producto que los puso en el mapa

Su primer gran lanzamiento fue el chatbot **Kimi**, en **octubre de 2023**. Su carta fuerte era el contexto largo: podía leer unos **200.000 caracteres chinos** de una sola vez, algo enorme para la época. Cinco meses después subieron ese límite a **dos millones**. Mientras otros competían por ser los más listos, Kimi se ganó a la gente por poder "leerse" documentos enteros.

Con el tiempo pasaron de un chatbot cerrado a publicar modelos con **pesos abiertos**, y ahí es donde empezaron a llamar la atención fuera de China.

### Una valuación que no para de crecer

Entre sus inversionistas están **Alibaba, Tencent, IDG Capital, HongShan y 5Y Capital**. Según Sacra, en diciembre de 2025 valía unos 4.300 millones de dólares; en mayo de 2026, 20.000 millones; y en julio, 35.000 millones. A comienzos de octubre, Bloomberg reportó que la valuación ya rondaba los **50.000 millones de dólares**, con planes de salir a bolsa a comienzos de 2027.

## ¿Cuánto cuesta usar Kimi?

Si vas a usarlo por API, estos son los precios oficiales por millón de tokens:

| Modelo | Entrada | Entrada en caché | Salida |
| --- | --- | --- | --- |
| Kimi K3.1 Pro | $2,00 | $0,20 | $10,00 |
| Kimi K3.1 Pro Highspeed | $4,00 | $0,20 | $20,00 |

La versión **Highspeed** promete ser entre 2 y 3 veces más rápida, a cambio de costar el doble. Las dos tienen una ventana de contexto de **1 millón de tokens**.

También está disponible en **OpenRouter** al mismo precio si lo sirve Moonshot directamente. Para modelos anteriores, OpenRouter muestra proveedores de terceros bastante más baratos que la API oficial, así que vale la pena revisar quién lo sirve.

Un dato importante si tienes algo en producción: Moonshot anunció que los modelos **K2 dejarán de estar disponibles para cuentas nuevas el 31 de octubre** y que planea retirarlos por completo en diciembre de 2026. Si dependes de ellos, ve planeando la migración.

## Los últimos incidentes

En lo técnico, la página de estado oficial de Moonshot registró dos incidentes con **K3** el **26 de octubre de 2026**: uno al mediodía (hora de China), donde la mayoría de las solicitudes fallaban, resuelto en unos 3 minutos, y otro por la tarde que duró cerca de media hora. Nada dramático, pero vale la pena saberlo si piensas montar algo crítico encima.

Pero lo interesante de verdad viene ahora.

## ☕ El chisme: la polémica con Anthropic

Aquí es donde se pone bueno. Eso sí: todo lo que sigue son **acusaciones** de terceros, no hechos probados en ningún tribunal. Te cuento quién dijo qué, con fecha y fuente.

**Febrero de 2026: la acusación de destilación.** [Anthropic](https://x.com/AnthropicAI), la empresa detrás de Claude, publicó que Moonshot había generado **más de 3,4 millones de intercambios** con Claude usando **cientos de cuentas fraudulentas**. Según Anthropic, el objetivo era copiar sus capacidades de razonamiento agéntico, programación, uso de computadora y visión. A esa práctica se le llama *destilación*: usar las respuestas de un modelo para entrenar otro.

**Julio de 2026: entra la Casa Blanca.** [Michael Kratsios](https://x.com/mkratsios47), jefe de política científica y tecnológica de la Casa Blanca, acusó a Moonshot de haber conseguido servidores con chips **Nvidia GB300** y de usarlos en Tailandia, probablemente para entrenar sus modelos. Ese mismo día, el secretario del Tesoro, [Scott Bessent](https://x.com/SecScottBessent), dijo que las **sanciones "están sobre la mesa"** cuando la destilación se convierte en robo de propiedad intelectual. Ojo: fue una amenaza, no una sanción aplicada. Y según TechCrunch, algunos expertos dudan de que K3 pudiera haberse construido principalmente destilando a Fable, el modelo de Anthropic, que llevaba apenas unas semanas disponible.

**Septiembre de 2026: la acusación más fuerte.** En su informe de inteligencia de amenazas, Anthropic fue más lejos. Según el informe, Moonshot **reenviaba en silencio pedidos de sus propios clientes a Claude** y les mostraba las respuestas como si fueran de Kimi. Habla de **más de 23 millones de intercambios** entre mayo y julio de 2026, y de un caso con casi 300.000 solicitudes en diez días usando **5.380 cuentas fraudulentas**. Lo más delicado: entre esos datos habría información sensible de clientes, como video de cámaras de vigilancia en Chengdu y credenciales internas de empresas chinas. Anthropic agrega que no sabe si Moonshot les avisó a sus clientes.

**¿Y qué dijo Moonshot?** Hasta donde pude verificar, **no encontré una respuesta pública** de Moonshot a estas acusaciones. TechCrunch dijo que pidió comentarios y no publicó ninguna respuesta. Si aparece, actualizo el post.

Mi lectura: el modelo puede ser muy bueno, y a la vez estas acusaciones merecen tomarse en serio, sobre todo si vas a mandarle datos sensibles de tu empresa. Las dos cosas pueden ser ciertas al mismo tiempo.

## Cómo evolucionaron sus últimos cuatro modelos

En seis meses, Moonshot sacó cuatro modelos importantes. Así se ven uno al lado del otro:

| Modelo | Lanzamiento | Contexto | Índice AA | Entrada / Salida |
| --- | --- | --- | --- | --- |
| Kimi K2.6 | Abr 2026 | 256K | 31 | $0,95 / $4 |
| Kimi K2.7 Code | Jun 2026 | 256K | 26 | $0,95 / $4 |
| Kimi K3 | Jul 2026 | 1M | 44 | $3 / $15 |
| Kimi K3.1 Pro | Oct 2026 | 1M | 55 | $2 / $10 |

*El índice AA es el Índice de Inteligencia de Artificial Analysis, consultado el 27 de octubre de 2026. Los precios son los oficiales por millón de tokens.*

### Kimi K2.6 (abril de 2026): el enjambre de agentes

Un modelo *Mixture of Experts* con **1 billón de parámetros** en total, de los que se activan 32.000 millones por token, con pesos abiertos bajo una licencia MIT modificada. Entiende texto, imágenes y video. Su gran novedad fue el **enjambre de agentes**: puede coordinar hasta **300 subagentes** a lo largo de **4.000 pasos**. Moonshot reportó un **80,2 en SWE-bench Verified** y un **83,2 en BrowseComp** (86,3 usando el enjambre).

### Kimi K2.7 Code (junio de 2026): el especialista en código

Misma base que K2.6, pero afinado para programar. Siempre "piensa" antes de responder, aunque usa **cerca de un 30 % menos de tokens de razonamiento** que K2.6, lo que se traduce en respuestas más baratas. Brilla en herramientas: **76,0 en MCP Atlas** y **62,0 en Kimi Code Bench v2**. Su índice general es más bajo que el de K2.6, y tiene sentido: el propio Moonshot recomienda K2.7 Code para programar y K2.6 para todo lo demás.

### Kimi K3 (julio de 2026): el gran salto

Aquí cambió todo. K3 sube a **2,8 billones de parámetros**, estrena una nueva arquitectura de atención y pasa a una ventana de contexto de **1 millón de tokens**. Puede trabajar en tareas largas de programación con la terminal, iterar mirando lo que construye y coordinar decenas de subagentes. Logró **90,4 en BrowseComp** sin necesidad de gestionar el contexto. El precio también subió: **$3 de entrada y $15 de salida**.

### Kimi K3.1 Pro (octubre de 2026): más listo y más barato

Es un K3 con más entrenamiento posterior, de la clase de los **3 billones de parámetros**. Lo curioso es que es **más capaz y más barato** que K3: baja a **$2 de entrada y $10 de salida**. Siempre razona, con tres niveles de esfuerzo (bajo, alto y máximo), y soporta imágenes, video, herramientas y salidas estructuradas. Moonshot prometió publicar los pesos antes del **4 de noviembre de 2026**, así que todavía no se pueden descargar.

Si miras la tabla, la historia es clara: el índice de inteligencia **casi se duplicó en seis meses** (de 31 a 55), y el modelo más nuevo cuesta menos que el anterior.

## ¿Cuánto vale la suscripción?

Si prefieres usar Kimi desde su app o web en lugar de la API, estos son los planes internacionales con pago mensual:

| Plan | Precio mensual | Qué te ofrece |
| --- | --- | --- |
| Plus | $19 | Documentos, presentaciones, Deep Research, publicar sitios web, **Kimi Code** y **Agent Swarm**; 2 tareas de agente en paralelo |
| Pro | $39 | Todo lo anterior, el doble de créditos que Plus, **Goal Mode** y un **Kimi Claw** dedicado |
| Max | $99 | 7 veces los créditos de Plus, 4 tareas en paralelo, 100 proyectos y 50 GB de almacenamiento |
| Ultra | $199 | 14 veces los créditos de Plus, 4 tareas en paralelo, 25 tareas programadas y 25 widgets |

Todas las funciones comparten una bolsa de créditos que se renueva cada mes y no se acumula. Desde Plus en adelante, Kimi Code tiene un límite de uso que se renueva cada cinco horas, sin tope semanal. En China existe además un plan **Go** (¥49 al mes) sin Kimi Code.

> **Link de referido:** si te decides por un plan, puedes suscribirte con <a href="https://www.kimi.ai/activities/en/invite/share?scenario=subscribe&from=share_poster&invitation_code=V9BUCM" rel="sponsored noopener" target="_blank">mi link de referido</a>. Pagas lo mismo y los dos recibimos una tirada para ganar créditos de Kimi. Siendo honesto: lo más común es ganar 3 días del plan Go; el premio de un año tiene un 0,01 % de probabilidad.

## Benchmarks: K3.1 Pro contra los grandes

Empecemos por los números que publicó Moonshot. Tómalos con pinza: los publica el propio fabricante y cada prueba usa su propia configuración. Aun así, el panorama es interesante. En estas 14 pruebas, K3.1 Pro queda **primero en 6** (SWE Marathon, Agents' Last Exam, OfficeQA Pro v2, Humanity's Last Exam, GDP.pdf y ZeroBench) y **segundo en otras 5**. Pelea cabeza a cabeza con Claude Opus 5.5 y GPT-6 Astra, y deja bastante atrás a DeepSeek y GLM.

<figure>
<img src="/images/posts/moonshot-kimi-k3-1-pro/overview.webp" alt="Gráficos de barras con los resultados de Kimi K3.1 Pro, Claude Opus 5.5, Claude Fable 5.1, GPT-6 Astra, DeepSeek V4.1 Flash y GLM 5.3 en 14 benchmarks, entre ellos Terminal-Bench 4.0, SWE Marathon, Humanity's Last Exam y OSWorld V2.1" width="1400" height="1903" loading="lazy" decoding="async">
<figcaption>Kimi K3.1 Pro frente a modelos de frontera y otros modelos chinos en 14 pruebas de programación, ciencia y trabajo de oficina. Imagen: <a href="https://www.kimi.ai/blog/kimi-k3-1-pro">Moonshot AI, blog oficial de Kimi K3.1 Pro</a>.</figcaption>
</figure>

Un punto que me llamó la atención son las alucinaciones. En la prueba interna de Moonshot, que mide qué tan seguido el modelo afirma cosas falsas (menos es mejor), K3.1 Pro solo queda detrás de GPT-6 Astra. Y cuando usa herramientas, le saca bastante ventaja a Opus 5.5 y a los otros modelos chinos. Moonshot aclara que la prueba es difícil a propósito y que no refleja la tasa de errores del día a día.

<figure>
<img src="/images/posts/moonshot-kimi-k3-1-pro/hallu-bench.webp" alt="Tasa de alucinaciones en Kimi Hallu Bench: sin herramientas, GPT-6 Astra 4,2, Kimi K3.1 Pro 5,4 y Opus 5.5 6,8; en la versión Hard con herramientas, GPT-6 Astra 5,5, Kimi K3.1 Pro 8,3, Opus 5.5 15,0, GLM 5.3 22,6 y DeepSeek V4.1 Flash 23,3" width="1400" height="433" loading="lazy" decoding="async">
<figcaption>Tasa de alucinaciones por afirmación en Kimi Hallu Bench, sin herramientas y en su versión Hard con herramientas (menos es mejor). Imagen: <a href="https://www.kimi.ai/blog/kimi-k3-1-pro">Moonshot AI, blog oficial de Kimi K3.1 Pro</a>.</figcaption>
</figure>

Para una vista más independiente está **Artificial Analysis**, que evalúa a todos los modelos con la misma metodología. Esta es su ficha de K3.1 Pro:

<figure>
<img src="/images/posts/moonshot-kimi-k3-1-pro/aa-card.webp" alt="Ficha de Kimi K3.1 Pro en Artificial Analysis: inteligencia 55, velocidad 42,6, costo por tarea de 2,11 dólares y 55,2 mil tokens por tarea" width="1200" height="630" loading="lazy" decoding="async">
<figcaption>Índice de inteligencia, velocidad y costo por tarea de Kimi K3.1 Pro. Imagen: <a href="https://artificialanalysis.ai/models/kimi-k3-1-pro">Artificial Analysis</a>.</figcaption>
</figure>

Y así queda en su Índice de Inteligencia frente al resto:

| Modelo | Empresa | Índice AA |
| --- | --- | --- |
| Claude Opus 5.5 | Anthropic (EE. UU.) | 58 |
| **Kimi K3.1 Pro** | **Moonshot (China)** | **55** |
| Gemini 4 Argon | Google (EE. UU.) | 53 |
| DeepSeek V4.1 Flash | DeepSeek (China) | 45 |
| GLM 5.3 | Z.ai (China) | 45 |
| Grok 4.6 | xAI (EE. UU.) | 44 |
| MiniMax M3.1 Flash | MiniMax (China) | 43 |

*Consultado el 27 de octubre de 2026. Artificial Analysis actualiza sus mediciones con frecuencia.*

El resultado es contundente: hoy K3.1 Pro es **el modelo chino mejor rankeado** del índice, con 10 puntos de ventaja sobre DeepSeek y GLM, y se mete entre los modelos de frontera de Estados Unidos. En **Arena**, su versión Max apareció de forma preliminar en el **puesto 11 del Agent Arena**.

## ¿Y qué dice la comunidad?

En Reddit las opiniones están divididas, como siempre:

- **Los entusiastas:** en r/singularity, un hilo celebraba que [Kimi K3.1 quedara por encima de Fable](https://www.reddit.com/r/singularity/comments/1xdligf/babe_wake_up_kimi_k31_is_rated_higher_than_fable/) en Artificial Analysis.
- **Los escépticos:** en r/LocalLLaMA, otros se preguntan si [K3.1 Pro realmente rinde tanto mejor](https://www.reddit.com/r/LocalLLaMA/comments/1xemxoq/is_it_just_me_or_kimi_k31_pro_dont_look_much/) en velocidad, calidad y precio frente a DeepSeek.
- **Los críticos:** algunos usuarios lo encuentran [un poco peor que GPT 6.1](https://www.reddit.com/r/singularity/comments/1xeft75/kimi_31_seems_to_be_slightly_worse_than_gpt_61/) en matemáticas y modelado 3D.

## Entonces, ¿vale la pena?

Si buscas un modelo potente, con contexto de 1 millón de tokens y a un precio menor que el de los modelos de frontera de Estados Unidos, **Kimi K3.1 Pro merece que lo pruebes**, sobre todo para programación y tareas agénticas. Y cuando publiquen los pesos, va a ser una opción muy interesante para correrlo por tu cuenta.

Eso sí: ten presente la polémica. Si vas a trabajar con datos sensibles, lee las acusaciones, evalúa tu nivel de riesgo y decide con información. Como siempre, la mejor herramienta es la que entiendes bien.

Y tú, ¿ya lo probaste? Me encantaría saber qué te pareció.

## Fuentes

- [Blog oficial de Kimi K3.1 Pro](https://www.kimi.ai/blog/kimi-k3-1-pro) y [de Kimi K3](https://www.kimi.ai/blog/kimi-k3)
- [Ficha de Kimi K2.6](https://huggingface.co/moonshotai/Kimi-K2.6) y [de Kimi K2.7 Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code) en Hugging Face
- [Precios de la API de Moonshot](https://platform.moonshot.ai/docs/pricing/chat) y [Kimi K3.1 Pro en OpenRouter](https://openrouter.ai/moonshotai/kimi-k3.1-pro)
- [Planes de suscripción de Kimi](https://www.kimi.com/en/help/membership/membership-pricing)
- [Artificial Analysis: Kimi K3.1 Pro](https://artificialanalysis.ai/models/kimi-k3-1-pro)
- [Página de estado de Moonshot](https://status.moonshot.cn/)
- [The Wire China: quién es Moonshot AI](https://www.thewirechina.com/2025/09/28/who-is-moonshot-ai/) (28 de septiembre de 2025)
- [Bloomberg: valuación de 50.000 millones](https://bloomberg.com/news/articles/2026-10-06/moonshot-said-to-eye-early-2027-ipo-after-value-hits-50-billion) (6 de octubre de 2026)
- [Anthropic: ataques de destilación](https://www.anthropic.com/news/detecting-and-preventing-distillation-attacks) (23 de febrero de 2026)
- [TechCrunch: amenaza de sanciones](https://techcrunch.com/2026/07/22/treasury-threatens-sanctions-after-white-house-claims-moonshot-distilled-anthropics-fable/) (22 de julio de 2026)
- [Anthropic: informe de inteligencia de amenazas](https://www.anthropic.com/threat-intelligence-report-september-2026) (septiembre de 2026)
