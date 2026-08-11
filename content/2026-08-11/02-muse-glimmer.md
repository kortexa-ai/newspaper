---
title: Meta open-sources a 30-billion-parameter AI model built for one GPU
kicker: AI
author: The Editors
summary: Muse Glimmer, released under a fully open Apache 2.0 license, is small enough to run locally on a single consumer graphics card while still handling the multi-step, tool-using tasks usually reserved for cloud-only models.
order: 2
---

On August 10, Meta released Muse Glimmer, a 30-billion-parameter model
built by Meta Superintelligence Labs specifically for local, always-on
agent work — the kind of multi-step planning, tool-calling, and
error-recovery that AI agents need to actually finish a task rather than
just describe how they'd do it
([Meta AI Research](https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model)).

What stands out is where it can run. Quantized to 4-bit precision, Muse
Glimmer fits in under 20 gigabytes of memory, comfortably inside a single
24- or 32-gigabyte consumer GPU — no data center, no subscription, no
cloud API call required. The model handles both text and images, was
trained across more than 100 languages, and ships with speculative
decoding that Meta says speeds up generation by 1.5 to 3.1 times depending
on hardware. The weights are released under the Apache 2.0 license, a
genuinely permissive open-source terms with none of the usage restrictions
that shipped with some of Meta's earlier Llama releases, and are available
now on Hugging Face, with integrations for llama.cpp, MLX, and ExecuTorch
on the way.

On benchmarks for agentic reasoning, coding, and multimodal tasks, Meta
reports Muse Glimmer outperforming similarly sized open models including
Gemma4-31B and Qwen3.6-27B. It's a smaller, more specialized sibling to
Meta's proprietary Muse Spark model, distilled down to a size that fits on
hardware an individual developer might already own — one more sign that
capable, agentic-grade AI is drifting away from being something only a
handful of companies can run.
