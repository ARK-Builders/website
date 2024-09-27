+++
title = "Run Latest Versions of macOS on Kernel Virtual Machines (KVM)"
date = 2024-09-24
template = "blog/page.html"
description="Virtual machines (VMs) are computers that run inside physical computers. They are software capable of emulating the real computer on computers with virtualization technology. They share resources like RAM, storage and CPU with the physical computer. The beauty of VMs is that they can run on any physical computer and run any operating system from Windows to Linux to macOS depending on the created VM configuration. There are some software that enables the creation and management of VMs. Some of them include VMWare (commercial), VirtualBox (opensource) and QEMU (opensource). Many people have access to VirtualBox or QEMU/KVM because they are opensource. In this post, we will explain how to get the latest versions of macOS running on Linux physical machine using QEMU/KVM."
[extra]

author = "Shubert"
+++

## What to do
The reason for using QEMU/KVM is that latest macOS starting from Ventura are hard to run on VirtualBox.

We will use Sonoma as an example here.

Clone [OSX-KVM](https://github.com/kholia/OSX-KVM) and follow the instructions in the `README`.

If you have followed all the steps from that repo you should have a machine that can run macOS Sonoma.

## The problem
But if your machine cannot boot up to Sonoma, go to the [Requirements](https://github.com/kholia/OSX-KVM#requirements) section on the repo’s `README`. The last requirement reads “A CPU with AVX2 support is required for >= macOS Ventura”.

## The solution
Now you need to check if your machine supports AVX2. To do this open terminal and run this command

```
grep -o 'avx[^ ]*' /proc/cpuinfo
```

If your machine has AVX2 support it will print `avx avx2` for each core in the machine’s CPU.

Then you can open `OSX-KVM` folder, and open to edit `OpenCoreBoot.sh` file

Edit the line where `MY_OPTIONS` is declared, and add `+avx2` to it’s values

Edit `-cpu` value to `host`

Save the file and run it. Sonoma should be able to load completely

### References
- [OSX-KVM](https://github.com/kholia/OSX-KVM/pull/207)
- [ostechnix](https://ostechnix.com/check-if-linux-system-supports-avx-and-avx2/)

