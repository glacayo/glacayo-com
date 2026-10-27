---
title: "eve de Vercel: ¿qué significa realmente “el framework para construir agentes”?"
description: Qué es eve, quién lo respalda, en qué se diferencia de Claude Code, Codex, OpenCode o Pi, dónde viven sus agentes, qué modelos le puedes conectar y cómo empezar en tu propia PC, con ideas concretas para desarrollo web.
date: 2026-10-27T16:00:00Z
category: frameworks
translationKey: vercel-eve
---

Entras a la página de eve y lo primero que ves es una frase enorme: **"The framework for building agents"**. El framework para construir agentes.

Y si eres como yo, la cabeza se te va de inmediato a Claude Code, a Codex, a OpenCode o a Pi. "¿Entonces con esto me armo mi propio Claude Code?", "¿es otro harness?", "¿dónde corre eso?", "¿le puedo poner el modelo que yo quiera?".

Me hice todas esas preguntas, así que me senté a leer la documentación, el anuncio oficial y varios tutoriales para responderlas una por una. Spoiler: eve es algo distinto a lo que uno se imagina al leer "agente", y entender esa diferencia te abre un montón de ideas.

Prepárate un café y vamos por partes.

> **La respuesta corta:** eve es un framework **open source** de **Vercel** para construir agentes de IA que viven en un servidor y trabajan para otros (tus clientes, tu equipo o un proceso automático). No es un agente de programación como Claude Code o Codex: es el kit para fabricar el tuyo. Un agente de eve es **una carpeta** con un archivo Markdown de instrucciones, herramientas en TypeScript y "habilidades" en Markdown. Lo puedes correr en tu PC, en tu propio servidor o en Vercel, y le conectas prácticamente cualquier modelo.

## ¿Qué es eve?

