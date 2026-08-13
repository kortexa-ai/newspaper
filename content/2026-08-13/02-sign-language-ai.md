---
title: A phone that reads sign language back to you, at last
kicker: Accessibility
author: The Editors
summary: Google DeepMind shipped a gloss-free translation model that lets Pixel 11 owners dictate texts and search queries by signing at the camera instead of typing.
order: 2
---

Voice dictation has existed on phones for well over a decade. Its
equivalent for sign language has not — until August 12, when Google
DeepMind shipped SL2T, a sign-language-to-text model, inside Gboard and
Live Transcribe on the Pixel 11
([Google DeepMind](https://deepmind.google/blog/putting-sign-language-ai-into-users-hands/)).
A Deaf signer can now draft a message, run a search, or query Gemini by
signing at the phone's camera, and respond to a Live Transcribe
conversation by signing back rather than typing.

The model skips the intermediate "gloss" annotations that older sign-
language systems relied on, which tend to lose the facial expressions and
spatial grammar that carry real meaning in signed languages. Instead SL2T
translates pose coordinates — extracted on-device, with video deleted
immediately after — straight into text, and Google says it scored 70
BLEURT on the FLEURS-ASL benchmark, well above any previously published
result. Training drew on more than 100,000 hours of video across over 50
sign languages, about a quarter of it American Sign Language, the
system's first supported language
([Google DeepMind](https://deepmind.google/blog/putting-sign-language-ai-into-users-hands/);
[Engadget](https://www.engadget.com/2234618/deepmind-newest-model-allows-pixel-11-devices-to-transcribe-sign-language-into-text/)).

Google says the model was shaped with Deaf collaborators throughout, not
just tested on them afterward, through its AI Sign Language Advisory
Committee and a jointly authored impact report. More languages, and a
model that can generate signs rather than only read them, are next.
