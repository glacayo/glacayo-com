---
title: "Hermes with Bot Screen on a VPS: A Team of Bots With Their Own Computer"
description: I set up Hermes Agent with Bot Mode and Bot Screen on a 4 GB VPS. Here's what broke, how I locked the server down, and what I learned giving each bot its own desktop.
date: 2026-11-12T16:00:00Z
category: agents
translationKey: hermes-bot-screen-vps
---

Picture an AI assistant that works around the clock on a computer of its own, with its own browser and desktop, and only pings you when a password is needed. That's what I set out to build a few days ago on my own server.

I'd already tried [Grok Bot](https://x.ai/news/introducing-grok-bot) from [SpaceXAI](https://x.com/SpaceXSI) and [OpenBot](https://github.com/mandarwagh9/openbot), its open-source reimplementation. I wanted something more flexible that I could control end to end, and I landed on **Hermes Agent** from [Nous Research](https://x.com/NousResearch). Specifically, two pieces that shipped between September and October: **Bot Mode**, which turns your profiles into a roster of bots with their own name, role and memory, and **Bot Screen**, which gives each bot a Linux desktop you can watch live.

The install was the easy part. The interesting stuff was everything around it: an internet provider that was blocking me, strangers' bots knocking on the server door, and a couple of silent traps when cloning agents.

## Why Hermes?

Three things sold me:

1. **It uses the computer like a person.** With computer use, the bot sees the screen, clicks, types and browses. It doesn't need every service to have an official integration.
2. **It builds its own tools.** Hermes turns what you ask for into reusable skills. I don't wire everything up by hand; I explain what I need and it builds the tool.
3. **It lets me step in when it matters.** If it hits a login, a verification code or a CAPTCHA, it tells me and stops. I grab its screen with **Take over**, handle that step, and give it back with **Hand back**. While I'm in control, its tools are blocked.

<figure>
<img src="/images/posts/hermes-bot-screen-vps/takeover-en.webp" alt="Four-step diagram of Bot Screen: the bot works on its own, hits a login, 2FA code, CAPTCHA or payment, you take control with Take over, then return it with Hand back" width="1400" height="546" loading="lazy" decoding="async">
<figcaption>The Bot Screen loop: the bot works and you handle the sensitive steps. Chart: glacayo.com, based on the <a href="https://hermes-agent.nousresearch.com/docs/user-guide/features/bot-screen">Bot Screen docs</a>.</figcaption>
</figure>

That third point is what gave me peace of mind: the bot does the heavy lifting, but the sensitive calls stay with me.

## The server: modest, but enough

I used a basic VPS: **2 cores, 4 GB of RAM and 100 GB of disk**. It's no powerhouse, which forced me to watch resources closely.

One thing worth knowing up front: **the browser is the memory hog.** The Hermes docs budget 1.1 to 1.5 GB per open screen with a browser, and by default Hermes refuses to start a screen with less than 1.5 GB free. Their own sizing guide says 4 GB runs the desktop and 8 GB is comfortable. You can make 4 GB work, but you have to plan for it.

Also, Bot Screen is Linux-server only. It isn't offered on macOS or Windows (WSL2 does count).

## First snag: "Connection timed out"

Step one was SSH-ing into the server, and nothing happened. The connection just hung until it timed out.

I checked the server and it was fine: the SSH service was running and the firewall wasn't blocking anything. The logs even showed **other connections getting through**. Mine never showed up.

The test that cracked it was dead simple: **I connected from my phone on mobile data and it worked instantly.** On my home Wi-Fi, nothing.

The verdict: **my internet provider blocks outbound SSH.** I never would have guessed.

### The fix: a private network

