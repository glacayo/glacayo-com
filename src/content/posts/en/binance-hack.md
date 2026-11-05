---
title: "How a Fake “Coding Test” Led to the $6.3 Billion Binance Heist"
description: On October 29, 2026, Binance suffered the largest crypto theft in history. Here's how a fake job interview and an Ethereum feature called EIP-7702 came together, who's behind it, and what you should take away if you're a developer.
date: 2026-11-05T11:00:00Z
category: security
translationKey: binance-hack
---

Picture this: a recruiter reaches out on a well-known job platform. The company looks legit, the interview goes well, and at the end they send you a take-home coding test. You download it, install it, and start coding. Nothing out of the ordinary.

According to Binance itself, that's how one of the key pieces of the **largest crypto theft in history** got started. On October 29, 2026, roughly **$6.3 billion** left its hot wallets in a matter of hours.

The most interesting part isn't the number. It's the how. There was no Ethereum bug and no private key stolen the old-fashioned way. It was a months-long campaign that paired classic social engineering with a fairly new Ethereum feature: **EIP-7702**.

> **The short answer:** according to [Binance](https://x.com/binance)'s initial findings, the attacker compromised several engineers between June and October, including through a fake job interview. That got them to the service that signs Binance's wallet transactions. On Ethereum, they used EIP-7702 to make a Binance wallet run their code for almost four hours. The [FBI](https://x.com/FBI) attributes the theft to TraderTraitor, a North Korean group. Binance says it covered the losses with its own funds and that no users lost money.

## A theft without precedent

The numbers vary a bit depending on who's counting: Binance puts it at about **$6.34 billion**, [Chainalysis](https://x.com/chainalysis) at $6.4 billion, and [Elliptic](https://x.com/elliptic) at $6.43 billion. Any of them is more than four times the previous record, the $1.5 billion stolen from Bybit in February 2025.

<figure>
<img src="/images/posts/binance-hack/by-blockchain.webp" alt="Bar chart of what was stolen from Binance by blockchain: Ethereum about $3.8 billion, Bitcoin about $1.48 billion, Tron about $613 million, XRP about $296 million, and Solana about $96 million. The estimated total ranges from $6.34 billion per Binance to $6.43 billion per Elliptic, and about $2.85 billion was frozen" width="1400" height="595" loading="lazy" decoding="async">
<figcaption>What was stolen on the main blockchains, in approximate US dollars. Original diagram with data from <a href="https://www.elliptic.co/insights/binance-largest-hack-in-history/">Elliptic</a> and reports compiled on <a href="https://en.wikipedia.org/wiki/2026_Binance_hack">Wikipedia</a>.</figcaption>
</figure>

According to Elliptic, the attack hit **11 blockchains** in about three hours. Ethereum took the worst of it, with about $3.8 billion spread across 186 tokens, and 18,270 BTC left on Bitcoin.

The silver lining: stablecoin issuers like Tether and Circle moved fast. As of November 3, Binance estimated about **$2.85 billion frozen or intercepted**, nearly all of it stablecoins. What left on Bitcoin, XRP, or Solana can't be frozen, because those coins have no issuer that can block them.

## The attack took months, not hours

Binance published its initial findings on **November 3**, and the first thing they make clear is that this wasn't a one-day hack. In its words, it was "a sophisticated, multi-stage campaign."

<figure>
<img src="/images/posts/binance-hack/campaign.webp" alt="Timeline of the campaign against Binance: in June 2026, an engineer downloads a tampered Homebrew installer while setting up an AI coding tool; in September, another engineer gets a fake coding assignment that swaps a pyenv binary for a malicious one; on October 20, using an internal AI tool, the attackers reach two more engineers and one has a container deployment token; on October 29 at 17:15 UTC they deploy a malicious container and reach the signing service; at 20:05 UTC the draining starts; and on October 30 at 00:10 UTC Binance clears the delegation from its Binance14 wallet" width="1400" height="869" loading="lazy" decoding="async">
<figcaption>The campaign, step by step. Original diagram based on Binance's initial findings, as reported by <a href="https://www.gncrypto.news/news/binance-traces-6-34b-hack-six-month-cyber-campaign/">GNcrypto</a> and <a href="https://www.tokenpost.com/news/technology/48454">TokenPost</a>.</figcaption>
</figure>

### June: the tampered installer

An engineer was looking for an AI coding tool, found one through a search engine, and while setting it up, downloaded a **tampered Homebrew installer**. Binance spotted unusual activity, replaced the engineer's device, and rotated their credentials. But by then, the attacker had already learned what that engineer did and who their teammates were on the wallet infrastructure team.

### September: the fake job interview

This is where the story from the top comes in. Someone posing as a project director reached out to another engineer through a legitimate job-hunting platform. There was an interview with people supposedly working at a company that didn't exist and, at the end, the infamous **coding test**.

The engineer downloaded it onto their work computer. During installation, code hidden in the repository swapped a legitimate **pyenv** file, the tool for managing Python versions, for a malicious version just 70 bytes larger. That let the attacker run commands and connect to their own server. Worst of all: **the corporate endpoint protection didn't catch it**.

### October 20: jumping to other engineers

From that compromised computer, and with help from an **internal AI tool** at Binance, the attacker reached two more engineers. One of their machines held a **container deployment token**, and that token opened the door to the service that signs wallet transactions.

### October 29: the strike

At **17:15 UTC**, the attacker logged into that computer, used stolen credentials, deployed a container, and ran a malicious script. At **20:05 UTC**, funds started leaving: first about 233 million XRP from five hot wallets, then SOL, OP, and 18,270 BTC. Binance got an internal alert, suspended withdrawals, and started coordinating with other companies to freeze funds.

But on Ethereum, the money kept flowing. To understand why, we need to talk about EIP-7702.

## The technical part: EIP-7702

**EIP-7702** is an Ethereum improvement that shipped with the Pectra upgrade on **May 7, 2025**. It lets a regular wallet (what Ethereum calls an EOA) temporarily run a smart contract's code without changing its address. It was built for useful things: bundling several actions into one transaction, or letting another account pay the fees.

The catch is how it's switched on: the wallet's owner signs an **authorization** that points the wallet at a contract. From that moment, the wallet runs that code, and the delegation lasts until someone clears it.

<figure>
<img src="/images/posts/binance-hack/eip-7702-en.webp" alt="EIP-7702 in three steps: first, a regular wallet only moves funds when its owner signs each transaction; second, with EIP-7702 the owner signs an authorization that points the wallet at a contract, and the delegation lasts until it's cleared; third, at Binance the signing service signed authorizations pointing to the attacker's contract, the Binance14 wallet turned into a sweeper the attacker controlled, and the delegation stayed active outside the withdrawal system" width="1400" height="578" loading="lazy" decoding="async">
<figcaption>How EIP-7702 works and how it was used against Binance. Original diagram based on <a href="https://decrypt.co/resources/what-is-eip-7702-the-ethereum-upgrade-behind-the-6-4b-binance-hack">Decrypt</a>, TRM Labs, and Binance's findings.</figcaption>
</figure>

With access to the signing service, the attacker didn't need to steal any private key: they got **Binance's own system to sign** the authorizations. According to [TRM Labs](https://x.com/trmlabs), they prepared **50 authorizations signed in advance** and submitted them from a wallet funded through Tornado Cash. Binance says those 50 signatures were used to manipulate the account's transaction counter (its *nonce*) and keep the delegation active.

The result: the **Binance14** hot wallet turned into a sweeper the attacker controlled. And because that delegation lived on-chain, outside the normal withdrawal system, suspending withdrawals didn't stop it. To make matters worse, the wallet used multi-party computation (MPC), so there was no single private key to revoke.

The last transfer went out at **23:56 UTC**, and Binance managed to clear the delegated code at **00:10 UTC on October 30**: about four hours after the first outflow.

On the other blockchains (Bitcoin, Tron, XRP, Solana, and the rest), no trick was needed: with access to the signing service, the attacker could simply send transfers that looked perfectly valid.

One important nuance: **this wasn't an Ethereum bug**. An EIP-7702 delegation requires a valid signature from the wallet itself. The problem was that the attacker controlled who was signing. EIP-7702 just gave them a way to hold on longer.

## Who's behind it?

Binance didn't blame any group at first, but blockchain analytics firms were quick to. On October 30, TRM Labs attributed the attack "with high confidence" to **TraderTraitor**, a North Korean hacking unit considered part of the notorious **Lazarus Group**. Chainalysis CEO Jonathan Levin agreed it was "likely" TraderTraitor, citing links to earlier thefts.

What gave them away? Among other things, investigator [ZachXBT](https://x.com/zachxbt) spotted Binance funds landing at the same address as funds stolen weeks earlier from Bitget, a theft already attributed to the group.

On **October 31**, the FBI made it official: it attributed the theft to North Korea and TraderTraitor, the same group it blames for the Bybit hack. It published linked addresses and asked exchanges to block any related transactions.

And the fake-interview playbook isn't new for them. In the theft of more than $300 million from DMM Bitcoin in 2024, an attacker posing as a recruiter sent a malicious coding test to an employee at Ginco, the company's wallet provider. Binance itself says it stopped **57 threats** this year that it suspects are linked to North Korea, including fake interviews, malicious developer tools, and compromised software packages.

## What about users?

Binance says no users lost money. It said it would absorb the hit with its own funds: its SAFU protection fund, part of its futures insurance fund, its Bitcoin reserve, and its corporate treasury. As of **November 3**, it reported replenishing **98%** of the affected assets, and it published a proof of reserves so every user could verify their funds are backed.

Withdrawals reopened on November 1, starting with Ethereum, USDT, and USDC. Meanwhile, according to Chainalysis and Elliptic, the attacker is moving the funds in automated patterns: thousands of transactions in a short span, randomized amounts, and money bouncing back and forth across hundreds of addresses.

## What developers should take away

This story isn't just for exchanges. Almost all of it started on a developer's computer, so there are lessons for anyone who writes code:

- **Job offers can be attacks too.** If someone sends you a coding test, open it in a virtual machine or a throwaway container, **never on your work computer**. And be wary of any project that asks you to run an installer or a script before you've read the code.
- **Only download tools from their official site.** The first step of this campaign was a tampered installer found through a search engine. Before you paste that install command, double-check you're on the right domain.
- **Endpoint protection won't save you from everything.** The coding-test malware got through without a single alert. The best defense is never running it on a machine with access to anything important.
- **Tokens are keys.** A single container deployment token sitting on a laptop was the bridge to the signing service. Give tokens the shortest life and the smallest permissions you can, and never leave them lying around on your machine.
- **Internal AI tools are attack surface too.** The attacker leaned on one to reach other engineers. If your company connects agents or assistants to internal systems, they deserve the same access controls as any other tool.
- **Never sign an EIP-7702 authorization you don't understand.** If you use Ethereum wallets, a delegation gives the contract full control over your funds. The spec itself warns that apps should never ask you to sign one.

## Sources

- [Wikipedia: 2026 Binance hack](https://en.wikipedia.org/wiki/2026_Binance_hack)
- [GNcrypto: Binance traces the theft to a six-month campaign](https://www.gncrypto.news/news/binance-traces-6-34b-hack-six-month-cyber-campaign/), covering Binance's initial findings from November 3, 2026
- [TokenPost: Binance links a fake job interview to the theft](https://www.tokenpost.com/news/technology/48454) (November 4, 2026)
- [BleepingComputer: Binance links the theft to a compromised DevOps laptop](https://www.bleepingcomputer.com/news/security/binance-links-63-billion-crypto-theft-to-compromised-devops-laptop/) (October 30, 2026)
- [Chainalysis: Binance exploit latest findings and response](https://chainalysis.com/blog/binance-exploit-latest-findings-and-response/) (October 30, 2026)
- [Elliptic: the largest hack in history](https://www.elliptic.co/insights/binance-largest-hack-in-history/)
- [Cointelegraph: crypto investigators link North Korea to the theft](https://cointelegraph.com/news/north-korea-linked-to-63b-binance-hack-by-crypto-investigators) (October 30, 2026)
- [Al Jazeera: FBI blames North Korea](https://aljazeera.com/news/2026/11/1/fbi-blames-north-korea-for-record-6-3bn-crypto-heist) (November 1, 2026)
- [Decrypt: what is EIP-7702](https://decrypt.co/resources/what-is-eip-7702-the-ethereum-upgrade-behind-the-6-4b-binance-hack) (October 30, 2026)
