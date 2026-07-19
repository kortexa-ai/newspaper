---
title: GitHub gives teams more say over how their AI reviewer behaves
kicker: AI
author: The Editors
summary: Copilot code review can now read setup instructions from a feature branch and recognize a repo's existing style guides, instead of forcing a separate config.
order: 4
---

The friction with most AI code-review tools isn't whether they catch
bugs — it's that trying out a new configuration usually means merging
it to the main branch first, or forcing every team in an organization
onto the same setup. GitHub's July 17 update to Copilot code review
chips away at both problems
([GitHub Changelog](https://github.blog/changelog/2026-07-17-copilot-code-review-customization-and-configurability-improvements/)).

Custom review instructions now load from a pull request's own feature
branch rather than only the base branch, so a team can iterate on and
test its review rules before merging them anywhere. The reviewer also
now recognizes `REVIEW.md` and `CLAUDE.md` files alongside its existing
formats, meaning guidelines a team already wrote for other tools get
picked up automatically instead of needing to be duplicated. A new
`copilot-code-review.yml` file lets a repository define its own setup
steps and dependencies, and network-firewall restrictions are now on by
default and configurable per team, rather than a single blanket
setting.

None of it is flashy. It's the unglamorous work of making a widely used
tool bend to how a given team already works, rather than the other way
around — the kind of update that mostly shows up as one fewer
workaround someone has to maintain.
