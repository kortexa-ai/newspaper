---
title: The protocol AI agents use to reach tools just got sturdier
kicker: Open Source
author: The Editors
summary: The Model Context Protocol's biggest spec revision drops a chatty handshake, adds a formal deprecation policy, and hardens how agents authenticate — after ten weeks of real-world testing.
order: 3
---

The Model Context Protocol — the open standard that lets AI agents talk
to external tools and data sources in a common way — shipped its
largest specification revision since launch on July 28
([MCP blog: 2026-07-28 release candidate](https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/);
[changelog](https://modelcontextprotocol.io/specification/2026-07-28/changelog)).
The candidate itself was locked back on May 21 and spent ten weeks being
validated against real SDKs and client implementations before this
publication, rather than being finalized and shipped on paper alone.

The headline change is architectural: MCP drops the `initialize` /
`initialized` handshake and the `Mcp-Session-Id` header, making the
protocol stateless at its core. As the release notes put it, "any MCP
request can land on any server instance, and the sticky routing and
shared session stores that horizontal deployments needed before are no
longer required at the protocol layer" — a change aimed squarely at
teams running MCP servers behind ordinary load balancers instead of
sticky-session infrastructure. Alongside it, extensions now get their
own repositories, maintainers, and version numbers independent of the
core spec, and authorization gets six hardening proposals, including
validating the `iss` parameter per RFC 9207 and declaring OpenID
Connect application types at registration.

Perhaps the most consequential change for developers is procedural: MCP
now has a formal deprecation policy, moving features through Active,
Deprecated, and Removed stages with a minimum twelve-month window
between each. Roots, Sampling, and Logging are the first features
deprecated under the new rule, each with a replacement already
identified. It's an unglamorous piece of infrastructure work — the kind
that mostly shows up as fewer surprises later, for anyone building on
a standard that a growing share of the AI tooling world now depends on.
