---
title: A laptop just did what a quantum computer was supposed to be needed for
kicker: Science
author: The Editors
summary: Physicists used a decades-old algorithm and modern tensor-network math to simulate quantum dynamics that a 2025 paper had called out of classical reach.
order: 2
---

In March 2025, a team reported in *Science* that they'd found a class
of quantum dynamics problems — hundreds of entangled qubits evolving on
square, cubic, and diamond-shaped lattices — that no classical computer
could keep up with. It was framed as a marker of quantum advantage.
Sixteen months later, a different team ran the same problem on a
laptop.

Joseph Tindall at the Center for Computational Quantum Physics at the
Flatiron Institute, working with Miles Stoudenmire and collaborators at
Boston University, used tensor networks to compress the wave function
that describes hundreds of interacting qubits into something
manageable — "a zip file for the wave function," as Tindall put it,
"where you've taken all this information and compressed it into this
mathematical data structure full of small tables of numbers that are
interconnected." Paired with belief propagation, an algorithm borrowed
from 1980s computer science, the compressed math ran on ordinary
hardware and matched both the theoretical predictions and results from
an actual quantum computer. The work published July 20 in *Science*
([ScienceDaily](https://www.sciencedaily.com/releases/2026/07/260719040000.htm);
corroborated by
[SciTechDaily](https://scitechdaily.com/physicists-solve-a-quantum-only-problem-using-an-ordinary-laptop/)
and [Quantum Computing Report](https://quantumcomputingreport.com/flatiron-institute-tensor-network-algorithm-overturns-historical-d-wave-quantum-supremacy-claim/)).

This isn't a claim that quantum computers are pointless — plenty of
problems still favor them. It's a reminder that the line between
"needs a quantum computer" and "needs a cleverer algorithm" keeps
moving, and that the movement mostly happens in the unglamorous work of
better compression and smarter approximation. Tindall's team says the
method opens new ways to study quantum materials and dynamics on
hardware every physics department already owns.
