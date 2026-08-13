---
title: A Python-flavored language for chips of every kind reaches version 1.0
kicker: Open Source
author: The Editors
summary: Three years after Chris Lattner set out to fix AI's fragmented tooling, Mojo hit a stability milestone that lets developers finally build on it without fear of the ground shifting.
lead: true
order: 1
---

Programming languages rarely announce themselves as finished. Most stay in
permanent beta, adding syntax and shedding it, asking developers to accept
that the ground might move under a project at any point. On August 11,
Modular said Mojo was done moving. Version 1.0 shipped as part of the
company's "Modular 26.5" release, with a promise that mattered more than
any single feature: from here on, changes to the language are "primarily
additive," and the kind of breaking change that forces a rewrite will be
handled the way mature languages like C++ handle it — carefully, rarely,
and with warning
([Modular](https://www.modular.com/blog/modular-26-5-mojo-1-0-is-here);
[The Register](https://www.theregister.com/ai-and-ml/2026/08/12/modulars-mojo-programming-language-hits-10-milestone/5286545)).

Mojo has been building toward this since 2023, when Chris Lattner — who
built the Swift language at Apple and the LLVM and MLIR compiler
infrastructure that much of the industry now runs on — set out with
co-founder Tim Davis to close a gap that had been quietly costing AI
developers time and money. Python is where machine learning research
happens, but it was never built for speed; the performance-critical parts
of AI systems get written in C++ or CUDA instead, in a separate codebase,
by a separate team, targeting whichever chip a given lab happens to be
using. Mojo's pitch is to collapse that split: syntax that reads like
Python, memory safety borrowed from Rust's ownership model, and a compiler
built on MLIR that can target CPUs, GPUs, TPUs, and other AI accelerators
from the same source code, without the vendor lock-in that comes from
writing straight to Nvidia's CUDA
([Modular](https://www.modular.com/blog/modular-26-5-mojo-1-0-is-here)).

Version 1.0 brings the usual polish of a language settling down — Python-
style lambda syntax for inline closures, a more stable language-server
integration for code editors, sharper memory-safety diagnostics that catch
reference invalidation before it becomes a bug, and a cleaned-up standard
library vocabulary. None of that is as important as what it signals:
nearly 200 outside contributors have landed more than 1,100 pull requests
against Mojo's open-sourced standard library, touching over 200,000 lines
of code, and Modular has now committed to open-sourcing the compiler and
toolchain itself later this year
([Modular](https://www.modular.com/blog/modular-26-5-mojo-1-0-is-here)).

The timing has its own small drama. Qualcomm completed its roughly
$3.9 billion all-stock acquisition of Modular on July 29 — just under two
weeks before Mojo's 1.0 release — and installed Lattner as an executive
vice president overseeing its advanced AI software. Qualcomm framed the
deal as a way to offer chipmakers and cloud providers an alternative to
Nvidia's CUDA ecosystem; Modular said Mojo, along with its MAX inference
platform and Modular Cloud, would continue as products with Qualcomm's
backing rather than be folded away
([Modular](https://www.modular.com/blog/qualcomm-completes-acquisition-of-modular);
[How2Shout](https://www.how2shout.com/news/mojo-1-0-release-modular-qualcomm.html)).

It would have been easy, after an acquisition like that, for a young
language to quietly stall while its new corporate parent figured out what
to do with it. Instead Mojo shipped its stability guarantee on schedule,
with a bigger company now standing behind the promise that the code
written against it today will still compile tomorrow. For the developers
who spend their days translating research code into production systems,
that is the unglamorous kind of progress that actually gets used.
