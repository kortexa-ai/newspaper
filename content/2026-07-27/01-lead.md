---
title: China's Moonshot AI just gave away the biggest open model ever built
kicker: AI
author: The Editors
summary: Kimi K3, a 2.8-trillion-parameter model that trades blows with the best closed systems in the world, landed on Hugging Face free for anyone to download.
lead: true
order: 1
---

Late Sunday evening US time, Moonshot AI quietly pushed a button and made
history a little more open. The Beijing-based lab published the full
weights of Kimi K3 — a 2.8-trillion-parameter language model — to Hugging
Face, free to download by anyone with the bandwidth and the hardware to
run it
([Hugging Face](https://huggingface.co/moonshotai/Kimi-K3);
corroborated by [TechNode](https://technode.com/2026/07/27/moonshot-ai-to-make-kimi-k3-available-for-public-download/)
and [Tech Times](https://www.techtimes.com/articles/321551/20260725/kimi-k3-open-weights-arrive-sunday-self-hosting-cuts-china-data-risk-api-never-can.htm)).
It arrived a day ahead of the July 27 date Moonshot had promised — the
kind of early delivery that, in an industry known for slipped release
dates, is its own small statement.

The number that matters isn't just the parameter count, though 2.8
trillion makes K3 the largest open-weight model ever released. It's what
Moonshot did with the architecture to make a model that size usable at
all. K3 is a mixture-of-experts design that activates only 16 of its 896
expert sub-networks for any given token — about 1.8% of the total
parameters firing at once — paired with two new mechanisms the company
calls Kimi Delta Attention and Attention Residuals, aimed at keeping
long-context reasoning coherent without the usual computational blowout.
Moonshot says the combination delivers roughly 2.5 times the scaling
efficiency of its predecessor, Kimi K2
([Interconnects.ai](https://www.interconnects.ai/p/kimi-k3-the-open-weights-escalation)).
The model also ships with a one-million-token context window, built with
long-horizon coding and multi-step agent work in mind.

On the numbers that outside evaluators track, K3 isn't just competitive
for an open model — it's competitive, period. AI researcher and former
Allen Institute scientist Nathan Lambert, who writes the widely read
Interconnects newsletter, places it third on the Artificial Analysis
Intelligence Index, behind only Claude Fable and GPT-5.6 Sol Max, and
first on Frontend Code Arena's blind head-to-head developer voting. Lambert
calls it the closest an open model has come to the closed frontier since
DeepSeek R1 — not a distilled copy of a Western system, he argues, but
evidence of independent frontier-level research coming out of a Chinese
lab.

That distinction is the real story. For three years, "open" AI has
usually meant "open, but a step or two behind." K3 narrows that gap to
nearly nothing, and does it during a week when Beijing's own leadership
has been publicly championing open-source AI as national strategy. The
practical upside is immediate and unglamorous in the best way: hosting
providers Together AI and Modal both stood up day-zero access the moment
the weights dropped, and any company nervous about routing sensitive data
through an external API can now, in principle, run a frontier-class model
entirely on its own machines. The weights are gated behind a license
agreement and a hefty download — the full MXFP4 checkpoint runs to
roughly 594 gigabytes — so this isn't a laptop project. But the ceiling
on what "open" AI can do just moved, and it moved a lot closer to the top.
