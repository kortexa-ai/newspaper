---
title: A quantum computer just ran on the same programming model as an ordinary GPU
kicker: Builders
author: The Editors
summary: Quantum Machines linked live qubits to NVIDIA's chips over NVQLink, letting a single CUDA-Q program route work to whichever processor should handle it.
order: 5
---

Quantum computers are notoriously hard to program — not because the physics is unfamiliar to the engineers involved, but because getting a qubit to do anything useful has traditionally meant writing low-level control sequences by hand, a skill set held by a small population of specialists. On September 13, the quantum-control company Quantum Machines said it had run an end-to-end program written in NVIDIA's CUDA-Q — the same open platform developers use to mix classical and quantum code in ordinary languages like Python and C++ — across live qubits, GPUs and CPUs as one unified system, using NVIDIA's new NVQLink interconnect to move data between them ([The Quantum Insider](https://thequantuminsider.com/2026/09/13/quantum-machines-makes-quantum-computers-easier-to-program-with-nvidia-cuda-q-and-nvqlink/)).

The technical detail that matters is speed: measurements and control decisions moved between the quantum processor and classical chips in about a microsecond, fast enough to support real-time quantum error correction, which depends on classical computers reacting to a qubit's state before it decoheres. "We have been working closely with NVIDIA for a long time and are very happy to see these technologies and tools come together to enable quantum developers," said Quantum Machines CTO Yonatan Cohen.

The practical upshot is a narrowing of the gap between "quantum computing" and "computing." A developer who already knows how to write CUDA code no longer needs to also become a control-systems expert to put a quantum processor to work — one more brick removed from the wall between today's small community of quantum specialists and the much larger world of people who might eventually build something useful with the hardware.
