---
title: The internet's most-used encryption library gets its monthly tune-up
kicker: Open Source
author: The Editors
summary: OpenSSL 4.0.2 shipped Tuesday with fixes for eleven vulnerabilities, quiet maintenance work that keeps a huge share of the web's traffic secure.
order: 3
---

Most of the encryption protecting traffic between browsers, servers, and
apps around the world runs on OpenSSL, a project maintained largely by a
small team and a wider circle of volunteer contributors. On Tuesday, that
team shipped OpenSSL 4.0.2, closing out eleven vulnerabilities found since
the last patch cycle
([GitHub](https://github.com/openssl/openssl/releases/tag/openssl-4.0.2),
[9to5Linux](https://9to5linux.com/openssl-4-0-2-released-with-important-security-and-bug-fixes)).

None of the flaws were catastrophic — the most serious, a double-free bug in
how the QUIC server handles initial packets, was rated only Moderate — but
the list is a useful reminder of how much unglamorous work goes into keeping
the internet's plumbing sound. Fixes in this release cover a heap buffer
overflow in CMS key unwrapping, unbounded memory growth in the QUIC server's
incoming-packet queue, a memory leak in OCSP response checking, and a flaw
that could have allowed forged authentication tags on empty ciphertext
([LinuxCompatible](https://www.linuxcompatible.org/story/openssl-402-patches-11-vulnerabilities-including-moderate-quic-flaw)).

It's the second coordinated patch this month for OpenSSL's 4.0 and 3.6
branches, following the library's move earlier this year to drop older
deprecated protocols and add post-quantum support. None of it makes headlines
the way a new AI model does. But nearly every secure connection made today,
from your bank's app to your git push, likely passes through code the
project just made a little safer.
