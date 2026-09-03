---
title: A quantum shortcut just made ordinary computers solve hard problems 100 times faster
kicker: Science
author: The Editors
summary: Rigetti and Purdue researchers found that a few qubits, run for a single shallow step, can hand classical solvers exactly the hint they need to skip hours of searching.
lead: true
order: 1
---

For years, the promise of quantum computing has come with an asterisk: today's
machines are too small and too noisy to outrun a laptop at anything useful.
A paper posted this week by researchers at Rigetti Computing and Purdue
University suggests a way around that asterisk — not by making the quantum
computer do the hard work, but by having it whisper a hint to a classical one
([arXiv:2608.28842](https://arxiv.org/abs/2608.28842); reported by
[Quantum Computing Report](https://quantumcomputingreport.com/rigetti-and-purdue-university-demonstrate-quantum-preconditioning-framework-for-constrained-optimization/)).

The technique is called quantum preconditioning, and the idea is almost
mischievous in its modesty. The team runs a shallow Quantum Approximate
Optimization Algorithm (QAOA) circuit — often just a single layer deep, the
minimum possible — on a hard combinatorial problem, like splitting a densely
connected graph into balanced halves. That shallow run doesn't solve the
problem. What it does is extract two-point correlations between pairs of
variables: rough intuitions about which decisions tend to travel together.
Those correlations are then used to reshape the objective function fed to
Gurobi, a standard commercial solver, before it starts its own
branch-and-bound search.

The results, tested across fifty dense, all-to-all connected graph instances,
were striking: preconditioned runs reached within 1% of the optimal solution
in under a second, a threshold that took unpreconditioned runs hours to
approach. That's roughly a hundredfold speedup, achieved with a circuit
shallow enough that noise — the perennial enemy of near-term quantum hardware
— barely gets a chance to accumulate. The team also found that QAOA
parameters tuned on small problem instances transferred cleanly to larger
ones, meaning the expensive part of the process doesn't need to be redone as
problems scale up.

None of this makes today's quantum processors faster than classical
computers at brute-force computation — that race is still not won. What it
does is something quieter and arguably more useful in the near term: it
finds a role for imperfect quantum hardware as a kind of oracle, feeding
structural insight into the classical tools that industries already run in
production, from logistics routing to circuit design to resource allocation.
Constrained combinatorial optimization of this kind sits underneath an
enormous amount of unglamorous infrastructure — scheduling, network design,
chip layout — and shaving hours down to seconds anywhere in that stack tends
to matter more than the headlines suggest.

It's a small paper about a narrow class of problems, and its authors are
careful to frame it that way. But it points at a pattern worth watching:
quantum computers finding work not by replacing classical ones, but by
handing them exactly the shortcut they were missing.
