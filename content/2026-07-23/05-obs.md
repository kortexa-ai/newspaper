---
title: OBS Studio's newest release quietly fixes a dozen creator headaches
kicker: Builders
author: The Editors
summary: Version 32.2 adds SDR-to-HDR compositing, dynamic bitrate for multitrack streams, and a batch of smaller fixes that add up for the millions who broadcast with the free, open-source tool.
order: 5
---

OBS Studio, the free and open-source software that a huge share of the
world's streamers, teachers, and indie broadcasters rely on to get video
online, shipped version 32.2 this week
([GitHub release notes](https://github.com/obsproject/obs-studio/releases/tag/32.2.0);
corroborated by
[9to5Linux](https://9to5linux.com/obs-studio-32-2-released-with-new-filter-to-compose-sdr-into-hdr)
and [obs-versions.com](https://obs-versions.com/version/32.2.0)). None of
the individual changes are headline-grabbing, which is rather the point:
this is a release built from the accumulated friction reports of people
who use the software every day.

The biggest addition is a new filter that composes standard dynamic range
sources into HDR output, useful for creators mixing older graphics or
webcams into an otherwise HDR broadcast. Multitrack video streaming picks
up dynamic bitrate support, adjusting on the fly rather than forcing a
fixed setting. Plugin developers can now assign custom icons to new
source types, the Image Slide Show source finally accepts WebP files, and
the Add Source workflow got a redesigned dialog. macOS users get a
long-missing feature: the Delete key now works as a hotkey for removing
sources, matching behavior Windows and Linux users already had.

The release also bundles NVIDIA's SDK version 13, which brings updated
encoder support but raises the minimum required GPU driver to version
570 — worth knowing before updating on an older machine. None of this
is the kind of change that makes a keynote. It's the kind that makes
software genuinely nicer to use, one release at a time, for a tool built
and maintained largely by volunteers and used by everyone from solo
streamers to newsrooms running their own broadcasts.
