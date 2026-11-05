---
title: "Omarchy: DHH's Linux Distro Is Winning Over Developers (and How Hard It Is Coming From Windows)"
description: What Omarchy is, why so many developers are switching, what the learning curve looks like if you're coming from Windows, how an AI agent can smooth the move, and where it wins or loses against Ubuntu Desktop.
date: 2026-11-05
category: programming
translationKey: omarchy
---

If you spend any time on developer X or YouTube, you've probably seen the screenshots: a dark desktop, windows neatly tiled, a gorgeous terminal, and not a single desktop icon. Nine times out of ten, that's **Omarchy**, the Linux distro DHH launched a year and a half ago that half the dev world now can't stop talking about.

And if you're coming from Windows, the questions write themselves: what's so special about it? How hard is it to get used to? And why not just install Ubuntu like everyone does when they want to try Linux?

Let's take it one piece at a time, because the answer has some nuance.

> **The short answer:** Omarchy is an Arch-based Linux distro built around the tastes of [DHH](https://x.com/dhh), the creator of Ruby on Rails. It's ready for coding from minute one, you drive almost everything from the keyboard, and it ships with AI agents built into the system. There is a learning curve coming from Windows, mostly around tiling windows and shortcuts, but the manual figures about two weeks to get comfortable. Against Ubuntu, Omarchy wins on speed and an out-of-the-box dev setup; Ubuntu wins on familiarity, stability, and years of support.

## What is Omarchy?

Omarchy is a Linux distribution created by **David Heinemeier Hansson**, better known as DHH: the creator of Ruby on Rails and co-founder of 37signals, the company behind Basecamp and HEY. Its website calls it "the malleable OS for the age of agents."

Under the hood, it's three pieces:

- **Arch Linux** as the base, with rolling releases: instead of waiting two years for a new version, the system keeps updating as you go.
- **Hyprland**, a tiling window manager: windows don't float, they arrange themselves to fill the screen.
- **Quickshell**, the toolkit the whole desktop has been built on since version 4.

The manual describes it as an *omakase* Linux, like the Japanese menu where the chef picks for you. Omarchy arrives with everything chosen: Neovim as the editor (with VS Code, Cursor, and Zed a click away), several terminals, Docker, Lazygit, mise for managing language versions, and stacks like Rails, Laravel, or Node.js you can install from its menu. It even ships Steam and 22 themes that restyle the terminal, bar, notifications, and wallpaper in one shot. It's free software, under the MIT license.

<figure>
<img src="/images/posts/omarchy/tiling.webp" alt="Omarchy desktop with four tiled windows filling the whole screen: a browser showing the Omarchy website, an empty terminal, a system monitor with CPU and memory usage, and the file manager" width="1400" height="788" loading="lazy" decoding="async">
<figcaption>Omarchy with four tiled windows: nothing overlaps, and there are no desktop icons. Image: <a href="https://github.com/omacom/omarchy">Omarchy manual</a>.</figcaption>
</figure>

## Why is it catching on so fast?

Omarchy came out in **June 2025** and, early on, shipped new versions almost every week. But the big leap came this year with **Omarchy 4.0 "Quattro,"** released on **August 14, 2026**, which rebuilt the entire desktop.

The numbers the project publishes (these are Omarchy's own figures, not audited) show how big this has gotten:

<figure>
<img src="/images/posts/omarchy/omarchy-17-months.webp" alt="Omarchy timeline: first release in June 2025, versions 2.0 and 3.0 between August and September 2025, the Framework flame war in October 2025, Omarchy 4.0 Quattro on August 14, 2026, the Omacom Foundation launch on August 21, 2026, 200,000 downloads in 18 days in September 2026, and a $100,000 bug bounty in October 2026. Alongside, figures published by Omarchy: 1,344,823 ISO downloads in year one, 46,199 GitHub stars, and 22 themes" width="1400" height="1030" loading="lazy" decoding="async">
<figcaption>Omarchy's milestones over 17 months, with the figures the project publishes. Original diagram with data from <a href="https://omarchy.org/">omarchy.org</a> and its <a href="https://omarchy.org/news/">news</a>, checked November 4, 2026.</figcaption>
</figure>

- **Downloads:** more than 1.3 million ISO downloads in its first year. Quattro passed 100,000 in one week and 200,000 in 18 days.
- **A foundation with real muscle:** in August 2026, the **Omacom Foundation** launched as a nonprofit to fund the project. Its backers include names like DigitalOcean, Alibaba Cloud, 1Password, and 37signals, and its website cites more than $23 million pledged (pledges, not money already delivered).
- **Well-known names on the team:** it hired the creator of Quickshell to lead the desktop, and ThePrimeagen, the well-known programming streamer, joined the core team to lead agent-driven testing.
- **Beyond regular PCs:** there are now teams dedicated to bringing it to Apple hardware (Omarchy M) and Snapdragon chips (Omarchy Dragon).

### What do developers see in it?

- **A lightning-fast install:** write the ISO to a USB stick, answer five questions, and on most machines you're in within two minutes.
- **Ready to code on day one:** no more burning an afternoon installing editors, Docker, and Node versions.
- **Everything from the keyboard:** open apps, move windows, or switch workspaces without touching the mouse. Once it clicks, it feels incredibly fast.
- **A safety net:** before every update, the system takes a full snapshot (minus your home folder) so you can roll back if something goes wrong. That takes the sting out of Arch's reputation for breaking on updates.
- **It looks great, and people show it off:** the themes and aesthetics are part of the appeal. That's why your feed is full of screenshots.
- **Built for the age of agents:** more on that in a minute, because it's a big deal if you're coming from Windows.

## The learning curve coming from Windows

Let's be honest: Omarchy looks nothing like Windows, and that's exactly the point. The manual has a chapter for people coming from Windows or Mac, and these are the biggest mental shifts:

<figure>
<img src="/images/posts/omarchy/windows-to-omarchy.webp" alt="Table of changes from Windows to Omarchy: instead of hunting for apps in the Start menu, you type their name after Super plus Space; instead of dragging windows, they tile themselves; instead of more monitors, you jump between workspaces with Super plus 1, 2, 3, or 4; instead of downloading installers, you install from the menu or with omarchy pkg add; instead of checkbox dialogs, you edit text files or ask your agent; and instead of restore points, there's an automatic snapshot before every update" width="1400" height="746" loading="lazy" decoding="async">
<figcaption>The six biggest mental shifts when moving from Windows to Omarchy. Original diagram based on the <a href="https://omarchy.org/manual/coming-from-mac-or-windows/">Omarchy manual</a>.</figcaption>
</figure>

The **Super** key is the Windows key, and almost everything starts with it. These are the shortcuts worth learning on day one:

| What you want to do | On Windows | On Omarchy |
| --- | --- | --- |
| Open apps or search | Start menu | `Super + Space` |
| Open the terminal | (you go find it) | `Super + Return` |
| Open the browser | (you go find it) | `Super + Shift + Return` |
| Close the app | `Alt + F4` | `Super + W` |
| Take a screenshot | `Win + Shift + S` | `Print Screen` |
| Clipboard history | `Win + V` | `Super + Ctrl + V` |
| See every shortcut | N/A | `Super + K` |

If you only memorize one, make it **`Super + K`**: it shows every shortcut whenever you forget one.

The hardest part at first is tiling. On Windows, you're used to overlapping windows you move around with the mouse; here, each window takes the whole screen, and when you open another one, the screen splits. The manual recommends giving tiling a real shot before turning on floating windows (`Super + T`), and figures that in about **two weeks** the shortcuts become second nature.

### How to make the move painless

- **Try it before you install it:** Omarchy has an option to run it in a virtual machine from Windows 10 or 11, without touching your drive.
- **Install it alongside Windows:** it supports dual boot, so you can pick which system to start while you get used to it.
- **Keep Windows around for the essentials:** Omarchy can set up a Windows 11 virtual machine for Office and work apps that only exist there, with a shared clipboard and folder. Just know there's no GPU acceleration, so it's not for gaming or heavy editing.

<figure>
<img src="/images/posts/omarchy/windows-vm.webp" alt="A Windows 11 virtual machine window running inside Omarchy, showing the new Outlook welcome screen and the Recycle Bin, Microsoft Edge, a shared folder, and Google Chrome icons on the Windows desktop" width="1400" height="934" loading="lazy" decoding="async">
<figcaption>The Windows 11 virtual machine running inside Omarchy, handy for Office and apps that don't exist on Linux. Image: <a href="https://omarchy.org/manual/windows-vm/">Omarchy manual</a>.</figcaption>
</figure>

## AI as your co-pilot for the switch

This is what makes Omarchy different in 2026, and it completely changes the conversation about the learning curve.

Switching to Linux used to mean hours on forums figuring out why your Wi-Fi didn't work or how to change a shortcut. Now you can have an AI agent right next to you that reads your config files, explains what everything does, and can even make the change for you.

Omarchy builds this into the system:

- **You pick your favorite agent on day one:** the first time you boot, it invites you to choose a default agent. It supports Claude Code, Codex, OpenCode, Pi, Hermes, and many more. If you're not sure what each one is, my [post on eve](/en/posts/vercel-eve/) explains what these agents are and how they differ.
- **You call it with a shortcut:** `Super + Shift + Ctrl + A` opens your agent in its own window, and `omarchy agent prompt "..."` hands it a task straight from the terminal.
- **Crash diagnosis:** when an app crashes, a notification pops up; click it and your agent analyzes the error for you.
- **It knows Omarchy:** the system installs a *skill* for your agent with instructions for tailoring Omarchy itself: shortcuts, themes, or settings.

### Hermes Agent: an assistant that remembers you

Personally, the assistant I use is **Hermes Agent**, from [Nous Research](https://x.com/NousResearch). It's open source under the MIT license, and its big selling point is that it **learns with you**: it keeps memory across sessions, creates *skills* from the problems it solves, and improves them as you use it. It works with whatever model you want (Nous Portal, OpenRouter, OpenAI, or your own endpoint), and you can talk to it from the terminal or from Telegram, Discord, Slack, or WhatsApp.

For a move from Windows, it has two very concrete advantages:

- **It runs natively on Windows**, so you can start using it before you switch and arrive on Linux with an assistant you already know.
- **Omarchy treats it as a first-class citizen:** if you pick it as your default agent, Omarchy installs Hermes Desktop, gives it the Omarchy theme, and if you ever remove it, asks before deleting your chats, memories, and skills.

A few things you can ask it in your first weeks:

- "What's the Omarchy equivalent of the Snipping Tool?"
- "Explain what this Hyprland config file does before you change anything."
- "I want `Super + E` to open the file manager, like on Windows."
- "My second monitor isn't showing up. Help me figure out why."

### One important tip

The Omarchy manual is upfront about it: agents you launch with its shortcuts run in **auto-approve mode**, meaning they make changes without asking. In its words: "be ready for them to actually do things!" So, especially at first, ask the agent to **explain first** and to use its planning mode before it touches anything. And if something goes sideways, you've got snapshots to roll back.

## Omarchy vs. Ubuntu Desktop

For a lot of people, Ubuntu is the gateway to Linux. Its current long-term support release is **Ubuntu 26.04 LTS "Resolute Raccoon,"** released on **April 23, 2026**, with GNOME 50 and Linux kernel 7.0. Here's how they compare:

<figure>
<img src="/images/posts/omarchy/omarchy-vs-ubuntu-en.webp" alt="Comparison of Omarchy and Ubuntu Desktop 26.04 LTS. Omarchy: Arch Linux base with rolling releases, keyboard-first Hyprland tiling desktop, about 2-minute install with 5 questions, all set for coding, agents built into the system, a snapshot before every update, and backing from DHH, the community, and the Omacom Foundation. Ubuntu: LTS base with a new release every 2 years, GNOME 50 desktop with floating windows and mouse, traditional graphical installer, a coding setup you build yourself, AI based on whatever you install, APT history with undo, and backing from Canonical with 5 years of support, up to 15 with Pro" width="1400" height="788" loading="lazy" decoding="async">
<figcaption>Omarchy and Ubuntu Desktop, side by side. Original diagram with data from <a href="https://omarchy.org/">omarchy.org</a>, <a href="https://ubuntu.com/about/release-cycle">ubuntu.com</a>, and each release's notes.</figcaption>
</figure>

### Where Omarchy wins

- **A ready-made dev setup:** what takes an afternoon to configure on Ubuntu comes preinstalled here.
- **Speed of use:** once the shortcuts are in your fingers, opening, moving, and organizing everything is way faster.
- **Always up-to-date software:** since it's Arch, you get new versions of your apps as soon as they ship.
- **Built-in AI agents:** you can install the same agents on Ubuntu, but on Omarchy they're part of the system, with shortcuts, skills, and crash diagnosis.
- **Automatic snapshots:** every update gets its own restore point, without you having to remember.

### Where Ubuntu wins

- **It feels familiar:** GNOME uses floating windows, the mouse, and a dock. For someone coming from Windows, the curve is much gentler.
- **Stability and long support:** every LTS release gets **5 years** of security updates. With Ubuntu Pro, free for personal use on up to five machines, you get **10**, and with an extra add-on, up to **15**.
- **A company behind it:** Canonical maintains it and certifies it on a huge range of hardware, which matters if you use it for work.
- **A massive community:** when you search for how to fix something on Linux, odds are the answer was written with Ubuntu in mind.
- **Its own safety nets:** APT 3.2 adds transaction history with undo, and the installer now does TPM-backed disk encryption.

### What if I want the best of both?

There's a middle path: DHH also has **Omakub**, a sibling project to Omarchy built on Ubuntu. And if tiling is what draws you in but you want something more traditional, The Register recommends Pop!_OS as a clean, fast alternative with tiling by default.

## ☕ The Tea: security and controversy

Omarchy is growing fast, but not quietly. Here's what matters, with dates and sources. As always: what follows are third-party criticisms and allegations, not proven facts.

**The security criticism.** Several voices question Omarchy's defaults. In August 2026, The Register quoted a critic whose analysis opened with a blunt warning: don't use Omarchy if you care about your machine's security even a little. In September, The CyberSec Guru pointed out, for example, that the default user is added to the `docker` group, which in practice opens a path to root. Back in 2025, a thread on the Framework forum asked for Omarchy to be removed from its install options for similar reasons. On the project's side, Omarchy has a security team, shipped a security update (4.0.1) in late August, and launched a **$100,000 bug bounty** on HackerOne in October.

**The Framework controversy (2025).** In October 2025, Framework, the repairable-laptop maker, sponsored Hyprland and promoted Omarchy. According to The Register, developers like Debian's Antoine Beaupré criticized the move over DHH's public views and the history of the Hyprland community. Framework founder Nirav Patel replied that the company doesn't choose partners based on their political views.

**The sponsor backlash (2026).** On **July 21, 2026**, DHH published the essay [Wolves, sheep, and gypsies](https://world.hey.com/dhh/wolves-sheep-and-gypsies-ba44af6a) on his blog, arguing for culling Denmark's wolves and deporting Roma people camping in Copenhagen. In September, when 1Password became a foundation sponsor with $300,000, The Verge reported on the wave of criticism from its own customers and described DHH as someone who has posted "strident anti-vax and anti-immigrant views." 1Password CEO David Faugno told staff the company does not endorse "hateful, dehumanizing, or exclusionary views," including those DHH has shared publicly, and that the donation is not an endorsement of his personal views.

My take: whether to separate the tool from its creator is a personal call, and everyone draws that line in a different place. What does apply to everyone is reviewing the security defaults before you use Omarchy for serious work, same as with any system.

## So which one should you pick?

**Try Omarchy if…**

- You code every day and want a ready, fast, good-looking setup without spending hours configuring it.
- The idea of driving everything from the keyboard excites you, and you're willing to give it a couple of weeks.
- You want a system where AI agents are part of your daily workflow, not just another app.

**Start with Ubuntu if…**

- It's your first time with Linux and you want something that feels familiar.
- You use it for work and value stability and years of support over having the latest everything.
- You prefer the mouse and floating windows, at least for now.

And if you're coming from Windows and already work with an agent like Hermes, the curve flattens out a lot: you're not alone at the terminal, you've got someone explaining every step. Just have it explain before it acts.

Would you give it a shot?

## Sources

- [Omarchy: official site](https://omarchy.org/) (checked November 4, 2026) and [news](https://omarchy.org/news/)
- Omarchy manual: [coming from Mac or Windows](https://omarchy.org/manual/coming-from-mac-or-windows/), [hotkeys](https://omarchy.org/manual/hotkeys/), [AI](https://omarchy.org/manual/ai/), and [Windows VM](https://omarchy.org/manual/windows-vm/)
- [Omarchy repository on GitHub](https://github.com/omacom/omarchy)
- [Omarchy: the Omacom Foundation launches](https://omarchy.org/news/2026/08/omacom-foundation-launches-with-8-million/) (August 21, 2026)
- [Hermes Agent on GitHub](https://github.com/NousResearch/hermes-agent)
- [How-To Geek: I tried the viral Linux distro that raised millions](https://www.howtogeek.com/i-tried-the-viral-linux-distro-that-raised-millions/) (September 20, 2026)
- [The Register: Omarchy distro gains serious backing](https://www.theregister.com/os-platforms/2026/08/27/omarchy-distro-gains-serious-backing/5293026) (August 27, 2026)
- [The Register: Framework flame war erupts over Linux controversy](https://www.theregister.com/software/2025/10/14/framework-flame-war-erupts-over-linux-controversy/1466815) (October 14, 2025)
- [The CyberSec Guru: Omarchy's security holes and the boycott](https://thecybersecguru.com/analysis/omarchy-linux-security-flaws-dhh-boycott/) (September 14, 2026)
- [Slashdot: 1Password wades into a right-wing mess after funding a Linux project](https://tech.slashdot.org/story/26/09/02/2055245/), summarizing The Verge (September 2, 2026)
- [DHH: Wolves, sheep, and gypsies](https://world.hey.com/dhh/wolves-sheep-and-gypsies-ba44af6a) (July 21, 2026)
- [It's FOSS: what's new in Ubuntu 26.04 LTS](https://itsfoss.com/ubuntu-26-04-release-features)
- [Ubuntu: release cycle](https://ubuntu.com/about/release-cycle)