eve (así, en minúsculas) es un framework de **TypeScript** para construir, correr y escalar agentes de IA en producción. [Vercel](https://x.com/vercel) lo anunció el **17 de junio de 2026** en su conferencia Ship, en Londres, y lo publicó con licencia **Apache 2.0**. Hoy está en **beta pública**, así que su API todavía puede cambiar.

La propia Vercel lo describe como **"Next.js para agentes"**. La comparación tiene sentido: así como en Next.js creas un archivo y automáticamente tienes una ruta, en eve creas un archivo y automáticamente tienes una habilidad nueva en tu agente. Su lema lo resume bien: Markdown para instrucciones y habilidades, TypeScript para herramientas, y durable por defecto.

### ¿Quién lo respalda?

Lo respalda **Vercel**, la empresa detrás de Next.js. Y no es un experimento de fin de semana: según la propia Vercel, es el framework con el que construyen y corren **sus propios agentes**. Algunos números que publicaron (ojo, son datos de la empresa, no auditados por terceros):

- Corren **más de 100 agentes** internos sobre eve.
- Su agente de análisis de datos, **d0**, responde **más de 30.000 preguntas al mes**.
- Su agente de soporte, **Vertex**, resuelve el **92 % de los tickets**.
- Los agentes ya disparan cerca del **29 % de los despliegues** en Vercel, frente a menos del 3 % un año antes.

## Primero lo primero: ¿qué es un "agente"?

Aquí está el origen de toda la confusión. Cuando decimos "agente" solemos pensar en Claude Code programando en nuestra terminal. Pero ese es solo un tipo de agente. Para entender eve hay que separar tres piezas:

1. **El modelo:** el "cerebro" (Claude, GPT, Gemini, Kimi, GLM, DeepSeek…). Por sí solo, un modelo solo recibe texto y devuelve texto. No puede abrir un archivo ni llamar a una API.
2. **El harness:** el bucle alrededor del modelo. La documentación de Vercel lo define así: *"el bucle alrededor de un modelo: sus prompts, sus herramientas y cómo maneja el contexto"*. Es lo que le dice al modelo "tienes estas herramientas", ejecuta la que eligió, le devuelve el resultado y repite hasta terminar.
3. **El agente:** el modelo y el harness, más un lugar donde vivir y trabajar: por dónde le llegan los mensajes, dónde ejecuta código, qué permisos tiene y a qué servicios se conecta.

<figure>
<img src="/images/posts/vercel-eve/capas.webp" alt="Diagrama de tres capas anidadas: el modelo en el centro (Claude, GPT, Gemini, Kimi, GLM, DeepSeek, Qwen), rodeado por el harness con su bucle de cinco pasos (lee la tarea, piensa, usa una herramienta, mira el resultado, repite) y, por fuera, el agente, que vive en Slack, WhatsApp, Discord, web chat, API HTTP o cron y tiene sandbox, memoria, permisos y conexiones" width="1400" height="888" loading="lazy" decoding="async">
<figcaption>Modelo, harness y agente: cada capa envuelve a la anterior. Diagrama propio basado en la definición de harness de la <a href="https://vercel.com/docs/agent-harnesses">documentación de Vercel</a>.</figcaption>
</figure>

Con eso claro, la frase "framework para construir agentes" se entiende mejor: eve te da el harness ya hecho y toda la infraestructura de la capa de afuera. Tú pones la personalidad, las herramientas y el modelo.

## Entonces, ¿eve es como Claude Code, Codex, OpenCode o Pi?

Sí y no. Y este es el punto que más me costó entender.

Lo curioso es que la misma Vercel, en su guía de harnesses, pone a **eve al lado de Pi, OpenCode, Claude Code y Codex**. Técnicamente todos son harnesses: todos son un bucle alrededor de un modelo. La diferencia está en **para quién trabajan y dónde viven**.

- **Claude Code, Codex, OpenCode y Pi** son productos terminados. Son agentes de programación: los abres en tu terminal o tu editor, te sientas enfrente y trabajan **contigo**, en tu código, mientras tú los miras.
- **eve** es un framework. No viene con un agente listo para usar: es el kit con el que **fabricas** tu agente, con su propia personalidad y sus propias herramientas, para que viva en un servidor y atienda a otros (o trabaje solo) mientras tú haces otra cosa.

Una analogía que me ayudó: Claude Code es como un sitio web terminado que usas; eve es como Next.js, la herramienta con la que construyes tu propio sitio.

| Herramienta | Qué es | Dónde la usas | Para quién trabaja |
| --- | --- | --- | --- |
| Claude Code ([Anthropic](https://x.com/AnthropicAI)) | Agente de programación listo para usar | Terminal y editor | Para ti, mientras programas |
| Codex ([OpenAI](https://x.com/OpenAI)) | Agente de programación listo para usar | Terminal, editor y nube | Para ti, mientras programas |
| OpenCode | Agente de programación open source | Terminal | Para ti, mientras programas |
| Pi ([Mario Zechner](https://x.com/badlogicgames)) | Agente de programación minimalista: arranca con 4 herramientas y lo extiendes con paquetes | Terminal | Para ti, mientras programas |
| DeepSeek Harness ([DeepSeek](https://x.com/deepseek_ai)) | Framework open source de agentes donde "todo es un plugin" | Tu PC, con interfaz web | Lo que tú armes |
| **eve** ([Vercel](https://x.com/vercel)) | **Framework para construir y operar tus propios agentes** | **Tu PC, tu servidor o Vercel; te hablan por Slack, WhatsApp, API…** | **Tus clientes, tu equipo o procesos automáticos** |

### ¿Se trata de construir mi propio harness?

No exactamente, y es una buena noticia. Con eve **no escribes el bucle**: el framework ya trae un harness por defecto que se encarga de llamar al modelo, ejecutar herramientas y compactar el contexto cuando la conversación crece. Tú solo describes al agente.

Lo que sí te ahorras es todo lo aburrido y difícil de llevar un agente a producción, que es justo donde la mayoría de los proyectos se caen:

- **Durabilidad:** cada conversación es un flujo con puntos de control. Si el servidor se cae o haces un deploy a mitad de una tarea, el agente retoma donde se quedó. Y si una sesión estaba trabajando cuando sacaste una versión nueva, termina con la versión con la que empezó.
- **Sandbox:** cada agente tiene su propia "computadora" aislada para correr comandos, scripts y archivos, separada de tu aplicación.
- **Aprobaciones humanas:** cualquier herramienta puede pedir permiso antes de ejecutarse. El agente se pausa sin consumir recursos hasta que alguien diga que sí.
- **Observabilidad y evals:** cada ejecución genera trazas de OpenTelemetry, y puedes escribir pruebas con puntaje para saber si un cambio empeoró a tu agente.

## Un agente es una carpeta

Esta es la idea central de eve y, sinceramente, lo que más me gustó. No hay que registrar nada en ningún lado: cada archivo o carpeta dentro de `agent/` es una capacidad.

<figure>
<img src="/images/posts/vercel-eve/carpeta.webp" alt="Árbol de carpetas de un agente de eve con la función de cada parte: instructions.md define quién es, agent.ts el modelo, tools/ lo que puede hacer, skills/ lo que sabe, subagents/ a quién delega, connections/ a qué servicios se conecta, channels/ dónde lo encuentras, schedules/ cuándo trabaja solo, sandbox/ su computadora aislada y evals/ sus pruebas con puntaje" width="1400" height="873" loading="lazy" decoding="async">
<figcaption>La anatomía de un agente de eve. Diagrama propio basado en <a href="https://vercel.com/eve">vercel.com/eve</a> y la <a href="https://vercel.com/docs/eve">documentación de eve en Vercel</a>.</figcaption>
</figure>

Un agente mínimo son **dos archivos**. Las instrucciones, en Markdown:

```md
# Identity

You are an expert weather assistant.
You can fetch the weather for any
city in the world.
```

Y el modelo, en `agent.ts`:

```ts
import { defineAgent } from "eve";

export default defineAgent({
  model: "openai/gpt-6-astra",
});
```

Cuando quieres que **haga** algo, agregas una herramienta en `tools/`. El nombre del archivo se convierte en el nombre de la herramienta. Este es el ejemplo oficial, `tools/get_weather.ts`:

```ts
import { defineTool } from "eve/tools";
import { z } from "zod";

export default defineTool({
  description: "Get the weather for a city",
  inputSchema: z.object({
    cityName: z.string(),
  }),
  async execute(input) {
    const res = await fetch(
      `${process.env.WEATHER_API_URL}/current?city=${input.cityName}`
    );
    const data = await res.json();
    return data.current_condition[0];
  },
});
```

Y cuando quieres que **sepa** algo, agregas una *skill* en `skills/`: un Markdown que el agente solo carga cuando el tema sale a la conversación. El campo `description` es lo que decide cuándo se activa:

```md
---
description: Research unfamiliar topics
---

When the task is novel or ambiguous,
gather evidence first, then answer.
```

Si ya usas skills en Claude Code u OpenCode, esto te va a sonar muy familiar. Es la misma idea, pero dentro de un agente que vive en un servidor.

## ¿Dónde viven esos agentes?

Aquí está la otra gran diferencia con un agente de programación. Un agente de eve no vive en tu terminal: vive en un **servidor** y la gente (o los sistemas) le hablan por **canales**.

<figure>
<img src="/images/posts/vercel-eve/donde-viven.webp" alt="Diagrama de flujo: los mensajes entran por Slack, Discord, Teams, WhatsApp, Telegram, web chat, API HTTP, GitHub, Linear o un horario cron; llegan al agente, que tiene instrucciones, herramientas, skills, sesión durable y aprobaciones; el agente usa un modelo, un sandbox, conexiones y subagentes. Abajo, tres lugares donde corre: tu PC con eve dev, tu servidor o homelab con eve build y eve start, y Vercel con vercel deploy" width="1400" height="960" loading="lazy" decoding="async">
<figcaption>Por dónde entra el trabajo, qué usa el agente y dónde lo puedes correr. Diagrama propio basado en la documentación de <a href="https://vercel.com/docs/eve">eve en Vercel</a> y la guía de <a href="https://eve.dev/docs/guides/deployment/self-hosting">self-hosting</a>.</figcaption>
</figure>

- **Canales:** el API HTTP viene activado por defecto, y trae canales para Slack, Discord, Microsoft Teams, Telegram, Twilio, GitHub, Linear, WhatsApp y web chat. El mismo agente atiende en todos, y una conversación puede empezar en Slack y seguir en la web.
- **Horarios:** con `schedules/` el agente trabaja solo, sin que nadie le escriba. Un reporte cada mañana, una revisión cada lunes.
- **Dónde corre físicamente:** tienes tres opciones.
  - **Tu PC:** con el servidor de desarrollo chateas con él en una interfaz de terminal mientras lo construyes.
  - **Tu propio servidor o homelab:** `eve build` y luego `eve start` lo convierten en un servicio de Node normal que puedes meter en un contenedor. Eso sí, ahí te toca a ti el almacenamiento, la autenticación y el escalado.
  - **Vercel:** se despliega como cualquier proyecto con `vercel deploy`, y la durabilidad, el sandbox y los cron ya vienen conectados.

Un detalle importante: cuando eve salió en junio, Vercel era la única plataforma soportada. Hoy la documentación ya incluye una guía oficial para alojarlo tú mismo, aunque la experiencia más pulida sigue siendo en Vercel.

## ¿Qué pueden hacer esos agentes?

Bastante más de lo que parece. Un agente de eve puede:

- **Escribir y correr su propio código**, incluido Python, dentro de su sandbox.
- **Usar herramientas** que tú programas en TypeScript: llamar APIs, consultar bases de datos, mandar correos.
- **Conectarse a servicios** como GitHub, Slack, Notion, Linear, Salesforce o Stripe, por MCP, OpenAPI u OAuth. Lo mejor: el modelo nunca ve las credenciales.
- **Delegar en subagentes** especializados, cada uno con sus propias instrucciones, herramientas y sandbox.
- **Recordar** datos y preferencias entre conversaciones, con memoria separada por usuario o por canal.
- **Pedir permiso** antes de hacer algo delicado, como un reembolso o un merge.

Vercel pone como ejemplos una "fábrica de software" que planifica funciones, abre pull requests y revisa código; un coordinador de proyectos que vigila Linear y avisa de bloqueos; y un agente de soporte que clasifica pedidos en Slack y los manda a la persona correcta.

## ¿Qué modelo le puedo conectar?

Prácticamente el que quieras. Tienes dos caminos:

**1. Por AI Gateway (el camino fácil).** Escribes el modelo como texto y Vercel AI Gateway se encarga del resto, con cientos de modelos de distintos proveedores y respaldo automático si uno falla. Con una sola clave pruebas Claude, GPT, Kimi o GLM cambiando una línea:

```ts
export default defineAgent({
  model: "anthropic/claude-opus-4.8",
});
```

Fuera de Vercel solo necesitas la variable `AI_GATEWAY_API_KEY`.

**2. Directo con tu proveedor.** Instalas el paquete del proveedor del AI SDK, pones tu clave en `.env.local` y le pasas el modelo. Este es el ejemplo de LogRocket con DeepSeek:

```ts
import { deepseek } from "@ai-sdk/deepseek";
import { defineAgent } from "eve";

export default defineAgent({
  model: deepseek("deepseek-chat"),
});
```

**¿Y un modelo local, con Ollama?** Como eve acepta cualquier proveedor del AI SDK, y Ollama expone un API compatible con OpenAI en `http://localhost:11434/v1`, en principio puedes apuntarlo a tu propio modelo. Ojo: no es una receta oficial de la documentación de eve, sino la consecuencia lógica de cómo está construido:

```ts
import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { defineAgent } from "eve";

const ollama = createOpenAICompatible({
  name: "ollama",
  baseURL: "http://localhost:11434/v1",
});

export default defineAgent({
  model: ollama("nombre-de-tu-modelo"),
});
```

Mi consejo: un agente vive de llamar herramientas bien, y los modelos locales pequeños suelen tropezar justo ahí. Para empezar, usa un modelo fuerte por API, y cuando todo funcione, experimenta con el local.

Un truco bonito: cada subagente puede usar un modelo distinto. Un modelo barato para investigar y uno potente para decidir.

## ¿Puedo montarlo en mi propia PC?

Sí. Para desarrollar necesitas **Node.js 24 o superior** y una credencial de modelo (o tu modelo local). Para el sandbox, en local eve elige automáticamente entre Docker, microsandbox o just-bash, según lo que tengas instalado.

Y si quieres que tu agente esté despierto 24/7 sin pagar Vercel, lo puedes correr en tu homelab con `eve build` y `eve start`. Solo asegúrate de guardar la carpeta `.eve/.workflow-data` en almacenamiento persistente: ahí vive el estado de las sesiones, y si se pierde, se pierde la memoria de lo que el agente estaba haciendo.

## Ideas para desarrollo web: dos agentes que valen la pena

Ahora lo divertido: bajemos todo esto a tierra con dos agentes que cualquiera que haga sitios web querría tener trabajando para él.

### Un agente que persiga el 100 en PageSpeed

Esta idea encaja de maravilla con eve, porque tiene todo lo que hace brillar a un agente: una meta medible, un ciclo de medir, corregir y volver a medir, y un trabajo repetitivo que nadie quiere hacer a mano cada semana.

<figure>
<img src="/images/posts/vercel-eve/agente-pagespeed.webp" alt="Flujo de seis pasos de un agente de PageSpeed: se despierta solo cada lunes con schedules, mide con la API de PageSpeed Insights, diagnostica LCP, CLS, imágenes pesadas y JS sin usar con una skill, un subagente corrige el código en el sandbox, vuelve a medir y, por último, pide permiso abriendo un pull request antes de publicar" width="1400" height="707" loading="lazy" decoding="async">
<figcaption>Cómo se vería un agente de rendimiento web armado con las piezas de eve. Diagrama propio, ejemplo conceptual.</figcaption>
</figure>

La pieza central sería una herramienta que llame a la API de PageSpeed Insights. Algo así:

```ts
// agent/tools/pagespeed.ts
import { defineTool } from "eve/tools";
import { z } from "zod";

export default defineTool({
  description: "Mide el rendimiento de una URL con PageSpeed Insights",
  inputSchema: z.object({
    url: z.string().url(),
    strategy: z.enum(["mobile", "desktop"]),
  }),
  async execute({ url, strategy }) {
    const api = new URL("https://www.googleapis.com/pagespeedonline/v5/runPagespeed");
    api.searchParams.set("url", url);
    api.searchParams.set("strategy", strategy);
    api.searchParams.set("key", process.env.PSI_API_KEY ?? "");

    const { lighthouseResult: lh } = await (await fetch(api)).json();
    return {
      score: Math.round(lh.categories.performance.score * 100),
      lcp: lh.audits["largest-contentful-paint"].displayValue,
      cls: lh.audits["cumulative-layout-shift"].displayValue,
    };
  },
});
```

Y un horario para que lo haga solo:

```md
---
cron: "0 7 * * 1"
---

Mide https://tusitio.com en móvil y escritorio.
Si el puntaje bajó o está por debajo de 90,
diagnostica la causa y propone los arreglos.
```

Le sumas una skill con tus reglas de rendimiento (formatos de imagen, cómo cargas las fuentes, qué scripts nunca se tocan), una conexión a GitHub y una herramienta para abrir pull requests con aprobación obligatoria. Listo: tienes un "auditor" que trabaja cada lunes y te deja el PR listo para revisar.

Dos advertencias honestas. Primero, el puntaje del laboratorio varía un poco entre una medición y otra, así que conviene que el agente mida varias veces antes de declarar victoria. Segundo, en sitios reales muchas veces lo que te baja del 100 son scripts de terceros que el negocio necesita (analítica, píxeles, chats). El agente te puede decir cuánto cuesta cada uno, pero la decisión de quitarlo es tuya. Por eso el paso de aprobación no es opcional.

### Un agente que escriba blogs lo más humanos posible

Aquí eve también tiene piezas que encajan perfecto: una skill con tu voz, un subagente editor y evals para ponerle nota a cada borrador.

<figure>
<img src="/images/posts/vercel-eve/agente-blog.webp" alt="Flujo de seis pasos de un agente de blog: le pides un tema por Telegram, investiga fuentes con una herramienta, escribe con tu voz usando una skill, un subagente editor revisa frases de relleno y tono robótico, un eval puntúa el borrador con una rúbrica y, al final, tú das la aprobación antes de publicar" width="1400" height="707" loading="lazy" decoding="async">
<figcaption>Un agente de redacción que suena a ti y no publica nada sin tu visto bueno. Diagrama propio, ejemplo conceptual.</figcaption>
</figure>

El corazón de este agente es la skill de tu voz. Por ejemplo, `skills/mi-voz.md`:

```md
---
description: Voz y estilo del blog. Cárgala antes de escribir cualquier post.
---

- Tutea al lector, en español latino neutro.
- Abre con un problema o una pregunta real, nunca con "En el mundo actual…".
- Frases cortas. Nada de "cabe destacar", "sin duda" o "en conclusión".
- Si hay una experiencia propia, cuéntala.
- Cada dato lleva su fuente. Si no hay fuente, no va.
```

El subagente editor tendría la tarea contraria: buscar todo lo que suene a IA genérica y devolverlo con comentarios. Y las evals te dejan medir si un cambio en las instrucciones mejoró o empeoró los borradores, en lugar de ir a ojo.

Eso sí, mi opinión: "humanizado" no debería significar "engañar a Google o al lector". Lo que de verdad hace humano un post es tu experiencia, tus opiniones y tus errores. El agente te puede ahorrar la investigación y el primer borrador; la parte que solo tú viviste la tienes que poner tú.

### Otras ideas rápidas

- Un agente que reciba los formularios de contacto de tus clientes, califique cada lead y te avise por WhatsApp solo de los buenos.
- Un agente que revise cada semana los enlaces rotos y los errores 404 de tus sitios.
- Un agente que actualice plugins de WordPress en un entorno de prueba, corra pruebas y te pida permiso antes de tocar producción.

## Cómo empezar hoy

1. **Instala Node.js 24 o superior.**
2. **Crea tu agente:**

   ```bash
   npx eve@latest init mi-agente
   ```

   Esto arma el proyecto, instala dependencias, inicializa Git y abre la interfaz de terminal.
3. **Conecta un modelo:** dentro de la interfaz escribe `/model`. Puedes pegar una clave de AI Gateway o conectar un proyecto de Vercel. Si prefieres tu proveedor directo, sigue el camino del paso anterior.
4. **Dale personalidad:** edita `agent/instructions.md` y vuelve a hablar con él. Vas a notar la diferencia de inmediato.
5. **Agrégale una herramienta** en `agent/tools/` y pídele algo que la necesite.
6. **Pruébalo como lo usaría otra app**, por su API HTTP:

   ```bash
   curl -X POST http://127.0.0.1:3000/eve/v1/session \
     -H 'content-type: application/json' \
     -d '{"message":"What is the weather in Brooklyn?"}'
   ```

7. **Despliégalo** con `npx eve deploy` en Vercel, o con `eve build` y `eve start` en tu servidor.

Un tip que me encantó: si ya usas un agente de programación, puedes enseñarle eve con su skill oficial y dejar que te ayude a construir el tuyo:

```bash
npx skills add https://github.com/vercel/eve --skill eve
```

Sí, un agente construyendo otro agente. Vivimos en el futuro. Y si prefieres algo guiado, Vercel Academy tiene un curso, *Building agents with eve*, donde armas paso a paso un agente de recepción para un taller.

## Lo que debes tener en cuenta

- **Está en beta.** Las APIs pueden cambiar antes de la versión estable, así que fija la versión en tu `package.json`.
- **Está pensado para Vercel.** Funciona fuera, pero la experiencia más completa (durabilidad, sandbox, cron y observabilidad sin configurar nada) es en su plataforma.
- **El framework es gratis; lo que usa, no.** Pagas el modelo, y si despliegas en Vercel, los recursos de la plataforma.
- **Las acciones se pueden repetir.** Si una sesión se interrumpe, el paso que estaba corriendo se vuelve a ejecutar. Para cosas como cobros o correos, usa aprobaciones o haz que repetirlas no cause problemas.

## Entonces, ¿qué es realmente eve?

Cuando leí "The framework for building agents" me imaginé una forma de armar mi propio Claude Code. La realidad es otra, y para mí más interesante: eve es la forma de construir **empleados digitales** que viven en un servidor, atienden por Slack o WhatsApp, trabajan solos con horarios, corren código en su propia caja de arena y te piden permiso antes de hacer algo importante.

Claude Code, Codex, OpenCode y Pi son agentes que trabajan **contigo**. eve es para construir agentes que trabajan **por ti**.

Y tú, ¿qué agente construirías primero? Yo ya tengo en la mira al de PageSpeed.

## Fuentes

- [eve, el framework de agentes de Vercel](https://vercel.com/eve) (página oficial)
- [Vercel: Introducing eve](https://vercel.com/blog/introducing-eve) (17 de junio de 2026) y [nota del changelog](https://vercel.com/changelog/introducing-eve-an-open-source-agent-framework)
- [Documentación de eve en Vercel](https://vercel.com/docs/eve)
- [Vercel: Running Agent Harnesses Durably](https://vercel.com/docs/agent-harnesses) y [eve como harness durable](https://vercel.com/docs/agent-harnesses/eve)
- [Repositorio de eve en GitHub](https://github.com/vercel/eve)
- [eve: guía de self-hosting](https://eve.dev/docs/guides/deployment/self-hosting)
- [Vercel Academy: Building agents with eve](https://vercel.com/academy/building-agents-with-eve/scaffold-the-dispatcher)
- [The New Stack: Vercel launches eve](https://thenewstack.io/vercel-launches-eve-an-open-source-framework-that-treats-agents-as-directories/) (17 de junio de 2026)
- [LogRocket: Vercel eve AI agents](https://blog.logrocket.com/vercel-eve-ai-agents/)
- [Flavio Copes: Vercel eve](https://flaviocopes.com/vercel-eve.md)
- [Bitdoze: Vercel eve AI agent](https://www.bitdoze.com/md/vercel-eve-ai-agent.md)
- [Implicator: Pi is not a Claude Code rival](https://www.implicator.ai/pi-is-not-a-claude-code-rival-it-is-a-harness-rebellion/)
- [DataCamp: DeepSeek Harness](https://www.datacamp.com/tutorial/deepseek-harness)
- [Google: PageSpeed Insights API](https://developers.google.com/speed/docs/insights/v5/get-started)
- [Ollama: compatibilidad con OpenAI](https://ollama.com/blog/openai-compatibility)
