---
title: Google's new robot models trade single-task tricks for whole-body intelligence
kicker: AI
author: The Editors
summary: Gemini Robotics 2 lets humanoids coordinate everything from footsteps to fingertips, and a demo robot used it to tie a knot and put away a watering can on command.
lead: true
order: 1
---

For years the hard part of humanoid robotics wasn't walking, or even
grasping — it was doing both at once, while also figuring out what to
do next. On July 30, Google DeepMind released Gemini Robotics 2, a
family of three models built to close that gap, moving robots past
scripted, single-task routines toward something closer to general
physical competence
([Google DeepMind](https://deepmind.google/blog/gemini-robotics-2-brings-whole-body-intelligence-to-robots/)).

The headline model, also called Gemini Robotics 2, is a
vision-language-action system that controls a humanoid body end to
end — legs, torso, arms and hands together — rather than treating
locomotion and manipulation as separate problems bolted together. In
one demonstration, Apptronik's Apollo 2 humanoid, fitted with
five-fingered "SharpaWave" hands, walked across a room to retrieve a
watering can and set it on a low shelf purely from a spoken
instruction, then used the same hardware to tie a knot and seal a
ziplock bag — tasks that demand a kind of fine manual dexterity
humanoid robots have historically struggled to generalize
([MarkTechPost](https://www.marktechpost.com/2026/07/30/google-deepmind-gemini-robotics-2-whole-body-control-dexterity-multi-robot-collaboration/)).

The second model, Gemini Robotics ER 2, handles embodied reasoning:
breaking a spoken goal into a multi-step plan, tracking progress over
several minutes, and correcting course when something goes wrong. It's
also built for teams rather than individuals, letting different robot
types — a wheeled base here, an arm there — communicate and divide up
a task that would otherwise need one machine to do everything, with
improved compliance checks so robots better recognize the humans
working alongside them
([Robotics & Automation News](https://roboticsandautomationnews.com/2026/07/31/google-deepmind-unveils-gemini-robotics-2-as-apptronik-humanoid-demonstrates-whole-body-ai/103802/)).

The third, Gemini Robotics On-Device 2, runs locally rather than
over a network connection, which matters for anything that can't
tolerate a lag between seeing and reacting. DeepMind says it can be
adapted to a new robot body — different arm, different gripper, a
whole new platform — using fewer than 200 example demonstrations and
a few hours of tuning, rather than the months of task-specific
training such systems have typically required. On a precision
insertion task using a Franka Duo gripper, the on-device model reached
89.6 percent accuracy.

"Unlocking the true potential of robotics requires moving past
single-task automation toward general-purpose intelligence," DeepMind
said in its announcement. That's a big claim, and Gemini Robotics 2 is
still an early step toward it — ER 2 is available now through Google
AI Studio and in private preview on the Gemini Enterprise Agent
Platform, while the VLA and on-device models remain limited to
early-access partners. But the shift it represents is real: robots
that used to need a separate program for every task are starting to
work from the same kind of general instruction-following intelligence
that reshaped software. Judging by a robot quietly tying a knot
because it was asked to, that shift is no longer just a lab demo.
