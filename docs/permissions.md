---
sidebar_position: 8
sidebar_label: "Roles & Permissions"
title: Roles & Permissions
description: Configure roles & permissions
keywords: [NEAR Treasury, Permissions]
---

## Overview

NEAR Treasury uses a role-based permissions system to ensure secure and transparent management of your team’s treasury funds. There are two primary categories of actions within NEAR Treasury:

-   **Treasury Transaction Requests** involve actions related to the movement or management of the treasury's funds, such as creating payments, staking tokens, or exchanging assets.
-   **Treasury Configuration Requests** involve actions related to the setup and management of the treasury itself, such as adding or removing members, adjusting voting thresholds and durations, or changing the treasury's appearance.

Each member of your treasury can have one or more permission groups assigned that determines their capabilities within the system. There are three distinct groups: [**Requestor**](#1-requestor), [**Approver**](#2-approver), and  [**Admin**](#3-admin).

## Understanding the Permission Groups

### 1. Requestor

Allows to create requests related to the treasury's funds (e.g. treasury transaction requests).

**Can:**
-   Create payment requests.
-   Create staking, unstaking, and withdraw requests.
-   Create asset exchange requests.
-   Delete their own treasury transaction requests

**Cannot:**
-   Vote on treasury transaction requests created by others.
-   Create or vote on treasury configuration requests (e.g., changing settings, adding members).

### 2. Approver

Responsible for reviewing and voting on treasury transaction requests.

**Can:**
-   Vote to approve or reject treasury transaction requests created by Requestors.

**Cannot:**
-   Create treasury transaction requests.
-   Create or vote on treasury configuration requests.
-   Delete requests.

### 3. Admin

Responsible for configuring the treasury's settings and member configuration.

**Can:**
-   Create requests to add, edit, or delete members.
-   Create requests to update the voting duration.
-   Create requests to update the treasury's theme and logo.
-   Set the voting threshold required for Approvers and other Admins to approve requests.
-   Vote on any treasury configuration requests.
-   Delete their own configuration requests

**Cannot:**
-   Create treasury transaction requests (e.g., payments, staking).
-   Vote on treasury transaction requests.

### Important Notes

:::tip
-   A member can have multiple roles assigned. For example, a user can have both a `Requester` and `Approver` roles.
-   A user with multiple roles will have the combined permissions granted by each of their assigned roles.
:::

## Permission Matrix

The following table shows the actions users can perform for each role:

| Action | Requestor | Approver | Admin |
| --- | --- | --- | --- |
| Create Payment Requests | ✔ |  |  |
| Create Stake Delegation Requests (Stake/Unstake/Widthdraw) | ✔ |  |  |
| Create Asset Exchange Requests | ✔ |  |  |
| Delete Own Pending Treasury Transaction Requests | ✔ |  |  |
| Vote on Treasury Transaction Requests |  | ✔ |  |
| Create Add/Edit/Delete Member Requests |  |  | ✔ |
| Create Voting Duration Update Requests |  |  | ✔ |
| Create Theme/Logo Update Requests |  |  | ✔ |
| Create Voting Thresholds Requests |  |  | ✔ |
| Vote on Configuration Requests |  |  | ✔ |
| Delete Own Pending Configuration Requests |  |  | ✔ |

## Voting Thresholds

The Admin can set the voting thresholds for both Approvers and Admins. This determines the number of approvals required for a request to be executed. For example:

-   For Admin (Treasury Configuration Requests): A threshold of 50% would require at least 50% of all Admins to vote to approve or reject any configuration requests (changing voting policy).
-   For Approver (Treasury Transaction Requests: A threshold of 2 would require at least 2 Approvers to vote to approve or reject any transaction requests (e.g. staking).

See the Voting Thresholds section in the Settings page for detailed instructions on setting voting thresholds.

## Deleting Requests

Requestors and Admins can delete their own pending requests. For example, a Requestor can delete a pending translation request they created for a payment, or an Admin can delete a pending treasury configuration request they created to update the treasury theme. The delete action is automatically approved and does not require a separate vote. However, they cannot delete requests created by other members.

## Where to Manage Roles

You can manage member roles and permissions in two main areas:

1.  Treasury Creation: When you initially create your treasury, you’ll be guided through the process of adding members and assigning them roles.
2.  Settings: After creating your treasury, Admins can manage roles and related settings within the Settings page. This includes:
    -   Members: Add new members, edit existing members (including their assigned roles), and remove members.
    -   Voting Thresholds: Configure the voting policies for both Admin and Approver.
    -   Pending Requests: Approve or reject pending requests related to configuration changes. Only Admins can vote on these requests.

## Best Practices

-   Least Privilege: Assign the least privilege necessary for each member to perform their duties. This enhances security and reduces the risk of errors.
-   Regular Review: Periodically review assigned roles and permissions to ensure they align with your treasury's current needs.
-   Administrator Caution: Exercise caution when assigning the Admin role, as this role has extensive control over the treasury's settings.
