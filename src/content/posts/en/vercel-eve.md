---
title: "Vercel's eve: What Does “The Framework for Building Agents” Actually Mean?"
description: What eve is, who's behind it, how it differs from Claude Code, Codex, OpenCode, or Pi, where its agents live, which models you can plug in, and how to get started on your own machine, plus real ideas for web development.
date: 2026-10-27T16:00:00Z
category: frameworks
translationKey: vercel-eve
---

You land on eve's homepage and the first thing you see is a giant headline: **"The framework for building agents."**

If you're anything like me, your brain jumps straight to Claude Code, Codex, OpenCode, or Pi. "So I can build my own Claude Code with this?" "Is it another harness?" "Where does it even run?" "Can I plug in whatever model I want?"

I had all of those questions, so I sat down with the docs, the official announcement, and a handful of tutorials to answer them one by one. Spoiler: eve is something different from what most of us picture when we read "agent," and once that clicks, a whole lot of ideas open up.

Grab a coffee and let's take it piece by piece.

> **The short answer:** eve is an **open-source** framework from **Vercel** for building AI agents that live on a server and work for other people (your clients, your team, or an automated process). It's not a coding agent like Claude Code or Codex. It's the kit you use to build your own. An eve agent is **a folder** with a Markdown file of instructions, tools written in TypeScript, and "skills" written in Markdown. You can run it on your PC, on your own server, or on Vercel, and you can plug in pretty much any model.

## What is eve?

