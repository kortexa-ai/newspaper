---
title: Firefox closed the back door websites used to probe your home network
kicker: Infrastructure
author: The Editors
summary: Firefox 154 extends its local-network protections to WebSocket connections, so a public website can no longer quietly reach your router, printer, or smart TV.
order: 4
---

Mozilla shipped Firefox 154 on August 19, and with it closed a gap in a
protection it had only partly built. Firefox 153 introduced Local Network
Access safeguards to stop public websites from silently connecting to
devices on a user's home network — routers, printers, file servers, smart
TVs, IoT gadgets — but the rule didn't cover WebSocket connections, the
persistent, two-way channel much of the modern web uses for real-time
features. That left an opening: a malicious page could still use a
WebSocket to scan a home network, fingerprint what's on it, or probe
devices for vulnerabilities, all without asking
([CyberInsider](https://cyberinsider.com/firefox-154-blocks-silent-websocket-access-to-local-network-devices/)).

Firefox 154 extends the same permission prompt to WebSockets: when a public
site tries to open one to a local-network address, the browser now asks
first, and a user can allow it once, block it, or remember the choice for
future visits
([Linuxiac](https://linuxiac.com/firefox-154-adds-websocket-local-network-protection-and-new-ai-controls/)).
It's a small, plumbing-level fix, the kind that doesn't come with a
demo — just one more door in the house quietly getting a lock it should
have had already.
