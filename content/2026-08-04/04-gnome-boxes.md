---
title: GNOME Boxes gets rebuilt from scratch — and finally tames Windows 11
kicker: Open Source
author: The Editors
summary: A ground-up rewrite of the Linux virtualization app moves it to GTK4 and quietly kills the Secure Boot and TPM workarounds that made installing Windows a chore.
lead: false
order: 4
---

GNOME Boxes is the unglamorous app that lets Linux desktop users spin
up virtual machines without touching a command line — a friendly face
on top of libvirt and QEMU. On August 3, lead developer Felipe Borges
announced a beta of a rewritten version, migrated to the GTK4 toolkit
and libadwaita, the modern foundations most of the GNOME desktop has
already moved to
([Phoronix](https://www.phoronix.com/news/GNOME-Boxes-2026)).

The headline improvement is one anyone who has tried to run Windows in
a Linux VM will recognize: the new Boxes can install Windows 11
without the manual Secure Boot and TPM workarounds that have made the
process fiddly for years. The rewrite also adds a VSOCK device for
talking directly into a VM's internals, and moves the app toward a
Flatpak-first release model going forward, meaning future updates
should arrive faster and more consistently across distributions than
the old release cadence allowed.

None of this is flashy — nobody outside people who occasionally need a
Windows app on their Linux machine will notice. But that's the nature
of most software maintenance that matters: not a new feature so much
as an old friction quietly removed. The beta is available now on
Flathub for anyone willing to test it.