eve (yes, lowercase) is a **TypeScript** framework for building, running, and scaling AI agents in production. [Vercel](https://x.com/vercel) announced it on **June 17, 2026**, at its Ship conference in London, and released it under the **Apache 2.0** license. It's currently in **public beta**, so the API can still change.

Vercel pitches it as **"Next.js for agents,"** and the comparison holds up. In Next.js, you create a file and you get a route. In eve, you create a file and your agent gets a new ability. The tagline sums it up nicely: Markdown for instructions and skills, TypeScript for tools, durable by default.

### Who's behind it?

**Vercel**, the company behind Next.js. And this isn't a weekend side project: Vercel says eve is the framework it uses to build and run **its own agents**. Here are some numbers it has shared (keep in mind these are company-reported, not independently audited):

- Vercel runs **more than 100** internal agents on eve.
- Its data analyst agent, **d0**, answers **over 30,000 questions a month**.
- Its support agent, **Vertex**, resolves **92% of tickets**.
- Agents now trigger around **29% of deployments** on Vercel, up from under 3% a year earlier.

## First things first: what's an "agent"?

This is where all the confusion comes from. When we say "agent," most of us picture Claude Code writing code in our terminal. But that's just one kind of agent. To understand eve, you need to separate three pieces:

1. **The model:** the "brain" (Claude, GPT, Gemini, Kimi, GLM, DeepSeek…). On its own, a model takes text in and puts text out. It can't open a file or call an API.
2. **The harness:** the loop around the model. Vercel's docs define it as *"the loop around a model: its prompts, its tools, and how it manages context."* It's what tells the model "here are your tools," runs the one it picks, hands back the result, and repeats until the job is done.
3. **The agent:** the model plus the harness, plus a place to live and work: where its messages come from, where it runs code, what it's allowed to do, and which services it can reach.

<figure>
<img src="/images/posts/vercel-eve/layers.webp" alt="Diagram of three nested layers: the model at the center (Claude, GPT, Gemini, Kimi, GLM, DeepSeek, Qwen), wrapped by the harness and its five-step loop (reads the task, thinks, calls a tool, checks the result, repeats), and on the outside the agent, which lives in Slack, WhatsApp, Discord, web chat, an HTTP API, or cron and has a sandbox, memory, permissions, and connections" width="1400" height="888" loading="lazy" decoding="async">
<figcaption>Model, harness, and agent: each layer wraps the one before it. Original diagram based on the harness definition in <a href="https://vercel.com/docs/agent-harnesses">Vercel's docs</a>.</figcaption>
</figure>

With that in mind, "framework for building agents" makes a lot more sense: eve hands you a ready-made harness and all the infrastructure in that outer layer. You bring the personality, the tools, and the model.

## So is eve like Claude Code, Codex, OpenCode, or Pi?

Yes and no. This was the part that took me the longest to wrap my head around.

Here's the fun part: in its own guide to harnesses, Vercel lists **eve right next to Pi, OpenCode, Claude Code, and Codex**. Technically, they're all harnesses. They're all a loop around a model. The difference is **who they work for and where they live**.

- **Claude Code, Codex, OpenCode, and Pi** are finished products. They're coding agents: you open them in your terminal or editor, sit in front of them, and they work **with you**, on your code, while you watch.
- **eve** is a framework. It doesn't ship with a ready-to-use agent. It's the kit you use to **build** your own agent, with its own personality and its own tools, so it can live on a server and serve other people (or work on its own) while you do something else.

An analogy that helped me: Claude Code is like a finished website you use. eve is like Next.js, the tool you use to build your own site.

| Tool | What it is | Where you use it | Who it works for |
| --- | --- | --- | --- |
| Claude Code ([Anthropic](https://x.com/AnthropicAI)) | Ready-to-use coding agent | Terminal and editor | You, while you code |
| Codex ([OpenAI](https://x.com/OpenAI)) | Ready-to-use coding agent | Terminal, editor, and cloud | You, while you code |
| OpenCode | Open-source coding agent | Terminal | You, while you code |
| Pi ([Mario Zechner](https://x.com/badlogicgames)) | Minimalist coding agent: ships with 4 tools, extended through packages | Terminal | You, while you code |
| DeepSeek Harness ([DeepSeek](https://x.com/deepseek_ai)) | Open-source agent framework where "everything is a plugin" | Your machine, with a web UI | Whatever you build |
| **eve** ([Vercel](https://x.com/vercel)) | **Framework for building and running your own agents** | **Your PC, your server, or Vercel; people reach it via Slack, WhatsApp, an API…** | **Your clients, your team, or automated jobs** |

### So am I building my own harness?

Not exactly, and that's good news. With eve, **you don't write the loop**. The framework ships with a default harness that handles calling the model, running tools, and compacting context as the conversation grows. You just describe the agent.

What you do get to skip is all the tedious, hard stuff about running an agent in production, which is exactly where most projects fall apart:

- **Durability:** every conversation is a checkpointed workflow. If the server crashes or you deploy mid-task, the agent picks up where it left off. And a session that's mid-task when you ship a new version finishes on the version it started on.
- **Sandbox:** every agent gets its own isolated "computer" for running commands, scripts, and file operations, separate from your app.
- **Human approvals:** any tool can require sign-off before it runs. The agent pauses without burning compute until someone says yes.
- **Observability and evals:** every run produces OpenTelemetry traces, and you can write scored tests to catch it when a change makes your agent worse.

## An agent is a folder

This is the core idea behind eve, and honestly, my favorite part. There's nothing to register anywhere: every file or folder inside `agent/` is a capability.

<figure>
<img src="/images/posts/vercel-eve/folder.webp" alt="Folder tree of an eve agent with the role of each part: instructions.md defines who it is, agent.ts the model, tools/ what it can do, skills/ what it knows, subagents/ who it delegates to, connections/ which services it uses, channels/ where you find it, schedules/ when it works on its own, sandbox/ its isolated computer, and evals/ its scored tests" width="1400" height="873" loading="lazy" decoding="async">
<figcaption>The anatomy of an eve agent. Original diagram based on <a href="https://vercel.com/eve">vercel.com/eve</a> and the <a href="https://vercel.com/docs/eve">eve docs on Vercel</a>.</figcaption>
</figure>

A minimal agent is **two files**. The instructions, in Markdown:

```md
# Identity

You are an expert weather assistant.
You can fetch the weather for any
city in the world.
```

And the model, in `agent.ts`:

```ts
import { defineAgent } from "eve";

export default defineAgent({
  model: "openai/gpt-6-astra",
});
```

When you want it to **do** something, you add a tool under `tools/`. The filename becomes the tool name. Here's the official example, `tools/get_weather.ts`:

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

And when you want it to **know** something, you add a *skill* under `skills/`: a Markdown file the agent only loads when the topic comes up. The `description` field decides when it kicks in:

```md
---
description: Research unfamiliar topics
---

When the task is novel or ambiguous,
gather evidence first, then answer.
```

If you already use skills in Claude Code or OpenCode, this will feel very familiar. Same idea, just inside an agent that lives on a server.

## Where do these agents live?

This is the other big difference from a coding agent. An eve agent doesn't live in your terminal. It lives on a **server**, and people (or systems) talk to it through **channels**.

<figure>
<img src="/images/posts/vercel-eve/where-they-live.webp" alt="Flow diagram: messages come in through Slack, Discord, Teams, WhatsApp, Telegram, web chat, an HTTP API, GitHub, Linear, or a cron schedule; they reach the agent, which has instructions, tools, skills, a durable session, and approvals; the agent uses a model, a sandbox, connections, and subagents. Below, three places it can run: your PC with eve dev, your server or homelab with eve build and eve start, and Vercel with vercel deploy" width="1400" height="960" loading="lazy" decoding="async">
<figcaption>Where work comes in, what the agent uses, and where you can run it. Original diagram based on the <a href="https://vercel.com/docs/eve">eve docs on Vercel</a> and the <a href="https://eve.dev/docs/guides/deployment/self-hosting">self-hosting guide</a>.</figcaption>
</figure>

- **Channels:** the HTTP API is on by default, and there are channels for Slack, Discord, Microsoft Teams, Telegram, Twilio, GitHub, Linear, WhatsApp, and web chat. One agent serves all of them, and a conversation can start in Slack and continue on the web.
- **Schedules:** with `schedules/`, the agent works on its own without anyone messaging it. A report every morning, a review every Monday.
- **Where it physically runs:** you've got three options.
  - **Your PC:** the dev server lets you chat with it in a terminal UI while you build it.
  - **Your own server or homelab:** `eve build` followed by `eve start` turns it into a regular Node service you can drop into a container. The catch: storage, auth, and scaling are on you.
  - **Vercel:** it deploys like any other project with `vercel deploy`, and durability, sandboxing, and cron come pre-wired.

One important detail: when eve launched in June, Vercel was the only supported platform. The docs now include an official self-hosting guide, though the most polished experience is still on Vercel.

## What can these agents actually do?

A lot more than you'd think. An eve agent can:

- **Write and run its own code**, Python included, inside its sandbox.
- **Use tools** you write in TypeScript: call APIs, query databases, send emails.
- **Connect to services** like GitHub, Slack, Notion, Linear, Salesforce, or Stripe through MCP, OpenAPI, or OAuth. Best part: the model never sees the credentials.
- **Hand work off to subagents**, each with its own instructions, tools, and sandbox.
- **Remember** facts and preferences across conversations, with memory scoped per user or per channel.
- **Ask permission** before doing anything sensitive, like issuing a refund or merging a PR.

Vercel's own examples include a "software factory" that plans features, opens pull requests, and reviews code; a project coordinator that watches Linear and flags blockers; and a support agent that triages Slack requests and routes them to the right person.

## Which model can I plug in?

Pretty much any model you want. You've got two paths:

**1. Through AI Gateway (the easy way).** You write the model as a string, and Vercel AI Gateway handles the rest, with hundreds of models from different providers and automatic fallbacks if one goes down. With a single key, you can try Claude, GPT, Kimi, or GLM by changing one line:

```ts
export default defineAgent({
  model: "anthropic/claude-opus-4.8",
});
```

Outside Vercel, all you need is the `AI_GATEWAY_API_KEY` environment variable.

**2. Straight to your provider.** You install the provider's AI SDK package, put your key in `.env.local`, and pass in the model. Here's LogRocket's DeepSeek example:

```ts
import { deepseek } from "@ai-sdk/deepseek";
import { defineAgent } from "eve";

export default defineAgent({
  model: deepseek("deepseek-chat"),
});
```

**What about a local model with Ollama?** eve accepts any AI SDK provider, and Ollama exposes an OpenAI-compatible API at `http://localhost:11434/v1`, so in principle you can point it at your own model. Heads-up: this isn't an official recipe from the eve docs. It's just what follows from how eve is built:

```ts
import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { defineAgent } from "eve";

const ollama = createOpenAICompatible({
  name: "ollama",
  baseURL: "http://localhost:11434/v1",
});

export default defineAgent({
  model: ollama("your-model-name"),
});
```

My advice: an agent lives and dies by how well it calls tools, and small local models tend to trip up right there. Start with a strong model over an API, and once everything works, experiment with the local one.

Neat trick: every subagent can use a different model. A cheap one for research, a powerful one for decisions.

## Can I run it on my own machine?

Yep. For development, you need **Node.js 24 or newer** and a model credential (or your local model). For the sandbox, eve automatically picks Docker, microsandbox, or just-bash locally, depending on what you have installed.

And if you want your agent up 24/7 without paying for Vercel, you can run it in your homelab with `eve build` and `eve start`. Just make sure the `.eve/.workflow-data` folder lives on persistent storage. That's where session state lives, and if you lose it, the agent forgets what it was in the middle of.

## Web dev ideas: two agents worth building

Now for the fun part: let's bring all of this down to earth with two agents anyone who builds websites would love to have on the payroll.

### An agent that chases a perfect PageSpeed score

This idea is a perfect fit for eve, because it has everything that makes an agent shine: a measurable goal, a measure-fix-measure-again loop, and repetitive work nobody wants to do by hand every week.

<figure>
<img src="/images/posts/vercel-eve/pagespeed-agent.webp" alt="Six-step flow of a PageSpeed agent: it wakes up every Monday via a schedule, measures with the PageSpeed Insights API, diagnoses LCP, CLS, heavy images, and unused JS with a skill, a subagent fixes the code in the sandbox, it measures again, and finally it asks for permission by opening a pull request before anything ships" width="1400" height="707" loading="lazy" decoding="async">
<figcaption>What a web performance agent could look like using eve's building blocks. Original diagram, concept sketch.</figcaption>
</figure>

The centerpiece would be a tool that calls the PageSpeed Insights API. Something like this:

```ts
// agent/tools/pagespeed.ts
import { defineTool } from "eve/tools";
import { z } from "zod";

export default defineTool({
  description: "Measure a URL's performance with PageSpeed Insights",
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

Plus a schedule so it runs on its own:

```md
---
cron: "0 7 * * 1"
---

Measure https://yoursite.com on mobile and desktop.
If the score dropped or is below 90,
diagnose the cause and propose fixes.
```

Add a skill with your performance rules (image formats, how you load fonts, which scripts are off-limits), a GitHub connection, and a pull request tool that requires approval. That's it: you've got an "auditor" that clocks in every Monday and leaves a PR ready for review.

Two honest caveats. First, lab scores bounce around a bit from run to run, so it's worth having the agent measure a few times before declaring victory. Second, on real-world sites, what keeps you from a 100 is often third-party scripts the business actually needs (analytics, pixels, chat widgets). The agent can tell you what each one costs, but the call to remove it is yours. That's why the approval step isn't optional.

### An agent that writes blog posts that sound as human as possible

Here, too, eve has pieces that fit perfectly: a skill with your voice, an editor subagent, and evals to grade every draft.

<figure>
<img src="/images/posts/vercel-eve/blog-agent.webp" alt="Six-step flow of a blog agent: you send it a topic on Telegram, it researches sources with a tool, writes in your voice using a skill, an editor subagent hunts filler and robotic phrasing, an eval grades the draft with a rubric, and finally you give the approval before anything is published" width="1400" height="707" loading="lazy" decoding="async">
<figcaption>A writing agent that sounds like you and doesn't publish anything without your sign-off. Original diagram, concept sketch.</figcaption>
</figure>

The heart of this agent is your voice skill. For example, `skills/my-voice.md`:

```md
---
description: Blog voice and style. Load before writing any post.
---

- Talk to the reader directly, casual but clear.
- Open with a real problem or question, never with "In today's fast-paced world…".
- Short sentences. No "it's worth noting," "without a doubt," or "in conclusion."
- If there's a personal story, tell it.
- Every fact gets a source. No source, no fact.
```

The editor subagent would do the opposite job: hunt down anything that reads like generic AI and send it back with notes. And evals let you measure whether a change to the instructions made drafts better or worse, instead of eyeballing it.

That said, here's my take: "human-sounding" shouldn't mean "fooling Google or your readers." What actually makes a post human is your experience, your opinions, and your mistakes. The agent can save you the research and the first draft, but the part only you lived through is yours to add.

### A few more quick ideas

- An agent that takes in your clients' contact form submissions, scores each lead, and pings you on WhatsApp only for the good ones.
- An agent that checks your sites for broken links and 404s every week.
- An agent that updates WordPress plugins on a staging site, runs tests, and asks your permission before touching production.

## How to get started today

1. **Install Node.js 24 or newer.**
2. **Create your agent:**

   ```bash
   npx eve@latest init my-agent
   ```

   This scaffolds the project, installs dependencies, initializes Git, and opens the terminal UI.
3. **Connect a model:** in the UI, type `/model`. You can paste an AI Gateway key or connect a Vercel project. If you'd rather go straight to your provider, follow the path from the section above.
4. **Give it a personality:** edit `agent/instructions.md` and talk to it again. You'll notice the difference right away.
5. **Add a tool** under `agent/tools/` and ask it something that needs it.
6. **Test it the way another app would**, through its HTTP API:

   ```bash
   curl -X POST http://127.0.0.1:3000/eve/v1/session \
     -H 'content-type: application/json' \
     -d '{"message":"What is the weather in Brooklyn?"}'
   ```

7. **Deploy it** with `npx eve deploy` on Vercel, or with `eve build` and `eve start` on your own server.

A tip I loved: if you already use a coding agent, you can teach it eve with the official skill and let it help you build yours:

```bash
npx skills add https://github.com/vercel/eve --skill eve
```

Yep, an agent building another agent. We're living in the future. And if you'd rather follow a guided path, Vercel Academy has a course, *Building agents with eve*, that walks you through building a front-desk agent for a repair shop, step by step.

## Things to keep in mind

- **It's in beta.** APIs may change before the stable release, so pin the version in your `package.json`.
- **It's built with Vercel in mind.** It works elsewhere, but the most complete experience (durability, sandboxing, cron, and observability with zero setup) is on Vercel's platform.
- **The framework is free; what it uses isn't.** You pay for the model, and if you deploy on Vercel, for platform resources.
- **Actions can repeat.** If a session gets interrupted, the step that was running runs again. For things like charges or emails, use approvals or make sure repeating them is harmless.

## So what is eve, really?

When I read "The framework for building agents," I pictured a way to build my own Claude Code. The reality is different, and to me, more interesting: eve is how you build **digital employees** that live on a server, answer on Slack or WhatsApp, work on a schedule, run code in their own sandbox, and ask for your permission before doing anything important.

Claude Code, Codex, OpenCode, and Pi are agents that work **with you**. eve is for building agents that work **for you**.

So, what's the first agent you'd build? Mine's going to be the PageSpeed one.

## Sources

- [eve, Vercel's agent framework](https://vercel.com/eve) (official page)
- [Vercel: Introducing eve](https://vercel.com/blog/introducing-eve) (June 17, 2026) and the [changelog entry](https://vercel.com/changelog/introducing-eve-an-open-source-agent-framework)
- [eve docs on Vercel](https://vercel.com/docs/eve)
- [Vercel: Running Agent Harnesses Durably](https://vercel.com/docs/agent-harnesses) and [eve as a durable harness](https://vercel.com/docs/agent-harnesses/eve)
- [eve repository on GitHub](https://github.com/vercel/eve)
- [eve: self-hosting guide](https://eve.dev/docs/guides/deployment/self-hosting)
- [Vercel Academy: Building agents with eve](https://vercel.com/academy/building-agents-with-eve/scaffold-the-dispatcher)
- [The New Stack: Vercel launches eve](https://thenewstack.io/vercel-launches-eve-an-open-source-framework-that-treats-agents-as-directories/) (June 17, 2026)
- [LogRocket: Vercel eve AI agents](https://blog.logrocket.com/vercel-eve-ai-agents/)
- [Flavio Copes: Vercel eve](https://flaviocopes.com/vercel-eve.md)
- [Bitdoze: Vercel eve AI agent](https://www.bitdoze.com/md/vercel-eve-ai-agent.md)
- [Implicator: Pi is not a Claude Code rival](https://www.implicator.ai/pi-is-not-a-claude-code-rival-it-is-a-harness-rebellion/)
- [DataCamp: DeepSeek Harness](https://www.datacamp.com/tutorial/deepseek-harness)
- [Google: PageSpeed Insights API](https://developers.google.com/speed/docs/insights/v5/get-started)
- [Ollama: OpenAI compatibility](https://ollama.com/blog/openai-compatibility)
