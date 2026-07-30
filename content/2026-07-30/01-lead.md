---
title: Two teams taught silicon qubits to run themselves
kicker: Science
author: The Editors
summary: HRL Laboratories and QuTech in Delft each published Nature papers on July 29 showing spin-qubit processors can now hit error rates close to the threshold for real error correction — without a room full of external electronics.
lead: true
order: 1
---

Quantum computing has two rival bets on what a qubit should be made of.
Superconducting circuits, the approach IBM and Google have built their
programs around, are the current front-runners. Electron spin qubits,
built from single electrons trapped in silicon, have long been the
underdog: cheaper to manufacture on ordinary chip fabrication lines, far
smaller per qubit, but historically noisier and harder to control. On
July 29, two independent teams published papers in *Nature* showing that
gap closing fast
([Nature: "Underdog 'spin qubits' leap forward in race to a useful
quantum computer"](https://www.nature.com/articles/d41586-026-02357-z)).

HRL Laboratories in Malibu, California, built an 18-qubit silicon
processor — drawn from a 54-quantum-dot array on isotopically enriched
silicon-germanium wafers — and, more importantly, changed how it's
controlled. Instead of a rack of room-temperature electronics wired into
the cryostat, HRL placed a custom 70-million-transistor control chip
directly inside the cold chamber, running at 4 Kelvin on under 3.5 watts,
connected to the qubits by a 296-channel superconducting ribbon cable
engineered to carry hundreds of signals without leaking heat onto the
delicate quantum states
([The Quantum Insider](https://thequantuminsider.com/2026/07/29/hrl-shows-self-operating-silicon-quantum-processor-that-performs-error-correction/);
[Quantum Computing Report](https://quantumcomputingreport.com/hrl-laboratories-demonstrates-self-running-silicon-qpu-in-nature-benchmark/)).
The processor ran quantum error-detection and repetition codes entirely
on its own, with single-qubit gate errors of 1.7×10⁻⁴ and two-qubit
errors as low as 9×10⁻⁴ — control errors HRL says are ten times lower
than any prior demonstration for this qubit type, and low enough that
adding more qubits to the error-correcting code actually suppressed
errors further rather than adding noise.

Across the Atlantic, a QuTech team in Delft, the Netherlands, reported a
53-qubit silicon processor achieving error rates around 0.2% — a
striking jump from the state of the art just three years ago, when a
two-qubit spin system ran at roughly 4% error. The two results, arriving
in the same *Nature* issue from unaffiliated labs using different
approaches, corroborate each other in a field that has produced plenty
of single-lab claims: spin qubits are no longer a laboratory curiosity
trailing behind superconducting circuits, but a credible second path to
a fault-tolerant machine.

The timing has not gone unnoticed by industry. On July 23, IBM announced
it would acquire HRL Laboratories from Boeing and General Motors, adding
the lab's spin-qubit and cryogenic control expertise to a quantum
program that has, until now, been built entirely on superconducting
circuits
([IBM Newsroom](https://newsroom.ibm.com/2026-07-23-ibm-to-acquire-hrl-laboratories-to-power-the-future-of-quantum);
[The Quantum Insider](https://thequantuminsider.com/2026/07/23/ibm-to-acquire-hrl-laboratories-to-power-the-future-of-quantum/)).
Spin qubits' chief appeal has always been size and manufacturability —
they can, in principle, be built on the same silicon lines that already
make ordinary chips. What HRL's paper adds is proof that the control
electronics can shrink and move on-chip too, which is the unglamorous,
essential engineering that separates a lab demonstration from something
you could actually scale to the thousands of qubits fault-tolerant
computing will eventually need. Nobody has built that machine yet. But
for a technology written off a few years ago as too noisy to matter, two
unrelated teams landing in the same issue of *Nature* on the same day is
the kind of quiet, corroborated progress this paper likes to notice.
