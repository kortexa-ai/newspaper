---
title: An AI search cut a NASA rocket alloy's printing setup from millions of tries to forty
kicker: AI
author: The Editors
summary: Washington State University researchers used machine learning to find working 3D-printing settings for a stubborn copper alloy, opening it up to ordinary commercial printers.
order: 2
---

GRCop-42, a copper-chromium-niobium alloy NASA developed for rocket engine
combustion chambers, is prized for handling extreme heat and conducting it
away fast — and notoriously hard to 3D print. Getting a print to succeed
means finding the right combination of laser power, scan speed, and a
handful of other settings, out of more than 100 million possible
combinations, on printers powerful enough to melt the metal at all
([WSU Insider](https://news.wsu.edu/news/2026/08/24/researchers-use-ai-to-democratize-3d-printing-of-crucial-metal-alloy/)).
Testing that space by hand, one print at a time, was never realistic.

A team from WSU's electrical engineering and mechanical engineering
schools built an AI model instead, trained on 37 previously failed
printing attempts to estimate which untested settings were likely to
work. Rather than guessing randomly, the system picked each new batch of
experiments to balance promising candidates against genuinely uncertain
ones, refining its own estimates as results came in
([WSU Insider](https://news.wsu.edu/news/2026/08/24/researchers-use-ai-to-democratize-3d-printing-of-crucial-metal-alloy/)).
The work, recognized with the Innovative Deployed Application Award at
this year's AAAI conference, is published in the Proceedings of the AAAI
Conference on Artificial Intelligence
([arXiv preprint](https://arxiv.org/pdf/2601.17587)).

After just 40 real-world experiments — a fraction of a percent of the
theoretical search space — the model had identified six configurations
that reliably worked, including one that printed successfully at a
record-low 500 watts, a power level within reach of far more machines
than the specialized high-power printers the alloy previously required
([phys.org](https://phys.org/news/2026-08-ai-ways-rocket-grade-alloy.html)).

"Ninety percent of commercial printers cannot print this metal alloy, so
given that we were able to find these feasible process parameters, it
allows us to use those commercial printers, and we are essentially
democratizing the printing of this alloy," said Jana Doppa, the project's
lead researcher
([WSU Insider](https://news.wsu.edu/news/2026/08/24/researchers-use-ai-to-democratize-3d-printing-of-crucial-metal-alloy/)).
A component built for spaceflight, in other words, just got a lot closer
to workshops that aren't NASA's.
