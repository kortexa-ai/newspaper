---
title: Homebrew hits 7.0, and it can now tell you when your software is vulnerable
kicker: Open Source
author: The Editors
summary: The volunteer-run package manager that most Mac developers touch daily shipped a major release with built-in vulnerability scanning, stronger sandboxing and a native app — a reminder that unglamorous tools improve too.
order: 2
---

Homebrew is the kind of software most people only think about when it breaks. It's the command-line package manager that installs and updates the smaller tools a huge share of Mac (and increasingly Linux) developers rely on daily, and it has quietly become part of the plumbing of software development itself. On September 13, the entirely volunteer-run project shipped Homebrew 7.0.0, its biggest release in a while ([brew.sh](https://brew.sh/2026/09/13/homebrew-7.0.0/)).

The headline addition is `brew vulns`, a new built-in command that checks every installed package against an open, OSV-format vulnerability database — no extra tooling required. For a project that sits between developers and the open-source supply chain, giving users an easy way to see which of their installed packages have known security issues, without leaving the tool they already use, is a genuinely useful piece of security hygiene made ambient rather than optional.

The rest of the release is a study in unglamorous maturity: sandboxing got stronger on both macOS and Linux, with Linux moving from Bubblewrap to the more modern Landlock sandboxing approach; downloads and installs run with more concurrency, cutting real wait time; and BrewUI, a native macOS graphical app, gives less command-line-inclined users a window into what's installed and why. The release also draws a firm line under old hardware — Homebrew is dropping support for macOS 10.15 entirely and moving Intel Macs to lower-priority "Tier 3" status, a decision the project explained bluntly: "If Apple and Microsoft's GitHub cannot continue supporting macOS Intel x86_64, sadly neither can Homebrew."

None of this is flashy. But Homebrew ships to enough machines that a security and performance release like this one moves the baseline for a huge number of developers overnight, at zero cost, maintained by volunteers with zero open issues logged at release time. That's the kind of progress that doesn't trend anywhere — it just makes tomorrow's `brew install` a little safer than yesterday's.
