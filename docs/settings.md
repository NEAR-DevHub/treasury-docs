---
sidebar_position: 5
sidebar_label: "Settings"
title: Settings Overview
description: Configure your NEAR Treasury dashboard.
---

# Settings

The Settings section allows Admins (see [Roles & Permissions](https://docs.neartreasury.com/permissions)) to configure various aspects of your NEAR Treasury dashboard.

![Settings](/img/screens/settings.png)

## Pending Requests

When you first access the Settings section, you'll see a list of pending requests. These are requests to modify the treasury's configuration that are awaiting approval. You can review the details of each request, but only users with the Admin role can vote to approve or reject. 

## Members

This section allows the Admin to manage the members of your treasury. The Admin can create a request to add new members, edit existing members’ roles, or remove members. These requests must be approved by Admins, based on the configured voting threshold. For a detailed explanation of the different roles and permission, refer to the [Roles & Permissions page](permissions.md).

### Adding Members

To add members to your treasury:

1.  Go to the `Settings` page.
2.  Select the `Members` tab.
3.  Click the `+ New Member` button.
4.  Enter the NEAR wallet address of the new member.
5.  Choose the member's role(s): `Requestor`, `Approver`, or `Admin`.  You can select multiple roles for a member. See [Roles & Permissions](permissions.md) for a detailed explanation of each role.
6.  Click the Save button and confirm the transactions.
7.  Go to the Requests page to approve this request.

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

## Voting Duration

The Voting Duration section allows Admins to set the timeframe during which team members can vote on pending requests. If the voting threshold is met to reach a decision, the request will be approved or rejected based on the voting results. If the voting period ends and there are not enough votes to reach a decision, the request will expire.

## Theme & logo

The `Theme & Logo` section lets Admins personalize the look of your dashboard. You can upload a custom logo, choose a primary color, and set the theme to dark or light mode.
