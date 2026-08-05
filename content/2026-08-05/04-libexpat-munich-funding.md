---
title: A city just started paying the person who maintains the internet's XML parser
kicker: Open Source
author: The Editors
summary: The City of Munich is funding libexpat maintainer Sebastian Pipping to work on the widely used XML library full-time for up to six months.
lead: false
order: 4
---

libexpat is the kind of software most people have never heard of and
almost everyone relies on anyway — a small, fast C library for
parsing XML that quietly sits inside countless applications and
programming-language standard libraries. For a decade, Sebastian
Pipping has maintained it in whatever hours he could find around
other work. As of August 1, that changed: the City of Munich is now
paying him to work on libexpat as his actual job, for up to six
months, through its Open Source Sabbatical program
([Sebastian Pipping](https://blog.hartwork.org/posts/libexpat-city-of-munich-open-source-sabbatical/)).

"For the first time, I am now being employed to work on maintaining
libexpat as my 'regular job' for a limited period of time," Pipping
wrote, announcing the arrangement on August 4. The funding runs
through digital@M, Munich's digital services arm, and comes with
a concrete list of priorities rather than an open-ended stipend: five
known, unfixed security vulnerabilities to address, support for the
newer XML 1.0r5 specification to add, and general robustness work to
get through while he has the sustained time to do it properly.

It's a small story by the standards of a news cycle built around
funding rounds and product launches — a municipal government paying
one maintainer's salary for half a year. But it's aimed at exactly
the kind of software that tends to be invisible until it breaks:
infrastructure so deeply embedded that almost nobody notices it,
maintained for years on volunteer time even as it sits in the
dependency tree of software used by millions. Munich's program is a
narrow, practical bet that funding the unglamorous maintenance work
is worth doing before something breaks, not after.
