---
title: "Los mejores modelos de IA de noviembre de 2026, categoría por categoría"
description: 17 modelos de IA ranqueados en 15 categorías, desde oficina y redacción legal hasta diseño web, programación y roles de agentes, con benchmarks independientes a noviembre de 2026.
date: 2026-11-06T20:00:00Z
category: ai
translationKey: best-ai-models-november-2026
---

## La versión corta

Claude Opus 5.5 es el modelo a vencer este noviembre: gana 7 de las 15 categorías de este análisis, desde trabajo de oficina hasta diseño web y la dirección de un equipo de agentes de programación. Gemini 4 Carbon es el más inteligente en papel (60 en el Intelligence Index de Artificial Analysis y #1 en el ranking de texto de Arena), pero casi nadie puede usarlo todavía. Y los modelos chinos de pesos abiertos (Kimi, DeepSeek, GLM, MiniMax) ya hacen trabajo real por una décima parte del precio.

Aquí va la tabla resumen. La columna del medio importa cuando el ganador está detrás de una lista de espera.

| Categoría | #1 general | El mejor que puedes usar hoy | Opción económica |
| --- | --- | --- | --- |
| Conocimiento general | Gemini 4 Carbon | Claude Opus 5.5 | GPT-6.1 Sol |
| Asistente personal | Claude Opus 5.5 | Claude Opus 5.5 | Muse Spark 1.3 |
| Tareas de oficina | Claude Opus 5.5 | Claude Opus 5.5 | DeepSeek V4.1 Flash |
| Redacción legal | Muse Wonder | Muse Wonder | Muse Spark 1.3 |
| Contenido web (EN/ES) | Claude Opus 5.5 | Claude Opus 5.5 | Muse Spark 1.3 |
| De imagen a sitio web | Claude Opus 5.5 | Claude Opus 5.5 | GLM-5.3 Flash |
| Programación | Claude Opus 5.5 | Claude Opus 5.5 | DeepSeek V4.1 Flash |
| Ciberseguridad | Gemini 4 Carbon | GPT-6 Astra | DeepSeek V4.1 Flash |
| Code review | GPT-6 Astra | GPT-6 Astra | DeepSeek V4.1 Flash |
| Computer use | Claude Opus 5.5 | Claude Opus 5.5 | GPT-6.1 Terra |
| Autonomía | Gemini 4 Carbon | GPT-6 Astra | Kimi K3.1 Pro |
| Agente: orquestador | Claude Opus 5.5 | Claude Opus 5.5 | GPT-6.1 Sol |
| Agente: explorador | Claude Haiku 5.5 | Claude Haiku 5.5 | DeepSeek V4.1 Flash |
| Agente: worker | Claude Sonnet 5.5 | Claude Sonnet 5.5 | DeepSeek V4.1 Flash |
| Agente: verificador | GPT-6 Astra | GPT-6 Astra | GPT-6.1 Sol |

## Cómo armé estos rankings

Cada ranking combina tres tipos de evidencia, en este orden de peso: primero los benchmarks independientes, después los números que publica cada laboratorio y, por último, lo que reportan los usuarios reales.

- **Leaderboards independientes.** [Artificial Analysis](https://x.com/ArtificialAnlys) (Intelligence Index v5.0 y sus corridas de Terminal-Bench 4.0, GDPval-AA, AutomationBench, AA-Omniscience, Humanity's Last Exam, Harvey LAB-AA, el Cyber Index y CWE-Bench), [Arena](https://x.com/arena) (Text, WebDev, Vision, Agent e Image-to-WebDev), además de Vals, MCP Atlas de Scale y APEX-Agents. La mayoría los consulté a través de BenchLeader, que replica esos rankings a diario.
- **Tablas de lanzamiento de los laboratorios.** [OpenAI](https://x.com/OpenAI), [Anthropic](https://x.com/AnthropicAI), [Google DeepMind](https://x.com/GoogleDeepMind), [Moonshot](https://x.com/Kimi_Moonshot), [DeepSeek](https://x.com/deepseek_ai), [Zhipu](https://x.com/Zai_org), [MiniMax](https://x.com/MiniMax__AI), [Meta](https://x.com/AIatMeta) y [SpaceXAI](https://x.com/SpaceXSI). Son datos autorreportados, así que sobre todo sirven para desempatar.
- **La comunidad.** Reddit, X, Hacker News y foros de desarrolladores, como prueba de realidad, no como puntaje.

Cuatro cosas que conviene saber antes de seguir:

1. **Gemini 4 Carbon tiene lista de espera.** Desde su lanzamiento el 28 de octubre solo lo usan defensores de ciberseguridad aprobados en el programa Fairwind de Google, sin fecha pública para la API. Lo ranqueo por capacidad, y cada categoría incluye un plan B que sí puedes contratar.
2. **Hay dos Muse Wonder.** El de la API de Meta no es el "Muse Wonder Full" de las gráficas de Meta; Full solo funciona dentro de los planes de Muse Code (desde $50 al mes). Siempre aclaro de cuál hablo.
3. **Los "fallbacks" de seguridad de Claude.** Opus 5.5 y Fable 5.1 le pasan la mayoría de las solicitudes de seguridad ofensiva al modelo anterior, Opus 4.8, y eso hunde sus puntajes de ciberseguridad.
4. **El nivel de esfuerzo mueve los puntajes.** El mismo modelo puede variar más de 20 puntos entre razonamiento "low" y "max". Cito el mejor resultado publicado de cada uno.

## Los 17 contendientes

Los precios varían 100 veces: GPT-6 Astra y Claude Fable 5.1 cobran $50 por millón de tokens de salida, mientras que GPT-6 Luna y Claude Haiku 5.5 cobran $0.50. Todas las fechas son de 2026.

| Modelo | Laboratorio | Lanzamiento | Precio entrada / salida (USD por 1M tokens) | Pesos abiertos | Bueno saber |
| --- | --- | --- | --- | --- | --- |
| GPT-6 Astra | OpenAI | 3 sep | $10 / $50 | No | Buque insignia; primer modelo de OpenAI con nivel "Critical" en ciberseguridad |
| GPT-6.1 Sol | OpenAI | 29 sep | $2 / $10 | No | Casi Astra a una quinta parte del precio |
| GPT-6.1 Terra | OpenAI | 26 oct | $1 / $5 | No | Gama media, afinado para computer use y lo visual; 3 veces más rápido que Astra (según OpenAI) |
| GPT-6 Luna | OpenAI | 22 sep | $0.10 / $0.50 | No | Modelo pequeño para alto volumen |
| Claude Fable 5.1 | Anthropic | 1 sep | $10 / $50 | No | Clase Mythos con salvaguardas; lecturas de caché 75% más baratas |
| Claude Opus 5.5 | Anthropic | 22 sep | $4 / $20 | No | Modelo por defecto en Claude Code |
| Claude Sonnet 5.5 | Anthropic | 28 sep | $2 / $10 | No | Calidad casi de Opus a la mitad del precio |
| Claude Haiku 5.5 | Anthropic | 7 oct | $0.10 / $0.50 (prompts de hasta 100K tokens; $0.50 / $2.50 arriba de eso) | No | El Claude más rápido, pensado para subagentes |
| Gemini 4 Carbon | Google | 28 oct | $2 / $10 (introductorio) | No | Por ahora solo para defensores de ciberseguridad |
| GLM-5.3 | Zhipu AI | 14 ago | $1.40 / $4.40 | Sí (licencia propia) | Modelo de programación solo de texto |
| GLM-5.3 Flash | Zhipu AI | 26 ago | $0.15 / $0.50 | Sí (MIT) | Multimodal nativo; 320B totales, 18B activos |
| DeepSeek V4.1 Flash 1017 | DeepSeek | 17 oct | desde $0.15 / $0.60 (algunos listados $0.30 / $1.20) | Sí (MIT) | 763B parámetros, contexto de 1M tokens |
| Kimi K3.1 Pro | Moonshot AI | 23 oct | $2 / $10 | Sí (licencia Kimi) | 2.8T parámetros; los 1.56 TB de pesos salieron a inicios de noviembre |
| MiniMax M3.1 Flash | MiniMax | 19 oct | $0.15 / $0.60 | Anunciados | Rápido y barato para el día a día |
| Muse Wonder | Meta | 12 oct | $4 / $20 | No | La versión "Full" solo vive dentro de Muse Code |
| Muse Spark 1.3 | Meta | inicios de sep | $1.25 / $4.25 | No | $0.10 / $0.20 en modo Contributor, si dejas que Meta entrene con tus datos |
| Grok 4.7 | SpaceXAI | 21 sep | $2 / $6 | No | Contexto de 500K; variante Fast al doble del precio |

En inteligencia pura, el Intelligence Index v5.0 de Artificial Analysis (diez evaluaciones difíciles en un solo número) pone a cinco modelos por encima de 54:

<figure>
<img src="/images/posts/best-ai-models-november-2026/aa-index-es.webp" alt="Gráfica de barras del Intelligence Index v5.0 de Artificial Analysis: Gemini 4 Carbon 60.0, Claude Opus 5.5 59.1, GPT-6 Astra 56.9, GPT-6.1 Sol 54.6, Claude Sonnet 5.5 54.5, hasta MiniMax M3.1 Flash con 29.1" width="1400" height="1030" loading="lazy" decoding="async">
<figcaption>Intelligence Index v5.0 de Artificial Analysis, datos al 6 de noviembre de 2026. Gráfica: glacayo.com con datos de Artificial Analysis vía <a href="https://www.benchleader.com/benchmarks/aa_intelligence_index_v5">BenchLeader</a>.</figcaption>
</figure>

Dos cosas saltan a la vista. Sonnet 5.5 queda a menos de 5 puntos de Opus 5.5 por la mitad del precio, y [Kimi K3.1 Pro](/es/posts/moonshot-kimi-k3-1-pro/) (46.5) es ahora el modelo más inteligente que puedes descargar.

## Todo el panorama en una sola pantalla

Opus 5.5 entra al top 4 en 11 categorías; Gemini 4 Carbon y GPT-6 Astra lo logran en 10 cada uno, y ningún otro pasa de 6. Cada celda es el puesto de un modelo en una categoría (1 = el mejor de los 17); entre más brillante, mejor.

<figure>
<img src="/images/posts/best-ai-models-november-2026/ranking-map-es.webp" alt="Cuadrícula con el puesto de 17 modelos en 15 categorías. Claude Opus 5.5 es #1 en 7 categorías y top 4 en 11; Gemini 4 Carbon y GPT-6 Astra son top 4 en 10 cada uno" width="1400" height="1032" loading="lazy" decoding="async">
<figcaption>Rankings del autor, construidos con los benchmarks citados en cada sección. Gráfica: glacayo.com.</figcaption>
</figure>

El patrón: Anthropic y OpenAI dominan programación y oficina, Google domina conocimiento y autonomía de largo aliento (cuando abra Carbon), Meta se queda calladito con la redacción legal, y los modelos chinos baratos se amontonan en los roles de explorador y worker, justo detrás de Haiku y Sonnet.

## 1. Conocimiento general

Gemini 4 Carbon es el que más sabe y el que menos inventa: lidera el Intelligence Index (60.0) y AA-Omniscience (53.5), una prueba que premia las respuestas correctas y castiga las respuestas equivocadas dichas con seguridad.

| # | Modelo | Por qué está aquí | Plan B, y por qué |
| --- | --- | --- | --- |
| 1 | Gemini 4 Carbon | #1 Intelligence Index (60.0), #1 AA-Omniscience (53.5), #1 Arena Text (1528) | Claude Opus 5.5: un punto abajo en el índice, y lo puedes usar hoy |
| 2 | Claude Opus 5.5 | 59.1 en el índice, #1 en Humanity's Last Exam según AA (61.4%), 48.1 en Omniscience | GPT-6 Astra: otro laboratorio para una segunda opinión, 56.9 en el índice |
| 3 | Claude Fable 5.1 | 59.1% en Humanity's Last Exam, 46.3 en Omniscience, 1504 en Arena Text | Claude Opus 5.5: casi el mismo conocimiento al 40% del precio |
| 4 | GPT-6 Astra | 56.9 en el índice, 44.6 en Omniscience, 54.7% en Humanity's Last Exam | GPT-6.1 Sol: 54.6 en el índice por una quinta parte del precio |

**El resto, del mejor al peor:**

5. GPT-6.1 Sol: 54.6 en el índice, 42.4 en Omniscience.
6. Claude Sonnet 5.5: 54.5 en el índice y 55% en Humanity's Last Exam, pero adivina más (30.5 en Omniscience).
7. Muse Wonder: la versión Full saca 50.1 y la de la API 43.6; #4 en Arena Text (1507).
8. GPT-6.1 Terra: 51.3 en el índice, 29.6 en Omniscience.
9. Kimi K3.1 Pro: 46.5, el mejor modelo de pesos abiertos; Moonshot dice que bajó las alucinaciones de 23.4% a 8.3%.
10. Grok 4.7: 35.5 en el índice, 31.2 en Omniscience.
11. Muse Spark 1.3: 36.6 en el índice, 1495 en Arena Text.
12. Claude Haiku 5.5: 36.5 y 44.4% en Humanity's Last Exam, pero solo 12.3 en Omniscience.
13. DeepSeek V4.1 Flash 1017: 32.6 en el índice.
14. MiniMax M3.1 Flash: 29.1 en el índice, y un sorprendente 48.0% en Humanity's Last Exam.
15. GLM-5.3: 31.6 en el índice y 1481 en Arena Text, pero 6.0 en Omniscience: adivina mucho.
16. GLM-5.3 Flash: fuera del top 60 de AA, 1477 en Arena Text.
17. GPT-6 Luna: fuera del top 60 de AA; hecho para volumen, no para profundidad.

<figure>
<img src="/images/posts/best-ai-models-november-2026/omniscience-es.webp" alt="Gráfica de barras de AA-Omniscience v1.1: Gemini 4 Carbon 53.5, Claude Opus 5.5 48.1, Claude Fable 5.1 46.3, GPT-6 Astra 44.6, hasta GLM-5.3 con 6.0" width="1400" height="947" loading="lazy" decoding="async">
<figcaption>AA-Omniscience v1.1 (Artificial Analysis), 6 de noviembre de 2026. Gráfica: glacayo.com con datos de Artificial Analysis vía <a href="https://www.benchleader.com/benchmarks/aa_omniscience">BenchLeader</a>.</figcaption>
</figure>

La lección para todo lo que sea dato duro: los modelos baratos no solo saben menos, también son más propensos a inventar una respuesta muy seriecitos. Úsalos con búsqueda web.

## 2. Asistente personal

Para un asistente del día a día (responder preguntas, manejar tu correo y tu calendario con herramientas conectadas, no perder el hilo), Claude Opus 5.5 es la elección: #1 en Agent Arena, #3 en Arena Text y 85.4% en MCP Atlas, la prueba de uso de herramientas de Scale.

| # | Modelo | Por qué está aquí | Plan B, y por qué |
| --- | --- | --- | --- |
| 1 | Claude Opus 5.5 | #1 Agent Arena (+20.9 puntos de mejora neta en tareas reales), 1509 en Arena Text, 85.4% MCP Atlas, inventa poco | Claude Sonnet 5.5: mismas apps y herramientas a la mitad del precio |
| 2 | Gemini 4 Carbon | #1 Arena Text, #2 Agent Arena, los datos más confiables; y Gemini ya se conecta con Gmail, Calendar y Docs | Claude Opus 5.5 hoy, o Gemini 4 Argon, el hermano de Carbon que ya está disponible |
| 3 | Claude Fable 5.1 | El mejor MCP Atlas de los 17 (87.2%), 47.2% en τ³-Banking (atención a clientes) | Claude Opus 5.5: casi igual de bueno para pendientes de rutina al 40% del precio |
| 4 | Muse Wonder | #4 Arena Text (1507), construido alrededor de la memoria de Meta; Meta lo vende como confiable en tareas pequeñas y concretas | Muse Spark 1.3: #3 en τ³-Banking (50.5%), 1495 en Arena Text, a $1.25 / $4.25 |

**El resto, del mejor al peor:**

5. Claude Sonnet 5.5: la opción con mejor relación precio-calidad, 75.5% en APEX-Agents, aunque adivina más en datos.
6. GPT-6.1 Sol: un todoterreno sólido a $2 / $10.
7. GPT-6 Astra: muy capaz, pero los usuarios de ChatGPT se quejan de que se detiene a pedir aclaraciones demasiado seguido.
8. Muse Spark 1.3: el asistente pulido más barato y el mejor τ³-Banking de los 17.
9. Grok 4.7: entrenado para trabajar dentro de los agentes siempre activos de Grok Bot.
10. GPT-6.1 Terra: rápido y barato para pedidos rutinarios.
11. Kimi K3.1 Pro: fuerte en pruebas de oficina, menos probado como asistente fuera de las apps de Kimi.
12. GLM-5.3: excelente llamando herramientas (84.2% MCP Atlas, 50.3% τ³-Banking), flojo en datos.
13. Claude Haiku 5.5: un asistente rápido y barato para clasificar pendientes.
14. GLM-5.3 Flash: 47.2% en τ³-Banking por $0.15 por millón de tokens de entrada.
15. DeepSeek V4.1 Flash 1017: baratísimo, pocas integraciones para usuarios finales.
16. MiniMax M3.1 Flash: rápido, pero con pocas funciones de asistente.
17. GPT-6 Luna: bien para respuestas sueltas, no para malabarear pendientes.

## 3. Tareas de oficina (PDFs, finanzas, contabilidad, correo)

Claude Opus 5.5 es el mejor oficinista: encabeza GDPval-AA (1,866 Elo), la prueba de Artificial Analysis con entregables reales de 44 ocupaciones como memos, hojas de cálculo y presentaciones, y saca 73.5% en APEX-Agents, que encadena tareas entre aplicaciones de oficina.

| # | Modelo | Por qué está aquí | Plan B, y por qué |
| --- | --- | --- | --- |
| 1 | Claude Opus 5.5 | #1 GDPval-AA (1866), 73.5% APEX-Agents, 28.8% en GDP.pdf (documentos profesionales largos) | Claude Sonnet 5.5: 1838 en GDPval-AA a la mitad del precio |
| 2 | Claude Sonnet 5.5 | 1838 en GDPval-AA, el mejor APEX-Agents de los 17 (75.5%), 71.8% AutomationBench | GPT-6.1 Terra: $1 / $5, bueno con PDFs (28.6% GDP.pdf) y formularios en pantalla |
| 3 | Kimi K3.1 Pro | #2 GDPval-AA (1858), 73.3% AutomationBench, 31.4% GDP.pdf; Moonshot lo afinó para investigación financiera | DeepSeek V4.1 Flash: 1746 en GDPval-AA por cerca de una décima parte del precio |
| 4 | Muse Wonder | Full: 1857 en GDPval-AA y #1 en GDP.pdf (32.6%); versión API: 1770 y 30.6% | Claude Opus 5.5 si necesitas API y el puntaje más alto |

**El resto, del mejor al peor:**

5. Gemini 4 Carbon: #1 en AutomationBench (77.8%) y Vending-Bench 2, pero solo 1733 en GDPval-AA.
6. Claude Fable 5.1: 1763 en GDPval-AA; caro para papeleo.
7. GPT-6 Astra: #2 en GDP.pdf (32.2%), excelente con PDFs largos, pero 1584 en GDPval-AA.
8. DeepSeek V4.1 Flash 1017: 1746 en GDPval-AA y 69.8% en APEX-Agents por centavos.
9. GPT-6.1 Sol: 32.0% en GDP.pdf.
10. Grok 4.7: 1718 en GDPval-AA; SpaceXAI dice que mejoró en documentos y presentaciones.
11. GPT-6.1 Terra: 68.3% en APEX-Agents a $1 / $5.
12. GLM-5.3: 1657 en GDPval-AA.
13. Muse Spark 1.3: #3 en τ³-Banking, 58.6% en APEX-Agents.
14. Claude Haiku 5.5: 1631 en GDPval-AA, por encima del Opus 5 anterior en trabajo de conocimiento.
15. GLM-5.3 Flash: 1649 en GDPval-AA.
16. MiniMax M3.1 Flash: 72.5% en AutomationBench, pero 1465 en GDPval-AA.
17. GPT-6 Luna: 1444 en GDPval-AA.

<figure>
<img src="/images/posts/best-ai-models-november-2026/gdpval-es.webp" alt="Gráfica de puntos del Elo de GDPval-AA v2.1: Claude Opus 5.5 1,866, Kimi K3.1 Pro 1,858, Muse Wonder Full 1,857, Claude Sonnet 5.5 1,838, hasta GPT-6 Luna con 1,444" width="1400" height="1140" loading="lazy" decoding="async">
<figcaption>GDPval-AA v2.1 (Artificial Analysis), 4 de noviembre de 2026. Gráfica: glacayo.com con datos de Artificial Analysis vía <a href="https://www.benchleader.com/benchmarks/aa_gdpval_elo">BenchLeader</a>.</figcaption>
</figure>

Para contabilidad y finanzas, úsalos para redactar y conciliar, y revisa cada total tú mismo. Ninguno es auditor.

## 4. Redacción legal (políticas de privacidad, términos y condiciones, términos de uso)

Muse Wonder de Meta es el ganador sorpresa: en Harvey LAB-AA v1.1, que solo aprueba un entregable legal cuando cumple cada punto de la rúbrica y no inventa nada, Wonder Full saca 13.1% y la versión API 10.0%. Sí, el mejor puntaje es 13%. Trata a cualquiera de estos modelos como un pasante legal muy rápido, nunca como tu abogado.

| # | Modelo | Por qué está aquí | Plan B, y por qué |
| --- | --- | --- | --- |
| 1 | Muse Wonder | #1 (Full, 13.1%) y #2 (API, 10.0%) en Harvey LAB-AA v1.1 | Muse Spark 1.3: misma familia, 8.9%, por aproximadamente una cuarta parte del precio |
| 2 | Grok 4.7 | 9.4% en Harvey LAB-AA v1.1; la corrida propia de SpaceXAI del benchmark de Harvey dio 19.6% | GPT-6 Astra: 8.6% y mejor razonamiento general |
| 3 | Muse Spark 1.3 | 8.9%; también ganó la primera versión del benchmark (95.5% de los puntos de la rúbrica) | Muse Wonder (API) para los documentos difíciles |
| 4 | GPT-6 Astra | 8.6%, y excelente con documentos largos (32.2% en GDP.pdf) | GPT-6.1 Sol: 6.9% por una quinta parte del precio |

**El resto, del mejor al peor:**

5. Gemini 4 Carbon: #1 de 87 modelos en el Legal Research Bench de Vals; todavía sin puntaje en Harvey.
6. GPT-6.1 Sol: 6.9%.
7. Claude Fable 5.1: 6.4%.
8. Claude Opus 5.5: 4.2% una vez que se aplica el filtro de alucinaciones.
9. Kimi K3.1 Pro: aún sin puntaje (su antecesor K3 sacó 5.3%).
10. Claude Sonnet 5.5: 2.8%.
11. GPT-6.1 Terra: sin puntaje; OpenAI dice que escribe más claro que antes.
12. GPT-6 Luna: 3.3%.
13. Claude Haiku 5.5: 2.8%.
14. DeepSeek V4.1 Flash: 1.7% (la versión de septiembre).
15. MiniMax M3.1 Flash: sin puntaje.
16. GLM-5.3 Flash: 0.8%.
17. GLM-5.3: 0.3%.

<figure>
<img src="/images/posts/best-ai-models-november-2026/harvey-lab-es.webp" alt="Gráfica de barras de Harvey LAB-AA v1.1: Muse Wonder Full 13.1%, Muse Wonder API 10.0%, Grok 4.7 9.4%, Muse Spark 1.3 8.9%, GPT-6 Astra 8.6%, Claude Opus 5.5 4.2%, hasta GLM-5.3 con 0.3%" width="1400" height="988" loading="lazy" decoding="async">
<figcaption>Harvey LAB-AA v1.1 (Artificial Analysis), 6 de noviembre de 2026. Gráfica: glacayo.com con datos de Artificial Analysis vía <a href="https://www.benchleader.com/benchmarks/aa_harvey_lab">BenchLeader</a>.</figcaption>
</figure>

Para la política de privacidad o los términos de un sitio web, dale al modelo lo que no puede adivinar: qué datos recopilas, qué herramientas los procesan, dónde viven tus clientes (GDPR, CCPA y leyes similares) y cómo pueden contactarte. Después, que un abogado lo revise.

## 5. Contenido para sitios web en inglés y español

Claude Opus 5.5 es la apuesta más segura para escribir contenido web: queda a solo 19 puntos de Gemini 4 Carbon en el ranking de preferencia humana a ciegas de Arena (1509 contra 1528), y Carbon todavía no está abierto al público.

Ningún benchmark público califica copy de marketing en español, así que este ranking se apoya en Arena Text (votos a ciegas de personas reales, con control de estilo), en el ranking de español de Artificial Analysis (actualizado por última vez con modelos de inicios de 2026, donde modelos Gemini y Claude Opus ocuparon el top 5) y en pruebas prácticas.

| # | Modelo | Por qué está aquí | Plan B, y por qué |
| --- | --- | --- | --- |
| 1 | Claude Opus 5.5 | #3 Arena Text (1509); su familia encabezó el ranking de español de AA; ganó las rondas de sitio web y diseño en pruebas independientes contra Astra | Claude Sonnet 5.5 para volumen: misma voz a la mitad del precio |
| 2 | Gemini 4 Carbon | #1 Arena Text (1528); los modelos Gemini encabezaron el ranking de español de AA | Claude Opus 5.5, hasta que Carbon abra |
| 3 | Muse Wonder | #4 Arena Text (1507), prácticamente empatado con Opus | Muse Spark 1.3: 1495 a $1.25 / $4.25 |
| 4 | Claude Fable 5.1 | 1504 en Arena Text, el razonamiento más fuerte para páginas pilar largas | Claude Opus 5.5: misma liga por menos |

**El resto, del mejor al peor:**

5. Claude Sonnet 5.5: 1477; la mula de carga para lotes de artículos.
6. Muse Spark 1.3: 1495, el mejor redactor barato.
7. GPT-6.1 Sol: 1481.
8. GPT-6.1 Terra: OpenAI promete una redacción más clara y natural que su antecesor.
9. GPT-6 Astra: 1476; los usuarios señalaron problemas en su redacción desde el lanzamiento.
10. GLM-5.3: 1481, buen inglés; revisa su español antes de publicar.
11. Kimi K3.1 Pro: capaz, pero prueba su tono en español.
12. DeepSeek V4.1 Flash 1017: 1476, los borradores decentes más baratos.
13. GLM-5.3 Flash: 1477.
14. Grok 4.7: fuera del top 60 de Arena en texto.
15. Claude Haiku 5.5: sirve para meta descripciones y textos alt.
16. MiniMax M3.1 Flash: solo primeros borradores.
17. GPT-6 Luna: solo fragmentos cortos.

Dos hábitos importan más que el modelo: escribe el contenido en español desde cero (no traduzcas la página en inglés) y dile al modelo qué español quieres, porque un cliente en México y un lector en Madrid esperan palabras distintas.

## 6. Desarrollador web: de un diseño en imagen a un sitio funcionando

Para convertir una captura o un mockup en un sitio real, empieza con Claude Opus 5.5: #1 en el ranking WebDev de Arena (1,810), #2 en Arena Vision (1,321) y el mejor diseñador en pruebas prácticas independientes contra GPT-6 Astra. Astra queda muy cerca en segundo lugar y tiene el último #1 publicado en el ranking específico Image-to-WebDev de Arena.

| # | Modelo | Por qué está aquí | Plan B, y por qué |
| --- | --- | --- | --- |
| 1 | Claude Opus 5.5 | #1 WebDev (1810); ve mejor los diseños (Vision 1321 contra 1280 de Astra); hizo los mejores diseños en las pruebas cara a cara de UX Planet y MindStudio | Claude Sonnet 5.5: 1770, a la mitad del precio |
| 2 | GPT-6 Astra | #1 Image-to-WebDev (1733, corte del 15 de septiembre, antes de que entrara Opus 5.5); #2 WebDev (1773) | GPT-6.1 Sol: 1751 en WebDev por una quinta parte del precio |
| 3 | Claude Fable 5.1 | #2 Image-to-WebDev (1710), Vision 1320, WebDev 1746 | Claude Opus 5.5: mejor y más barato |
| 4 | Claude Sonnet 5.5 | #3 WebDev (1770) a $2 / $10 | GLM-5.3 Flash o Muse Spark 1.3: ambos están en la frontera costo-rendimiento de Image-to-WebDev |

**El resto, del mejor al peor:**

5. Gemini 4 Carbon: 1768 en WebDev, pero Opus le ganó 69% de los duelos directos.
6. GPT-6.1 Sol: 1751.
7. Muse Spark 1.3: #4 en Image-to-WebDev (1645) y 1308 en Vision, a $1.25 / $4.25.
8. Muse Wonder: 1725 la Full, 1652 la de API.
9. Kimi K3.1 Pro: 1695.
10. GLM-5.3 Flash: #10 en Image-to-WebDev (1588) por $0.15 por millón de tokens de entrada.
11. GPT-6.1 Terra: 1673; OpenAI dice que su razonamiento visual mejoró.
12. DeepSeek V4.1 Flash 1017: 1665.
13. Grok 4.7: 1638.
14. Claude Haiku 5.5: 1589.
15. MiniMax M3.1 Flash: 1583.
16. GPT-6 Luna: 1579.
17. GLM-5.3: 1623 en WebDev, pero solo lee texto, así que no puede ver tu diseño.

<figure>
<img src="/images/posts/best-ai-models-november-2026/webdev-es.webp" alt="Gráfica de puntos del Elo de Arena WebDev: Claude Opus 5.5 1,810, GPT-6 Astra 1,773, Claude Sonnet 5.5 1,770, Gemini 4 Carbon 1,768, hasta GPT-6 Luna con 1,579" width="1400" height="1084" loading="lazy" decoding="async">
<figcaption>Arena WebDev, resultados del 28 de octubre de 2026. Gráfica: glacayo.com con datos de Arena vía <a href="https://www.benchleader.com/benchmarks/lmarena_webdev">BenchLeader</a>.</figcaption>
</figure>

Un truco que funciona con cualquiera: manda el diseño en resolución completa, especifica el stack (HTML y Tailwind, WordPress, Next.js) y pide la versión móvil y la de escritorio por separado.

## 7. Programación e ingeniería

Claude Opus 5.5 y GPT-6 Astra son los dos mejores programadores, con Opus adelante en las pruebas agentivas que más se parecen a proyectos reales: 62 en el Coding Agent Index de Artificial Analysis (corriendo en Claude Code) y 89.9% en SWE-bench Pro (dato de Anthropic). Pero el modelo abierto Kimi K3.1 Pro tiene el mejor puntaje independiente en Terminal-Bench 4.0 (67.2%).

| # | Modelo | Por qué está aquí | Plan B, y por qué |
| --- | --- | --- | --- |
| 1 | Claude Opus 5.5 | 62 en el Coding Agent Index, 89.9% SWE-bench Pro, 66.4% Terminal-Bench 4.0 (Anthropic) o 59.6% (AA) | Claude Sonnet 5.5: 63.6% en la corrida de AA de Terminal-Bench, a la mitad del precio |
| 2 | GPT-6 Astra | El mejor FrontierSWE 2 en la tabla de Google (65.5%); lidera las pruebas independientes GBENCH y SlopCodeBench; 55 en el Coding Agent Index actual con Codex (61.6 en la versión anterior) | GPT-6.1 Sol: según OpenAI "casi iguala" a Astra; 75.2% en DeepSWE |
| 3 | Gemini 4 Carbon | 65.2% Terminal-Bench 4.0 (AA), 64.8% Terminal-Bench-Science, el mejor SWE-sweep en la tabla de Google | Claude Opus 5.5 mientras Carbon siga en lista de espera |
| 4 | Claude Sonnet 5.5 | #3 en Terminal-Bench de AA (63.6%), 81.3% SWE-bench Pro, #3 WebDev | Kimi K3.1 Pro: 67.2% en Terminal-Bench, mismo precio, pesos abiertos |

**El resto, del mejor al peor:**

5. Kimi K3.1 Pro: #1 en Terminal-Bench 4.0 (67.2%), pero sin números de SWE-bench y con un r/LocalLLaMA escéptico.
6. Claude Fable 5.1: 55.0% en Terminal-Bench; encabezó un corte anterior del Coding Agent Index (62.2), pero cuesta 2.5 veces lo que Opus.
7. GPT-6.1 Sol: 56.1% en Terminal-Bench.
8. Muse Wonder: 57.1% (Full) y 52.0% (API); 78.8% en DeepSWE según Meta.
9. GPT-6.1 Terra: 55.6% en Terminal-Bench a $1 / $5.
10. DeepSeek V4.1 Flash 1017: 33.8% en la corrida de AA (42.3% en la de DeepSeek), 77.0% DeepSWE según DeepSeek, licencia MIT.
11. GLM-5.3: 41.9% en Terminal-Bench.
12. MiniMax M3.1 Flash: 73.7% en DeepSWE por menos de $0.30 por tarea, según MiniMax.
13. Grok 4.7: 37.6% en Terminal-Bench y 46.3% en CursorBench, según SpaceXAI.
14. Muse Spark 1.3: 33.3% en Terminal-Bench.
15. GLM-5.3 Flash: 32.8%.
16. Claude Haiku 5.5: 32.8% (AA), 39.2% (Anthropic).
17. GPT-6 Luna: fuera del top 60 de AA.

<figure>
<img src="/images/posts/best-ai-models-november-2026/terminal-bench-es.webp" alt="Gráfica de barras de Terminal-Bench 4.0 corrido por Artificial Analysis: Kimi K3.1 Pro 67.2%, Gemini 4 Carbon 65.2%, Claude Sonnet 5.5 63.6%, Claude Opus 5.5 y GPT-6 Astra 59.6%, hasta GLM-5.3 Flash con 32.8%" width="1400" height="988" loading="lazy" decoding="async">
<figcaption>Terminal-Bench 4.0 (Artificial Analysis), 6 de noviembre de 2026. Gráfica: glacayo.com con datos de Artificial Analysis vía <a href="https://www.benchleader.com/benchmarks/aa_terminalbench_40">BenchLeader</a>.</figcaption>
</figure>

Una rareza que conviene conocer: Opus 5.5 a veces rinde peor en su nivel de esfuerzo más alto. En la corrida de octubre de SlopCodeBench, Opus 5.5 en "medium" pasó más checkpoints que en "extra-high", por una cuarta parte del costo.

## 8. Ciberseguridad

Gemini 4 Carbon es por mucho el modelo más fuerte en seguridad (88.2% en SEC-bench Pro para encontrar vulnerabilidades, 54.8% en ExploitGym), pero solo lo usan defensores aprobados. Entre los demás, las salvaguardas pesan tanto como la habilidad: los modelos abiertos encabezan el Cyber Index de Artificial Analysis en parte porque se niegan menos, mientras que Opus 5.5 y Fable 5.1 le pasan casi todo el trabajo ofensivo al Opus 4.8.

| # | Modelo | Por qué está aquí | Plan B, y por qué |
| --- | --- | --- | --- |
| 1 | Gemini 4 Carbon | 88.2% SEC-bench Pro, 71.0% CWE-bench (parches), 54.8% ExploitGym; Google dice que escribe código seguro el doble de veces que Argon | GPT-6 Astra mediante el programa de acceso confiable Daybreak de OpenAI |
| 2 | GPT-6 Astra | 100% en ExploitBench (OpenAI); primer modelo de OpenAI con nivel "Critical" en ciberseguridad; 63.3% en el CWE-Bench de AA | GPT-6.1 Terra o Sol: mismo nivel "Critical", mucho más baratos (24.5% y 21.5% contra 31.5% de Astra en la prueba de exploits de OpenAI) |
| 3 | DeepSeek V4.1 Flash 1017 | #1 en el CWE-Bench de AA (69.2%), #2 en el Cyber Index (56.8); pesos MIT que puedes correr en tu propio laboratorio | GLM-5.3 Flash: también MIT, 49.9 en el Cyber Index y 55.8% en CWE-Bench |
| 4 | Kimi K3.1 Pro | #1 en el Cyber Index de AA (64.1), 60.8% CWE-Bench | DeepSeek V4.1 Flash. Ojo: Moonshot dice que quitó datos de ciberseguridad de los pesos descargables, así que lo autoalojado puede rendir distinto a la API |

**El resto, del mejor al peor:**

5. Grok 4.7: 56.4 en el Cyber Index y 68.3% en CWE-Bench; acceso red-team solo por invitación para socios.
6. Claude Opus 5.5: Anthropic dice que su capacidad cyber es "extremadamente fuerte", pero casi todo lo ofensivo cae al Opus 4.8, y el Cyber Verification Program aún no cubre la 5.5.
7. GPT-6.1 Sol: nivel "Critical", disponible vía Daybreak.
8. GPT-6.1 Terra: nivel "Critical", 24.5% en la prueba de exploits de OpenAI.
9. GPT-6 Luna: un sorprendente 52.7 en el Cyber Index.
10. Claude Fable 5.1: 25.0 en el índice con salvaguardas; el producto Claude Security de Anthropic corre sobre él.
11. GLM-5.3 Flash: 49.9.
12. GLM-5.3: 36.4.
13. Claude Sonnet 5.5: sin puntaje cyber independiente; aplican las salvaguardas de Claude.
14. MiniMax M3.1 Flash: MiniMax promete grandes mejoras en cyber; nadie lo ha verificado.
15. Muse Wonder: sin resultados de ciberseguridad publicados.
16. Muse Spark 1.3: sin resultados publicados.
17. Claude Haiku 5.5: sus salvaguardas por defecto bloquean algunas pruebas autorizadas.

<figure>
<img src="/images/posts/best-ai-models-november-2026/cyber-index-es.webp" alt="Gráfica de barras del Cyber Index de AA: Kimi K3.1 Pro 64.1, DeepSeek V4.1 Flash 56.8, Grok 4.7 56.4, GPT-6 Luna 52.7, GPT-6 Astra 33.4, Claude Opus 5.5 28.7, Claude Fable 5.1 25.0" width="1400" height="781" loading="lazy" decoding="async">
<figcaption>Cyber Index de AA (Artificial Analysis), 6 de noviembre de 2026. Gráfica: glacayo.com con datos de Artificial Analysis vía <a href="https://www.benchleader.com/benchmarks/aa_cyber_index">BenchLeader</a>.</figcaption>
</figure>

Usa estos modelos solo en sistemas propios o que tengas autorización de probar. Si es trabajo para un cliente, pide el alcance por escrito primero.

## 9. Code reviewer (cazar bugs y código seguro)

GPT-6 Astra es el mejor revisor de código que puedes contratar hoy: los modelos de OpenAI han liderado las pruebas independientes de revisión recientes, y Astra suma 63.3% en el CWE-Bench de seguridad de Artificial Analysis y el primer lugar en GBENCH y SlopCodeBench. El detalle es el ruido: en la prueba de CodeRabbit, el modelo anterior de OpenAI detectó 69.7% de los problemas conocidos, pero solo 31.6% de sus comentarios valían la pena.

| # | Modelo | Por qué está aquí | Plan B, y por qué |
| --- | --- | --- | --- |
| 1 | GPT-6 Astra | 63.3% CWE-Bench; lidera GBENCH y SlopCodeBench; la familia de OpenAI detecta más problemas en las revisiones de CodeRabbit | GPT-6.1 Sol: calidad casi de Astra a $2 / $10 |
| 2 | Gemini 4 Carbon | 71.0% en parches de CWE-bench, el mejor SWE-sweep en la tabla de Google, el doble de código seguro que Argon | GPT-6 Astra |
| 3 | Claude Opus 5.5 | 89.9% en SWE-bench Pro: entiende de verdad un repositorio; 58.3% CWE-Bench; las revisiones de Claude suelen dar comentarios más limpios y accionables | Claude Sonnet 5.5 para revisar cada PR |
| 4 | GPT-6.1 Sol | GPT-6 Sol ya sacó 64.2% en CWE-Bench, y la 6.1 está cerca de Astra a una quinta parte del precio, así que puedes revisar cada pull request | DeepSeek V4.1 Flash: corre dos o tres pasadas baratas y junta los hallazgos |

**El resto, del mejor al peor:**

5. DeepSeek V4.1 Flash 1017: #1 en CWE-Bench (69.2%) por centavos, ideal para revisiones de varias pasadas.
6. Grok 4.7: 68.3% en CWE-Bench; más flojo en código del día a día.
7. Claude Fable 5.1: 50.8% en CWE-Bench, razonamiento profundo, caro.
8. Claude Sonnet 5.5: un revisor diario sólido dentro de Claude Code.
9. Kimi K3.1 Pro: 60.8% en CWE-Bench.
10. GLM-5.3: 55.8%.
11. GPT-6 Luna: 56.7%; buena primera pasada rápida.
12. GLM-5.3 Flash: 55.8% por $0.15 por millón de tokens de entrada.
13. GPT-6.1 Terra: una segunda opinión rápida.
14. Muse Wonder: aún sin datos de revisión.
15. MiniMax M3.1 Flash: una pasada barata tipo linter.
16. Muse Spark 1.3: aún sin datos de revisión.
17. Claude Haiku 5.5: solo detalles de estilo.

La mejor configuración de revisión no es un solo modelo: haz que el revisor sea de un laboratorio distinto al del modelo que escribió el código, para que no compartan los mismos puntos ciegos.

## 10. Computer use (manejar la computadora)

Claude Opus 5.5 es el que mejor maneja una computadora: 87.2% en OSWorld-2.1 (subconjunto offline) en la propia tabla comparativa de Google, por delante de Gemini 4 Carbon (81.5%) y GPT-6 Astra (80.9%), y #1 en Agent Arena.

| # | Modelo | Por qué está aquí | Plan B, y por qué |
| --- | --- | --- | --- |
| 1 | Claude Opus 5.5 | 87.2% OSWorld-2.1; 81.8% en OSWorld 2.0 con crédito parcial (Anthropic); #1 Agent Arena | Claude Sonnet 5.5: 80.1% en OSWorld 2.1, a la mitad del precio |
| 2 | Gemini 4 Carbon | 81.5% OSWorld-2.1 | Claude Opus 5.5 |
| 3 | GPT-6 Astra | 80.9% OSWorld-2.1; la función estrella de OpenAI para este modelo | GPT-6.1 Terra: iguala a Astra en Agents' Last Exam por cerca de una décima parte del precio por token, y es 3 veces más rápido |
| 4 | Claude Sonnet 5.5 | 80.1% en OSWorld 2.1 (Anthropic, crédito parcial) | Claude Haiku 5.5: la recomendación de Anthropic para tareas en el navegador en vivo |

Una aclaración sobre esos números: el "crédito parcial" cuenta tareas a medio terminar. Con calificación estricta, Opus 5.5 completa 48.7% de las tareas de OSWorld 2.0 y Sonnet 5.5 el 43.5% de OSWorld 2.1. Vigila a tus agentes en todo lo que gaste dinero.

**El resto, del mejor al peor:**

5. Claude Fable 5.1: 76.8% en OSWorld-2.1.
6. GPT-6.1 Terra: hecho para computer use preciso.
7. GPT-6.1 Sol: 71.4% contra 73.5% de Astra en el set offline de OSWorld 2.0 de OpenAI.
8. Claude Haiku 5.5: el Claude más rápido, pensado para el navegador.
9. Muse Wonder: diseñado para tareas largas de agente; aún sin puntaje en OSWorld.
10. Grok 4.7: entrenado para Grok Bot, cuyos agentes trabajan en su propia computadora.
11. Muse Spark 1.3: sin puntaje en OSWorld.
12. Kimi K3.1 Pro: lo suyo es programar y el trabajo de oficina, no manejar una pantalla.
13. GPT-6 Luna: barato, limitado.
14. DeepSeek V4.1 Flash 1017: entiende imágenes, pero hay poca evidencia de computer use.
15. GLM-5.3 Flash: multimodal, sin pruebas aquí.
16. MiniMax M3.1 Flash: barato y rápido, mejor para pasos sencillos de un agente.
17. GLM-5.3: solo texto, así que no puede ver una pantalla.

## 11. Autonomía (trabajos largos sin supervisión)

Gemini 4 Carbon es el mejor agente de largo aliento: hizo crecer un negocio simulado de máquinas expendedoras hasta $16,484 en Vending-Bench 2, sacó 77.4% en Agents' Last Exam y lidera AutomationBench (77.8%). De los modelos que puedes usar hoy, GPT-6 Astra ($15,515 en Vending-Bench 2) es el que más se acerca.

| # | Modelo | Por qué está aquí | Plan B, y por qué |
| --- | --- | --- | --- |
| 1 | Gemini 4 Carbon | $16,484 en Vending-Bench 2, 77.4% Agents' Last Exam, #1 AutomationBench (77.8%) | GPT-6 Astra |
| 2 | GPT-6 Astra | $15,515 en Vending-Bench 2, 73.1% Agents' Last Exam, 62.7% en ARC-AGI-3 | GPT-6.1 Sol: 66.6% en AutomationBench por una quinta parte del precio |
| 3 | Claude Opus 5.5 | 71.6% Agents' Last Exam, #1 Agent Arena, 73.5% APEX-Agents. Pero solo $9,235 en Vending-Bench 2, y algunos testers dicen que se detiene antes de tiempo cuando decide que el trabajo ya está "suficientemente bien" | Claude Sonnet 5.5 |
| 4 | Claude Sonnet 5.5 | 75.5% APEX-Agents, 71.8% AutomationBench, 63.6% Terminal-Bench 4.0 | Kimi K3.1 Pro: 73.3% AutomationBench, pesos abiertos |

**El resto, del mejor al peor:**

5. Kimi K3.1 Pro: 73.3% en AutomationBench, 67.2% en Terminal-Bench 4.0.
6. Claude Fable 5.1: capaz, pero solo $5,422 en Vending-Bench 2.
7. Muse Wonder: 71.3% en AutomationBench (Full); Meta dice que brilla en programación larga y autónoma.
8. GPT-6.1 Sol: 66.6% en AutomationBench.
9. DeepSeek V4.1 Flash 1017: 69.8% en APEX-Agents; 35.4 en Agents' Last Exam según DeepSeek.
10. GPT-6.1 Terra: 60.2% en AutomationBench; cerca de Astra en Agents' Last Exam según OpenAI.
11. MiniMax M3.1 Flash: 72.5% en AutomationBench, una ganga.
12. Grok 4.7: 65.6% en AutomationBench; SpaceXAI dice que aguanta más en tareas difíciles.
13. GLM-5.3: 62.2%.
14. Muse Spark 1.3: 57.9%.
15. GLM-5.3 Flash: 60.4%.
16. Claude Haiku 5.5: 56.1% en APEX-Agents; mejor como subagente que como jefe.
17. GPT-6 Luna: 44.3% en APEX-Agents.

<figure>
<img src="/images/posts/best-ai-models-november-2026/automationbench-es.webp" alt="Gráfica de barras de AutomationBench: Gemini 4 Carbon 77.8%, Kimi K3.1 Pro 73.3%, MiniMax M3.1 Flash 72.5%, Claude Sonnet 5.5 71.8%, Claude Opus 5.5 69.5%, hasta Muse Spark 1.3 con 57.9%" width="1400" height="1030" loading="lazy" decoding="async">
<figcaption>AutomationBench (Artificial Analysis), 5 de noviembre de 2026. Gráfica: glacayo.com con datos de Artificial Analysis vía <a href="https://www.benchleader.com/benchmarks/aa_automationbench">BenchLeader</a>.</figcaption>
</figure>

La autonomía también es portarse bien sin supervisión. La system card de OpenAI indica que GPT-6.1 Terra buscó la manera de rodear una restricción deliberada en 29.6% de los casos de prueba, así que dale permisos acotados a cualquier agente que trabaje solo por horas.

## 12–15. Tu equipo de agentes de programación: orquestador, explorador, worker y verificador

El equipo ganador mezcla modelos: Claude Opus 5.5 planea, Claude Haiku 5.5 (o DeepSeek V4.1 Flash) explora el código, Claude Sonnet 5.5 (o GPT-6.1 Sol) escribe, y GPT-6 Astra revisa. Poner un verificador de un laboratorio distinto al del worker atrapa los errores que una misma familia suele repetir.

### Orquestador: planea el trabajo y lo reparte

| # | Modelo | Por qué está aquí | Plan B, y por qué |
| --- | --- | --- | --- |
| 1 | Claude Opus 5.5 | El mejor para planear y delegar: 62 en el Coding Agent Index, #1 Agent Arena, 61.4% en Humanity's Last Exam; modelo por defecto en Claude Code | Claude Fable 5.1 para los planes más delicados, Sonnet 5.5 si cuidas el presupuesto |
| 2 | GPT-6 Astra | 65.5% en FrontierSWE 2, 55 en el Coding Agent Index actual con Codex, más barato por tarea que Opus | GPT-6.1 Sol |
| 3 | Claude Fable 5.1 | Encabezó un corte anterior del Coding Agent Index (62.2), el mejor MCP Atlas (87.2%) | Claude Opus 5.5 |
| 4 | Gemini 4 Carbon | 96.2% en GraphWalks con 256K–1M tokens: el mejor para tener en la cabeza un plan enorme | Claude Opus 5.5 |

El resto: 5. GPT-6.1 Sol · 6. Claude Sonnet 5.5 · 7. Kimi K3.1 Pro · 8. Muse Wonder · 9. GPT-6.1 Terra · 10. DeepSeek V4.1 Flash · 11. GLM-5.3 · 12. Grok 4.7 · 13. MiniMax M3.1 Flash · 14. Muse Spark 1.3 · 15. GLM-5.3 Flash · 16. Claude Haiku 5.5 · 17. GPT-6 Luna.

### Explorador: busca y lee el código, rápido y barato

| # | Modelo | Por qué está aquí | Plan B, y por qué |
| --- | --- | --- | --- |
| 1 | Claude Haiku 5.5 | El modelo más rápido de Anthropic, $0.10 / $0.50, diseñado como subagente junto a Opus y Sonnet | GPT-6 Luna: mismo precio, contexto de 1.05M, y su precio no sube hasta los 272K tokens |
| 2 | DeepSeek V4.1 Flash 1017 | Contexto de 1M tokens, respuestas más cortas que su antecesor, entrada desde $0.15 | MiniMax M3.1 Flash |
| 3 | GPT-6.1 Terra | 3 veces más rápido que Astra y Sol, $1 / $5, lee bien capturas y diagramas | GPT-6 Luna |
| 4 | GLM-5.3 Flash | $0.15 / $0.50, lee imágenes y video, contexto de 1M, licencia MIT | MiniMax M3.1 Flash: 881 ms al primer token |

Cuidado con el escalón de precio de Haiku: los prompts de más de 100K tokens cuestan 5 veces más, así que mantén pequeñas las tareas de exploración. El resto: 5. MiniMax M3.1 Flash · 6. Claude Sonnet 5.5 · 7. GPT-6 Luna · 8. Muse Spark 1.3 · 9. Kimi K3.1 Pro · 10. GPT-6.1 Sol · 11. Grok 4.7 · 12. GLM-5.3 · 13. Gemini 4 Carbon · 14. Muse Wonder · 15. Claude Opus 5.5 · 16. GPT-6 Astra · 17. Claude Fable 5.1 (los modelos de frontera quedan al final solo porque son demasiado para leer archivos).

### Worker: escribe el código a partir del plan

| # | Modelo | Por qué está aquí | Plan B, y por qué |
| --- | --- | --- | --- |
| 1 | Claude Sonnet 5.5 | 63.6% Terminal-Bench 4.0, 81.3% SWE-bench Pro, $2 / $10; una configuración popular de Claude Code lo usa como subagente bajo Opus | Kimi K3.1 Pro |
| 2 | GPT-6.1 Sol | 75.2% en DeepSWE, calidad casi de Astra por una quinta parte del precio | GPT-6.1 Terra |
| 3 | Kimi K3.1 Pro | 67.2% en Terminal-Bench 4.0 a $2 / $10, pesos abiertos | DeepSeek V4.1 Flash |
| 4 | GPT-6.1 Terra | 55.6% en Terminal-Bench 4.0 a $1 / $5, 3 veces más rápido que Sol | GLM-5.3 Flash o MiniMax M3.1 Flash |

El resto: 5. DeepSeek V4.1 Flash · 6. Claude Opus 5.5 · 7. GPT-6 Astra · 8. Claude Fable 5.1 · 9. Gemini 4 Carbon · 10. GLM-5.3 · 11. MiniMax M3.1 Flash · 12. Muse Wonder · 13. Grok 4.7 · 14. GLM-5.3 Flash · 15. Claude Haiku 5.5 · 16. Muse Spark 1.3 · 17. GPT-6 Luna.

### Verificador: revisa y prueba lo que construyó el worker

| # | Modelo | Por qué está aquí | Plan B, y por qué |
| --- | --- | --- | --- |
| 1 | GPT-6 Astra | El revisor más fuerte (ver la categoría 9) y de otro laboratorio que un worker Claude | GPT-6.1 Sol |
| 2 | Gemini 4 Carbon | El que menos inventa problemas (53.5 en AA-Omniscience) | GPT-6 Astra |
| 3 | Claude Opus 5.5 | 48.1 en Omniscience, entiende a fondo el repositorio; ideal para revisar a un worker GPT | Claude Fable 5.1 |
| 4 | GPT-6.1 Sol | Revisiones casi de Astra por una quinta parte del precio, así que puede verificar cada tarea | DeepSeek V4.1 Flash, en varias pasadas baratas |

El resto: 5. Claude Fable 5.1 · 6. DeepSeek V4.1 Flash · 7. Claude Sonnet 5.5 · 8. Kimi K3.1 Pro · 9. Grok 4.7 · 10. GPT-6.1 Terra · 11. GLM-5.3 · 12. Muse Wonder · 13. MiniMax M3.1 Flash · 14. GLM-5.3 Flash · 15. GPT-6 Luna · 16. Claude Haiku 5.5 · 17. Muse Spark 1.3.

## ☕ El chisme: lo que dicen en Reddit y X

La gente coincide en general con los benchmarks sobre Opus 5.5 y discute a gritos sobre GPT-6 Astra. Ojo: son reportes y opiniones de usuarios, no hallazgos verificados.

- **Claude Opus 5.5.** En X lo elogian para front-end y programación con agentes, y una división muy común es "Opus para el frontend, Astra para el backend". La gran queja es el fallback de seguridad: un desarrollador que hacía inteligencia de amenazas defensiva [vio que la mayoría de los mensajes de un día los respondió Opus 4.8](https://www.betterclaw.io/blog/claude-opus-5-5-agents-cost-rerouting), y un [hilo del foro de Cursor](https://forum.cursor.com/t/safeguard-fallback-to-opus-4-8-is-billed-as-the-model-you-selected-not-as-opus-4-8/172823) reporta fallbacks cobrados al precio del modelo que elegiste.
- **GPT-6 Astra.** La semana del lanzamiento, a inicios de septiembre, estuvo llena de momentos "wow" (hubo quien reconstruyó Manhattan en un motor de videojuegos) y luego X se llenó de [quejas de que lo "nerfearon"](https://decrypt.co/378101/gpt-6-astra-openai-model-dumber-nerfed). El equipo del agente Opencode regresó a GPT-5.6 Sol porque la cuenta se duplicó sin suficiente ganancia, y usuarios de ChatGPT en el [foro de OpenAI](https://community.openai.com/t/chatgpt-6-astra-is-a-disappointment-and-a-tool/1396406) se quejan de que se detiene una y otra vez a pedir aclaraciones.
- **Gemini 4 Carbon.** Aplausos por los benchmarks mezclados con cansancio de "otra lista de espera"; el hilo en Hacker News pasó de 800 puntos. Y los votantes de Arena todavía prefieren a Opus 5.5 en 69% de los duelos de WebDev.
- **Kimi K3.1 Pro.** r/LocalLLaMA está escéptico más que hostil, con hilos que preguntan si de verdad supera al muchísimo más barato DeepSeek V4.1 Flash. Lo que sí impresionó es que Moonshot liberó a tiempo 1.56 TB de pesos.
- **Muse Wonder.** Hacker News lo resumió como el mismo precio que Opus 5.5 con un puntaje menor, y notó que el Wonder que puedes comprar por API no es el de las gráficas de Meta.
- **Grok 4.7.** Opiniones divididas. El sitio francés [Next](https://next.ink/257288/spacexai-lance-son-modele-grok-4-7-dont-les-performances-decoivent/) calificó su rendimiento de decepcionante, y algunos usuarios dicen que MiMo de Xiaomi es mejor y más barato.
- **Claude Sonnet 5.5.** Se le ve como el nuevo modelo de batalla diaria: casi toda la calidad de Opus por la mitad del precio.

## Mi recomendación final

Si solo puedes pagar una familia, Claude cubre más terreno: Opus 5.5, Sonnet 5.5 y Haiku 5.5 juntos entran al top 4 en 13 de las 15 categorías. Redacción legal y ciberseguridad son los dos huecos.

Un stack práctico y cuidando el presupuesto para una pequeña empresa o agencia:

- **Pensar y planear:** Claude Opus 5.5.
- **Redacción y programación del día a día:** Claude Sonnet 5.5.
- **Segunda opinión y code review:** GPT-6.1 Sol (otro laboratorio detecta otros errores).
- **Trabajo en volumen (resúmenes, etiquetado, primeros borradores):** DeepSeek V4.1 Flash o GLM-5.3 Flash.
- **Borradores de páginas legales:** Muse Spark 1.3 o Muse Wonder, y después la revisión de un abogado.

Dos últimos consejos. Haz tu propia prueba de 10 prompts antes de cambiar de modelo, porque los benchmarks miden promedios y tu trabajo no es promedio. Y vuelve a revisar en un mes: cuando Gemini 4 Carbon se abra a todos, varios de estos rankings se van a mover.

## Fuentes

Leaderboards (consultados del 3 al 6 de noviembre de 2026):

- [Leaderboard de Artificial Analysis](https://artificialanalysis.ai/leaderboards/models) y sus réplicas en BenchLeader: [Intelligence Index v5.0](https://www.benchleader.com/benchmarks/aa_intelligence_index_v5), [AA-Omniscience](https://www.benchleader.com/benchmarks/aa_omniscience), [Humanity's Last Exam](https://www.benchleader.com/benchmarks/aa_hle), [Terminal-Bench 4.0](https://www.benchleader.com/benchmarks/aa_terminalbench_40), [GDPval-AA](https://www.benchleader.com/benchmarks/aa_gdpval_elo), [GDP.pdf](https://www.benchleader.com/benchmarks/aa_gdp_pdf), [AutomationBench](https://www.benchleader.com/benchmarks/aa_automationbench), [Harvey LAB-AA](https://www.benchleader.com/benchmarks/aa_harvey_lab), [Cyber Index](https://www.benchleader.com/benchmarks/aa_cyber_index), [CWE-Bench](https://www.benchleader.com/benchmarks/aa_cwe_bench), [τ³-Banking](https://www.benchleader.com/benchmarks/aa_tau_banking)
- Arena: [Text](https://www.benchleader.com/benchmarks/lmarena_text), [WebDev](https://www.benchleader.com/benchmarks/lmarena_webdev), [Vision](https://www.benchleader.com/benchmarks/lmarena_vision), [debut de Gemini 4 Carbon en X](https://x.com/arena/status/2115495002998751262), [actualización de Image-to-WebDev](https://digg.com/ai/pjg0aklr)
- [APEX-Agents](https://www.benchleader.com/benchmarks/apex_agents), [MCP Atlas de Scale](https://www.benchleader.com/benchmarks/scale_mcp_atlas), [Vals: Gemini 4 Carbon](https://www.vals.ai/models/google_gemini-4-carbon), [ranking de español de Artificial Analysis](https://artificialanalysis.ai/es/models/multilingual/spanish), [Harvey LAB-AA v1.1](https://artificialanalysis.ai/evaluations/harvey-lab-aa)

Números de lanzamiento de los laboratorios:

- OpenAI: [GPT-6 Astra](https://www.datacamp.com/blog/gpt-6-astra), [GPT-6.1 Sol](https://agentpedia.codes/blog/gpt-6-1-sol-guide), [GPT-6.1 Terra](https://aiweekly.co/alerts/openai-ships-gpt-61-terra-at-15-per-million-half-of-sol) y [detalles de su system card](https://www.inside.com.tw/article/42736-openai-gpt-6-1-terra-computer-use-critical-cyber), [precio de GPT-6 Luna](https://anotherwrapper.com/llm-pricing/gpt-6-luna)
- Anthropic: [Claude Opus 5.5](https://llm-stats.com/blog/research/claude-opus-5-5-launch), [Claude Sonnet 5.5](https://apidog.com/blog/claude-sonnet-5-5-benchmarks/), [Claude Haiku 5.5](https://computingforgeeks.com/claude-haiku-5-5-released-features-benchmarks/), [Claude Fable 5.1](https://www.datacamp.com/blog/claude-fable-5-1), [fallbacks de Claude](https://support.claude.com/en/articles/16049681-why-claude-switched-models-in-your-conversation-with-opus-5-or-opus-5-5)
- Google: [tabla de benchmarks de Gemini 4 Carbon](https://officechai.com/ai/gemini-4-carbon-benchmarks/), [acceso y precio](https://www.developersdigest.tech/blog/gemini-4-carbon-developer-guide-2026)
- [Kimi K3.1 Pro](https://pasqualepillitteri.it/en/news/26667/kimi-k3-1-pro-launches-open-weights-nov-4), [DeepSeek V4.1 Flash 1017](https://pasqualepillitteri.it/es/news/24846/deepseek-lanza-41-flash-1017-pesos-mit-respuestas-cortas), [GLM-5.3 y GLM-5.3 Flash](https://docs.apiyi.com/en/live/2026-09/glm-5-3-launch), [MiniMax M3.1 Flash](https://pasqualepillitteri.it/es/news/25584/minimax-m3-1-flash-llegada-space-bunny), [Muse Wonder](https://www.eesel.ai/es/blog/meta-muse-wonder-analisis), [precio de Muse Spark 1.3](https://letsdatascience.com/blog/metas-best-model-skips-api-coding-plan-trains-on-your-code), [Grok 4.7](https://unite.ai/spacexai-releases-grok-4-7-for-coding-and-knowledge-work)

Pruebas prácticas y comunidad:

- [UX Planet: GPT-6 Astra vs Opus 5.5 para diseño de producto](https://uxplanet.org/gpt-6-astra-vs-opus-5-5-which-one-is-better-for-product-design-ea66a6ff4527), [MindStudio: comparación en 12 tareas](https://www.mindstudio.ai/blog/opus-5-5-vs-gpt-6-astra/), [resultados de GBENCH](https://digg.com/ai/hsmuokzs), [SlopCodeBench de octubre](https://zeli.app/es/story/50108717), [CodeRabbit sobre Opus 5 en code review](https://coderabbit.ai/blog/opus-5-model-review), [Carbon vs Opus en Arena](https://www.gptunnel.ru/en/blog/gemini-4-carbon), [comparación del Coding Agent Index](https://kie.ai/blog/google-gemini-4-carbon)
- [Decrypt: quejas de "nerf" en GPT-6 Astra](https://decrypt.co/378101/gpt-6-astra-openai-model-dumber-nerfed), [hilo del foro de OpenAI](https://community.openai.com/t/chatgpt-6-astra-is-a-disappointment-and-a-tool/1396406), [el desvío de Opus 5.5 en la práctica](https://www.betterclaw.io/blog/claude-opus-5-5-agents-cost-rerouting), [foro de Cursor sobre cobro de fallbacks](https://forum.cursor.com/t/safeguard-fallback-to-opus-4-8-is-billed-as-the-model-you-selected-not-as-opus-4-8/172823), [X sobre Opus 5.5 y WebDev](https://x.com/i/trending/2113146901834916245), [r/LocalLLaMA sobre Kimi K3.1 Pro](https://www.developersdigest.tech/blog/kimi-k3-1-pro-release-guide-2026), [liberación de pesos de Kimi](https://note.com/imanani_note/n/ndaddd2af6c8a?hl=en), [Next sobre Grok 4.7](https://next.ink/257288/spacexai-lance-son-modele-grok-4-7-dont-les-performances-decoivent/), [reacciones a Grok 4.7](https://digg.com/ai/3kbrx1up), [pulso de la comunidad sobre Gemini 4 Carbon](https://www.qwe.edu.pl/tutorial/gemini-4-carbon-how-to-use/)
