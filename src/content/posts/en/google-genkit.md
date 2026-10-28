---
title: "Google's Genkit: What Are “Agentic Apps That Do More Than Chat,” Anyway?"
description: What Genkit is, who's behind it, what building agentic apps beyond chat really means, how it differs from eve, which models it supports, and a hands-on idea, a blog that suggests what to read based on the section you're on.
date: 2026-10-27T17:00:00Z
category: frameworks
translationKey: google-genkit
---

In the [last post](/en/posts/vercel-eve/), we took apart eve, Vercel's framework for building agents. This time it's Google's turn, and its headline is just as bold: **"Build agentic apps that do more than chat."**

And the question pops up on its own: if it says "more than chat," is it for building chatbots, just better ones? What's an "agentic app" that isn't a chat? Does a smart website count?

Spoiler: Genkit has very little to do with chatbots. Its real promise is getting AI out of the little chat bubble and putting it to work **inside** your app: filling out forms, replying with buttons and cards, searching your content, and getting things done for you.

Let's cut to the chase.

> **The short answer:** Genkit is a **free, open-source framework from Google** for building AI into your apps. It has SDKs for **TypeScript, Go, Dart, and Python**, works with almost any model (Gemini, Claude, GPT, DeepSeek, local models through Ollama…), and runs wherever your code runs. "More than chat" means the AI can hand back **data, actions, and UI**, not just paragraphs. Unlike eve, the agent isn't a separate product here: the AI lives inside your site, your backend, or your mobile app.

## What is Genkit?

