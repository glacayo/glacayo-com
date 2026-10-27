---
title: "Kimi K3.1 Pro: The Chinese Model Breathing Down the Frontier's Neck (Plus the Drama)"
description: Who Moonshot AI is, what Kimi costs, how it went from K2.6 to K3.1 Pro, how it stacks up against the best models out there, and the drama everyone's talking about.
date: 2026-10-27
category: ai
translationKey: moonshot-kimi
---

If you follow AI even casually, you've probably seen **Kimi** pop up everywhere this week. On October 23, [Moonshot AI](https://x.com/Kimi_Moonshot) dropped **Kimi K3.1 Pro**, and within hours Reddit was flooded with screenshots pitting it against Claude, GPT, and Gemini. Some folks are calling it the best Chinese model right now. Others say it's overhyped.

And as if that weren't enough, the company is tangled up in one of the juiciest controversies of the year.

Today we're covering all of it: who they are, what it costs, how their models have evolved, how good the new one really is, and, of course, the tea.

## Who is Moonshot AI?

Moonshot AI is a Chinese startup founded in Beijing in **2023**. Its CEO, **Yang Zhilin**, studied at Tsinghua University and earned his PhD at Carnegie Mellon. He co-founded the company with Zhou Xinyu, Wu Yuxin, and Zhang Yutao.

The backstory is kind of charming. The company's Chinese name translates roughly to "Dark Side of the Moon," a nod to the Pink Floyd album. Yang and Zhou used to play together in a band called Splay. And "Kimi," the name of their flagship product? That was Yang's English name.

### The product that put them on the map

Their first big launch was the **Kimi** chatbot in **October 2023**. Its killer feature was long context: it could take in about **200,000 Chinese characters** in one go, which was huge at the time. Five months later, they bumped that to **two million**. While everyone else was racing to be the smartest, Kimi won people over by being able to read entire documents in one shot.

Over time they went from a closed chatbot to releasing **open-weight** models, and that's when people outside China really started paying attention.

### A valuation that keeps climbing

Its backers include **Alibaba, Tencent, IDG Capital, HongShan, and 5Y Capital**. According to Sacra, the company was valued at around $4.3 billion in December 2025, $20 billion in May 2026, and $35 billion by July. In early October, Bloomberg reported the valuation had hit roughly **$50 billion**, with an IPO on the table for early 2027.

## What does Kimi cost?

If you're using it through the API, here's the official pricing per million tokens:

| Model | Input | Cached input | Output |
| --- | --- | --- | --- |
| Kimi K3.1 Pro | $2.00 | $0.20 | $10.00 |
| Kimi K3.1 Pro Highspeed | $4.00 | $0.20 | $20.00 |

**Highspeed** promises 2–3x faster output for twice the price. Both come with a **1 million token** context window.

It's also on **OpenRouter** at the same price when Moonshot serves it directly. For older models, OpenRouter lists third-party providers that are a lot cheaper than the official API, so it pays to shop around.

Heads-up if you're running anything in production: Moonshot announced that **K2 models will be unavailable to new accounts starting October 31**, with full retirement planned for December 2026. If you depend on them, start planning your migration now.

## Recent incidents

On the technical side, Moonshot's official status page logged two **K3** incidents on **October 26, 2026**: one around noon China time, when most requests were failing, resolved in about 3 minutes, and another in the afternoon that lasted about half an hour. Nothing dramatic, but worth knowing if you're building something mission-critical on top of it.

But the really interesting stuff starts now.

## ☕ The Tea: The Anthropic Drama

Pour yourself another cup, because this is where it gets good. One important caveat, though: everything below consists of **allegations** from third parties, not facts proven in any court. I'll tell you who said what, with dates and sources.

