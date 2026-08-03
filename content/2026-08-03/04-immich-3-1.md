---
title: The self-hosted Google Photos alternative gets sharper filters and fewer papercuts
kicker: Open Source
author: The Editors
summary: Immich 3.1 adds EXIF-based filtering for its automation workflows, an upload wakelock, and more than 50 bug fixes for people running their own photo library.
lead: false
order: 4
---

Immich has become the default answer for people who want their photo
library to look and feel like Google Photos — face grouping, map
view, mobile backup — without handing years of family pictures to a
cloud provider. Version 3.1, released July 29, is mostly about
sanding down the rough edges that come with running your own
infrastructure ([Immich Blog](https://immich.app/blog/v3.1.0-release)).

The headline addition is an EXIF-based filter for Immich's workflow
automation system, letting users trigger actions — like sorting or
tagging — based on a photo's metadata rather than just its filename or
folder. It's a small feature with an outsized effect for anyone
managing tens of thousands of images: metadata like camera model,
lens, or capture settings is often the only reliable way to sort a
library that's been imported from several devices over many years.
Alongside it, the web app now keeps the screen awake during uploads
instead of letting it dim mid-transfer, archived photos can be undone
with a single click from the confirmation toast, and OIDC single
sign-on setups get more flexible role syncing. More than fifty smaller
bugs were fixed, including EXIF orientation handling for raw camera
files that had been quietly rotating people's photos wrong.

None of it is revolutionary, and that's rather the point: Immich's
pace of unglamorous, steady maintenance releases is exactly what's
let it become trustworthy enough to hold someone's entire photo
history.
