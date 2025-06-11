---
sidebar_position: 4
sidebar_label: Stake Delegation
title: Stake Delegation
description: Stake and unstake your treasury's tokens.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

You can stake your treasury's tokens to earn rewards or unstake them to regain access to the funds.

<div class="screenshot">

![Stake Delegation](/img/screens/stake.png)

</div>

**Available actions:**

- [Staking Tokens](#staking-tokens)
- [Unstaking Tokens](#unstaking-tokens)
- [Withdrawal Requests](#withdrawal-requests)
- [Approving or Rejecting Staking Requests](#approving-or-rejecting-staking-requests)
- [Exporting Stake Delegation History](#exporting-stake-delegation-history)

---

## Staking Tokens

To stake tokens:
    
1.  Go to the `Staking` section.

2.  Click the `Create Request` button and select `Stake`.
    
3.  Select the token you want to stake.
    
4.  Choose the amount to stake and select a validator.
    
5.  Submit the staking request for approval.
    

<div class="screenshot">
<img src="/img/stake/stake.png" width="40%" alt="Create stake request" />
</div>

## Unstaking Tokens

To unstake tokens:

1.  Go to the `Staking` section.

2.  Click the `Create Request` button and select `Unstake`.
    
3.  Select the staked tokens you want to unstake.
    
4.  Submit the unstaking request for approval.
    
5.  Once approved, you may need to [initiate a withdrawal](#withdrawal-requests) to access the unstaked funds.

<div class="screenshot">
<img src="/img/stake/unstake.png" width="40%" alt="Create unstake request" />
</div>

## Withdrawal Requests

In some cases, you may need to create a withdrawal request to move funds out of your treasury. This can be necessary for unstaked tokens or other scenarios. To create a withdrawal request:

1.  Go to the `Staking` section.

2.  Click the `Create Request` button and select `Withdraw`.

3.  Submit the withdrawal request for approval.

:::info
By submitting a Withdrawal, you request to withdraw all available funds. A separate withdrawal request will be created for each validator.
:::

<div class="screenshot">
<img src="/img/stake/withdraw.png" width="40%" alt="Create withdraw request" />
</div>


## Approving or Rejecting Staking Requests

Stake actions require approval from authorized team members. To review and vote on pending requests:

1.  Go to the `Stake Delegation` section.
    
2.  View the list of pending requests.
    
3.  Review the details of each request.
    
4.  Cast your vote to approve or reject the request.

<div class="screenshot">

![Requests](/img/stake/approve.png)

</div>

## Managing Lockup Accounts

If your treasury has any funds in lockup accounts, you can monitor and manage them in the `Lockups` section. This includes viewing the lockup period, checking the balance, and initiating withdrawals when funds are released.

## Exporting Stake Delegation History

To export the stake delegation history to `.csv`:

1.  Navigate to the `Stake Delegation` section.
    
2.  Switch to the `History` tab.
    
3.  Click the `Export as CSV` button.


<div class="screenshot">

![Export](/img/stake/csv-export.png)

</div>
