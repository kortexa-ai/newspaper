---
title: A vendor-neutral standard arrives for the chips quietly running the cloud
kicker: Infrastructure
author: The Editors
summary: The Linux Foundation's OPI Project shipped a common API layer for DPUs and IPUs, the offload chips that data centers increasingly lean on but that speak no common language.
lead: false
order: 3
---

Data centers have quietly filled up with a new class of chip over the
past few years: DPUs and IPUs, dedicated processors that handle
networking, storage, and security tasks so a server's main CPU doesn't
have to. The catch is that every vendor's version speaks its own
proprietary language — its own SDK, its own toolchain, its own
operational quirks — which means adopting one from Intel, one from
Arm, or one from anywhere else has meant writing hardware-specific
code and validating it all over again for each.

On August 3, the Linux Foundation's Open Programmable Infrastructure
Project shipped its first coordinated release, called Abstraction,
aimed squarely at that fragmentation
([Linux Foundation](https://www.linuxfoundation.org/press/open-programmable-infrastructure-project-announces-first-coordinated-release-abstraction-to-standardize-dpu-and-ipu-ecosystems);
[Phoronix](https://www.phoronix.com/news/Open-Programmable-OPI-DPU-IPU)).
The release spans 26 repositories — APIs, software bridges, tooling,
Kubernetes integrations, provisioning and observability components —
built so that a workload or orchestrator can talk to any compliant
DPU without hardware-specific code. Alongside the API layer, the
project shipped its first "Blueprint," a production-grade pattern for
offloading Kubernetes network functions, built with F5/NGINX, Intel,
and Red Hat around Red Hat OpenShift and F5's NGINX application
delivery controller.

"DPUs and IPUs offer powerful new capabilities for offload,
acceleration, security, and lifecycle management, but the ecosystem
needs open APIs and repeatable deployment patterns to scale," said
the Linux Foundation's Arpit Joshipura. Red Hat's Simon Horman put it
more plainly: "Bringing standardization to the infrastructure layer is
essential for the future of cloud-native environments." It's not a
flashy release — nobody outside data-center operations teams will
notice it directly — but it's the kind of quiet plumbing work that
determines whether the next generation of infrastructure chips gets
locked to single vendors or stays open to whoever builds the best one.
