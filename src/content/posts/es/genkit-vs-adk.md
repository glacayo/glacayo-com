---
title: "Genkit vs. ADK: los dos frameworks de agentes de Google, cara a cara"
description: Google tiene dos frameworks open source para construir con IA y agentes. Qué es el ADK, en qué se diferencia de Genkit, qué lenguajes soporta cada uno y cómo saber cuál te conviene según lo que quieres construir.
date: 2026-10-28T15:00:00Z
category: frameworks
translationKey: genkit-vs-adk
---

Ayer vimos [qué es Genkit](/es/posts/google-genkit/) y quedó una pregunta en el aire: si Google ya tiene un framework para construir apps con IA, ¿para qué tiene **otro**? Porque el **ADK**, su Agent Development Kit, también es de Google, también es open source y también promete agentes.

Si alguna vez abriste la documentación de los dos y pensaste "¿cuál de estos uso?", no eres el único. La buena noticia es que no compiten tanto como parece: responden a preguntas distintas.

> **La respuesta corta:** **Genkit** responde "¿cómo le meto IA a mi app?". Es para que tu web, tu backend o tu app móvil hagan cosas inteligentes: salida estructurada, búsqueda en tu contenido e interfaz generada. El **ADK** responde "¿cómo armo un equipo de agentes?". Es para sistemas donde varios agentes colaboran, con flujos controlados, ciclos, aprobaciones y comunicación entre agentes. Los dos son de Google, gratis, con licencia Apache 2.0 y funcionan con casi cualquier modelo.

## Primero, ¿qué es el ADK?

El **Agent Development Kit (ADK)** es un framework de código abierto para construir, evaluar y desplegar agentes de IA. Su propia descripción lo resume: un framework "code-first" que aplica principios de desarrollo de software a la creación de agentes, desde tareas simples hasta sistemas complejos.

