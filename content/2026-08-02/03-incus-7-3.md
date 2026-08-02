---
title: Incus 7.3 lets virtual machines share a GPU instead of fighting over it
kicker: Open Source
author: The Editors
summary: The latest release of the open-source container and VM manager adds shared 3D acceleration, easier port forwarding, and closes 13 security holes, nine of them critical.
lead: false
order: 3
---

Incus, the community-run fork of LXD that's become a favorite
lightweight alternative to heavier virtualization stacks, shipped
version 7.3 on July 31 — and the headline feature solves a problem
anyone who's tried to run more than one GPU-hungry virtual machine on
a single box will recognize
([Linuxiac](https://linuxiac.com/incus-7-3-released-with-shared-gpu-acceleration-and-13-security-fixes/)).
A new `native-context` GPU type lets multiple VMs share 3D
acceleration through virglrenderer and virtio-gpu, so several guests
can draw on the same graphics hardware at once instead of requiring
full, exclusive passthrough of the card to just one of them
([Linux Containers Forum](https://discuss.linuxcontainers.org/t/incus-7-3-has-been-released/27033)).

The release also adds a genuinely useful piece of plumbing: `incus
port-forward` runs a local listener and forwards traffic straight into
an instance, without the usual dance of proxy devices or manual
iptables rules. UEFI NVRAM management arrives too, letting
administrators read and rewrite a VM's boot variables directly, and
networking gets BGP unnumbered support for sessions that don't need
explicit IP addressing on the wire.

None of that is as urgent as the other half of the release: 13
security vulnerabilities fixed, nine of them critical, covering
argument injection, ways to bypass project isolation, and path
traversal bugs in backup and import handling that could let a
malicious image write files outside where it should. For a tool
increasingly used to isolate untrusted workloads from each other,
closing that many critical holes in one release is the less flashy
but more important story. It's the kind of unglamorous, competent
maintenance that keeps infrastructure people quietly trust — the sort
of update that never makes headlines and is exactly why it should.
