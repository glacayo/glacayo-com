---
title: "Genkit vs. ADK: Google's Two Agent Frameworks, Head to Head"
description: Google has two open-source frameworks for building with AI and agents. What the ADK is, how it differs from Genkit, which languages each one supports, and how to tell which one fits what you want to build.
date: 2026-10-28T15:00:00Z
category: frameworks
translationKey: genkit-vs-adk
---

Yesterday we covered [what Genkit is](/en/posts/google-genkit/), and it left one question hanging: if Google already has a framework for building AI-powered apps, why does it have **another one**? Because the **ADK**, its Agent Development Kit, is also from Google, also open source, and also all about agents.

If you've ever opened the docs for both and thought "which of these am I supposed to use?", you're not alone. The good news: they don't compete as much as it seems. They answer different questions.

> **The short answer:** **Genkit** answers "how do I add AI to my app?" It's for making your site, backend, or mobile app do smart things: structured output, search over your content, and generated UI. The **ADK** answers "how do I build a team of agents?" It's for systems where several agents work together, with controlled flows, loops, approvals, and agent-to-agent communication. Both come from Google, both are free under Apache 2.0, and both work with almost any model.

## First, what is the ADK?

The **Agent Development Kit (ADK)** is an open-source framework for building, evaluating, and deploying AI agents. Its own description sums it up: a "code-first" framework that applies software development principles to building agents, from simple tasks to complex systems.

Google introduced it at **Google Cloud Next in April 2025**. According to InfoQ, Google was already using it internally at the time, in products like Agentspace and its Customer Engagement Suite. It's backed by [Google Cloud](https://x.com/googlecloud).

### ADK 2.0: from agents to graphs

The big leap came this year with **ADK 2.0**, which went stable in Python on **May 19, 2026**, in Go on **June 30**, and in TypeScript on **August 21**. The headline feature is a **graph-based workflow** engine: your agents, tools, and functions become *nodes*, and you decide how they connect, with routing, branching, loops, retries, and steps where a human has to sign off.

An ADK agent looks like this:

```python
from google.adk import Agent

root_agent = Agent(
    name="greeting_agent",
    model="gemini-3.5-flash",
    instruction="You are a helpful assistant. Greet the user warmly.",
)
```

And a workflow that chains two agents looks like this:

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

To test them, the ADK ships its own dev interface. Run `adk web` and you can see your workflow's graph, every event, the session state, and the traces:

<figure>
<img src="/images/posts/genkit-vs-adk/adk-web.webp" alt="Screenshot of the ADK 2.0 web UI: on the left, a workflow graph with the nodes process_input, generate_headline, evaluate_headline, and route_headline, with a back arrow labeled unrelated that forms a loop; on the right, the step-by-step conversation where the agent proposes headlines about flowers, the evaluator grades them as unrelated, and the agent generates a new headline about AI" width="1024" height="600" loading="lazy" decoding="async">
<figcaption>The ADK web UI showing a workflow with a loop: it writes a headline, grades it, and tries again if it misses. Image: <a href="https://github.com/google/adk-python">ADK for Python</a>.</figcaption>
</figure>

### And what's Gemini Enterprise Agent Platform?

If you found the ADK through the Google Cloud docs, you've definitely seen that name. **Gemini Enterprise Agent Platform** is Google Cloud's platform for building, deploying, and governing agents in the enterprise. It was announced at Google Cloud Next '26 in April 2026, and it's the evolution of **Vertex AI**: what used to be called Vertex AI Agent Engine is now called **Agent Runtime**.

The ADK is the code-first way to build agents on that platform. But here's the thing: you don't need the platform to use it. The ADK runs on your machine, in a Docker container, or on any server.

### And Genkit, in 30 seconds

In case you missed yesterday's post: Genkit is Google's framework for building AI **into your apps**. It came out of Firebase, has SDKs for TypeScript, Go, Dart, and Python, and its strength is AI features that live inside your product: turning documents into data, answering from your content, generating UI, and talking to your frontend without the headaches.

```ts
const { text } = await ai.generate({
  model: googleAI.model('gemini-flash-latest'),
  prompt: 'Summarize this support ticket',
});
```

## Why does Google have two?

