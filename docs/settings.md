---
sidebar_position: 7
sidebar_label: "Settings"
title: Settings
description: Configure your NEAR Treasury dashboard.
---

## Overview

The Settings section allows Admins (see [Roles & Permissions](https://docs.neartreasury.com/permissions)) to configure various aspects of your NEAR Treasury dashboard.

<div class="screenshot">

![Settings](/img/screens/settings.png)

</div>

## Pending Requests

When you first access the Settings section, you'll see a list of pending requests. These are requests to modify the treasury's configuration that are awaiting approval. You can review the details of each request, but only users with the Admin role can vote to approve or reject.

<div class="screenshot">

![Settings](/img/settings/request.png)

</div>

## Members

This section allows the Admin to manage the members of your treasury. The Admin can create a request to add new members, edit existing members’ roles, or remove members. These requests must be approved by Admins, based on the configured voting threshold. For a detailed explanation of the different roles and permission, refer to the [Roles & Permissions page](permissions.md).

<div class="screenshot">
<img src="/img/settings/members.png" width="90%" alt="members" />
</div>

### Adding Members

To add members to your treasury:

1.  Go to the `Settings` page.
2.  Select the `Members` tab.
3.  Click the `+ New Member` button.
4.  Enter the NEAR wallet address of the new member.
5.  Choose the member's role(s): [`Requestor`](permissions.md#1-requestor), [`Approver`](permissions.md#2-approver), or [`Admin`](permissions.md#3-admin).  You can select multiple roles for a member. See [Roles & Permissions](permissions.md) for a detailed explanation of each role.
6.  Click the Save button and confirm the transactions.
7.  Go to the Requests page to approve this request.

<div class="screenshot">
<img src="/img/settings/adding.png" width="40%" alt="add members" />
</div>

## Voting Thresholds

The Voting Thresholds section allows Admins to configure the voting policies for treasury transaction requests and treasury configuration requests.

### Setting Thresholds

To set the voting thresholds:

1.  Go to the `Settings` page.
2.  Select the `Voting Thresholds` tab.
3.  Select the permission group you want to apply the voting threshold to:
    -   `Admin`: For requests related to change in treasury settings (e.g. managing members, assigning roles, changing voting thresholds, or customizing dashboard appearance).
    -   `Approver`: For requests related to treasury transactions (e.g. payments, staking, asset exchange).
4.  Under `Voting Policy`, select how you want to base the number of votes required for a request to be approved:
    -   **Number of votes**: A fixed number of votes is required for a decision to pass, regardless of the total number of members. For example, if you select 2 and there are 5 total members, 2 members must vote to pass the request.
    -   **Percentage of members**: A percentage of total members is required for a decision to pass. For example, if you select 50% and there are 3 total members, 2 members must vote to pass the request.
5.  Review the eligible members from the role required to approve this type of request. If you need to change members, go to the `Members` page to add or remove people from that role.
6.  Click the `Submit Request` button and confirm the transactions.
7.  Go to the `Requests` page to approve this request.

<div class="screenshot">
<img src="/img/settings/thresholds.png" width="90%" alt="voting thresholds" />
</div>

## Voting Duration

The Voting Duration section allows Admins to set the timeframe during which team members can vote on pending requests. If the voting threshold is met to reach a decision, the request will be approved or rejected based on the voting results. If the voting period ends and there are not enough votes to reach a decision, the request will expire.

<div class="screenshot">
<img src="/img/settings/duration.png" width="70%" alt="voting duration" />
</div>

## Theme & Logo

The `Theme & Logo` section lets Admins personalize the look of your dashboard. You can upload a custom logo, choose a primary color, and set the theme to dark or light mode.

<div class="screenshot">
<img src="/img/settings/theme.png" width="70%" alt="theme logo" />
</div>

## System updates

The `System update` section allows Admins to review, approve, and apply pending updates to their treasury instance.
Updates such as contract upgrades, policy changes, or instance app widget changes are pushed by NEAR Treasury developers to provide new features, fix bugs, and improve the user experience.

:::tip
Visit [this page](concepts/sys-update.md) to learn more about the different [Update Types](concepts/sys-update.md#update-types) and how the system update works.
:::

### Reviewing System Updates

All updates must be manually approved or rejected by treasury administrators.
To review and vote on pending updates:

1. Go to the `System updates` section.
2. View the list of pending updates.
3. Review the details of each update.
4. Approve or reject the pending update request.

<div class="screenshot">

![System updates](/img/settings/updates.png)

</div>

:::info Policy updates
After an Administrator accepts a system [policy update](concepts/sys-update.md#update-types), you will see a new request under [`Pending requests`](#pending-requests), and Treasury users will need to vote on it.
:::