**February 2026: the distillation accusation.** [Anthropic](https://x.com/AnthropicAI), the company behind Claude, said Moonshot had generated **more than 3.4 million exchanges** with Claude using **hundreds of fraudulent accounts**. According to Anthropic, the goal was to copy Claude's agentic reasoning, coding, computer use, and vision capabilities. That practice is called *distillation*: using one model's outputs to train another.

**July 2026: the White House jumps in.** [Michael Kratsios](https://x.com/mkratsios47), the White House's top science and tech policy official, accused Moonshot of acquiring servers equipped with **Nvidia GB300** chips and accessing them in Thailand, likely to train its models. That same day, Treasury Secretary [Scott Bessent](https://x.com/SecScottBessent) said **sanctions "will be on the table"** when distillation crosses the line into IP theft. To be clear, that was a threat, not an actual sanction. And according to TechCrunch, some experts doubt K3 could have been built mainly by distilling Fable, Anthropic's model, which had only been out for a few weeks.

**September 2026: the biggest bombshell.** In its threat intelligence report, Anthropic went further. The report alleges that Moonshot **quietly forwarded its own customers' requests to Claude** and showed them the responses as if they came from Kimi. It cites **more than 23 million exchanges** between May and July 2026, including one case with nearly 300,000 requests over ten days using **5,380 fraudulent accounts**. The most sensitive part: that data reportedly included confidential customer information, like footage from surveillance cameras in Chengdu and internal credentials from Chinese companies. Anthropic adds that it doesn't know whether Moonshot ever told its customers.

**So what did Moonshot say?** As far as I could verify, **I couldn't find any public response** from Moonshot to these allegations. TechCrunch said it reached out for comment and didn't publish a reply. If one surfaces, I'll update this post.

My take: the model can be genuinely great, and these allegations still deserve to be taken seriously, especially if you're sending it sensitive company data. Both things can be true at once.

## How their last four models evolved

Moonshot shipped four major models in six months. Here's how they look side by side:

| Model | Released | Context | AA Index | Input / Output |
| --- | --- | --- | --- | --- |
| Kimi K2.6 | Apr 2026 | 256K | 31 | $0.95 / $4 |
| Kimi K2.7 Code | Jun 2026 | 256K | 26 | $0.95 / $4 |
| Kimi K3 | Jul 2026 | 1M | 44 | $3 / $15 |
| Kimi K3.1 Pro | Oct 2026 | 1M | 55 | $2 / $10 |

*AA Index is the Artificial Analysis Intelligence Index, checked on October 27, 2026. Prices are official, per million tokens.*

### Kimi K2.6 (April 2026): the agent swarm

A *Mixture of Experts* model with **1 trillion total parameters**, 32 billion of them active per token, released with open weights under a modified MIT license. It handles text, images, and video. The headline feature was the **agent swarm**: it can coordinate up to **300 sub-agents** across **4,000 steps**. Moonshot reported **80.2 on SWE-bench Verified** and **83.2 on BrowseComp** (86.3 with the swarm).

### Kimi K2.7 Code (June 2026): the coding specialist

Same foundation as K2.6, but tuned for programming. It always thinks before answering, yet burns **about 30% fewer reasoning tokens** than K2.6, which means cheaper responses. It shines with tools: **76.0 on MCP Atlas** and **62.0 on Kimi Code Bench v2**. Its overall index is lower than K2.6's, and that makes sense: Moonshot itself recommends K2.7 Code for coding and K2.6 for everything else.

### Kimi K3 (July 2026): the big leap

This is where everything changed. K3 jumps to **2.8 trillion parameters**, debuts a new attention architecture, and moves to a **1 million token** context window. It can grind through long coding sessions in the terminal, iterate by looking at what it builds, and coordinate dozens of sub-agents. It scored **90.4 on BrowseComp** without needing any context management. The price went up too: **$3 input and $15 output**.

### Kimi K3.1 Pro (October 2026): smarter and cheaper

It's K3 with additional post-training, in the **3 trillion parameter** class. The interesting twist? It's **more capable and cheaper** than K3, dropping to **$2 input and $10 output**. It always reasons, with three effort levels (low, high, and max), and supports images, video, tools, and structured outputs. Moonshot promised to release the weights by **November 4, 2026**, so you can't download them just yet.

Look at that table and the story is clear: the intelligence score **nearly doubled in six months** (from 31 to 55), and the newest model costs less than the one before it.

## How much is a subscription?

If you'd rather use Kimi through its app or website instead of the API, here are the international plans billed monthly:

| Plan | Monthly price | What you get |
| --- | --- | --- |
| Plus | $19 | Docs, slides, Deep Research, website publishing, **Kimi Code**, and **Agent Swarm**; 2 agent tasks in parallel |
| Pro | $39 | Everything in Plus, twice Plus's credits, **Goal Mode**, and a dedicated **Kimi Claw** |
| Max | $99 | 7x Plus's credits, 4 parallel tasks, 100 projects, and 50 GB of storage |
| Ultra | $199 | 14x Plus's credits, 4 parallel tasks, 25 scheduled tasks, and 25 widgets |

All features draw from a shared credit pool that resets monthly and doesn't roll over. From Plus up, Kimi Code has a usage limit that refreshes every five hours, with no weekly cap. In China there's also a **Go** plan (¥49/month) that doesn't include Kimi Code.

> **Referral link:** if you decide to go with a plan, you can sign up through <a href="https://www.kimi.ai/activities/en/invite/share?scenario=subscribe&from=share_poster&invitation_code=V9BUCM" rel="sponsored noopener" target="_blank">my referral link</a>. You pay the same price, and we each get a spin to win Kimi credits. Full disclosure: the most common prize is 3 days of the Go plan; the one-year prize has a 0.01% chance.

## Benchmarks: K3.1 Pro vs. the heavyweights

Let's start with the numbers Moonshot published. Take them with a grain of salt: they come from the vendor itself, and each test uses its own setup. Still, the picture is pretty interesting. Across these 14 tests, K3.1 Pro takes **first place in 6** (SWE Marathon, Agents' Last Exam, OfficeQA Pro v2, Humanity's Last Exam, GDP.pdf, and ZeroBench) and **second in another 5**. It goes toe-to-toe with Claude Opus 5.5 and GPT-6 Astra, and leaves DeepSeek and GLM well behind.

<figure>
<img src="/images/posts/moonshot-kimi-k3-1-pro/overview.webp" alt="Bar charts comparing Kimi K3.1 Pro, Claude Opus 5.5, Claude Fable 5.1, GPT-6 Astra, DeepSeek V4.1 Flash, and GLM 5.3 across 14 benchmarks, including Terminal-Bench 4.0, SWE Marathon, Humanity's Last Exam, and OSWorld V2.1" width="1400" height="1903" loading="lazy" decoding="async">
<figcaption>Kimi K3.1 Pro vs. frontier models and other Chinese models across 14 coding, science, and knowledge-work benchmarks. Image: <a href="https://www.kimi.ai/blog/kimi-k3-1-pro">Moonshot AI, official Kimi K3.1 Pro blog post</a>.</figcaption>
</figure>

One thing that caught my eye: hallucinations. On Moonshot's internal test, which measures how often a model states things that aren't true (lower is better), K3.1 Pro trails only GPT-6 Astra. And when it's using tools, it opens up a sizable lead over Opus 5.5 and the other Chinese models. Moonshot notes the test is deliberately hard and doesn't reflect everyday error rates.

<figure>
<img src="/images/posts/moonshot-kimi-k3-1-pro/hallu-bench.webp" alt="Kimi Hallu Bench hallucination rates: without tools, GPT-6 Astra 4.2, Kimi K3.1 Pro 5.4, and Opus 5.5 6.8; on the Hard version with tools, GPT-6 Astra 5.5, Kimi K3.1 Pro 8.3, Opus 5.5 15.0, GLM 5.3 22.6, and DeepSeek V4.1 Flash 23.3" width="1400" height="433" loading="lazy" decoding="async">
<figcaption>Claim-level hallucination rates on Kimi Hallu Bench, without tools and on the Hard version with tools (lower is better). Image: <a href="https://www.kimi.ai/blog/kimi-k3-1-pro">Moonshot AI, official Kimi K3.1 Pro blog post</a>.</figcaption>
</figure>

For a more independent take, there's **Artificial Analysis**, which runs every model through the same methodology. Here's its K3.1 Pro scorecard:

<figure>
<img src="/images/posts/moonshot-kimi-k3-1-pro/aa-card.webp" alt="Artificial Analysis scorecard for Kimi K3.1 Pro: intelligence 55, speed 42.6, cost per task $2.11, and 55.2K tokens per task" width="1200" height="630" loading="lazy" decoding="async">
<figcaption>Kimi K3.1 Pro's intelligence score, speed, and cost per task. Image: <a href="https://artificialanalysis.ai/models/kimi-k3-1-pro">Artificial Analysis</a>.</figcaption>
</figure>

And here's how it ranks on the Intelligence Index against the rest of the pack:

| Model | Company | AA Index |
| --- | --- | --- |
| Claude Opus 5.5 | Anthropic (US) | 58 |
| **Kimi K3.1 Pro** | **Moonshot (China)** | **55** |
| Gemini 4 Argon | Google (US) | 53 |
| DeepSeek V4.1 Flash | DeepSeek (China) | 45 |
| GLM 5.3 | Z.ai (China) | 45 |
| Grok 4.6 | xAI (US) | 44 |
| MiniMax M3.1 Flash | MiniMax (China) | 43 |

*Checked on October 27, 2026. Artificial Analysis updates its rankings often.*

The takeaway is hard to ignore: K3.1 Pro is currently **the top-ranked Chinese model** on the index, 10 points ahead of DeepSeek and GLM, and it's right up there with the US frontier models. Over on **Arena**, its Max variant debuted provisionally at **#11 on the Agent Arena** leaderboard.

## What's the community saying?

On Reddit, opinions are split, as usual:

- **The hype crowd:** over on r/singularity, one thread celebrated [Kimi K3.1 ranking above Fable](https://www.reddit.com/r/singularity/comments/1xdligf/babe_wake_up_kimi_k31_is_rated_higher_than_fable/) on Artificial Analysis.
- **The skeptics:** on r/LocalLLaMA, others are asking whether [K3.1 Pro is really that much better](https://www.reddit.com/r/LocalLLaMA/comments/1xemxoq/is_it_just_me_or_kimi_k31_pro_dont_look_much/) than DeepSeek on speed, quality, and price.
- **The critics:** some users find it [slightly worse than GPT 6.1](https://www.reddit.com/r/singularity/comments/1xeft75/kimi_31_seems_to_be_slightly_worse_than_gpt_61/) at math and 3D modeling.

## So, is it worth it?

If you want a powerful model with a 1 million token context window at a lower price than the US frontier models, **Kimi K3.1 Pro is worth a shot**, especially for coding and agentic work. And once the weights drop, it'll be a really compelling option to run on your own hardware.

Just keep the controversy in mind. If you're working with sensitive data, read the allegations, weigh your risk, and make an informed call. As always, the best tool is the one you actually understand.

Have you tried it yet? I'd love to hear what you think.

## Sources

- [Official Kimi K3.1 Pro blog post](https://www.kimi.ai/blog/kimi-k3-1-pro) and [Kimi K3 blog post](https://www.kimi.ai/blog/kimi-k3)
- [Kimi K2.6](https://huggingface.co/moonshotai/Kimi-K2.6) and [Kimi K2.7 Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code) model cards on Hugging Face
- [Moonshot API pricing](https://platform.moonshot.ai/docs/pricing/chat) and [Kimi K3.1 Pro on OpenRouter](https://openrouter.ai/moonshotai/kimi-k3.1-pro)
- [Kimi subscription plans](https://www.kimi.com/en/help/membership/membership-pricing)
- [Artificial Analysis: Kimi K3.1 Pro](https://artificialanalysis.ai/models/kimi-k3-1-pro)
- [Moonshot status page](https://status.moonshot.cn/)
- [The Wire China: Who is Moonshot AI?](https://www.thewirechina.com/2025/09/28/who-is-moonshot-ai/) (September 28, 2025)
- [Bloomberg: $50 billion valuation](https://bloomberg.com/news/articles/2026-10-06/moonshot-said-to-eye-early-2027-ipo-after-value-hits-50-billion) (October 6, 2026)
- [Anthropic: Detecting and preventing distillation attacks](https://www.anthropic.com/news/detecting-and-preventing-distillation-attacks) (February 23, 2026)
- [TechCrunch: Treasury threatens sanctions](https://techcrunch.com/2026/07/22/treasury-threatens-sanctions-after-white-house-claims-moonshot-distilled-anthropics-fable/) (July 22, 2026)
- [Anthropic: Threat intelligence report](https://www.anthropic.com/threat-intelligence-report-september-2026) (September 2026)
