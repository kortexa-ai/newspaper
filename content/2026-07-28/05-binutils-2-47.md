---
title: The tools that build everything else got a quiet update
kicker: Open Source
author: The Editors
summary: GNU Binutils 2.47 shipped with better RISC-V support and new debugging options — unglamorous work that every compiled program on Linux quietly depends on.
order: 5
---

The GNU Project released Binutils 2.47 on July 26, updating the
assembler, linker and binary-manipulation tools that sit underneath
nearly every compiler on Linux, BSD and beyond
([lists.gnu.org](https://lists.gnu.org/archive/html/info-gnu/2026-07/msg00006.html);
[LWN.net](https://lwn.net/Articles/1085566/)).

The headline changes are aimed at RISC-V, the open instruction-set
architecture that's been steadily picking up hardware vendors: the
release adds support for new standard extensions, giving chipmakers and
compiler writers more of the low-level building blocks they need before
silicon can be considered fully supported. AArch64 developers get a new
`-M annotate` disassembler option that labels the symbol behind an
otherwise-opaque undefined instruction, a small but genuinely useful
debugging aid. The release also formally deprecates the 32-bit s390
target, clearing out support for architecture nobody's shipping new
hardware for anymore.

None of this is the kind of release that makes headlines, and that's
rather the point. Binutils doesn't have users in the normal sense — it
has the entire rest of the open-source toolchain sitting on top of it,
which is exactly why boring, careful, incremental progress here is worth
noticing at all.
