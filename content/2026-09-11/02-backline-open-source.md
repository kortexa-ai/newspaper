---
title: Xanadu and AMD open-source the plumbing between quantum chips and ordinary computers
kicker: Open Source
author: The Editors
summary: Backline links quantum hardware to everyday CPUs, GPUs, and FPGAs in under three microseconds, and it ships as an open feature of Xanadu's PennyLane platform rather than a locked-down product.
order: 2
---

Every quantum computer needs a translator. Quantum processors can't run error correction, routing, or sensing entirely on their own — they need to hand data back and forth with ordinary classical hardware fast enough that the round trip doesn't undo the quantum state's fragile advantage. Historically, building that link has meant custom, often proprietary engineering for each combination of quantum and classical hardware.

Xanadu and AMD announced [Backline](https://thequantuminsider.com/2026/09/10/xanadu-amd-backline-low-latency-quantum-classical-computing/) on September 10, an open-source feature suite built into Xanadu's PennyLane platform that handles that translation generically. Backline gets end-to-end classical-quantum loop times under three microseconds while running on standard AMD EPYC and Threadripper CPUs, Instinct GPUs, and Versal FPGAs — hardware researchers and companies are likely to already have, rather than exotic specialized servers ([GlobeNewswire](https://www.globenewswire.com/news-release/2026/09/10/3359349/0/en/xanadu-and-amd-launch-backline-to-streamline-cpu-gpu-fpga-integration-for-quantum-technology.html)).

The open part is the point. Because Backline lives inside PennyLane's existing open-source codebase, a single Python program can be written once and run across CPUs, GPUs, and FPGAs from different vendors without being rebuilt for each. "By integrating Backline into PennyLane, we are providing direct access to communication layers the industry needs to move from laboratory R&D to real-world performance," said Xanadu CEO Christian Weedbrook. AMD corporate vice president Scott Tease described the same idea from the hardware side: "A single Python program can span AMD EPYC and Threadripper CPUs, AMD Instinct GPUs, AMD Versal FPGAs and AMD Pensando networking."

For a field where vendor lock-in has been a real drag on progress, giving university labs and smaller quantum startups a common, freely available way to wire their machines to ordinary computers is a small but genuine unlock — one less proprietary integration standing between an idea and an experiment.
