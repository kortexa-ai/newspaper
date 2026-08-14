---
title: X opens up its ranking code and lets users check for a shadowban
kicker: Open Source
author: The Editors
summary: The company published the full "For You" ranking engine on GitHub under an Apache license and rolled out a tool that shows users whether their posts have been quietly limited.
order: 4
---

Wondering whether a post is actually reaching anyone, or has been quietly
throttled, has been a familiar frustration on social platforms for years,
usually met with silence from the company running the algorithm. On
August 13, X pushed back against that opacity on two fronts at once. It
published a much larger share of its "For You" timeline source code to
GitHub under the Apache 2.0 license — including the model configuration
and the specific weights used to rank posts — expanding the codebase to
roughly 10 to 15 times its previous size. And it opened a pilot feature
called "Under the Hood" that lets eligible users download a file showing
which visibility-limiting labels, if any, have been applied to their
account or posts
([TechCrunch](https://techcrunch.com/2026/08/13/x-open-sources-its-ranking-algorithm-letting-users-see-if-theyve-been-shadowbanned/)).

"We're open-sourcing the code that affects a post's visibility in the For
You timeline, and releasing a new tool that shows people labels applied
to their account or posts that might limit visibility," the company said
in its announcement. Keith Coleman, X's VP of Product, put it more
plainly: "You can see the systems that filter out potentially
problematic, rule-violating content... And some of those systems, like
the ranker and the score, you can even run yourself outside the company"
([TechCrunch](https://techcrunch.com/2026/08/13/x-open-sources-its-ranking-algorithm-letting-users-see-if-theyve-been-shadowbanned/)).

Not everything is included — the systems that use Grok to flag likely
rule violations stay private, to keep bad actors from reverse-engineering
them. But for a mechanism that shapes what hundreds of millions of people
see every day, showing your work at all is the unusual part.
