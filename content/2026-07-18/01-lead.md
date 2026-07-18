---
title: A single block of glass just did the job of a million detector wires
kicker: Science
author: The Editors
summary: Physicists at ETH Zurich and EPFL built a particle detector that swaps millions of tiny components for one scintillator block, a camera, and a neural network.
lead: true
order: 1
---

Particle detectors have long worked by brute force. To catch the faint
flash of light a particle leaves behind in a scintillator, physicists
thread the material with a dense mesh of optical fibers and photon
sensors — sometimes millions of them — each one a tiny, separate piece of
plumbing that has to be built, wired, and maintained. It is precise work,
and it does not scale gracefully.

A team at ETH Zurich and EPFL has spent the past two years trying a
different approach entirely. Instead of segmenting the detector into
millions of channels, PLATON — short for Plenoptic Apparatus for Tracking
in Optically-active Networks — leaves the scintillator whole, a single
solid block, and photographs the light it produces from the outside. The
results, led by PhD student Till Dieminger, senior scientist Saúl
Alonso-Monsalve, and professor Davide Sgalaberna at ETH Zurich's
Institute for Particle Physics and Astrophysics, working with Edoardo
Charbon's Advanced Quantum Architecture Lab at EPFL, were published July
17 in *Nature Communications*
([Nature Communications](https://www.nature.com/articles/s41467-026-70918-x);
corroborated by [ScienceDaily](https://www.sciencedaily.com/releases/2026/07/260716023610.htm)
and [SciTechDaily](https://scitechdaily.com/seeing-the-invisible-scientists-develop-new-way-to-track-particles-in-3d/)).

The trick is borrowing a technology from consumer photography. A
light-field, or plenoptic, camera captures not just where light lands but
the angle it arrived from, using a micro-lens array in front of the
sensor. PLATON pairs that idea with SwissSPAD2, an ultra-sensitive photon
sensor built at EPFL that can register individual photons, and a
Transformer neural network trained to work backward from the pattern of
light it sees to the path the original particle traveled through the
block. In testing, the system reconstructed particle tracks from as few
as five detected photons, with lab measurements closely matching what the
simulations predicted.

The appeal isn't just cleverness for its own sake. A detector built this
way sheds the manufacturing burden that has made large-scale particle
detectors so expensive and slow to build — no million-fiber harness to
assemble, no equivalent number of individual failure points. The team
projects that a fist-sized, 10-centimeter block could achieve sub-
millimeter resolution, while a cubic-meter version could match the
precision of today's best segmented detectors at a fraction of the
complexity. That matters most for physicists hunting neutrinos and dark
matter candidates — particles so reluctant to interact with ordinary
matter that catching them at all requires enormous detector volumes. The
same underlying idea could sharpen PET scanners too; the group has
already filed three patents covering medical imaging applications.

"Some breakthroughs in physics come from brand new inventions. Others
begin with a new theory," the team noted in describing the work. "But
many advances happen when researchers combine familiar technologies in an
unexpected way and create something more powerful than the individual
parts." PLATON, funded by the Swiss National Science Foundation, is still
a proof of concept — a lab-bench prototype, not a working observatory.
But it is the kind of proof of concept that changes what the next
generation of detectors gets to look like.
