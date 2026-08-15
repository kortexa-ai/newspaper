---
title: Alibaba gave away a model that beats its own bigger one, weights and all
kicker: Open Source
author: The Editors
summary: Qwen3.8-27B is small enough to run on local hardware, reads documents and hours of video, and outperforms Alibaba's larger Qwen3.7-Plus on coding and office tasks — under a license anyone can build on.
order: 2
---

Alibaba's Qwen team released open weights for Qwen3.8-27B on August 14,
a 27-billion-parameter multimodal model that the company says
outperforms its own considerably larger Qwen3.7-Plus on coding and
office-task benchmarks. It handles up to 262,000 tokens of context
natively, stretching to a million with the YaRN scaling method, and
reads across text, images, diagrams, documents, and multi-hour video —
not just describing what's in a frame, but following it over time
([the-decoder.com](https://the-decoder.com/alibabas-qwen-team-releases-qwen-3-8-models-with-open-weights-under-the-apache-2-0-license/)).

The weights are released under the Apache 2.0 license, which permits
commercial use, modification, and redistribution without the
restrictions that have shadowed some other "open" model releases.
Alongside the 27B model, Alibaba also opened weights for a much larger
sibling, Qwen3.8-2.4T-A95B, aimed at heavier agentic workloads, giving
developers a real choice between something that runs comfortably on
local hardware and something built for frontier-scale work. Both are
available now on Hugging Face and ModelScope.

The notable part isn't the parameter count — plenty of labs ship
27-billion-parameter models — it's that a model this size beats a
larger, presumably more expensive one from the same company, and that
Alibaba handed the whole thing over rather than keeping it behind an
API. That's a trend worth naming: open-weight models are no longer the
budget alternative to proprietary ones. Increasingly, they're just the
better deal.