Google lo presentó en **Google Cloud Next, en abril de 2025**. Según InfoQ, en ese momento Google ya lo usaba internamente en productos como Agentspace y su Customer Engagement Suite. Lo respalda [Google Cloud](https://x.com/googlecloud).

### ADK 2.0: de agentes a grafos

El gran salto llegó este año con el **ADK 2.0**, que salió como versión estable en Python el **19 de mayo de 2026**, en Go el **30 de junio** y en TypeScript el **21 de agosto**. Su novedad principal es un motor de **workflows en forma de grafo**: tus agentes, herramientas y funciones son *nodos*, y tú decides cómo se conectan, con rutas, ramificaciones, ciclos, reintentos y pasos donde una persona tiene que aprobar.

Un agente del ADK se ve así:

```python
from google.adk import Agent

root_agent = Agent(
    name="greeting_agent",
    model="gemini-3.5-flash",
    instruction="You are a helpful assistant. Greet the user warmly.",
)
```

Y un workflow que encadena dos agentes, así:

```python
from google.adk import Agent, Workflow

generate_fruit_agent = Agent(
    name="generate_fruit_agent",
    instruction="Return the name of a random fruit. Return only the name.",
)

generate_benefit_agent = Agent(
    name="generate_benefit_agent",
    instruction="Tell me a health benefit about the specified fruit.",
)

root_agent = Workflow(
    name="root_agent",
    edges=[("START", generate_fruit_agent, generate_benefit_agent)],
)
```

Para probarlos, el ADK trae su propia interfaz de desarrollo. Con `adk web` ves el grafo de tu workflow, cada evento, el estado de la sesión y las trazas:

<figure>
<img src="/images/posts/genkit-vs-adk/adk-web.webp" alt="Captura de la interfaz web del ADK 2.0: a la izquierda, el grafo de un workflow con los nodos process_input, generate_headline, evaluate_headline y route_headline, con una flecha de regreso marcada como unrelated que forma un ciclo; a la derecha, la conversación paso a paso donde el agente propone titulares sobre flores, el evaluador los califica como no relacionados y el agente genera un nuevo titular sobre IA" width="1024" height="600" loading="lazy" decoding="async">
<figcaption>La interfaz web del ADK mostrando un workflow con ciclo: genera un titular, lo evalúa y, si no sirve, vuelve a intentarlo. Imagen: <a href="https://github.com/google/adk-python">ADK para Python</a>.</figcaption>
</figure>

### ¿Y qué es Gemini Enterprise Agent Platform?

Si llegaste al ADK desde la documentación de Google Cloud, seguro viste ese nombre. **Gemini Enterprise Agent Platform** es la plataforma de Google Cloud para crear, desplegar y gobernar agentes en empresas. Se anunció en Google Cloud Next '26, en abril de 2026, y es la evolución de **Vertex AI**: de hecho, lo que antes se llamaba Vertex AI Agent Engine ahora se llama **Agent Runtime**.

El ADK es la forma "con código" de construir agentes dentro de esa plataforma. Pero ojo: no la necesitas para usarlo. El ADK corre en tu PC, en un contenedor de Docker o en cualquier servidor.

### Y Genkit, en 30 segundos

Por si no leíste el post de ayer: Genkit es el framework de Google para meter IA **dentro de tus apps**. Nació en Firebase, tiene SDKs para TypeScript, Go, Dart y Python, y su fuerte son las funciones de IA que viven en tu producto: convertir documentos en datos, responder con tu contenido, generar interfaz y hablar con el frontend sin complicaciones.

```ts
const { text } = await ai.generate({
  model: googleAI.model('gemini-flash-latest'),
  prompt: 'Summarize this support ticket',
});
```

## ¿Por qué Google tiene dos?

Porque vienen de mundos distintos y resuelven problemas distintos.

<figure>
<img src="/images/posts/genkit-vs-adk/dos-preguntas.webp" alt="Comparación de Genkit y ADK. Genkit responde a cómo meterle IA a una app: su centro es tu app web, backend o móvil, su pieza base son los flows y generate, brilla en salida estructurada, streaming a la interfaz y GenUI, viene de Firebase y se despliega en Cloud Run, Firebase, Lambda o cualquier servidor. El ADK responde a cómo armar un equipo de agentes: su centro es el sistema de agentes, su pieza base son los agentes y los workflows en grafo, brilla en multiagente, rutas, ciclos, A2A y evaluación, viene de Google Cloud y se despliega en Agent Runtime, Cloud Run, GKE o Docker" width="1400" height="606" loading="lazy" decoding="async">
<figcaption>Genkit y el ADK parten de preguntas distintas. Diagrama propio a partir de la documentación de los dos frameworks.</figcaption>
</figure>

- **Genkit** viene del equipo de [Firebase](https://x.com/Firebase), cuyo público son los desarrolladores de apps web y móviles. Su pregunta es: "tengo una app, ¿cómo le agrego IA que funcione bien?".
- **El ADK** viene de Google Cloud, donde el público son equipos que construyen agentes para procesos de negocio. Su pregunta es: "necesito varios agentes trabajando juntos de forma confiable, ¿cómo lo organizo?".

Y tienen bastante en común: los dos son open source, los dos están optimizados para Gemini pero aceptan otros modelos, los dos traen una interfaz local para depurar, los dos tienen evaluaciones, los dos se conectan a herramientas por MCP y los dos soportan **A2UI** para que los agentes respondan con interfaz en lugar de texto.

## Cara a cara

| | Genkit | ADK |
| --- | --- | --- |
| **La pregunta que responde** | ¿Cómo le meto IA a mi app? | ¿Cómo armo un sistema de agentes? |
| **Nació** | Mayo de 2024, en Google I/O, como Firebase Genkit | Abril de 2025, en Google Cloud Next |
| **Pieza base** | Flows y `generate()` | Agentes y workflows en grafo |
| **Orquestación** | Tu propio código dentro de un flow, más delegación entre agentes (beta) | Workflows en grafo con rutas, ciclos y reintentos, más agentes secuenciales, paralelos y en ciclo |
| **Entre agentes (A2A)** | En su hoja de ruta | Soporte nativo del protocolo Agent2Agent |
| **Conexión con la interfaz** | Cliente para web y Flutter, guías para Next.js, Astro y más, A2UI (preview) | AG-UI (con CopilotKit, por ejemplo) y A2UI (Python) |
| **Para probar en local** | Developer UI con `genkit start` | Interfaz web con `adk web` y terminal con `adk run` |
| **Modelos** | Plugins: Gemini, Claude, OpenAI, Grok, DeepSeek, Ollama y más | Gemini y Claude directo; otros por LiteLLM, Ollama, vLLM o Apigee, con enrutamiento y respaldo automático |
| **Despliegue** | Cloud Run, Firebase, AWS Lambda, Azure Functions, cualquier servidor, incluso Cloudflare Workers | Agent Runtime (administrado), Cloud Run, GKE o Docker en cualquier lado |

### ¿En qué lenguaje los puedes usar?

Aquí está una de las diferencias más prácticas, porque muchas veces el lenguaje de tu equipo decide por ti:

<figure>
<img src="/images/posts/genkit-vs-adk/lenguajes.webp" alt="Tabla de SDKs oficiales. TypeScript: Genkit estable, ADK estable 2.0. Python: Genkit en preview, ADK estable 2.0. Go: Genkit estable, ADK estable 2.0. Dart y Flutter: Genkit estable 1.0, ADK no disponible. Java: Genkit no disponible, ADK versión 1.13. Kotlin: Genkit no disponible, ADK disponible" width="1400" height="743" loading="lazy" decoding="async">
<figcaption>Estado de cada SDK oficial. Diagrama propio con datos de genkit.dev, la documentación del ADK y sus repositorios, consultados el 27 de octubre de 2026.</figcaption>
</figure>

- Si tu equipo trabaja en **Python**, el ADK está mucho más maduro: Genkit para Python sigue en preview.
- Si haces apps con **Flutter**, Genkit es el único de los dos con SDK para Dart.
- Si estás en el mundo **Java o Kotlin**, solo el ADK te cubre. Su SDK de Kotlin incluso tiene una guía para construir agentes en Android.
- En **TypeScript y Go**, los dos están estables.

## Lo que hace especial a cada uno

### El fuerte del ADK

- **Workflows en grafo:** combinas pasos con IA y pasos de código normal en un flujo que tú controlas. Puedes incluso encadenar funciones y herramientas **sin llamar a ningún modelo**, lo que da más predictibilidad y menos costo.
- **Multiagente de verdad:** agentes especializados organizados en jerarquías, que se delegan tareas entre sí o se usan unos a otros como herramientas.
- **A2A:** el protocolo Agent2Agent para que tu agente hable con agentes de otros equipos, otras empresas u otros frameworks, aunque estén escritos en otro lenguaje.
- **Manejo del contexto:** sesiones, estado, memoria a largo plazo y archivos, con resumen automático de los turnos viejos para no llenar la ventana de contexto.
- **Agentes de voz en tiempo real:** streaming bidireccional de texto y audio.
- **Camino directo a empresa:** un comando para desplegar en Cloud Run (`adk deploy cloud_run`) o en Agent Runtime, con autenticación, observabilidad y seguridad empresarial incluidas.

### El fuerte de Genkit

- **Pensado para el producto:** un flow se vuelve endpoint en pocas líneas, y el navegador o la app móvil lo llama con el cliente oficial, con streaming incluido.
- **Salida estructurada al frontend:** la respuesta llega con la forma exacta que tu interfaz necesita, y puede ir llegando por partes mientras se genera.
- **Guías para tu framework:** Next.js, Astro, Nuxt, SvelteKit, Angular, Flutter, Express, Hono y más.
- **Despliegue donde sea:** desde Firebase hasta AWS o Azure, e incluso entornos restringidos como Cloudflare Workers.

Un detalle interesante: la hoja de ruta de Genkit incluye soporte nativo para A2A e integración con Gemini Enterprise. Los dos frameworks se están acercando.

## Mismo blog, dos ideas

La mejor forma de ver la diferencia es con un caso concreto. Ayer armamos con Genkit [un blog que te sugiere qué leer según la sección en la que vas](/es/posts/google-genkit/#la-idea-un-blog-que-te-sugiere-qué-leer-según-lo-que-estás-leyendo). Eso es una **función dentro de una app**: calcula recomendaciones, las muestra en la interfaz y, si quieres, responde preguntas con tarjetas. Genkit es la herramienta natural para eso.

Ahora imagina otra cosa: un **equipo de contenido** que investiga, escribe, se revisa a sí mismo y solo te entrega el post cuando ya pasó un control de calidad. Eso ya no es una función de tu blog, es un **proceso con varios agentes**. Ahí brilla el ADK:

<figure>
<img src="/images/posts/genkit-vs-adk/equipo-contenido.webp" alt="Workflow de un equipo de contenido con seis nodos en línea: investigador que junta fuentes, redactor que escribe el borrador, editor que califica de 1 a 10, una regla que revisa si la nota es 8 o más y si no vuelve al redactor, una revisión SEO de título, meta y enlaces, y al final una persona que aprueba la publicación. Un ciclo conecta la regla de la nota con el redactor" width="1400" height="550" loading="lazy" decoding="async">
<figcaption>Un equipo de agentes que se revisa a sí mismo antes de pedirte aprobación. Diagrama propio, ejemplo conceptual con workflows en grafo del ADK 2.0.</figcaption>
</figure>

En código, el esqueleto se vería más o menos así (es un boceto: el investigador, el redactor y el editor son agentes como los de arriba, cada uno con sus instrucciones):

```python
from google.adk import Event, Workflow

def revisar_nota(node_input: str):
    """Si el editor puso 8 o más, sigue; si no, de vuelta al redactor."""
    if int(node_input) >= 8:
        return Event(route="APROBADO")
    return Event(route="REESCRIBIR")

root_agent = Workflow(
    name="equipo_de_contenido",
    edges=[
        ("START", investigador, redactor),
        (redactor, editor, revisar_nota),
        (revisar_nota, {
            "REESCRIBIR": redactor,      # el ciclo: regresa al redactor
            "APROBADO": revision_seo,    # sigue hacia la revisión SEO
        }),
    ],
)
```

Fíjate en `revisar_nota`: es una función normal de Python, sin IA. Esa mezcla de pasos con modelo y pasos de código fijo es justo lo que hace confiable a un workflow del ADK. Y el paso final, donde tú apruebas, también existe como tipo de nodo: el ADK tiene nodos que piden datos, una decisión o un permiso a una persona, sin usar IA.

## Entonces, ¿cuál elijo?

**Elige Genkit si…**

- Estás construyendo una **app o un sitio** y quieres agregarle funciones de IA.
- Tu equipo trabaja en **TypeScript o Dart/Flutter**, o ya usas Firebase.
- Necesitas que la IA hable bien con tu **interfaz**: respuestas estructuradas, streaming, tarjetas y formularios.
- Quieres desplegar **donde sea**, sin atarte a una nube.

**Elige el ADK si…**

- Lo que construyes **es un sistema de agentes**: varios especialistas que colaboran, se delegan trabajo y se revisan.
- Necesitas **flujos controlados**: pasos fijos, rutas, ciclos y aprobaciones humanas en puntos clave.
- Tu equipo trabaja en **Python, Java o Kotlin**.
- Tus agentes tienen que hablar con **agentes de otros sistemas** (A2A), o vas a desplegar en **Google Cloud** con todo el tema de gobierno empresarial.

**¿Y los dos a la vez?** Nada te impide combinarlos: un frontend que usa Genkit para la experiencia del usuario y, detrás, un sistema de agentes hecho con el ADK que hace el trabajo pesado. Solo asegúrate de que el problema realmente lo pida, porque dos frameworks también son el doble de cosas que mantener.

## Cómo probar el ADK hoy

1. **Instala Python 3.11 o superior** y crea un entorno virtual.
2. **Instala el ADK:**

   ```bash
   pip install google-adk
   ```

3. **Crea tu primer agente:**

   ```bash
   adk create my_agent
   ```

   Esto genera una carpeta con `agent.py`, `.env` y `__init__.py`.
4. **Pon tu clave de Gemini** en el archivo `.env` como `GOOGLE_API_KEY`.
5. **Pruébalo:** `adk run my_agent` para la terminal o `adk web` para la interfaz web.

Si prefieres TypeScript, el paquete es `@google/adk` y necesita Node.js 20.19 o superior. En Go se instala con `go get google.golang.org/adk/v2`.

## Lo que debes tener en cuenta

- **El ADK 2.0 trae cambios que rompen compatibilidad** con proyectos de la versión 1.x en Python, como el formato de los eventos y la forma en que se ejecutan los agentes. Si tienes algo en producción con la 1.x, revisa la guía de migración antes de actualizar.
- **No todo está en todos los lenguajes.** Por ejemplo, desplegar en Agent Runtime está disponible para Python y Go, y la integración de A2UI en el ADK es solo para Python.
- **Los agentes en workflows tienen reglas.** Los agentes que metes dentro de un grafo deben trabajar en modo de un solo turno o en modo tarea.
- **En Genkit, varias piezas siguen en beta o preview:** el API de agentes, A2UI y el SDK de Python.
- **Los frameworks son gratis; la nube no.** Pagas los modelos, y si usas Agent Runtime u otros servicios de Google Cloud, también esos recursos.

## En resumen

Con este post cerramos un pequeño recorrido por tres formas de construir con agentes. Con [eve](/es/posts/vercel-eve/) contratas un empleado digital que vive en un servidor. Con [Genkit](/es/posts/google-genkit/) le das superpoderes a tu app. Y con el ADK armas un equipo de agentes que trabajan juntos con reglas claras.

No hay uno mejor que otro: hay uno mejor **para lo que quieres construir**. Y ahora, cuando abras la documentación de Google y veas los dos nombres, ya sabes cuál te toca.

¿Tú cuál probarías primero?

## Fuentes

- [Gemini Enterprise Agent Platform: Agent Development Kit](https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/adk)
- [ADK para Python en GitHub](https://github.com/google/adk-python), con su [registro de cambios](https://github.com/google/adk-python/blob/main/CHANGELOG.md)
- [ADK para TypeScript](https://github.com/google/adk-js), [Go](https://github.com/google/adk-go) y [Java](https://github.com/google/adk-java) en GitHub
- [Documentación del ADK](https://github.com/google/adk-docs): [ADK 2.0](https://github.com/google/adk-docs/blob/main/docs/2.0/index.md), [conceptos](https://github.com/google/adk-docs/blob/main/docs/get-started/about.md), [workflows en grafo](https://github.com/google/adk-docs/blob/main/docs/graphs/index.md), [rutas](https://github.com/google/adk-docs/blob/main/docs/graphs/routes.md), [modelos](https://github.com/google/adk-docs/blob/main/docs/agents/models/index.md), [A2A](https://github.com/google/adk-docs/blob/main/docs/a2a/intro.md), [AG-UI](https://github.com/google/adk-docs/blob/main/docs/integrations/ag-ui.md), [A2UI](https://github.com/google/adk-docs/blob/main/docs/integrations/a2ui.md), [Agent Runtime](https://github.com/google/adk-docs/blob/main/docs/deploy/agent-runtime/index.md) e [inicio rápido en Python](https://github.com/google/adk-docs/blob/main/docs/get-started/python.md)
- [InfoQ: Google lanza el Agent Development Kit](https://www.infoq.com/news/2025/04/agent-development-kit) (14 de abril de 2025)
- [HPCwire: Google presenta Gemini Enterprise Agent Platform](https://www.hpcwire.com/aiwire/2026/04/23/google-unveils-gemini-enterprise-agent-platform/) (23 de abril de 2026)
- [WWWhat's new: Gemini Enterprise Agent Platform, qué cambió desde abril](https://wwwhatsnew.com/2026/10/09/gemini-enterprise-agent-platform-que-es-cambios-desde-abril-2026/) (9 de octubre de 2026)
- [Genkit: sitio oficial](https://genkit.dev/) y [hoja de ruta](https://github.com/genkit-ai/docsite/blob/main/src/content/docs/docs/roadmap.md)
- [Genkit: agentes](https://genkit.dev/docs/agents/overview/) y [despliegue](https://genkit.dev/docs/deployment/any-platform/)
