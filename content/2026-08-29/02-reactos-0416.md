---
title: ReactOS ships its first release in 18 months, with a graphical installer at last
kicker: Open Source
author: The Editors
summary: The volunteer project rebuilding a Windows-compatible operating system from scratch pushed out version 0.4.16 today, closing 381 issues across 2,808 commits.
order: 2
---

ReactOS — the free, open-source operating system built to run Windows
applications and drivers without a line of Microsoft's code — released
version 0.4.16 today, its first update since March 2025
([ReactOS](https://reactos.org/project-news/reactos-0416-released/)).
Eighteen months of volunteer work went into it: 2,808 commits closing 381
tracked issues.

The headline change is usability rather than compatibility: ReactOS
finally has a proper graphical setup wizard, replacing the old text-mode
installer, and it now installs from a single unified image instead of
separate boot and live CDs
([ReactOS](https://reactos.org/project-news/reactos-0416-released/)).
Underneath, the release replaces the aging UniATA storage driver with a
new one that fixes boot failures on more hardware and virtual machines,
rewrites HD audio support so volume and balance settings finally survive
a reboot, and fixes a long-standing memory-manager bug that was choking
performance on NVIDIA graphics cards.

The release also adds a "Server Core" install option that skips the
graphical shell entirely, and syncs the project's bundled Wine
compatibility layer forward from the 2.x/3.x line toward Wine 10.0, plus
support for running old 16-bit Windows programs via WineVDM
([ReactOS](https://reactos.org/project-news/reactos-0416-released/)).

None of it is glamorous — a working installer, a fixed audio driver, a
storage bug closed — but that's the nature of the project. Reverse
engineering three decades of an operating system nobody documented for
outsiders happens one closed issue at a time, and 0.4.16 is 381 of them.
