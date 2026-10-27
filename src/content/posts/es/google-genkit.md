---
title: "Genkit de Google: ¿qué son esas “apps agénticas que hacen más que chatear”?"
description: Qué es Genkit, quién lo respalda, qué significa construir apps agénticas que van más allá del chat, en qué se diferencia de eve, qué modelos acepta y un ejemplo práctico, un blog que te sugiere qué leer según la sección en la que vas.
date: 2026-10-27T17:00:00Z
category: frameworks
translationKey: google-genkit
---

En el [post anterior](/es/posts/vercel-eve/) desarmamos eve, el framework de Vercel para construir agentes. Esta vez le toca a Google, y su titular es igual de llamativo: **"Build agentic apps that do more than chat"**. Construye apps agénticas que hacen más que chatear.

Y la duda aparece sola: si dice "más que chatear", ¿entonces es para hacer chatbots, solo que mejores? ¿Qué es una "app agéntica" que no es un chat? ¿Un sitio web inteligente cuenta?

Spoiler: Genkit tiene muy poco de chatbot. Su verdadera promesa es que la IA deje de vivir en una burbujita de chat y empiece a trabajar **dentro** de tu app: llenando formularios, respondiendo con botones y tarjetas, buscando en tu contenido y haciendo cosas por ti.

Vamos al grano.

> **La respuesta corta:** Genkit es un framework **open source y gratuito de Google** para meter IA dentro de tus apps. Trae SDKs para **TypeScript, Go, Dart y Python**, funciona con casi cualquier modelo (Gemini, Claude, GPT, DeepSeek, modelos locales con Ollama…) y corre donde corra tu código. "Hacer más que chatear" significa que la IA puede devolver **datos, acciones e interfaz**, no solo párrafos. A diferencia de eve, aquí el agente no es un producto aparte: la IA vive dentro de tu web, tu backend o tu app móvil.

## ¿Qué es Genkit?

