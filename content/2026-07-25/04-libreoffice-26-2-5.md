---
title: LibreOffice's latest update is 21 small fixes, no fanfare
kicker: Open Source
author: The Editors
summary: The free office suite's fifth maintenance release for the 26.2 line trades new features for stability, patching crashes and file-handling bugs reported by its users.
order: 4
---

The Document Foundation released LibreOffice 26.2.5 on July 23, the
fifth maintenance update to the 26.2 branch, and it's the kind of
release that will never make a highlight reel but that everyday users
of the free, open-source office suite will quietly appreciate: 21
targeted bug fixes across Writer, Calc, Base, and the interface,
contributed by the project's global community of volunteer developers
and QA testers
([TDF Community Blog](https://blog.documentfoundation.org/blog/2026/07/24/libreoffice-26-2-5/);
corroborated by [9to5Linux](https://9to5linux.com/libreoffice-26-2-5-open-source-office-suite-released-with-more-than-20-bug-fixes)
and [Linuxiac](https://linuxiac.com/libreoffice-26-2-5-open-source-office-suite-released-with-21-bug-fixes/)).

The most consequential change walks something back rather than adding
something new: Skia rendering on macOS and Windows, introduced earlier
in the 26.2 cycle to speed up graphics, has been switched to
experimental mode by default after users reported crashes and hangs
following the upgrade. Elsewhere, the fixes are the ordinary texture of
software maintenance — a crash triggered by pressing Shift+Enter on
the numeric keypad, a macOS bug where opening multiple files at once
could fail from incorrect path handling, hidden empty paragraphs in
DOC files that weren't displaying correctly, conditional text fields
that used to get deleted when edited, and spacing after single-letter
words that AutoCorrect was stripping when it shouldn't.

None of that is glamorous, and that's rather the point. LibreOffice is
the office suite millions of people and organizations use specifically
because it doesn't depend on anyone's subscription or goodwill to keep
working — and releases like this one are what keeps it trustworthy
enough to depend on. The update is available now for Windows, macOS,
and Linux at libreoffice.org.
