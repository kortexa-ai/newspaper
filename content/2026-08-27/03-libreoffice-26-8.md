---
title: LibreOffice 26.8 ships, betting on fundamentals instead of AI
kicker: Open Source
author: The Editors
summary: The free office suite's latest release adds a paragraph-balancing layout engine, variable font support, and pivot table calculated fields — quiet, practical work aimed at people who write and calculate for a living.
order: 3
---

The Document Foundation released LibreOffice 26.8 on Wednesday, and what
stands out is what isn't in it: no AI assistant bolted onto the toolbar, no
chatbot sidebar. Instead the free, open-source office suite spent its
six-month release cycle on the kind of unglamorous typography and
compatibility work that people who write and calculate for a living
actually notice
([Tux Machines](https://news.tuxmachines.org/n/2026/08/26/LibreOffice_26_8_Open_Source_Office_Suite_Officially_Released_T.shtml),
[Phoronix](https://www.phoronix.com/news/LibreOffice-26.8)).

The headline addition in Writer is a new text layout engine called the
Paragraph Composer, which balances word spacing across consecutive lines in
a paragraph rather than justifying each line in isolation — the same kind
of line-breaking refinement that professional typesetting software has long
had and word processors mostly haven't bothered with. Writer also gains
native support for OpenType variable fonts, automatic direction detection
for right-to-left text, a new distraction-free Draft view that hides
margins and headers, and early infrastructure for comparing two documents
side by side. Large documents full of images now load noticeably faster, a
fix aimed squarely at long-form reports and manuscripts that used to make
the app crawl.

Calc picks up calculated fields in pivot tables and a shuffle command for
randomizing cell ranges, along with tighter round-tripping with Microsoft's
XLSX format — waterfall, sunburst, and funnel charts now survive being
opened, edited, and saved back to Excel's format without losing their
layout, a compatibility detail that matters far more in practice than it
sounds. Impress and Draw now allow mixing multiple page sizes in a single
document, and Math adds formula support for the N'Ko and Adlam scripts,
extending the suite's reach to writing systems used across West Africa.

None of this is flashy, and that appears to be the point. In a year when
most productivity software has been racing to wrap every feature in a
generative-AI layer, LibreOffice's contributors spent the cycle on line
spacing, font rendering, and file compatibility — the parts of an office
suite that determine whether a document looks right and opens correctly
years later, regardless of which company's software made it.