Genkit es un framework de código abierto, con licencia **Apache 2.0**, para construir funciones de IA y agentes dentro de tus aplicaciones. Lo desarrolla [Google](https://x.com/Google), que además lo usa en producción, y se presenta como un SDK y un conjunto de herramientas para apps agénticas "full-stack" en cualquier plataforma. Tiene su propia cuenta en X: [@GenkitFramework](https://x.com/GenkitFramework).

Es gratis: solo pagas los modelos que uses y el hosting donde lo despliegues.

Hoy tiene SDKs en cuatro lenguajes. Así está cada uno según la web oficial, consultada el 27 de octubre de 2026:

| Lenguaje | Estado |
| --- | --- |
| TypeScript / JavaScript | Estable (GA) |
| Go | Estable (GA) |
| Dart (y Flutter) | Estable (GA), con su versión 1.0 desde el 8 de octubre de 2026 |
| Python | Preview |

### Un poco de historia

Genkit nació como **Firebase Genkit**, anunciado por el equipo de [Firebase](https://x.com/Firebase) en Google I/O el **14 de mayo de 2024**. En ese momento solo soportaba JavaScript y TypeScript, y Go venía en camino.

Desde ahí no ha parado:

- **Febrero de 2025:** Genkit para Node.js llega a la versión 1.0, lista para producción.
- **Septiembre de 2025:** Genkit Go 1.0.
- **Marzo de 2026:** llega Genkit para Dart, pensado para apps con Flutter.
- **Octubre de 2026:** Genkit Dart 1.0, y la versión 1.14 de Go con herramientas de aprobación humana y control de presupuesto.

Hoy se presenta simplemente como **Genkit**, con su propio sitio en genkit.dev.

## "Más que chatear": ¿qué significa?

Aquí está el corazón del titular. Durante años, "meter IA en una app" casi siempre significó poner una ventanita de chat en una esquina. Entra texto, sale texto, y el usuario hace el resto.

Una app agéntica, en cambio, usa el modelo para **hacer trabajo dentro de la app**. La propia página de Genkit muestra seis tipos de casos:

<figure>
<img src="/images/posts/google-genkit/mas-que-chat.webp" alt="Comparación entre un chatbot clásico, donde entra una pregunta y sale un párrafo de texto, y una app agéntica con seis capacidades: convertir documentos en datos JSON, hacer acciones con herramientas y aprobaciones, responder con tu contenido usando RAG, responder con interfaz usando A2UI, crear imágenes y textos, y también conversar" width="1400" height="871" loading="lazy" decoding="async">
<figcaption>De “entra texto, sale texto” a una IA que devuelve datos, acciones e interfaz. Diagrama propio basado en los casos de uso de <a href="https://genkit.dev/">genkit.dev</a>.</figcaption>
</figure>

- **De documentos a datos:** subes un recibo, una factura o un PDF y sale un JSON con comercio, fecha, total y categoría, listo para guardar.
- **Respuestas con tu contenido:** contesta preguntas usando tus documentos y cita de dónde sacó cada dato.
- **Imágenes y medios:** genera variantes de producto o textos de marketing a partir de un prompt.
- **Agentes que actúan:** buscan un pedido, revisan la política de devoluciones y **piden permiso a una persona** antes de aprobar un reembolso.
- **Interfaz generada (GenUI):** en lugar de un párrafo, la IA responde con gráficas, formularios y botones.
- **Asistentes de chat:** sí, el chat sigue ahí, pero es una interfaz más, no la única.

El ejemplo de su página lo dice todo: alguien pide dos boletos para un concierto, la app busca asientos con una herramienta, **muestra un mapa de asientos para tocar** y confirma la compra. Hay conversación, pero el resultado no es texto: es una compra hecha.

### ¿Entonces se limita a chats?

No. De hecho, muchas de las mejores funciones de IA no se ven como un chat en absoluto: un botón que dice "resumir", un formulario que se llena solo cuando subes una foto o una sección de "te puede interesar" que se arma sola. Genkit tiene un API de agentes para cuando la experiencia sí es conversacional, pero la mayoría de sus piezas sirven para tareas que nunca muestran una burbuja de chat.

## ¿En qué se diferencia de eve?

Si leíste el post de eve, la pregunta es obligatoria. Los dos hablan de agentes, pero resuelven problemas distintos.

<figure>
<img src="/images/posts/google-genkit/eve-vs-genkit.webp" alt="Comparación entre eve y Genkit. En eve el agente es el producto: es una carpeta con instructions.md, tools y skills, vive en un servidor como servicio aparte, te habla por Slack, WhatsApp, API o cron, se escribe en TypeScript y es como contratar un empleado digital. En Genkit la IA vive dentro de tu app: es una librería que importas, vive en tu web, backend o app móvil, te habla por la interfaz que diseñes, soporta TypeScript, Go, Dart y Python y es como darle superpoderes a tu app" width="1400" height="606" loading="lazy" decoding="async">
<figcaption>Dos formas de pensar la IA en tu proyecto. Diagrama propio a partir de la documentación de eve y de Genkit.</figcaption>
</figure>

- Con **eve**, el agente **es** el producto. Es una carpeta con instrucciones y herramientas que vive en un servidor y atiende por Slack, WhatsApp o una API. Es como contratar a un empleado digital.
- Con **Genkit**, la IA vive **dentro de tu app**. Es una librería que importas en tu código para que tu web, tu backend o tu app móvil hagan cosas inteligentes, con la interfaz que tú diseñes. Es como darle superpoderes a tu app.

Una no reemplaza a la otra. Y si te preguntas cómo se compara Genkit con el **ADK**, el otro framework de agentes de Google, eso merece su propio post, y sale mañana.

## Las piezas de Genkit

Genkit es como una caja de LEGO: tomas solo las piezas que tu función necesita.

<figure>
<img src="/images/posts/google-genkit/piezas.webp" alt="Diagrama de capas: arriba tu app (web con Astro, Next.js, Nuxt o SvelteKit; backend con Express, Hono, FastAPI o Go; móvil con Flutter y Dart); en medio las piezas de Genkit: generate, schemas, flows, tools, interrupts, RAG, agents y A2UI en beta o preview, Dotprompt, middleware, evals y Developer UI; abajo los plugins de modelos (Gemini, Claude, OpenAI, Grok, DeepSeek, Bedrock, Azure AI Foundry, Ollama y compatibles con OpenAI) y los destinos de despliegue (Cloud Run, Firebase, AWS Lambda, Azure Functions o cualquier servidor)" width="1400" height="959" loading="lazy" decoding="async">
<figcaption>Las piezas principales de Genkit, de tu app hasta el modelo. Diagrama propio basado en <a href="https://genkit.dev/">genkit.dev</a> y su documentación.</figcaption>
</figure>

### generate(): hablar con cualquier modelo

Es la pieza base. Una llamada, cualquier modelo:

```ts
import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';

const ai = genkit({ plugins: [googleAI()] });

const { text } = await ai.generate({
  model: googleAI.model('gemini-flash-latest'),
  prompt: 'Summarize this support ticket',
});
```

### Salida estructurada y flows

Aquí empieza lo bueno. Le describes al modelo la **forma exacta** de la respuesta con un esquema de Zod, y Genkit se asegura de que llegue así. Envuelves esa lógica en un **flow**, que es una función normal con superpoderes: tipos en la entrada y la salida, streaming, trazas para depurar y la posibilidad de exponerla como endpoint HTTP.

Este es el ejemplo oficial:

```ts
const MenuItemSchema = z.object({
  dishname: z.string(),
  description: z.string(),
});

export const menuSuggestionFlowWithSchema = ai.defineFlow(
  {
    name: 'menuSuggestionFlow',
    inputSchema: z.object({ theme: z.string() }),
    outputSchema: MenuItemSchema,
  },
  async ({ theme }) => {
    const { output } = await ai.generate({
      model: googleAI.model('gemini-flash-latest'),
      prompt: `Invent a menu item for a ${theme} themed restaurant.`,
      output: { schema: MenuItemSchema },
    });
    if (output == null) {
      throw new Error("Response doesn't satisfy schema.");
    }
    return output;
  },
);
```

Fíjate que no hay nada de chat aquí: entra un tema y sale un objeto con dos campos que tu app puede pintar como quiera.

### Herramientas e interrupciones

Las **herramientas** son funciones de tu app que el modelo puede pedir que ejecutes: consultar una base de datos, llamar una API o revisar un inventario. Genkit se encarga del ciclo completo: el modelo pide la herramienta, Genkit la ejecuta, le devuelve el resultado y repite hasta tener la respuesta.

```ts
const getWeather = ai.defineTool(
  {
    name: 'getWeather',
    description: 'Gets the current weather in a given location',
    inputSchema: z.object({
      location: z
        .string()
        .describe('The location to get the current weather for'),
    }),
    outputSchema: z.string(),
  },
  async (input) => {
    // Here, we would typically make an API call or database query. For this
    // example, we just return a fixed value.
    return `The current weather in ${input.location} is 63°F and sunny.`;
  },
);
```

Un detalle importante: la documentación insiste en que el **nombre y la descripción** de cada herramienta importan muchísimo, porque es lo único que el modelo lee para decidir cuándo usarla.

Las **interrupciones** son herramientas especiales que pausan todo y le devuelven el control a tu app. Sirven para preguntarle algo al usuario, mostrarle una interfaz o pedir aprobación antes de una acción delicada.

### RAG: respuestas con tu propio contenido

Para que la IA responda con **tu** información (tus documentos, tus productos, tus posts), Genkit trae tres piezas:

- **Embedders:** convierten un texto en un vector de números que representa su significado.
- **Indexers:** guardan esos vectores en una base de datos.
- **Retrievers:** dada una pregunta, encuentran los fragmentos más parecidos.

Hay plugins oficiales para Firestore, PostgreSQL con pgvector, Pinecone, Chroma, LanceDB, Neo4j, Astra DB y más. Guarda bien este concepto, porque es la clave del ejemplo que viene más abajo.

### Agentes (beta)

Cuando la experiencia sí es conversacional, el API de agentes te ahorra la plomería: historial de mensajes, streaming, sesiones que se retoman, interrupciones y delegación a subagentes especializados. El agente más simple necesita un nombre y unas instrucciones:

```ts
const assistant = ai.defineAgent({
  name: 'assistant',
  system: 'You are a helpful assistant.',
});

const chat = assistant.chat();
const res = await chat.send('Hello. What can you do?');
```

Lo bonito es que un navegador o una app móvil puede hablar con ese agente remoto usando la misma interfaz `chat()`, sin que tengas que inventar tu propio protocolo.

### A2UI: la IA responde con interfaz (preview)

Esta es la pieza que mejor explica el "más que chatear". **A2UI** ("Agent to UI") es un protocolo abierto con el que el agente, en lugar de escribir un párrafo, envía **tarjetas, listas, formularios y botones** que tu app dibuja en tiempo real. Si el usuario toca un botón, esa acción vuelve al agente como el siguiente turno.

Hay renderizadores oficiales para Lit, React, Angular y Flutter. Y activarlo es una línea en tu agente: `use: [a2ui()]`.

### Developer UI: ver qué está pensando tu IA

Todo lo anterior se prueba en la **Developer UI**, una interfaz local que corre en `localhost:4000`. Ahí ejecutas tus flows, chateas con tus agentes y, sobre todo, ves la **traza** de cada ejecución: qué llamada hizo al modelo, qué herramienta pidió, qué le devolvió y cuántos tokens gastó.

<figure>
<img src="/images/posts/google-genkit/developer-ui.webp" alt="Captura de la Developer UI de Genkit probando un agente de tareas: el usuario escribe mark milk done, el modelo pide la herramienta toggleTask con id 1, la herramienta responde success true, el modelo contesta que marcó milk como hecha y un panel lateral muestra el estado de la sesión con dos tareas, milk completada y laundry pendiente" width="1400" height="949" loading="lazy" decoding="async">
<figcaption>La Developer UI probando un agente: se ve cada llamada al modelo, cada herramienta y el estado de la sesión. Imagen: <a href="https://genkit.dev/">Genkit</a>.</figcaption>
</figure>

Si alguna vez depuraste un agente a punta de `console.log`, vas a entender por qué esto vale oro.

## ¿Qué modelos le puedo conectar?

Casi todos. Según el sitio oficial, Genkit funciona con **Gemini** (por la API de Gemini o Gemini Enterprise), **Claude** de Anthropic, **OpenAI**, **Grok** de xAI, **DeepSeek**, **AWS Bedrock**, **Azure AI Foundry**, modelos abiertos como Gemma o Llama a través de **Ollama** y cualquier API compatible con OpenAI.

Cada proveedor es un plugin, y cambiar de modelo es cambiar una línea:

```ts
const ai = genkit({
  plugins: [googleAI(), anthropic(), openAI(), ollama()],
});
```

Eso sí: no todos los modelos saben usar herramientas. Si le pasas herramientas a un modelo que no las soporta, Genkit lanza un error, y los modelos pequeños o muy especializados son los que más suelen fallar en eso.

## ¿Dónde vive una app hecha con Genkit?

Donde viva tu app. Genkit no es un servicio aparte: es código dentro de tu proyecto.

- **En la web:** tiene guías oficiales para Next.js, Astro, Nuxt, SvelteKit, Angular, TanStack Start, Remix y React con Vite.
- **En el backend:** Express, Hono, Fastify, NestJS, y sus equivalentes en Go, Python y Dart.
- **En el móvil:** con Dart, directo en apps de Flutter.
- **En producción:** Cloud Run, Firebase, AWS Lambda, Azure Functions o cualquier servidor que corra tu lenguaje. Incluso se puede configurar para entornos restringidos como Cloudflare Workers.

## La idea: un blog que te sugiere qué leer según lo que estás leyendo

Ahora bajemos todo esto a tierra con un ejemplo que cualquiera que tenga un sitio con mucho contenido va a querer.

Imagina un blog que sabe **en qué sección del artículo vas**. Si estás leyendo la parte de "cómo instalarlo en tu PC", te sugiere justo el post donde explicaste tu homelab. Si estás en la parte de modelos, te ofrece la comparativa de modelos chinos. No los "posts relacionados" de siempre al final de la página, que solo ve quien llega hasta abajo, sino la recomendación correcta **en el momento** en que el tema te interesa.

¿Mantendría al lector más tiempo en el sitio? La lógica dice que sí: le ofreces el siguiente paso justo cuando está más metido en el tema. Pero la única forma de saberlo es medir, así que lo ideal es comparar en tu analítica las páginas por sesión y el tiempo de lectura antes y después de activarlo.

Así se armaría con Genkit:

<figure>
<img src="/images/posts/google-genkit/blog-inteligente.webp" alt="Arquitectura en tres pasos. Uno, al compilar el sitio: los posts se parten por secciones, Genkit convierte cada sección en un vector con ai.embed y se guardan los tres posts más parecidos en related.json. Dos, mientras lees: un IntersectionObserver detecta la sección y aparece una tarjeta con el post sugerido, sin llamadas a la IA por visita. Tres, extra: un guía en vivo recibe preguntas, busca en los posts con una herramienta y responde con tarjetas A2UI" width="1400" height="648" loading="lazy" decoding="async">
<figcaption>Un blog que recomienda contenido según la sección que estás leyendo. Diagrama propio, ejemplo conceptual.</figcaption>
</figure>

### Paso 1: calcular las recomendaciones al compilar el sitio

El truco está en **no** llamar a la IA cada vez que alguien abre una página. Lo haces una sola vez, al compilar el sitio: partes cada post por secciones (cada `##`), conviertes cada sección en un vector con Genkit y guardas los posts más parecidos en un archivo JSON.

```ts
// scripts/related.ts: se corre al compilar el sitio
import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';

const ai = genkit({ plugins: [googleAI()] });
const embedder = googleAI.embedder('gemini-embedding-001');

async function vector(text: string) {
  const [{ embedding }] = await ai.embed({ embedder, content: text });
  return embedding;
}

function similitud(a: number[], b: number[]) {
  let dot = 0, na = 0, nb = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    na += a[i] ** 2;
    nb += b[i] ** 2;
  }
  return dot / (Math.sqrt(na) * Math.sqrt(nb));
}

// Para cada sección: compara su vector con el de cada post
// y guarda los 3 más parecidos en public/related.json
```

¿El resultado? Cero llamadas a la IA por visita, cero espera para el lector y un costo que solo pagas cuando publicas.

### Paso 2: mostrar la sugerencia mientras lees

En el navegador, un `IntersectionObserver` detecta qué sección está en pantalla y muestra la tarjeta que corresponde:

```ts
const relacionados = await (await fetch('/related.json')).json();

const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      mostrarSugerencia(relacionados[location.pathname]?.[entry.target.id]);
    }
  }
}, { rootMargin: '0px 0px -60% 0px' });

document.querySelectorAll('.prose h2').forEach((h) => observer.observe(h));
```

Aquí `mostrarSugerencia` es tu función para pintar la tarjeta, con el diseño de tu sitio.

Nota honesta: los pasos 1 y 2 ya resuelven la idea completa, y técnicamente eso es búsqueda semántica más que un agente. No pasa nada: es la forma más barata y rápida de hacerlo, y no necesita ningún chat.

### Paso 3 (extra): un guía que responde con tarjetas

La parte agéntica llega cuando el lector **pregunta**. Imagina un botón "¿Buscas algo?" donde alguien escribe "¿y esto cómo lo instalo en mi PC?". Un agente de Genkit busca en tus posts con una herramienta propia y, gracias a A2UI, responde con **tarjetas de posts** en lugar de un muro de texto:

```ts
import { genkit, z, InMemorySessionStore } from 'genkit/beta';
import { googleAI } from '@genkit-ai/google-genai';
import { a2ui } from '@genkit-ai/a2ui';

const ai = genkit({ plugins: [googleAI()] });

const buscarPosts = ai.defineTool(
  {
    name: 'buscarPosts',
    description: 'Busca posts del blog sobre un tema y devuelve título, URL y resumen',
    inputSchema: z.object({ tema: z.string() }),
  },
  async ({ tema }) => buscarEnElIndice(tema), // tu búsqueda: los vectores del paso 1
);

export const guia = ai.defineAgent({
  name: 'guia',
  model: googleAI.model('gemini-flash-latest'),
  system: 'Eres el guía del blog. Recomienda solo posts que existan y muéstralos como tarjetas.',
  tools: [buscarPosts],
  use: [a2ui()],
  store: new InMemorySessionStore(),
});
```

Si tu sitio está hecho con Astro, hay buena noticia: Genkit tiene una guía oficial para Astro que expone flows como endpoints con el paquete `@genkit-ai/fetch`. Eso sí, este paso necesita un servidor (o una función), porque un sitio 100 % estático no puede guardar tu clave del modelo en secreto.

### Otras apps agénticas que no son un chat

- Un formulario de cotización que se llena solo cuando el cliente sube la foto de una factura o un PDF.
- Un buscador para tu documentación o tus preguntas frecuentes que responde con citas exactas.
- Un panel de ventas al que le preguntas "¿cómo vamos este trimestre?" y te responde con una gráfica, no con un párrafo.
- Un portal de soporte que revisa el pedido, aplica tu política y te pide aprobación antes de reembolsar.

## Cómo empezar hoy

1. **Instala Node.js 20 o superior.**
2. **Instala Genkit y el plugin de Gemini** en tu proyecto:

   ```bash
   npm install genkit @genkit-ai/google-genai
   ```

3. **Instala la CLI**, que trae la Developer UI:

   ```bash
   npm install -g genkit-cli
   ```

4. **Consigue una clave de la API de Gemini** en Google AI Studio y guárdala en la variable `GEMINI_API_KEY`.
5. **Escribe tu primer flow** en `src/index.ts` (puedes usar el del menú de arriba).
6. **Ábrelo en la Developer UI:**

   ```bash
   genkit start -o -- npx tsx --watch src/index.ts
   ```

   Se abre `http://localhost:4000` con tus flows listos para probar.

Si programas con un agente como Claude Code, Cursor o Antigravity, Genkit tiene skills oficiales para que tu agente aprenda sus APIs:

```bash
npx skills add genkit-ai/skills
```

Y si prefieres aprender viendo, en [Genkit by Example](https://examples.genkit.dev/) hay demos en vivo de cada caso de uso.

## Lo que debes tener en cuenta

- **No todo es estable todavía.** El API de agentes está en beta, A2UI está en preview y el SDK de Python también está en preview. Pueden cambiar entre versiones.
- **La base de datos vectorial local es solo para pruebas.** Para producción usa uno de los plugins oficiales, como Firestore o pgvector.
- **El ciclo de herramientas tiene un límite.** Por defecto son 5 vueltas (`maxTurns`); si se pasa, Genkit lanza un error que tu app debe manejar.
- **La interfaz que genera la IA no es de confianza.** La documentación de A2UI pide tratar cada superficie como contenido no confiable y limpiar valores como URLs de imágenes y Markdown.
- **La CLI y la Developer UI usan analítica de Google.** Si prefieres desactivarla: `genkit config set analyticsOptOut true`.
- **El framework es gratis; los modelos no.** Pagas cada llamada al modelo y el hosting.

## Entonces, ¿qué es realmente Genkit?

Cuando lees "apps agénticas que hacen más que chatear", es fácil imaginar otro framework de chatbots. La realidad es más interesante: Genkit es la caja de herramientas para que la IA **trabaje dentro de tu producto**. Que convierta documentos en datos, que responda con tu contenido, que actúe con tu permiso y que hable con botones y tarjetas en lugar de párrafos.

eve te ayuda a construir un empleado digital. Genkit te ayuda a que tu app misma se vuelva más inteligente.

¿Y tú, qué parte de tu sitio o de tu app dejarías de resolver con un chat? Y mañana no te pierdas el siguiente: **Genkit contra el ADK de Google**, cara a cara.

## Fuentes

- [Genkit: sitio oficial](https://genkit.dev/) (consultado el 27 de octubre de 2026)
- [Repositorio de Genkit en GitHub](https://github.com/genkit-ai/genkit)
- [Genkit: flows](https://genkit.dev/docs/flows/), [tool calling](https://genkit.dev/docs/tool-calling/) y [RAG](https://genkit.dev/docs/rag/)
- [Genkit: agentes](https://genkit.dev/docs/agents/overview/) y [A2UI](https://genkit.dev/docs/agents/a2ui/)
- [Genkit: Developer UI y CLI](https://genkit.dev/docs/devtools/)
- [Genkit: despliegue en cualquier plataforma](https://genkit.dev/docs/deployment/any-platform/)
- [Genkit: tutorial con Astro](https://github.com/genkit-ai/docsite/blob/main/src/content/docs/docs/app-frameworks/astro.mdx)
- [Genkit: desarrollar con IA](https://genkit.dev/docs/develop-with-ai/)
- [Blog de Genkit](https://genkit.dev/blog/)
- [TechCrunch: Google lanza Firebase Genkit](https://techcrunch.com/2024/05/14/google-launches-firebase-genkit-a-new-open-source-framework-for-building-ai-powered-apps) (14 de mayo de 2024)
- [Firebase: Genkit 1.0 para Node.js](https://firebase.blog/posts/2025/02/announcing-genkit/) (12 de febrero de 2025)
