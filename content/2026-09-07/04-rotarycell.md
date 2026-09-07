---
title: An open-source hack turns any rotary phone into a working cell phone
kicker: Builders
author: The Editors
summary: Hobbyist fregacmols built RotaryCell, a reversible, battery-powered conversion that lets an unmodified vintage rotary telephone dial, ring, and talk over the modern cellular network.
order: 4
---

A rotary telephone hasn't been able to make a call on its own for years —
the copper landlines it was built for are mostly gone. RotaryCell, an
open-source project published this month by a maker going by fregacmols,
gives one back its voice without touching a single original part
([GitHub](https://github.com/fregacmols/RotaryCell);
[Hackaday](https://hackaday.com/2026/09/05/free-your-rotary-telephone-from-its-wire/)).

The build fits inside the phone's original case: a Lilygo board pairing an
ESP32-S3 microcontroller with a cellular modem, a Silvertel chip that
mimics a real phone line closely enough to drive the phone's mechanical
bell and read its rotary pulses, and a rechargeable battery, all wired in
without cutting, drilling, or otherwise altering the phone itself. Lift
the handset, get a dial tone; dial a number by spinning the wheel the way
generations of hands already know how; the phone rings, physically, using
its original mechanical striker, when a call comes in. Hackaday's write-up
put its appeal plainly: "We especially like that this allows the phone to
be used entirely unmodified."

It's a hobby project, not a shipping product — the repository describes
itself as an active engineering validation, with firmware still being
refined and documentation still catching up to the hardware. But it drew
real attention past the usual maker circles: the project's write-up
reached the front page of Hacker News, gathering more than 150 points and
dozens of comments from people trading notes on rotary-dial timing, modem
choices, and battery life.

There's no efficiency report or funding round behind this one — just
someone who wanted an old machine to work again, and open-sourced the
wiring diagrams and firmware so anyone else with a rotary phone in a
closet could do the same.
