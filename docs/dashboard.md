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

    - [**NEAR Lockup Balances**](#near-lockup-optional) _(if applicable)_

    - [**FT Lockup Balances**](#ft-lockup-optional) _(if applicable)_

-  **Transaction History:** This section provides a detailed record of all incoming and outgoing transactions. You can filter and sort transactions by date, type (payment, staking, exchange), and token. Click on individual transactions to view more details.
    
-   **Charts and Graphs:** Visual representations of your treasury's activity over time are displayed in this section. You can interact with these charts to adjust the timeframe and see how your treasury's value has fluctuated. This helps you identify trends and make informed decisions about your finances .

## NEAR Lockup (Optional)

If your treasury has a lockup account, this section displays the balance of tokens held within the lockup contracts. You'll be able to see details about the lockup period and any staking activity associated with those funds.

:::info
The Treasury **NEAR Lockup** account shown in the Dashboard is not related to the [Lockup section](management/lockup.md), where you can create new Lockups using your treasury funds for your own recipients, based on your custom dates and rules.
:::

<div class="screenshot">
<img src="/img/dashboard/lockup.png" width="50%" alt="treasury lockup" />
</div>

<br />

- **Start date:** The date when the vesting period for the lockup account began.
- **End date:** The date when the vesting period for the lockup account will end.
- **Original allocated amount:** The total amount of tokens initially allocated to the lockup account.
  - **Vested:** The portion of the original allocated amount that has become available for payments use according to the vesting schedule. _(This amount may or may not have already been used)_
  - **Unvested:** The portion of the original allocated amount that is still locked and will become available gradually according to the vesting schedule.
- **Available balance:** Amount of tokens spendable now. These tokens can be used for payments or staking.
- **Staking:** Amount of tokens currently staked.
  - **Staked:** Tokens that are currently staked with validators to earn staking rewards. You can unstake any amount of your staked tokens.
  - **Pending Release:** Tokens that have been unstaked and are now within a 48-hour waiting period before they become available for withdrawal.
  - **Available for withdrawal:** Tokens that have been unstaked and finished the 48-hour waiting period.
- **Locked:** Tokens that are currently restricted by the vesting schedule and cannot be used for payments until they become vested. These tokens can only be staked.
- **Reserved for storage:** A small amount of tokens required to maintain the account active and cover the storage costs.

## FT Lockup (Optional)

If your treasury has a custom Fungible Token (FT) lockup account, this section displays the balance of tokens held within the FT lockup contract. You'll be able to claim available funds, and see details about the FT lockup period and any staking activity associated with those tokens.

<div class="screenshot">
<img src="/img/dashboard/ftlockup.png" width="50%" alt="treasury FT lockup" />
</div>

<br />

- **Original Allocated Amount:** The total number of tokens assigned to you in this vesting schedule.
  - **Unreleased:** Tokens that are still locked and not yet available to claim under your vesting schedule.
  - **Unclaimed:** Tokens from earlier payout periods (_rounds_) that you haven’t claimed yet. These can be claimed together with the next unlock.
  - **Claimed:** Tokens you’ve already claimed and transferred to your DAO treasury.
- **Start Date:** The date this vesting schedule began.
- **Rounds:** The number of payout rounds completed out of the total scheduled.
- **Release Interval:** The time period between each payout.
- **Next Claim Date:** The next date when tokens will be available to claim.

### Claiming FT tokens

If you have FT tokens available to claim:
    
1.  Navigate to the **`Dashboard`** section.
    
2.  Click the **`Claim`** button under the **`Lockup`** sidebar.
    
3.  Confirm the transaction to claim your tokens.
    
<div class="screenshot">
<img src="/img/dashboard/ftlockup-claim.png" width="50%" alt="treasury lockup claim" />
</div>
