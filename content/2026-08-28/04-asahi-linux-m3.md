---
title: Asahi Linux says an M3 MacBook release is nearly ready
kicker: Open Source
author: The Editors
summary: The volunteer project bringing Linux to Apple Silicon reports webcams, microphones, USB 3.0 and Thunderbolt now working on M3 machines, with an official release "coming weeks" away.
order: 4
---

Asahi Linux, the volunteer-driven project reverse-engineering Apple
Silicon to run Linux on Macs the way Apple never intended, published its
"Linux 7.2" progress report on August 26, and the M3 line has quietly
closed most of the gap that's kept it unsupported
([Asahi Linux](https://asahilinux.org/2026/08/progress-report-7-2/)).

Webcam and microphone support now work on every M3 machine that has
them. The SPMI interface and ACE3 USB controller are both functional,
bringing USB 3.0 and Thunderbolt to the full M3 lineup. The display
controller driver is nearly at feature parity with the one already
shipping for M1 and M2 Macs, with the team noting that "M3 series
machines will target the ABI found in macOS 14.8.3," and that DCP support
is "almost at feature parity with the existing macOS 13.5 ABI we use for
M1 and M2"
([Asahi Linux](https://asahilinux.org/2026/08/progress-report-7-2/)).

The team stopped short of naming a release date, saying only that it is
"almost ready to cut an official release" and has "more to say about this
in the coming weeks" — but for a project that has spent roughly two years
chipping away at each new Apple chip generation's undocumented hardware,
that's a notably confident tone
([Asahi Linux](https://asahilinux.org/2026/08/progress-report-7-2/)).

The same report shows work already moving on to the M4 and M5
generations, where NVMe storage and PCIe enumeration are now functional
though not yet installer-ready, and describes a UEFI-based implementation
of ARM's power management interface that should make future bring-up
efforts more portable. Each generation still starts from nothing —
Apple ships no public documentation for this hardware — but the project's
backlog is visibly getting shorter.
