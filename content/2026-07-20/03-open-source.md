---
title: The kitty terminal grows tabs on the side, and a lighter touch for images
kicker: Open Source
author: The Editors
summary: The open-source kitty terminal emulator shipped version 0.48.0, adding vertical tab bars and a more efficient way to handle short-lived images.
order: 3
---

Kitty, the open-source, GPU-accelerated terminal emulator, released
version 0.48.0 this week — a quiet, workmanlike update of the kind
long-running open-source projects tend to specialize in
([changelog](https://sw.kovidgoyal.net/kitty/changelog/);
[GitHub](https://github.com/kovidgoyal/kitty/releases/tag/v0.48.0)).

The headline feature is vertical tabs: setting `tab_bar_edge` to
`left` or `right` now arranges open tabs along the side of the window
instead of across the top, a small layout option that matters more
than it sounds like on today's wide monitors. The terminal's graphics
protocol — the plumbing that lets image previews and inline plots show
up directly in the terminal — gained a new "transient" hint, so
clients can mark an image as short-lived and let kitty handle it more
efficiently rather than treating every image as something to keep
around.

The rest of the release is the usual maintenance a mature project
needs: unfocused windows now pass through their first mouse click
instead of swallowing it, matching how other macOS apps behave; the
`kitten @ get-text` remote-control command can now pull text from a
window's alternate screen buffer; and several file-transfer and
drag-and-drop CVEs got patched.

None of it will make headlines. It's the kind of release that exists
because someone kept showing up — tightening a protocol here, fixing a
platform quirk there — for a tool that millions of terminal sessions
run inside of without a second thought.
