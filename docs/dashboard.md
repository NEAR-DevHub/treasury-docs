---
sidebar_position: 2
sidebar_label: "Dashboard"
title: Dashboard
description: A centralized overview of your treasury's finances.
---

## Overview

The NEAR Treasury dashboard provides a centralized overview of your treasury's finances. Here's what you'll find and how to navigate it:

<div class="screenshot">

![Dashboard](/img/screens/dashboard.png)

</div>

-   **Total Balance:** At the top of the dashboard, you'll see a clear display of your treasury's total value across all supported tokens. This gives you an immediate snapshot of your overall financial health.
    
-   **Token Balances:** Below the total balance, you'll find a breakdown of the specific amounts held in each token. This section may include details like:

    - **Available Balance:** The amount readily available for spending or other actions.

    - **Staked Balance:** The amount currently staked to earn rewards.

    - **Pending Release:** For lockup accounts, this shows the amount of tokens scheduled to be released soon.

    - [**Lockup Balances (if applicable)**](#lockup-optional)

-  **Transaction History:** This section provides a detailed record of all incoming and outgoing transactions. You can filter and sort transactions by date, type (payment, staking, exchange), and token. Click on individual transactions to view more details.
    
-   **Charts and Graphs:** Visual representations of your treasury's activity over time are displayed in this section. You can interact with these charts to adjust the timeframe and see how your treasury's value has fluctuated. This helps you identify trends and make informed decisions about your finances .

## Lockup (Optional)

If your treasury has a lockup account, this section displays the balance of tokens held within the lockup contracts. You'll be able to see details about the lockup period and any staking activity associated with those funds.

:::info
The Treasury **Lockup** account shown in the Dashboard is not related to the [Lockup section](lockup.md), where you can create new Lockups using your treasury funds for your own recipients, based on your custom dates and rules.
:::

<div class="screenshot">
<img src="/img/dashboard/lockup.png" width="50%" alt="treasury lockup" />
</div>

<br />

- **Start date:** The date when the vesting period for the lockup account began.
- **End date:** The date when the vesting period for the lockup account will end.
- **Original allocated amount:** The total amount of tokens initially allocated to the lockup account.
- **Available balance:** Amount of tokens spendable now. These tokens can be used for payments or staking.
- **Staking:** Amount of tokens currently staked.
- **Locked:** Tokens that are currently restricted by the vesting schedule and cannot be used for payments until they become vested. These tokens can only be staked.
- **Reserved for storage:** A small amount of tokens required to maintain the account active and cover the storage costs.
