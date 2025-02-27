---
sidebar_position: 1
sidebar_label: "Getting Started"
title: Getting Started Guide
description: Introduction
---

This guide will walk you through setting up your NEAR Treasury.

## Before you begin

:::info
To create a Treasury, you'll need a [NEAR wallet](https://wallet.near.org) with at least 9 NEAR available to cover the data storage deposit for both Sputnik DAO and the frontend hosting.
:::

## Creating a new treasury

1.  Visit [neartreasury.com](https://neartreasury.com) and click <kbd>Get Started</kbd>.

2.  If you are not signed in, sign in with your NEAR Account using your preferred wallet.
    -   We recommend using [Meteor Wallet](https://meteorwallet.app).
    -   [Ledger users](ledger.md) can connect directly without a named NEAR account or alternatively use a third-party wallet with Ledger support.
3.  Confirm your wallet.
    -   This is the account that will be used to pay for creating the treasury and will be your initial administrator account.

<center>
<img src="https://github.com/user-attachments/assets/e3dcdced-f18e-4623-a174-a44173b7f298" width="60%" />
</center>

4.  Enter a name for your treasury application (e.g., “myteam-treasury”).
    -   In this step, you are creating two accounts: a NEAR Account and a SputnikDAO account.

:::tip
We currently only support creating new SputnikDAO accounts. To import an existing account, [contact our team](https://docs.neartreasury.com/support).
:::

<center>
<img src="https://github.com/user-attachments/assets/6b78a7d1-d856-49df-8df5-2b6e6dcb5419" width="60%" />
</center>

5.  Add members to your treasury and define their permissions (`Requester`, `Admin`, `Approver`).
    -   Refer to the [Roles & Permissions](https://docs.neartreasury.com/permissions) for a detailed explanation of each group.

:::info
The voting thresholds policy will be set to one vote by default for all permission groups. You can modify those later in the [Settings](https://docs.neartreasury.com/settings).
:::

<center>
<img src="https://github.com/user-attachments/assets/a5027564-b7be-43e2-aff5-8706c86fca3b" width="60%" />
</center>

6.  Review the Summary and confirm your data.

<center>
<img src="https://github.com/user-attachments/assets/4f21420f-54b2-4e64-a3fd-0e45c5fa4a9b" width="60%" />
</center>

7.  Confirm the transaction (deposit 9 NEAR). This will create the treasury and deploy the necessary contracts.

<center>
<img src="https://github.com/user-attachments/assets/95b01e19-0502-4bc2-81f7-9b67738ac0cf" width="60%" />
</center>


8.  Congratulations! Your treasury is ready. You can access and manage your treasury using multiple gateways: Web4 (Recommended), Near Social, and Dev Near.

<center>
<img src="https://github.com/user-attachments/assets/f601ec73-ae96-49a9-b502-42e530c2a86b" width="60%" />
</center>

## Next steps

Now that you have your Treasury up and running, be sure to check the following articles to learn more about the available features:

- [Dashboard](dashboard.md)
- [Payments](payments.md)
- [Stake Delegation](stake.md)
- [Settings](settings.md)
