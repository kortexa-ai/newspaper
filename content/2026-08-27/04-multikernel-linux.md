---
title: A single Linux box learns to run several kernels at once, safely
kicker: Infrastructure
author: The Editors
summary: Multikernel Technologies published the first public build of Multikernel Linux, letting independent kernel instances share one machine's hardware without the isolation gaps that come with a shared kernel.
order: 4
---

On Tuesday, Multikernel Technologies published the first public release of
Multikernel Linux, a patch set — built against the mainline Linux 7.0
kernel and labeled v7.0-mk2 — that lets several independent Linux kernels
run side by side on the same physical machine, each with its own dedicated
CPU cores, memory, and devices
([Linuxiac](https://linuxiac.com/multikernel-linux-releases-first-public-kernel-tree-based-on-linux-7-0/),
[Phoronix](https://www.phoronix.com/news/Linux-7.0-mk2-Multikernel)). It
arrives roughly a year after the project first posted its kernel code and
early patches for review on the Linux Kernel Mailing List.

The idea sits in the gap between two familiar approaches to sharing a
server: standard multitasking, where every process answers to one kernel,
and virtual machines, where a hypervisor emulates hardware for each guest
kernel. Multikernel Linux skips both. A host kernel divides up the
machine's CPUs, memory, and PCI devices into pools, then boots a separate
"spawn" kernel directly into each pool using the existing kexec_file_load()
mechanism — no hypervisor, no emulation layer. Each spawn kernel runs
natively on its own slice of the real hardware, and those slices can be
resized on the fly through device tree overlays, without rebooting the
machine.

The safety case is the more interesting part: because each instance runs
its own kernel rather than sharing one with everything else on the box, a
kernel panic, a stuck lock, or a security exploit in one instance has no
path to the others. That is the isolation guarantee virtual machines exist
to provide, but delivered with none of a hypervisor's translation overhead
— early benchmarks in two-core comparisons already show Multikernel Linux
beating standard KVM virtualization, and tests on 24-core systems found
running two kernels side by side outperformed a single kernel handling the
same load. Currently the project supports only the x86_64 architecture,
with other platforms left for later.

Whether any of this reaches a mainline Linux release is still an open
question — folding a new kernel-partitioning model into the tree the whole
world depends on is a multi-year negotiation even for well-tested ideas.
But a working, benchmarked, publicly available implementation is a much
stronger opening bid than a mailing-list proposal, and it gives anyone
curious about the approach something to actually run and measure for
themselves.