Rather than fight the provider, I installed [Tailscale](https://x.com/Tailscale) on the server. Tailscale builds a private network between your devices, and since it takes a different route, the block stopped mattering. Now I reach the server as if it were on my home network.

> **Lesson:** when something "won't connect," don't assume the server is the problem. Try another network before you touch any config.

## The surprise that made my stomach drop

While going through the server logs, I found something I wasn't expecting: **bots from all over the world were trying to guess the admin password every few minutes.**

None had gotten in, but the server accepted passwords from the internet, and that's an open door. This happens to pretty much any server you put online; the difference is whether you're ready for it.

Here's what I did:

- **Turned off password login.** The only way in now is cryptographic keys, which can't realistically be guessed.
- **Left one exception:** the hosting provider's emergency web console, so I can't lock myself out if something breaks.
- **Enabled a firewall that blocks everything coming in from the internet,** except the Tailscale private network and that emergency console.

One trick I loved: before turning the firewall on, I scheduled it to **turn itself off after 5 minutes**. If something went wrong and I lost access, it would roll back on its own. Once I confirmed everything worked, I canceled the timer.

> **Lesson:** when you change remote-access rules, always leave yourself a safety net. Getting locked out of your own server is no fun.

## Saying goodbye to OpenBot

The server already had OpenBot installed. One look at the resources made the picture clear: **OpenBot was using about 1.6 GB of RAM**, and Hermes with its screen needs at least 1.5 GB free to start.

Both wouldn't fit, so OpenBot had to go.

Before deleting it I made a backup, stopped it, and confirmed the memory was freed. Only then did I remove it. Available RAM went from **1.9 GB to 3.2 GB**.

One important detail: **uninstalling a program doesn't revoke its credentials.** If a bot was connected to your accounts or AI services, go into each service and revoke those sessions or keys.

## Installing Hermes, step by step

With the ground cleared, the install was pretty straightforward:

1. **4 GB of swap**, as a cushion so the system doesn't run out of memory.
2. **System updates** and a reboot to load the new kernel.
3. **A dedicated unprivileged user for Hermes.** The bot doesn't run as admin. If a page or a message ever tries to manipulate it, the damage stays contained. The Hermes deployment checklist puts it bluntly: never run the gateway as root.
4. **The official Hermes installer**, which ships its own browser and the driver for computer use.
5. **The Bot Screen packages**, the bot's virtual desktop (TigerVNC and the core Xfce components). Hermes doesn't install them silently: it shows you the command and you decide.

For that last step, these are the commands:

```bash
hermes computer-use screen status    # shows what's missing and the install command
hermes computer-use screen install   # installs the desktop packages
hermes computer-use screen start     # turns on the bot's screen
```

For the language model I used **my ChatGPT subscription**, which Hermes supports officially: run `hermes model`, pick "ChatGPT or Codex Subscription," and approve a code in your browser. No separate API key needed.

And something I strongly recommend: I set **approvals to manual** (`approvals.mode: manual` in the config). By default Hermes uses a "smart" mode where another model assesses each command's risk; in manual, it asks me before running any dangerous command. The work goes a bit slower, and a lot safer.

## A private web interface

At first I ran everything from the terminal, but Hermes has a **web interface** with chat, sessions, settings and logs. That's where I talk to the bots and review what they did.

I set it up with two layers of protection:

- **It's only reachable inside my private network.** From the internet, it simply doesn't exist.
- **It also asks for a username and password.** Hermes flat-out refuses to start the interface outside `localhost` unless authentication is configured, which I think is a great design call. Heads up: the docs themselves say username and password are for trusted networks or behind a VPN, not for exposing the panel to the internet.

## A team of bots, each with its own memory

Over time I built several specialized bots, each with a role, plus an **Orchestrator** that coordinates and creates new bots. In Bot Mode, each bot is a Hermes profile with its own config, skills, credentials and history.

I wanted them to remember what they learned between sessions, so I hooked them up to [Engram](https://github.com/Gentleman-Programming/engram), an open-source persistent memory system. Hermes doesn't ship it natively, but it supports it through MCP, the standard protocol for connecting tools to agents.

That raised a question: **shared memory or separate?** I went with separate. That way what one bot learns doesn't bleed into another.

And I found a trap: **when you clone a bot, it inherits the original's memory.** The two end up sharing memories without you noticing. To prevent that, I wrote a small script that gives every new bot its own memory, and told the Orchestrator to run it each time it creates one.

> **Lesson:** when something "gets copied," check exactly what was copied. Silent errors are the most dangerous kind.

<figure>
<img src="/images/posts/hermes-bot-screen-vps/setup-en.webp" alt="Diagram of the setup: laptop and phone connect over the Tailscale private network with SSH keys to a 2 vCPU, 4 GB RAM VPS behind a firewall, where one Hermes gateway serves an Orchestrator and two bots, each with its own screen, memory and skills" width="1400" height="704" loading="lazy" decoding="async">
<figcaption>The final setup: one way in, and one gateway serving every bot. Chart: glacayo.com.</figcaption>
</figure>

## Google Chrome for everyone

One of the bots needed Google Chrome and downloaded it on its own, but it didn't have permission to install it. It asked me to do it.

This is where I applied a rule I now always follow: **when an agent asks you to install something with admin rights, verify it first.** I compared the file the bot downloaded against a copy pulled straight from the official site. They were byte-for-byte identical, and I still installed the official copy.

Then I set up Chrome for all the bots, using a trick Hermes itself had come up with: a small launcher that shortens some internal paths Chrome needs. I tested it by asking a bot to open a page and confirmed every process was Chrome.

## Passwords and keys: handle with care

Hermes ships an **encrypted vault** for website passwords. The bot never sees the password: it only sees the login's identifier, and Hermes types the password directly into the exact site you saved it for. If the domain doesn't match, it won't type it.

Even so, my advice is firm:

- **Give the bot its own accounts with minimal permissions.** Never your main accounts.
- **Don't store payment cards.**
- **Keep verification codes (2FA) in your own hands.**

There's one nuance worth being clear on. The Bot Screen docs put it this way: screens are work surfaces, not security boundaries. Bots on the same server share the system user, the files and the network. The unprivileged user protects the server from the bot, but it doesn't protect one bot from another. If you need that level of isolation, the official recommendation is separate hosts.

And if you're thinking of using a Claude subscription with Hermes, check [Anthropic](https://x.com/AnthropicAI)'s rules first. Since April 4, 2026, subscriptions no longer cover usage from third-party tools. Per the Hermes docs, that path currently only works on a Max plan with purchased extra usage credits, and Claude Pro is out. For everyone else, the right move is an API key with a spending limit.

## What I'm taking away

1. **Try another network** before assuming the server is broken.
2. **Assume you're under attack**, because you probably are. Use keys instead of passwords, plus a firewall.
3. **Always leave an emergency exit** before changing access rules.
4. **Don't run the agent as admin.** An unprivileged user contains the mistakes.
5. **Keep approvals on.** Speed isn't worth more than safety.
6. **Verify what the agent asks you to install.**
7. **Check what gets inherited when you clone.**
8. **Plan your RAM**, especially if you'll use the browser.

I now have a team of bots working on their own computer, with their own browser, their own memory, and the ability to build their own tools. And with the doors firmly shut.

In an upcoming post I'll cover how to improve the privacy of your connection. In the meantime, if you're already running AI agents on your own server, tell me how it went on [X](https://x.com/GeovannyLacayo).

## Sources

- [Bot Screen, Hermes Agent docs](https://hermes-agent.nousresearch.com/docs/user-guide/features/bot-screen)
- [Bot Mode, Hermes Agent docs](https://hermes-agent.nousresearch.com/docs/user-guide/bot-mode)
- [Model providers (ChatGPT subscription and the rules for Claude)](https://hermes-agent.nousresearch.com/docs/integrations/providers)
- [Web dashboard and its authentication](https://hermes-agent.nousresearch.com/docs/user-guide/features/web-dashboard)
- [Credential vault](https://hermes-agent.nousresearch.com/docs/user-guide/features/credential-vault)
- [Security and command approval](https://hermes-agent.nousresearch.com/docs/user-guide/security)
- [Hermes Agent releases on GitHub](https://github.com/NousResearch/hermes-agent/releases)
- [Nous Research adds Bot Screen to Hermes Desktop (Tao Media, September 24, 2026)](https://www.tao.media/nous-research-adds-live-bot-screen-passthrough-to-hermes-desktop/)
- [Introducing Grok Bot (xAI)](https://x.ai/news/introducing-grok-bot)
- [OpenBot on GitHub](https://github.com/mandarwagh9/openbot)
- [Engram on GitHub](https://github.com/Gentleman-Programming/engram)
- [Anthropic closes subscription use with third-party tools (Hongkiat)](https://www.hongkiat.com/blog/anthropic-closed-openclaw-loophole/)
