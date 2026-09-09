---
title: The layout engine behind a popular diagram tool is now free for anyone to use
kicker: Open Source
author: The Editors
summary: TALA, the algorithm that arranges D2's software architecture diagrams, has been released under an open license after years as a paid add-on.
lead: false
order: 5
---

Automatic diagram layout is a deceptively hard problem — anyone who has fought a flowchart tool into arranging boxes sensibly knows the results are usually cluttered, lopsided, or both. TALA, short for Terrastruct's AutoLayout Algorithm, was built specifically to do better for software architecture diagrams, favoring the kind of orthogonal, whiteboard-style layouts engineers actually sketch by hand over the directional graph layouts most tools default to. It weighs symmetry, the distance between related nodes, the flow of connections, and how cleanly similar nodes cluster together, blending ideas from academic graph-drawing research with techniques the team developed itself.

Terrastruct, the company behind the open-source diagram scripting language D2, has now released TALA under the same MPL-2.0 license as D2 itself, after years of keeping it as a proprietary component
([D2 blog](https://d2lang.com/blog/tala-is-open-source/); [GitHub](https://github.com/terrastruct/TALA)). It's bundled by default starting with D2 0.9.0, invoked with a simple `--layout=tala` flag, and written in Go so other projects can embed it directly rather than shelling out to a service. "I especially look forward to the improvements that being open-source brings," the team wrote in the announcement, crediting contributors Gavin Nishizawa and Júlio César Batista for the bulk of the engineering.

High-quality open-source layout engines are genuinely rare — most serious ones stay locked inside commercial tools, because getting the aesthetics right takes years of unglamorous tuning. One fewer proprietary bottleneck in a corner of software tooling that a lot of engineers touch every week, quietly, is exactly the kind of improvement that doesn't make headlines and adds up anyway.
