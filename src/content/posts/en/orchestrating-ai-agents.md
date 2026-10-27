---
title: Orchestrating AI agents without losing control of the context
description: How I split a large workflow into subagents with persistent memory, which limits I set and what broke along the way.
date: 2026-10-24
category: agents
translationKey: orchestrating-ai-agents
sample: true
---

When an AI agent has to read twenty files, write five and run the tests, the problem is not the model's intelligence: it is the **context**. Every read takes space, and at some point the agent forgets what it decided at the start.

The approach that worked for me was treating the main agent as a **coordinator** and delegating the heavy lifting to subagents with bounded tasks.

## The coordinator / executor pattern

The coordinator keeps a short thread: it understands the task, splits it and synthesizes results. Executors receive a self-contained brief and return a short report.

- The coordinator does **not** read files to explore; it asks for a map.
- Every executor gets an explicit list of paths it may edit.
- Results come back summarized, never as full dumps.

> If a subagent needs the whole conversation history to work, the task was not well defined.

## Persistent memory across sessions

What helped most was storing decisions in an external memory instead of trusting the context window. A minimal record looks like this:

```ts
interface Observation {
  title: string;
  type: 'decision' | 'bugfix' | 'discovery';
  what: string;
  why: string;
  where: string[];
}

export async function remember(obs: Observation): Promise<void> {
  await memory.save({ ...obs, savedAt: new Date().toISOString() });
}
```

When a new session starts, the agent searches that memory first and only then explores the repository.

## Limits worth setting

| Limit | Value I use | Reason |
| --- | --- | --- |
| Files read inline | 3 | More than that is exploration: delegate it |
| Parallel writers | 1 | Avoids conflicts in the same tree |
| Correction rounds | 1 | Forces a better task definition |

## What broke

The first attempt failed because I asked a single subagent to build an entire site. It ran out of budget halfway and returned nothing. Splitting the work into smaller units fixed it:

```bash
# Bad: one giant task
agent run worker "build the whole blog"

# Better: units with a verifiable deliverable
agent run worker "site foundation and static pages"
agent run worker "interactive features"
```

The lesson is the same as in any human team: **a well-defined task is worth more than a bigger model**.