Genkit is an open-source framework, licensed under **Apache 2.0**, for building AI features and agents into your applications. It's built by [Google](https://x.com/Google), which also runs it in production, and it's pitched as an SDK and toolkit for full-stack agentic apps on any platform. It even has its own X account: [@GenkitFramework](https://x.com/GenkitFramework).

It's free: you only pay for the models you use and wherever you host it.

It currently has SDKs in four languages. Here's where each one stands according to the official site, as of October 27, 2026:

| Language | Status |
| --- | --- |
| TypeScript / JavaScript | Stable (GA) |
| Go | Stable (GA) |
| Dart (and Flutter) | Stable (GA), at 1.0 since October 8, 2026 |
| Python | Preview |

### A little history

Genkit started life as **Firebase Genkit**, announced by the [Firebase](https://x.com/Firebase) team at Google I/O on **May 14, 2024**. Back then it only supported JavaScript and TypeScript, with Go on the way.

It hasn't slowed down since:

- **February 2025:** Genkit for Node.js hits 1.0, ready for production.
- **September 2025:** Genkit Go 1.0.
- **March 2026:** Genkit for Dart arrives, built with Flutter apps in mind.
- **October 2026:** Genkit Dart 1.0, plus Go 1.14 with human-approval tools and budget controls.

These days it simply goes by **Genkit**, with its own home at genkit.dev.

## "More than chat": what does it mean?

This is the heart of the headline. For years, "adding AI to an app" mostly meant sticking a little chat window in the corner. Text goes in, text comes out, and the user does the rest.

An agentic app, on the other hand, uses the model to **do work inside the app**. Genkit's own homepage shows six kinds of use cases:

<figure>
<img src="/images/posts/google-genkit/more-than-chat.webp" alt="Comparison between a classic chatbot, where a question goes in and a paragraph of text comes out, and an agentic app with six capabilities: turning documents into JSON data, taking actions with tools and approvals, answering from your content with RAG, replying with UI using A2UI, making images and copy, and chatting too" width="1400" height="871" loading="lazy" decoding="async">
<figcaption>From “text in, text out” to AI that hands back data, actions, and UI. Original diagram based on the use cases at <a href="https://genkit.dev/">genkit.dev</a>.</figcaption>
</figure>

- **Documents into data:** upload a receipt, an invoice, or a PDF, and out comes JSON with the merchant, date, total, and category, ready to save.
- **Answers from your content:** it answers questions using your docs and cites where each fact came from.
- **Images and media:** it generates product variants or marketing copy from a prompt.
- **Agents that take action:** they look up an order, check the return policy, and **ask a human for approval** before issuing a refund.
- **Generated UI (GenUI):** instead of a paragraph, the AI replies with charts, forms, and buttons.
- **Chat assistants:** yes, chat is still there, but it's one interface, not the only one.

The demo on its homepage says it all: someone asks for two concert tickets, the app finds seats with a tool, **shows a seat map you can tap**, and confirms the purchase. There's a conversation, but the outcome isn't text. It's a completed purchase.

### So is it limited to chat?

Nope. In fact, plenty of the best AI features don't look like a chat at all: a "summarize" button, a form that fills itself in when you upload a photo, or a "you might also like" section that builds itself. Genkit has an agents API for when the experience really is conversational, but most of its building blocks are for tasks that never show a chat bubble.

## How is it different from eve?

If you read the eve post, you knew this question was coming. Both talk about agents, but they solve different problems.

<figure>
<img src="/images/posts/google-genkit/eve-vs-genkit-comparison.webp" alt="Comparison between eve and Genkit. In eve, the agent is the product: it's a folder with instructions.md, tools, and skills, it lives on a server as its own service, reaches you via Slack, WhatsApp, an API, or cron, is written in TypeScript, and is like hiring a digital employee. In Genkit, the AI lives inside your app: it's a library you import, it lives in your site, backend, or mobile app, reaches you through whatever UI you design, supports TypeScript, Go, Dart, and Python, and is like giving your app superpowers" width="1400" height="606" loading="lazy" decoding="async">
<figcaption>Two ways to think about AI in your project. Original diagram based on the eve and Genkit docs.</figcaption>
</figure>

- With **eve**, the agent **is** the product. It's a folder of instructions and tools that lives on a server and serves people through Slack, WhatsApp, or an API. Think of it as hiring a digital employee.
- With **Genkit**, the AI lives **inside your app**. It's a library you import so your site, backend, or mobile app can do smart things, through whatever UI you design. Think of it as giving your app superpowers.

One doesn't replace the other. And if you're wondering how Genkit stacks up against the **ADK**, Google's other agent framework, that deserves [its own post](/en/posts/genkit-vs-adk/).

## Genkit's building blocks

Genkit is like a box of LEGO: you grab only the pieces your feature needs.

<figure>
<img src="/images/posts/google-genkit/building-blocks.webp" alt="Layer diagram: at the top, your app (web with Astro, Next.js, Nuxt, or SvelteKit; backend with Express, Hono, FastAPI, or Go; mobile with Flutter and Dart); in the middle, Genkit's building blocks: generate, schemas, flows, tools, interrupts, RAG, agents and A2UI in beta or preview, Dotprompt, middleware, evals, and the Developer UI; at the bottom, model plugins (Gemini, Claude, OpenAI, Grok, DeepSeek, Bedrock, Azure AI Foundry, Ollama, and OpenAI-compatible) and deploy targets (Cloud Run, Firebase, AWS Lambda, Azure Functions, or any server)" width="1400" height="959" loading="lazy" decoding="async">
<figcaption>Genkit's main building blocks, from your app down to the model. Original diagram based on <a href="https://genkit.dev/">genkit.dev</a> and its docs.</figcaption>
</figure>

### generate(): talk to any model

This is the foundation. One call, any model:

```ts
import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';

const ai = genkit({ plugins: [googleAI()] });

const { text } = await ai.generate({
  model: googleAI.model('gemini-flash-latest'),
  prompt: 'Summarize this support ticket',
});
```

### Structured output and flows

This is where it gets good. You describe the **exact shape** of the response with a Zod schema, and Genkit makes sure it comes back that way. Then you wrap that logic in a **flow**, which is a regular function with superpowers: typed input and output, streaming, traces for debugging, and the option to expose it as an HTTP endpoint.

Here's the official example:

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

Notice there's no chat anywhere: a theme goes in, and out comes an object with two fields your app can render however it wants.

### Tools and interrupts

**Tools** are functions in your app that the model can ask you to run: query a database, call an API, check inventory. Genkit handles the whole loop: the model asks for a tool, Genkit runs it, hands the result back, and repeats until it has an answer.

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

One important detail: the docs stress that each tool's **name and description** matter a lot, because that's all the model reads when deciding whether to use it.

**Interrupts** are special tools that pause everything and hand control back to your app. They're for asking the user a question, showing them some UI, or getting approval before a sensitive action.

### RAG: answers from your own content

To have the AI answer with **your** information (your docs, your products, your posts), Genkit gives you three pieces:

- **Embedders** turn text into a vector of numbers that captures its meaning.
- **Indexers** store those vectors in a database.
- **Retrievers** take a question and find the closest matching chunks.

There are official plugins for Firestore, PostgreSQL with pgvector, Pinecone, Chroma, LanceDB, Neo4j, Astra DB, and more. Hang on to this concept, because it's the key to the example further down.

### Agents (beta)

When the experience really is conversational, the agents API saves you the plumbing: message history, streaming, resumable sessions, interrupts, and handing work off to specialized subagents. The simplest agent just needs a name and some instructions:

```ts
const assistant = ai.defineAgent({
  name: 'assistant',
  system: 'You are a helpful assistant.',
});

const chat = assistant.chat();
const res = await chat.send('Hello. What can you do?');
```

The nice part: a browser or mobile app can talk to that remote agent through the same `chat()` interface, so you don't have to invent your own protocol.

### A2UI: the AI replies with UI (preview)

This is the piece that best explains "more than chat." **A2UI** ("Agent to UI") is an open protocol that lets the agent, instead of writing a paragraph, send **cards, lists, forms, and buttons** that your app renders in real time. If the user taps a button, that action goes back to the agent as the next turn.

There are official renderers for Lit, React, Angular, and Flutter. And turning it on is one line in your agent: `use: [a2ui()]`.

### Developer UI: see what your AI is thinking

You can test everything above in the **Developer UI**, a local interface that runs at `localhost:4000`. That's where you run your flows, chat with your agents, and, best of all, see the **trace** of every run: which model call it made, which tool it asked for, what came back, and how many tokens it burned.

<figure>
<img src="/images/posts/google-genkit/developer-ui.webp" alt="Screenshot of the Genkit Developer UI testing a task agent: the user types mark milk done, the model calls the toggleTask tool with id 1, the tool returns success true, the model replies that it marked milk as done, and a side panel shows the session state with two tasks, milk done and laundry pending" width="1400" height="949" loading="lazy" decoding="async">
<figcaption>The Developer UI testing an agent: every model call, every tool, and the session state, all visible. Image: <a href="https://genkit.dev/">Genkit</a>.</figcaption>
</figure>

If you've ever debugged an agent with nothing but `console.log`, you'll see why this is worth its weight in gold.

## Which models can I plug in?

Almost all of them. According to the official site, Genkit works with **Gemini** (via the Gemini API or Gemini Enterprise), Anthropic's **Claude**, **OpenAI**, xAI's **Grok**, **DeepSeek**, **AWS Bedrock**, **Azure AI Foundry**, open models like Gemma or Llama through **Ollama**, and any OpenAI-compatible API.

Each provider is a plugin, and switching models is a one-line change:

```ts
const ai = genkit({
  plugins: [googleAI(), anthropic(), openAI(), ollama()],
});
```

One caveat: not every model can use tools. If you pass tools to a model that doesn't support them, Genkit throws an error, and small or highly specialized models are the usual suspects.

## Where does a Genkit app live?

Wherever your app lives. Genkit isn't a separate service: it's code inside your project.

- **On the web:** there are official guides for Next.js, Astro, Nuxt, SvelteKit, Angular, TanStack Start, Remix, and React with Vite.
- **On the backend:** Express, Hono, Fastify, NestJS, plus their equivalents in Go, Python, and Dart.
- **On mobile:** with Dart, right inside Flutter apps.
- **In production:** Cloud Run, Firebase, AWS Lambda, Azure Functions, or any server that runs your language. It can even be configured for restricted runtimes like Cloudflare Workers.

## The idea: a blog that suggests what to read based on what you're reading

Now let's bring all of this down to earth with an example anyone running a content-heavy site will want.

Picture a blog that knows **which section of the article you're on**. If you're reading the "how to install it on your machine" part, it suggests the exact post where you walked through your homelab. If you're in the section about models, it points you to the comparison of Chinese models. Not the usual "related posts" at the bottom of the page, which only people who scroll all the way down ever see, but the right recommendation **at the moment** the topic grabs you.

Would it keep readers on the site longer? The logic says yes: you're offering the next step right when they're deepest into the topic. But the only way to know is to measure it, so the smart move is to compare pages per session and reading time in your analytics before and after you turn it on.

Here's how you'd build it with Genkit:

<figure>
<img src="/images/posts/google-genkit/smart-blog.webp" alt="Three-step architecture. One, at build time: posts are split into sections, Genkit turns each section into a vector with ai.embed, and the three closest posts are saved to related.json. Two, while you read: an IntersectionObserver detects the section and a card with the suggested post appears, with no AI calls per visit. Three, bonus: a live guide takes questions, searches the posts with a tool, and replies with A2UI cards" width="1400" height="648" loading="lazy" decoding="async">
<figcaption>A blog that recommends content based on the section you're reading. Original diagram, concept sketch.</figcaption>
</figure>

### Step 1: compute the recommendations at build time

The trick is **not** calling the AI every time someone opens a page. You do it once, when you build the site: split each post into sections (every `##`), turn each section into a vector with Genkit, and save the closest posts to a JSON file.

```ts
// scripts/related.ts: runs when you build the site
import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';

const ai = genkit({ plugins: [googleAI()] });
const embedder = googleAI.embedder('gemini-embedding-001');

async function vector(text: string) {
  const [{ embedding }] = await ai.embed({ embedder, content: text });
  return embedding;
}

function similarity(a: number[], b: number[]) {
  let dot = 0, na = 0, nb = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    na += a[i] ** 2;
    nb += b[i] ** 2;
  }
  return dot / (Math.sqrt(na) * Math.sqrt(nb));
}

// For each section: compare its vector with every post's vector
// and save the 3 closest matches to public/related.json
```

The payoff? Zero AI calls per visit, zero waiting for the reader, and a cost you only pay when you publish.

### Step 2: show the suggestion while they read

In the browser, an `IntersectionObserver` detects which section is on screen and shows the matching card:

```ts
const related = await (await fetch('/related.json')).json();

const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      showSuggestion(related[location.pathname]?.[entry.target.id]);
    }
  }
}, { rootMargin: '0px 0px -60% 0px' });

document.querySelectorAll('.prose h2').forEach((h) => observer.observe(h));
```

Here, `showSuggestion` is your own function for rendering the card in your site's style.

Honest note: steps 1 and 2 already deliver the whole idea, and technically that's semantic search more than an agent. That's fine. It's the cheapest, fastest way to do it, and it doesn't need a chat at all.

### Step 3 (bonus): a guide that answers with cards

The agentic part kicks in when the reader **asks something**. Picture a "Looking for something?" button where someone types "how do I install this on my machine?" A Genkit agent searches your posts with its own tool and, thanks to A2UI, answers with **post cards** instead of a wall of text:

```ts
import { genkit, z, InMemorySessionStore } from 'genkit/beta';
import { googleAI } from '@genkit-ai/google-genai';
import { a2ui } from '@genkit-ai/a2ui';

const ai = genkit({ plugins: [googleAI()] });

const searchPosts = ai.defineTool(
  {
    name: 'searchPosts',
    description: 'Searches blog posts on a topic and returns the title, URL, and summary',
    inputSchema: z.object({ topic: z.string() }),
  },
  async ({ topic }) => searchIndex(topic), // your search: the vectors from step 1
);

export const guide = ai.defineAgent({
  name: 'guide',
  model: googleAI.model('gemini-flash-latest'),
  system: 'You are the blog guide. Only recommend posts that exist, and show them as cards.',
  tools: [searchPosts],
  use: [a2ui()],
  store: new InMemorySessionStore(),
});
```

If your site is built with Astro, good news: Genkit has an official Astro guide that exposes flows as endpoints with the `@genkit-ai/fetch` package. Just keep in mind this step needs a server (or a function), because a fully static site can't keep your model API key secret.

### Other agentic apps that aren't a chat

- A quote form that fills itself in when a customer uploads a photo of an invoice or a PDF.
- A search box for your docs or FAQ that answers with exact citations.
- A sales dashboard you can ask "how are we doing this quarter?" that replies with a chart instead of a paragraph.
- A support portal that checks the order, applies your policy, and asks for your approval before issuing a refund.

## How to get started today

1. **Install Node.js 20 or newer.**
2. **Install Genkit and the Gemini plugin** in your project:

   ```bash
   npm install genkit @genkit-ai/google-genai
   ```

3. **Install the CLI**, which includes the Developer UI:

   ```bash
   npm install -g genkit-cli
   ```

4. **Get a Gemini API key** from Google AI Studio and store it in the `GEMINI_API_KEY` environment variable.
5. **Write your first flow** in `src/index.ts` (the menu one above works great).
6. **Open it in the Developer UI:**

   ```bash
   genkit start -o -- npx tsx --watch src/index.ts
   ```

   That opens `http://localhost:4000` with your flows ready to test.

If you code with an agent like Claude Code, Cursor, or Antigravity, Genkit has official skills so your agent can learn its APIs:

```bash
npx skills add genkit-ai/skills
```

And if you'd rather learn by poking at things, [Genkit by Example](https://examples.genkit.dev/) has live demos for every use case.

## Things to keep in mind

- **Not everything is stable yet.** The agents API is in beta, A2UI is in preview, and so is the Python SDK. Expect changes between versions.
- **The local vector store is for testing only.** For production, use one of the official plugins, like Firestore or pgvector.
- **The tool loop has a cap.** It defaults to 5 turns (`maxTurns`); go past that and Genkit throws an error your app needs to handle.
- **AI-generated UI isn't trustworthy by default.** The A2UI docs say to treat every surface as untrusted and sanitize values like image URLs and Markdown.
- **The CLI and Developer UI use Google analytics.** To turn that off: `genkit config set analyticsOptOut true`.
- **The framework is free; the models aren't.** You pay for every model call and for hosting.

## So what is Genkit, really?

When you read "agentic apps that do more than chat," it's easy to picture yet another chatbot framework. The reality is more interesting: Genkit is the toolkit for getting AI to **work inside your product**. Turning documents into data, answering from your content, taking action with your permission, and talking through buttons and cards instead of paragraphs.

eve helps you build a digital employee. Genkit helps your app itself get smarter.

So, which part of your site or app would you stop solving with a chat? And if you're still wondering when to use Genkit and when to use the ADK, I put them [head to head](/en/posts/genkit-vs-adk/).

## Sources

- [Genkit: official site](https://genkit.dev/) (checked October 27, 2026)
- [Genkit repository on GitHub](https://github.com/genkit-ai/genkit)
- [Genkit: flows](https://genkit.dev/docs/flows/), [tool calling](https://genkit.dev/docs/tool-calling/), and [RAG](https://genkit.dev/docs/rag/)
- [Genkit: agents](https://genkit.dev/docs/agents/overview/) and [A2UI](https://genkit.dev/docs/agents/a2ui/)
- [Genkit: Developer UI and CLI](https://genkit.dev/docs/devtools/)
- [Genkit: deploy to any platform](https://genkit.dev/docs/deployment/any-platform/)
- [Genkit: Astro tutorial](https://github.com/genkit-ai/docsite/blob/main/src/content/docs/docs/app-frameworks/astro.mdx)
- [Genkit: develop with AI](https://genkit.dev/docs/develop-with-ai/)
- [Genkit blog](https://genkit.dev/blog/)
- [TechCrunch: Google launches Firebase Genkit](https://techcrunch.com/2024/05/14/google-launches-firebase-genkit-a-new-open-source-framework-for-building-ai-powered-apps) (May 14, 2024)
- [Firebase: Genkit 1.0 for Node.js](https://firebase.blog/posts/2025/02/announcing-genkit/) (February 12, 2025)
