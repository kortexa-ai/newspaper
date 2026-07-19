---
title: One developer is out-shipping most startups on a coding-agent GUI
kicker: Open Source
author: The Editors
summary: Juggler, a solo-built open-source alternative to command-line coding agents, has pushed a new release almost every day since launch.
order: 2
---

Most open-source projects settle into a release cadence measured in
weeks. Juggler, a GUI coding agent built and maintained largely by one
developer, GitHub user Julian Storer, has been shipping updates roughly
once a day since it launched on Hacker News on July 12
([Show HN](https://news.ycombinator.com/item?id=48883305), 278 points).

The pitch is a visual alternative to the terminal-based coding agents
that have become popular over the past two years: a proper desktop app,
tree-structured sessions that let a user branch a conversation instead
of scrolling back through a single linear transcript, and inspectable
tool calls so it's clear what the agent actually did before it does it.
It talks to Claude, OpenAI, Gemini, and other model providers rather
than locking users into one.

The pace since launch has been the real story. Release
[v0.4.0](https://github.com/juggler-ai/juggler/releases) on July 16
added per-model thinking-level controls and Agent Skills discovery;
v0.4.1 on July 17 added a Skills marketplace for pulling in agent
skills from GitHub registries, along with tighter write-approval
sandboxing; v0.4.2 on July 18 added support for Moonshot's Kimi models,
GitHub Copilot, and local llama.cpp models. The core application ships
under the AGPL-3.0 license, with its extension SDK and bundled
extensions under Apache-2.0 — a licensing choice that keeps the project
open while asking anyone who builds a hosted service on top of it to
share their changes back.

It's a reminder of what one committed person with a clear idea can
still do in public, release notes stacking up daily while the rest of
the field ships on quarterly roadmaps.
