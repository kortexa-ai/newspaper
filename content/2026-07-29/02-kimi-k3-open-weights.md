---
title: Moonshot AI opens up a 2.8-trillion-parameter model
kicker: AI
author: The Editors
summary: Kimi K3's full weights are now downloadable and self-hostable, not just reachable through an API — putting a frontier-scale model in the hands of anyone with the hardware to run it.
order: 2
---

On July 27, Chinese lab Moonshot AI published the full weights for Kimi
K3, a mixture-of-experts language model with 2.8 trillion total
parameters, on Hugging Face
([model card: moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)).
The model had been available through an API since mid-July; this
release lets anyone with sufficient hardware download it, inspect it,
fine-tune it, and run it themselves, under a permissive custom license
the company calls the Kimi K3 License.

Only a fraction of that parameter count runs at any given moment: K3
selects 16 of 896 experts per token, activating about 104 billion
parameters — the mixture-of-experts design that keeps inference
tractable despite the model's overall size. It supports a context
window of just over one million tokens and understands both text and
images natively. Hosting providers Together AI and Modal had day-zero
access ready alongside the weights release, and outlets covering the
release, including AI researcher Nathan Lambert's newsletter, have
called it the strongest open-weight model released to date
([Interconnects](https://www.interconnects.ai/p/kimi-k3-the-open-weights-escalation)) —
a ranking claim worth taking as informed opinion rather than a settled
fact, but the underlying numbers are Moonshot's own and independently
listed on the model card.

The release lands in the same week as DeepSeek's stable V4, making late
July an unusually dense stretch for open-weight models operating near
the frontier. What makes it a Daybreak story isn't the size by itself —
big numbers alone are not news here — but the choice: a lab capable of
selling access to a model this capable instead handed over the weights,
letting researchers, companies with data-residency concerns, and
individual tinkerers run it on their own terms rather than through
someone else's API.
