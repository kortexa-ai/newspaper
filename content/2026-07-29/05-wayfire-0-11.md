---
title: A Linux desktop compositor closes in on its 1.0
kicker: Open Source
author: The Editors
summary: Wayfire 0.11 adds HDR rendering and sharper fractional scaling, and its release notes call it — hopefully — the last stop before version 1.0.
order: 5
---

Wayfire, an open-source Wayland compositor for Linux desktops, released
version 0.11 on July 27, and its own release notes describe it as
"hopefully last release before Wayfire 1.0"
([GitHub: WayfireWM/wayfire v0.11.0](https://github.com/WayfireWM/wayfire/releases/tag/v0.11.0)).

The release is mostly about things looking and feeling right rather
than new headline features: geometry calculations now run in
floating-point and only get converted to integer pixels at the final
rendering step, which sharpens text and window edges at fractional
scale factors like 125% or 150% — a longstanding rough edge for Linux
desktops on HiDPI screens. HDR rendering support arrives for capable
displays and per-output ICC color profiles, both requiring the newer
Vulkan renderer, alongside expanded Vulkan support for visual effects
including the compositor's long-running "Wobbly" window-wobble effect.
The release also adds support for several newer Wayland protocols,
including explicit sync and security-context-v1, and ships a new
wayfire-plugin tool for managing the compositor's plugin ecosystem.

It's a small release in the sense that nothing here will make headlines
on its own. But it's exactly the kind of unglamorous, incremental
polish — text that renders sharper, colors that read correctly, effects
that run smoother — that eventually adds up to a 1.0, and a reminder
that a meaningful share of open-source progress looks like this rather
than like a launch event.
