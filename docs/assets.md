---
sidebar_position: 5
sidebar_label: Asset Exchange
title: Asset Exchange
description: Exchange your treasury's tokens.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

You can exchange your treasury's tokens to other supported assets and tokens, based on available swap providers.

<div class="screenshot">

![Asset Exchange](/img/screens/asset-ex.png)

</div>

**Available actions:**

- [Creating Asset Exchange Requests](#creating-asset-exchange-requests)
- [Approving or Rejecting Exchange Requests](#approving-or-rejecting-exchange-requests)
- [Exporting Asset Exchange Transactions](#exporting-asset-exchange-transactions)

:::info
Token swaps on Near Treasury are powered by Rhea Finance SDK’s [Smart Routing feature](concepts/exchange.md#rhea-auto-router).
:::

---

## Creating Asset Exchange Requests

To exchange one type of cryptocurrency for another:

1.  Navigate to the **`Asset Exchange`** section.
    
2.  Select the tokens you want to exchange.
    
3.  Input the desired amounts.
    
4.  Submit the exchange request for approval.

:::info Exchange considerations

- **Price slippage:** Exchange rates may fluctuate during the approval process for your asset exchange request.
  Setting a price slippage limit helps protect against unexpected changes. If the actual exchange rate exceeds your specified limit at the time of voting, the request will fail.

- **Price Deference:** The difference between the market price and the price you get.

- **Pool fee:** Fee collected by [RHEA Finance](concepts/exchange.md) and shared with liquidity providers as a reward for providing liquidity to the pool.

- **Additional Storage Purchase:** To collect a new token, you need to purchase storage space. After submission, 0.1 NEAR will be charged from your account as an additional transaction.
:::

<div class="screenshot">
<img src="/img/assets/create.png" width="40%" alt="Create exchange request" />
</div>


## Approving or Rejecting Exchange Requests

Asset exchange actions require approval from authorized team members. To review and vote on pending requests:

1.  Navigate to the **`Asset Exchange`** section.
    
2.  View the list of pending requests.
    
3.  Review the details of each request.
    
4.  Cast your vote to approve or reject the request.

<div class="screenshot">

![Requests](/img/assets/approve.png)

</div>

## Exporting Asset Exchange Transactions

To export asset exchange transaction records to a `.csv` file:

1.  Navigate to the **`Asset Exchange`** section.
    
2.  Switch to the **`History`** tab.
    
3.  Click the **`Export as CSV`** button.


<div class="screenshot">

![Export](/img/assets/csv-export.png)

</div>
