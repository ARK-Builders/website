---
title: Run latest versions of macOS on QEMU/KVM
date: '2024-09-24'
updated_at: '2024-09-24'
draft: false
summary: 'Virtual Machines are crucial for QA, where we need to test across different environments. However, the latest versions of macOS, such as Ventura, pose certain challenges for emulation within a Virtual Machine. In this post, we will explain how to get the latest versions of macOS running on a Linux physical machine using QEMU/KVM.'
tags:
  - QA
  - Desktop
  - Linux
  - MacOS
image: /images/splash/virtual-macos.webp
authorId: shubert
---

Virtual machines (VMs) are a powerful tool for both development and quality assurance (QA), enabling the emulation of various operating systems on a single physical computer, ranging from Windows to Linux to macOS, depending on the VM's configuration. This versatility is particularly useful in QA, where testing software across different environments is crucial. For self-funded open-source projects, VMs offer a cost-effective solution, as not all projects can afford expensive Apple equipment to test their software on officially run macOS.

Software like VirtualBox and QEMU/KVM facilitates the creation and management of VMs, making it easier to replicate diverse testing scenarios. However, the latest versions of macOS, such as Ventura, pose certain challenges for emulation within a Virtual Machine. In this post, we will explain how to get the latest versions of macOS running on a Linux physical machine using QEMU/KVM, enhancing your QA testing capabilities by leveraging the power of VMs and providing an affordable testing solution for open-source projects.

## Why QEMU/KVM?

The main reason to use QEMU/KVM is that it works better with the newest macOS versions, like Ventura, which often have problems running on VirtualBox. We can't run a macOS in QEMU right away though, but here really cool project [OSX-KVM](https://github.com/kholia/OSX-KVM) comes into play. We'll use macOS Sonoma as our example to show how it works.

## How to use OSX-KVM?

First of all, clone [OSX-KVM](https://github.com/kholia/OSX-KVM) and follow the instructions in the `README`. Chances are that, if you had followed all the steps from that repo, you already have a VM ready to run macOS Sonoma.

However, if your machine cannot boot up to Sonoma, the explanation could be in the [Requirements](https://github.com/kholia/OSX-KVM#requirements) section of the OSX-KVM repo’s `README`. There is a requirement of a “CPU with AVX2 support” to run macOS Ventura or a later version.

## Latest macOS versions and AVX2 support

Now you need to check if your machine supports AVX2. To do this open terminal and run this command:

```shell
grep -o 'avx[^ ]*' /proc/cpuinfo
```

If your machine has AVX2 support it will print `avx avx2` for each core in the machine’s CPU.

Then navigate to `OSX-KVM` folder, open `OpenCoreBoot.sh` file and do some edits:

1. Locate the line where `MY_OPTIONS` is declared, and add `+avx2` to it’s values.
2. Edit `-cpu` value to `host` entry.

Save the script and run it. Sonoma should load now.

### References

- [OSX-KVM](https://github.com/kholia/OSX-KVM/pull/207)
- [ostechnix](https://ostechnix.com/check-if-linux-system-supports-avx-and-avx2/)
