---
title: Qualcomm bought an AI language for $3.9 billion, then gave it away
kicker: Open Source
author: The Editors
summary: Three weeks after closing its acquisition of Modular, Qualcomm open-sourced the Mojo compiler and its MAX AI platform, betting openness beats a walled garden.
lead: true
order: 1
---

Companies that pay billions for software usually protect it. Qualcomm did
the opposite. On August 19, at Modular's first developer conference as a
Qualcomm company, the chipmaker released the full source code for Mojo — the
programming language built to free AI software from Nvidia's grip — under
the Apache 2.0 license
([Linuxiac](https://linuxiac.com/mojo-programming-language-goes-fully-open-source/),
[Modular](https://www.modular.com/blog/mojo-open-source)). The compiler,
the developer tooling, and the MAX inference platform that runs on top of
it are now public, three weeks after Qualcomm closed an all-stock deal for
Modular that industry trackers valued at roughly $3.9 billion
([Hardware Busters](https://hwbusters.com/news/qualcomm-open-sourced-the-mojo-compiler-three-weeks-after-paying-3-9-billion-for-it/),
[Unite.AI](https://www.unite.ai/qualcomm-closes-all-stock-acquisition-of-compiler-startup-modular/)).

Mojo is the work of Chris Lattner, who wrote the LLVM compiler framework
and co-created Apple's Swift language before founding Modular in 2022. The
pitch is straightforward: most AI software today is written to run best on
Nvidia's chips, using Nvidia's CUDA toolkit, which makes switching hardware
expensive and slow. Mojo reads like Python but compiles down with the
memory safety and low-level control of Rust, letting the same code target
GPUs, CPUs, and custom AI chips without a rewrite. As Lattner put it, "the
world has moved on and CUDA hasn't"
([The Register](https://www.theregister.com/ai-and-ml/2026/08/12/modulars-mojo-programming-language-hits-10-milestone/5286545)).

The language hit its stable 1.0 release on August 12, after four years of
public development in which Modular's standard library, but not its
compiler, was already open source. Qualcomm's decision to open the rest of
it barely a week later, and only weeks after paying for the whole company,
is the part worth noticing. Qualcomm's chief executive, Cristiano Amon,
framed it as strategy rather than generosity: "We're enabling a new and
open approach to AI software development, enabling AI to run efficiently
across any hardware while maximizing performance"
([Unite.AI](https://www.unite.ai/qualcomm-closes-all-stock-acquisition-of-compiler-startup-modular/)).
Qualcomm is chasing $40 billion in revenue outside its core phone-chip
business by 2029, much of it from data centers where Nvidia's CUDA
ecosystem is the thing every challenger has to get around. Giving away the
tool that helps AI code run on anyone's silicon, including Qualcomm's,
is a bet that an open standard beats a proprietary one when you're not
the incumbent.

It's a bet with an obvious conflict of interest built in — Mojo now belongs
to a chip company with its own hardware to sell. Lattner has waved off the
concern by pointing out that Nvidia and AMD already contribute heavily to
open source projects without compromising them
([The Register](https://www.theregister.com/ai-and-ml/2026/08/12/modulars-mojo-programming-language-hits-10-milestone/5286545)).
For now, outside developers can read every line of the compiler but can't
yet submit changes to it; Modular says it plans to open that door by the
end of the year, the way it already has for Mojo's standard library since
2024. Whether Mojo becomes genuine shared infrastructure or stays a
Qualcomm project with the blinds up will depend on what happens when that
door actually opens.
