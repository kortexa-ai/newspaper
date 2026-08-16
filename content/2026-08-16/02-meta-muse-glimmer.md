---
title: Meta open-sourced a 30-billion-parameter AI model that fits on one gaming GPU
kicker: Open Source
author: The Editors
summary: Muse Glimmer ships under a no-strings Apache 2.0 license, runs locally on a single consumer graphics card, and marks a reversal from Meta's more restrictive recent stance on releasing its models at all.
order: 2
---

Meta released Muse Glimmer on August 10, a 29.6-billion-parameter model
aimed at running agent tasks — scheduling, file organization, coding,
multi-step tool use — locally, on hardware a serious hobbyist might already
own. Compressed to under 20 gigabytes, it fits on a single consumer GPU
with 24 to 32 gigabytes of memory, no data center required
([Engadget](https://www.engadget.com/2233312/metas-open-source-muse-glimmer-model-can-run-on-a-single-computer/);
[Implicator.ai](https://www.implicator.ai/meta-releases-30b-open-weight-muse-glimmer-and-promises-spark-1-2-weights/)).

The license is the real news. Glimmer ships under Apache 2.0, dropping the
monthly-active-user cutoff that shadowed Meta's Llama community license and
made some companies' lawyers nervous about deploying it commercially. Meta
says an open-weight version of its flagship Muse Spark 1.2 model is coming
too. That's a notable about-face: in May, Meta's chief AI officer,
Alexandr Wang, said Spark had "triggered checks for biological, chemical,
cyber and loss-of-control risks" and called it unsuitable for open release.
Whatever changed internally, Mark Zuckerberg framed the reversal as a bet
against consolidation: "Rather than centralizing superintelligence, we
should distribute it widely and give every person the ability to direct
it."

On Meta's own benchmark, MCP-Atlas, Glimmer scored 75.5 against 62.5 for
Alibaba's similarly sized Qwen3.6-27B — though independent throughput
numbers have come in well below Meta's own, and the fine print matters: full
precision still needs 55 gigabytes or more, so the "runs on your laptop"
pitch really means a well-equipped desktop, not the 8- or 16-gigabyte
machine most people carry around. Training data and code remain
proprietary. Still, a serious open-weight model that a single graphics card
can actually run is a real lowering of the floor for who gets to build with
frontier-adjacent AI.
