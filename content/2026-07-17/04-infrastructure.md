---
title: A 1978 cryptosystem just became the world's standard defense against quantum attacks
kicker: Infrastructure
author: The Editors
summary: Classic McEliece, one of the oldest and most conservative encryption designs around, is now the first post-quantum algorithm adopted into a global ISO standard.
order: 4
---

Most of the internet's encryption today relies on math problems — like
factoring large numbers — that a sufficiently powerful quantum computer
could eventually crack. Governments and standards bodies have spent years
preparing replacements. This month, one of the oldest candidates crossed
a milestone the newer ones haven't reached yet.

The International Organization for Standardization has formally added
Classic McEliece to ISO/IEC 18033-2, its global standard for asymmetric
encryption, making it the first post-quantum cryptography algorithm to
achieve full ISO standardization
([Quantum Computing Report](https://quantumcomputingreport.com/post-quantums-classic-mceliece-achieves-global-iso-standardization/);
corroborated by [The Quantum Insider](https://thequantuminsider.com/2026/07/15/classic-mceliece-iso-standard-post-quantum-cryptography/)).
The standard, an amendment published July 15, means any of ISO's 177
member states can now build interoperable systems around it.

Classic McEliece isn't new — it dates to 1978, built on error-correcting
codes rather than the factoring and discrete-logarithm problems that
underpin RSA and Diffie-Hellman. That age is the point: the scheme has
withstood nearly five decades of attempted attacks, which is exactly the
kind of track record cryptographers want before trusting something to
protect data for the long haul. The tradeoff is bulky public keys, up to
1.3 megabytes, though its encrypted messages stay compact.

The stakes are less about tomorrow's computers than today's data.
Adversaries can already harvest encrypted traffic now and decrypt it later
once quantum computers catch up — a strategy security researchers call
"harvest now, decrypt later." Standards like this one give organizations
a vetted way to start closing that window before it opens.
