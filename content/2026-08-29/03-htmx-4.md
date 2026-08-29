---
title: htmx 4.0 arrives, and the team says 2.0 isn't going anywhere
kicker: Builders
author: The Editors
summary: The lightweight library for building interactive web pages without heavy JavaScript frameworks shipped a major rewrite Friday, while explicitly promising indefinite support for the version most sites already run.
order: 3
---

htmx, the library that lets developers add dynamic, app-like behavior to
web pages through plain HTML attributes instead of a JavaScript
framework, released version 4.0 on Friday after an eight-month
development cycle
([htmx](https://four.htmx.org/announcements/2026-08-28-htmx-4.0.0-is-released)).
It adds built-in morph swaps for smoother partial-page updates, a new
`<hx-partial>` tag for out-of-band content swaps, and a companion
"htmax.js" bundle that pairs htmx with its most popular extensions out of
the box.

What makes the release notable isn't the feature list — it's the
migration policy. Rather than push every existing site onto the new
major version, the team is keeping htmx 2.x as the default `latest`
package on NPM until early 2027 and says plainly: "htmx 2 will continue
to be supported indefinitely so don't feel any pressure to upgrade"
([htmx](https://four.htmx.org/announcements/2026-08-28-htmx-4.0.0-is-released)).
For a library widely embedded via unversioned CDN links across
production sites, that's a deliberate choice to avoid breaking pages that
never asked for an upgrade.

The 4.0 line does clean up some long-standing rough edges — attribute
inheritance now requires an explicit `:inherited` suffix, and events have
been renamed to a consistent `htmx:phase:action` scheme — changes htmx 2
users can adopt on their own schedule, or not at all
([htmx](https://four.htmx.org/announcements/2026-08-28-htmx-4.0.0-is-released)).
It's a small act of restraint in a corner of software that doesn't always
practice it: a major version bump that treats "optional" as a real word.
