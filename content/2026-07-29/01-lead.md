---
title: A solo developer put a language model on an eight-dollar chip
kicker: Builders
author: The Editors
summary: Slava S. squeezed a 28.9-million-parameter storyteller onto an ESP32-S3 microcontroller — and left the bug that briefly inflated the model's own headline number sitting right there in the commit history.
lead: true
order: 1
---

Most AI news this year has been about scale: more parameters, more GPUs,
more billions. This week's most quietly delightful release runs the
opposite direction. Slava S., a developer in Odessa, Ukraine who goes by
slvDev on GitHub, built a 28.9-million-parameter language model that
runs entirely on an ESP32-S3 — a microcontroller that costs about $8,
has no operating system to speak of, and normally spends its life
blinking LEDs or reading sensors
([GitHub: slvDev/esp32-ai](https://github.com/slvDev/esp32-ai)).

The chip has 512KB of SRAM. A 28.9-million-parameter model, even
quantized, doesn't fit in that by a wide margin. Slava's way around it
borrows a trick from Google's Gemma models called Per-Layer Embeddings:
instead of holding the entire model in fast memory, he keeps the bulk of
it — a 25-million-parameter embedding table, about 25 million of the
model's 28.9 million parameters — sitting in the chip's 16MB of flash
storage, and reads roughly 450 bytes of it per generated token. Only the
much smaller computational core needs to live in SRAM. The whole
4-bit-quantized model weighs in at 14.9MB, small enough to fit
comfortably alongside everything else on the chip. Trained on the
TinyStories dataset — a corpus built specifically to teach small models
simple, coherent narrative — it writes short stories to an attached
screen at about 9.5 tokens per second, with zero network calls and zero
cloud dependency. He shipped it MIT-licensed, with training scripts and
the quantization code included, so anyone can reproduce or extend it.

It is, by design, a toy. The reduced "reasoning core" means the model
can write a passable short story but can't answer questions, follow
instructions, write code, or recall facts — those capabilities take
parameters the budget doesn't have. Slava isn't claiming otherwise: the
project's own documentation is upfront about what the model can and
can't do, and about being roughly 100 times larger than the previous
on-device record of a 260,000-parameter model, while still being tiny by
any standard measured against a modern LLM.

The nicest detail isn't technical at all. Rather than cleaning up the
repository's history before sharing it, Slava left in a bug he'd found
in his own parameter-counting code — one that had briefly inflated an
early version of the model's headline number — along with the commit
that corrected it. It's a small thing, but it's the opposite of how AI
projects usually get presented, all clean numbers and confident
demos. Here the mistake is just sitting in the log, dated, next to its
fix, for anyone who wants to see how the number actually got made.

The repository landed on Hacker News's front page on July 25 and has
kept circulating since, picking up well over a thousand stars in a few
days. None of that makes an on-chip storyteller a breakthrough in the
way a new frontier model is a breakthrough. But it's a useful reminder
that "AI" doesn't have to mean a data center: with the right
engineering, a meaningful chunk of a language model's behavior fits on
a chip cheaper than a sandwich, documented honestly enough that you can
watch the author get it wrong before he gets it right.
