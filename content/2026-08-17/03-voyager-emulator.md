---
title: A hobbyist built a working emulator of the computer still flying Voyager
kicker: Builders
author: The Editors
summary: Using JPL documentation rescued from a university archive, one developer recreated the 1970s Flight Data Subsystem that still runs Voyager 1 and 2 — and put it in a browser tab anyone can program.
order: 3
---

Voyager 1 and 2 are both still flying, still phoning home from beyond the
edge of the solar system, on flight computers whose software was last
updated in 1990. That kind of longevity is easy to admire in the abstract
and hard to picture concretely, so a developer going by Zaneham built
something to make it tangible: a full software emulator of the Voyager
Flight Data Subsystem, the computer that manages the probes' instruments and
telemetry, running in a web browser
([project site](https://zaneham.github.io/voyager-fds-emulator/);
[Hackaday](https://hackaday.com/2026/08/16/hackaday-links-august-16-2026/)).

The real FDS is almost comically modest by modern standards: a 806.4 kHz
clock, roughly 400,000 instructions per second, 8,192 words of 16-bit
memory split across two banks. The emulator reproduces all of it — more
than three dozen instructions, four DMA channels for telemetry, imaging,
tape storage and radio astronomy data, even the interrupt cycle — closely
enough that visitors can write and run their own assembly programs against
the genuine 1970s instruction set. The project was built from original JPL
architecture documents dating to 1974 and 1977, recovered with help from
Special Collections at Wichita State University Libraries, and released
under an open Apache 2.0 license for anyone to study or extend.

It is a small project next to a rocket launch or a Nature paper, but it
belongs in the same morning for a simple reason: it is an act of
preservation. Voyager's own hardware will keep transmitting, in slowly
fading fashion, for a few more years before its plutonium runs too low to
power any instruments at all. Projects like this one make sure the design
that got two spacecraft through interstellar space outlives the spacecraft
themselves — readable, runnable, and free, in a browser tab, 24 billion
kilometers from where it was built.
