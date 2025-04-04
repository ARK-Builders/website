---
title: What is "local-first"?
date: '2024-01-04'
updated_at: '2024-11-28'
draft: false
summary: 'Every day, millions of people create, edit and collaborate on digital files. In this post, we describe our vision of local-first architecture ⏤  where collaboration can occur in real time, without a big cloud in the middle.'
tags:
  - ARK
  - Local-first
image: /images/splash/collaboration-natalia-blauth.webp
authorId: doug
---

<!-- <img style="" src="/images/splash/collaboration-natalia-blauth.jpg" alt="Collaboration as it is seen by Natalia Blauth"> -->

Every day, millions of people create, edit and collaborate on digital files. The files could be text documents, spreadsheets or presentations. They could also be PhotoShop files, videos, code or even an industry specific format. As teams have dispersed geographically, using the cloud to share and collaborate on files has been a logical growth pattern — everyone has access to the files, and updates are kept in a centralized repository.

But there is a downside to “cloud first” collaborations. The biggest (and most expensive) downside is that once a team has “bought in” to a cloud service, they are also “locked in.” A third party now has an indirect ownership of your content. And that ownership comes at a cost — security, proprietary formats, but also a monthly recurring charge to keep your content in their cloud.

## Local-first architecture

What if we could have a similar user experience, but keeping the files stored locally on our device (or devices) and collaborate with others who also have copies local to their device? We gain all the benefits of a distributed storage and collaboration that we gained from the cloud, but we retain ownership and copies of our files.

In this post, we’ll discuss why building with a local-first architecture has benefits and advantages over cloud centered collaboration. The term was first coined by 'Ink & Switch,' and you can delve into their comprehensive vision on [their website](https://www.inkandswitch.com/local-first/).

## Local-first (old school)

In the old days, every person would work on a document on their computer, and save it locally. If they needed to share a file with a colleague, they might email a copy to them (share a disk, anyone?), wait for any edits, and then resume working on the returned copy. I know I am not the only person who worked on an executive presentation with a filename like: “1H-ExecProposal-1212-Doug-(Eds-edits)-final-final2.pptx” that made its way around the office for final approval.

I also remember making copies of my thesis, and storing them in different buildings, just in case there was a hard drive failure, a fire or other disaster.

## Cloud creation

As the cloud has become prevalent, we can create text documents in a Google Doc, spreadsheets in Office365, or collaborate on code with GitHub. PhotoShop can be run in Adobe cloud, bugs filed in Jira and more.

Editing a Google Doc with several people looks and feels like magic - we can see other people editing in real time, as we work on a different section. But no one actually has a copy of the file on their computer - we are editing on a Google server somewhere on the internet. Google has an “ownership” of our files.

All of our data is stored in the cloud, and it is easy to collaborate and work on files this way… until it isn’t.

In March 2021, customers of OVH Cloud who stored their files in the Strasbourg data center discovered this firsthand when their files went up in smoke:
![OVH datacenter on fire](/images/blogs/ovh_fire.jpg)

Ok, that’s a super extreme example - and everyone should save important files and deployments on multiple machines - whether local or cloud. But users have been locked out of Google Accounts. When you stop paying for BigCorp Cloud, how long until your data is removed? What if your card has expired, and the emails are going to a former employee's e-mail account? Will you lose your files forever? At a previous position, months of work was lost when a colleague decided that a specific tenant was no longer in use, and deleted it without looking at usage, or asking the team if the data on the server was still needed.

![Google recovery](/images/blogs/google_recovery.png)

All of the convenience of Cloud-first architecture is lost - as soon as we lose all of our files.

## Cloud with local files

Git is an example of cloud collaboration where the working documents are kept locally. I edit my code locally on my computer, and when it is completed, I can update the cloud repository (that is considered the reference point for all). Local versions on other devices can quickly become out of date as other users make updates. As local versions become out of date, the possibility of a conflict on future merges increases - adding time and energy to keep the code synchronized.

Files on GitHub (and other cloud tools like DropBox) use Content Addressable storage (CAS). Instead of a directory structure, each file is stored as a unique hash based on its content. Rather than relying on a location of the file, the file can be quickly and efficiently received by the hash. Use of content hashes also makes version control easy - by accessing an “older hash” of the file, users can revisit older incarnations of the file.

## New school local-first

What if we could edit our files locally, and share them with colleagues - instantly? No more emailing that PowerPoint with the ever growing file name - but using the internet to update files on every change.

Each colleague would have a distinct copy of the same file, and software running on each device would sync with one another as edits were being made. With a local-first and real-time sync, we gain many of the collaborational attributes of working in the cloud, but we also retain ownership of our content. We can leverage CAS to make file discovery easy, and also enable version control of our documents.

Alice has a copy, Bob has a copy, Charlie has a copy. When Charlie edits the file on a flight, the updates are synced as soon as his device has internet access again. Syncing is automatic, and most conflicts can be handled with automation (look for a future post on this), and human intervention is rarely needed. There can even be a copy or two of the document stored in the cloud as a backup. These copies are not the point of reference, but another copy of the same file, getting the same regular updates as all of the other local copies. Now, each file has multiple backups, collaboration is similar (if not identical) to cloud collaboration, the team retains ownership of the files and editing is no longer limited by network speeds - improving the performance.

## How do updates work?

Just as saving to the cloud and propagating the cloud changes outward- local changes on Alice’s machine are sent to Bob, Charlie and David. If the remote documents are not available (Alice is asleep, Bob closed his laptop and David’s battery died), they update as soon as they come back online. Optionally, files can be stored, updated and backed up on a private server, cloud or 3rd party server to improve availability of updates. Files can be updated over the internet, or over a local peer to peer network. Using the version control, we can revert to older versions if needed.

## Examples of local-first architecture

Here at ARK Builders, we are building a suite of applications that allow for easy sharing of files across platforms and across users and focus on local-first storage of content.

**[ARK Memo](https://www.ark-builders.dev/apps/memo/)**: Memo application for text and graphical notes with version control. Create content, save and continue on your idea. Make a change you are not happy with? Roll back to a previous version.

**[ARK Rate](https://www.ark-builders.dev/apps/rate/)**: The indispensable companion for travelers, enables swift conversions across multiple currencies without requiring an online connection! It also allows you to keep track of your assets scattered across various sources and to set exchange rate alerts for both fiat and crypto, ensuring no lucrative deal slips past you.

**ARK Navigator**: A file browser that embraces tags as the novel method to locate your data. It effectively eliminates irrelevant system files, enabling you to find your documents or photos with ease through the use of tags.

**ARK Shelf**: A cross-device bookmark keeper. Secure any intriguing webpage into your dedicated folder, independent of any browser. Later, conveniently retrieve this link on another device.

**ARK Retouch**: graphic assistant right in your pocket! This app is designed not only for photo editing but also for drawing, creating graphic notes with a stylus, and highlighting important information in screenshots.

All of these apps are Open Source, and we welcome contributions!
