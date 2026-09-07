---
title: An AI took the controls of a fusion reactor's heating system, and outdid the humans
kicker: Climate
author: The Editors
summary: Princeton's PACMAN framework steered all six microwave heaters on a San Diego tokamak in real time, and once caught a plasma-disrupting instability 200 milliseconds before it happened.
lead: true
order: 1
---

Fusion plasma can go wrong in the time it takes to blink — a "tearing mode"
instability can grow from nothing to reactor-stopping in a few thousandths
of a second, far faster than any control-room operator can watch a screen
and react. Last week, researchers at Princeton University and the
Princeton Plasma Physics Laboratory (PPPL) reported that they'd tested an
AI system able to watch, decide, and act inside that window — and that in
one run, it saw a tearing instability coming roughly 200 milliseconds
before it formed and adjusted the plasma to head it off
([PPPL](https://www.pppl.gov/news/2026/pacman-ai-framework-controlling-fusion-systems-safely-makes-key-decisions-milliseconds);
[ScienceDaily](https://www.sciencedaily.com/releases/2026/09/260903064215.htm)).

The system, called PACMAN (Prediction And Control using MAchiNe learning),
was tested across five experiments on DIII-D, the Department of Energy's
tokamak in San Diego. It isn't one model but a modular stack of them,
running in a loop that reads real-time measurements, predicts what the
plasma will do next, and issues commands roughly every 20 milliseconds —
continuously, not as a one-off correction. "PACMAN typically runs in about
20 milliseconds, and it's not running once. It's running again and again,"
said co-lead author Andy Rothstein.

The more striking result may be a quieter one: PACMAN also took
simultaneous control of all six of DIII-D's gyrotrons — the systems that
heat plasma with focused microwave beams — retargeting their mirrors and
adjusting their power together to hit a goal the researchers set in
advance. Nobody had written an algorithm to coordinate six heaters like
that before. "There was no algorithm to find that optimal solution
before," said co-lead author Hiro Farre Kaga. "When the shot ended and we
looked at the data, it was doing exactly what we hoped, simultaneously
moving all six in an optimal way to reach the goal."

What makes the framework useful beyond this one machine is its modularity.
Individual AI components can be swapped in or out without rebuilding the
rest of the system — the team says adding a second control model, which
once would have taken months of integration work, took days instead.
Egemen Kolemen, the Princeton associate professor who supervised the
work, said that flexibility is the point: the same architecture should be
able to travel to tokamaks of different sizes and designs, including ones
that haven't been built yet.

None of this makes PACMAN the pilot of a power plant. DIII-D is a research
device, not a grid-connected reactor, and the team is careful that safety
limits are hard-coded rather than left to the AI's judgment — physicists
still review every shot and retune the controllers before the next one.
What the experiments show is narrower and still significant: that a
machine-learning system can react inside a window too fast for people,
without needing a person to have first worked out the underlying physics
by hand. For an energy source whose central engineering problem has long
been "the plasma won't hold still," that's a genuine, if early, answer.