Because they come from different worlds and solve different problems.

<figure>
<img src="/images/posts/genkit-vs-adk/two-questions.webp" alt="Comparison of Genkit and the ADK. Genkit answers how to add AI to an app: its center is your web, backend, or mobile app, its core pieces are flows and generate, it shines at structured output, streaming to the UI, and GenUI, it comes from Firebase, and it deploys to Cloud Run, Firebase, Lambda, or any server. The ADK answers how to build a team of agents: its center is the agent system, its core pieces are agents and graph workflows, it shines at multi-agent, routing, loops, A2A, and evaluation, it comes from Google Cloud, and it deploys to Agent Runtime, Cloud Run, GKE, or Docker" width="1400" height="606" loading="lazy" decoding="async">
<figcaption>Genkit and the ADK start from different questions. Original diagram based on both frameworks' docs.</figcaption>
</figure>

- **Genkit** comes from the [Firebase](https://x.com/Firebase) team, whose audience is web and mobile app developers. Its question is: "I have an app, how do I add AI that actually works well?"
- **The ADK** comes from Google Cloud, whose audience is teams building agents for business processes. Its question is: "I need several agents working together reliably, how do I organize that?"

They also have plenty in common: both are open source, both are tuned for Gemini but accept other models, both ship a local debugging UI, both have evaluations, both connect to tools over MCP, and both support **A2UI** so agents can reply with UI instead of text.

## Head to head

| | Genkit | ADK |
| --- | --- | --- |
| **The question it answers** | How do I add AI to my app? | How do I build a system of agents? |
| **Born** | May 2024, at Google I/O, as Firebase Genkit | April 2025, at Google Cloud Next |
| **Core piece** | Flows and `generate()` | Agents and graph workflows |
| **Orchestration** | Your own code inside a flow, plus agent delegation (beta) | Graph workflows with routing, loops, and retries, plus sequential, parallel, and loop agents |
| **Agent to agent (A2A)** | On its roadmap | Native support for the Agent2Agent protocol |
| **Frontend connection** | Client for web and Flutter, guides for Next.js, Astro, and more, A2UI (preview) | AG-UI (with CopilotKit, for example) and A2UI (Python) |
| **Local testing** | Developer UI with `genkit start` | Web UI with `adk web` and terminal with `adk run` |
| **Models** | Plugins: Gemini, Claude, OpenAI, Grok, DeepSeek, Ollama, and more | Gemini and Claude directly; others through LiteLLM, Ollama, vLLM, or Apigee, with routing and automatic failover |
| **Deployment** | Cloud Run, Firebase, AWS Lambda, Azure Functions, any server, even Cloudflare Workers | Agent Runtime (managed), Cloud Run, GKE, or Docker anywhere |

### Which languages can you use?

This is one of the most practical differences, because your team's language often makes the call for you:

<figure>
<img src="/images/posts/genkit-vs-adk/languages.webp" alt="Official SDK table. TypeScript: Genkit stable, ADK stable 2.0. Python: Genkit in preview, ADK stable 2.0. Go: Genkit stable, ADK stable 2.0. Dart and Flutter: Genkit stable 1.0, ADK not available. Java: Genkit not available, ADK version 1.13. Kotlin: Genkit not available, ADK available" width="1400" height="743" loading="lazy" decoding="async">
<figcaption>Status of each official SDK. Original diagram with data from genkit.dev, the ADK docs, and their repositories, checked October 27, 2026.</figcaption>
</figure>

- If your team works in **Python**, the ADK is far more mature: Genkit for Python is still in preview.
- If you build apps with **Flutter**, Genkit is the only one of the two with a Dart SDK.
- If you live in the **Java or Kotlin** world, only the ADK has you covered. Its Kotlin SDK even has a guide for building agents on Android.
- In **TypeScript and Go**, both are stable.

## What makes each one special

### Where the ADK shines

- **Graph workflows:** you mix AI steps and plain code steps in a flow you control. You can even chain functions and tools **without calling a model at all**, which means more predictability and lower cost.
- **Real multi-agent systems:** specialized agents organized in hierarchies that hand tasks to each other or use each other as tools.
- **A2A:** the Agent2Agent protocol, so your agent can talk to agents from other teams, other companies, or other frameworks, even if they're written in another language.
- **Context management:** sessions, state, long-term memory, and files, with automatic summarization of older turns so you don't blow through the context window.
- **Real-time voice agents:** bidirectional streaming of text and audio.
- **A direct path to the enterprise:** one command to deploy to Cloud Run (`adk deploy cloud_run`) or to Agent Runtime, with authentication, observability, and enterprise-grade security built in.

### Where Genkit shines

- **Built for the product:** a flow becomes an endpoint in a few lines, and the browser or mobile app calls it with the official client, streaming included.
- **Structured output to the frontend:** responses arrive in the exact shape your UI needs, and can stream in piece by piece as they're generated.
- **Guides for your framework:** Next.js, Astro, Nuxt, SvelteKit, Angular, Flutter, Express, Hono, and more.
- **Deploy anywhere:** from Firebase to AWS or Azure, and even restricted runtimes like Cloudflare Workers.

One interesting detail: Genkit's roadmap includes native A2A support and integration with Gemini Enterprise. The two frameworks are drifting closer together.

## Same blog, two ideas

The best way to see the difference is with a concrete case. Yesterday, we used Genkit to sketch [a blog that suggests what to read based on the section you're on](/en/posts/google-genkit/#the-idea-a-blog-that-suggests-what-to-read-based-on-what-youre-reading). That's a **feature inside an app**: it computes recommendations, shows them in the UI, and, if you want, answers questions with cards. Genkit is the natural fit.

Now picture something else: a **content team** that researches, writes, reviews itself, and only hands you the post once it passes a quality check. That's not a feature of your blog anymore. It's a **process with several agents**. That's where the ADK shines:

<figure>
<img src="/images/posts/genkit-vs-adk/content-team.webp" alt="Content team workflow with six nodes in a row: a researcher who gathers sources, a writer who drafts the post, an editor who scores it from 1 to 10, a rule that checks whether the score is 8 or higher and sends it back to the writer if not, an SEO check of the title, meta, and links, and finally a human who approves publishing. A loop connects the score rule back to the writer" width="1400" height="550" loading="lazy" decoding="async">
<figcaption>A team of agents that reviews itself before asking for your approval. Original diagram, concept sketch using ADK 2.0 graph workflows.</figcaption>
</figure>

In code, the skeleton would look something like this (it's a sketch: the researcher, writer, and editor are agents like the ones above, each with its own instructions):

```python
from google.adk import Event, Workflow

def check_score(node_input: str):
    """If the editor gave it 8 or more, move on; otherwise, back to the writer."""
    if int(node_input) >= 8:
        return Event(route="APPROVED")
    return Event(route="REWRITE")

root_agent = Workflow(
    name="content_team",
    edges=[
        ("START", researcher, writer),
        (writer, editor, check_score),
        (check_score, {
            "REWRITE": writer,          # the loop: back to the writer
            "APPROVED": seo_check,      # on to the SEO check
        }),
    ],
)
```

Look at `check_score`: it's a regular Python function, no AI involved. That mix of model-powered steps and fixed code steps is exactly what makes an ADK workflow reliable. And the final step, where you approve, exists as a node type too: the ADK has nodes that ask a human for data, a decision, or permission, without using AI.

## So which one should you pick?

**Pick Genkit if…**

- You're building an **app or a website** and want to add AI features to it.
- Your team works in **TypeScript or Dart/Flutter**, or you already use Firebase.
- You need the AI to play nicely with your **UI**: structured responses, streaming, cards, and forms.
- You want to deploy **anywhere**, without getting locked into one cloud.

**Pick the ADK if…**

- What you're building **is a system of agents**: several specialists that collaborate, hand off work, and check each other.
- You need **controlled flows**: fixed steps, routing, loops, and human approvals at key points.
- Your team works in **Python, Java, or Kotlin**.
- Your agents need to talk to **agents in other systems** (A2A), or you're deploying on **Google Cloud** with all the enterprise governance that comes with it.

**What about both?** Nothing stops you from combining them: a frontend that uses Genkit for the user experience, backed by an ADK agent system doing the heavy lifting. Just make sure the problem actually calls for it, because two frameworks also means twice the stuff to maintain.

## How to try the ADK today

1. **Install Python 3.11 or newer** and create a virtual environment.
2. **Install the ADK:**

   ```bash
   pip install google-adk
   ```

3. **Create your first agent:**

   ```bash
   adk create my_agent
   ```

   This generates a folder with `agent.py`, `.env`, and `__init__.py`.
4. **Add your Gemini key** to the `.env` file as `GOOGLE_API_KEY`.
5. **Try it out:** `adk run my_agent` for the terminal, or `adk web` for the web UI.

If you prefer TypeScript, the package is `@google/adk` and it needs Node.js 20.19 or newer. In Go, install it with `go get google.golang.org/adk/v2`.

## Things to keep in mind

- **ADK 2.0 includes breaking changes** for Python 1.x projects, like the event format and the way agents execute. If you have something in production on 1.x, read the migration guide before upgrading.
- **Not everything is in every language.** For example, deploying to Agent Runtime is available for Python and Go, and the ADK's A2UI integration is Python-only.
- **Agents in workflows have rules.** Agents you put inside a graph need to run in single-turn or task mode.
- **In Genkit, several pieces are still in beta or preview:** the agents API, A2UI, and the Python SDK.
- **The frameworks are free; the cloud isn't.** You pay for the models, and if you use Agent Runtime or other Google Cloud services, for those resources too.

## The bottom line

This post wraps up a short tour of three ways to build with agents. With [eve](/en/posts/vercel-eve/), you hire a digital employee that lives on a server. With [Genkit](/en/posts/google-genkit/), you give your app superpowers. And with the ADK, you build a team of agents that work together under clear rules.

None of them is better than the others. There's just one that's better **for what you want to build**. And now, the next time you open Google's docs and see both names, you'll know which one is yours.

Which one would you try first?

## Sources

- [Gemini Enterprise Agent Platform: Agent Development Kit](https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/adk)
- [ADK for Python on GitHub](https://github.com/google/adk-python), with its [changelog](https://github.com/google/adk-python/blob/main/CHANGELOG.md)
- [ADK for TypeScript](https://github.com/google/adk-js), [Go](https://github.com/google/adk-go), and [Java](https://github.com/google/adk-java) on GitHub
- [ADK docs](https://github.com/google/adk-docs): [ADK 2.0](https://github.com/google/adk-docs/blob/main/docs/2.0/index.md), [concepts](https://github.com/google/adk-docs/blob/main/docs/get-started/about.md), [graph workflows](https://github.com/google/adk-docs/blob/main/docs/graphs/index.md), [routes](https://github.com/google/adk-docs/blob/main/docs/graphs/routes.md), [models](https://github.com/google/adk-docs/blob/main/docs/agents/models/index.md), [A2A](https://github.com/google/adk-docs/blob/main/docs/a2a/intro.md), [AG-UI](https://github.com/google/adk-docs/blob/main/docs/integrations/ag-ui.md), [A2UI](https://github.com/google/adk-docs/blob/main/docs/integrations/a2ui.md), [Agent Runtime](https://github.com/google/adk-docs/blob/main/docs/deploy/agent-runtime/index.md), and the [Python quickstart](https://github.com/google/adk-docs/blob/main/docs/get-started/python.md)
- [InfoQ: Google releases the Agent Development Kit](https://www.infoq.com/news/2025/04/agent-development-kit) (April 14, 2025)
- [HPCwire: Google unveils Gemini Enterprise Agent Platform](https://www.hpcwire.com/aiwire/2026/04/23/google-unveils-gemini-enterprise-agent-platform/) (April 23, 2026)
- [WWWhat's new: Gemini Enterprise Agent Platform, what has changed since April](https://wwwhatsnew.com/2026/10/09/gemini-enterprise-agent-platform-que-es-cambios-desde-abril-2026/) (October 9, 2026, in Spanish)
- [Genkit: official site](https://genkit.dev/) and [roadmap](https://github.com/genkit-ai/docsite/blob/main/src/content/docs/docs/roadmap.md)
- [Genkit: agents](https://genkit.dev/docs/agents/overview/) and [deployment](https://genkit.dev/docs/deployment/any-platform/)
