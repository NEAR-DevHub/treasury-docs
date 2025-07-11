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

1.  Visit [neartreasury.com](https://neartreasury.com) and click **`Get Started`**.

2.  If you are not signed in, sign in with your NEAR Account using your preferred wallet.
    -   We recommend using [Meteor Wallet](https://meteorwallet.app).
    -   [Ledger users](user-guide/ledger.md) can connect directly without a named NEAR account or alternatively use a third-party wallet with Ledger support.
3.  Confirm your wallet.
    -   This is the account that will be used to pay for creating the treasury and will be your initial administrator account.

<div class="screenshot">
<img src="/img/create/treasury-creation-1.png" width="60%" />
</div>

---

4.  Enter a name for your treasury application (e.g., “myteam-treasury”).
    -   In this step, you are creating two accounts: a NEAR Account and a SputnikDAO account.

:::info
Currently, NEAR Treasury only supports creating new SputnikDAO accounts. To import an existing account, please [contact the support team](support.md).
:::

<div class="screenshot">
<img src="/img/create/treasury-creation-2.png" width="60%" />
</div>

---

5.  Add members to your treasury and define their permissions (`Requester`, `Admin`, `Approver`).
    -   Refer to the [Roles & Permissions](settings/permissions.md) for a detailed explanation of each group.

:::info
The voting thresholds policy will be set to one vote by default for all permission groups. You can modify those later in the [Settings](settings/settings.md).
:::

<div class="screenshot">
<img src="/img/create/treasury-creation-3.png" width="60%" />
</div>

---

6.  Review the Summary and confirm your data.

<div class="screenshot">
<img src="/img/create/treasury-creation-4.png" width="60%" />
</div>

---

7.  Confirm the transaction (deposit 9 NEAR). This will create the treasury and deploy the necessary contracts.

<div class="screenshot">
<img src="/img/create/treasury-creation-5.png" width="60%" />
</div>

---

8.  Congratulations! Your treasury is ready. You can access and manage your treasury using multiple gateways: Web4 (Recommended), Near Social, and Dev Near.

<div class="screenshot">
<img src="/img/create/treasury-creation-6.png" width="60%" />
</div>

## Next steps

Now that you have your Treasury up and running, be sure to check the following articles to learn more about the available features:

- [Dashboard](dashboard/dashboard.md)
- [My Treasuries](my-treasuries.md)
- [Payments](dashboard/payments.md)
- [Bulk Payment Import](user-guide/bulk-import.md)
- [Stake Delegation](dashboard/stake-delegation.md)
- [Asset Exchange](dashboard/asset-exchange.md)
- [Lockup](dashboard/lockup.md)
- [Roles & Permissions](settings/permissions.md)
- [Settings](settings/settings.md)
