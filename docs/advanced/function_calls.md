---
sidebar_position: 5
sidebar_label: Function Calls
title: Function Calls
description: Call any contract method via a multi‑sig proposal.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

This section covers how to use Function Calls to interact directly with any smart contract on the NEAR network. This is an advanced feature that allows the DAO to execute any contract method via a multi-sig proposal.

<div class="theme-admonition theme-admonition-warning alert alert--warning admonition_LlT9"><div class="admonitionHeading_tbUL"><span class="admonitionIcon_kALy">
<svg viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"></path></svg>
</span>Warning: This is an advanced feature for technical users</div>
<div class="admonitionContent_S0QG"><p>Creating a custom transaction request is a powerful action. Mistakes, such as targeting the wrong contract or using incorrect arguments, can be irreversible. It is designed for users who are comfortable interacting directly with smart contracts. Please proceed with caution.</p>
</div></div>

:::info
This feature is disabled by default for security. To enable it for your treasury, please contact our [support team](../help/support.md).
:::

**Available actions:**

- [Creating Custom Function Call Requests](#creating-custom-function-call-requests)
- [Approving or Rejecting Requests](#approving-or-rejecting-requests)
- [Exporting Request History](#exporting-request-history)

---

## Creating Custom Function Call Requests

To create a request that calls a contract method:

1.  Navigate to the **`Function Calls`** section.
2.  Click the **`Create Request`** button.
3.  Fill in the fields in the modal:

    - **Contract ID**: The target account ID of the smart contract to call, e.g., `usdt.tether-token.near`.
    - **Method Name**: The name of the method to invoke, e.g., `ft_transfer`.
    - **Arguments (JSON)**: Valid JSON object with the method parameters. For example:

      ```json
      { "receiver_id": "alice.near", "amount": "1000000000000000000000000" }
      ```

      The modal validates JSON. Ensure numbers that represent token amounts are strings when required by the contract interface.

    - **Gas (Tgas)**: The gas limit for the call, specified in Tgas (1 Tgas = 10^12 gas units). Range: 0–300 Tgas. Typical values are 30–100 Tgas depending on the method complexity.
    - **Deposit (NEAR)**: Optional NEAR to attach to the call when the method requires funds, e.g., storage or token transfers.
    - **Notes (optional)**: Additional context for reviewers.

You can add multiple actions to the same proposal by clicking **Add another action**. All actions will execute in the listed order when the proposal is approved.

4.  Submit the request for approval.

<div class="screenshot">
<img src="/img/custom/create.png" width="40%" alt="Create custom function call request" />
</div>

Before submitting, double‑check the contract interface and argument schema. Incorrect method names or argument shapes will cause the transaction to fail at execution time.

---

## Approving or Rejecting Requests

Custom function call requests require approval from authorized members according to your treasury thresholds. To review and vote on pending requests:

1.  Navigate to the **`Function Calls`** section.
2.  In the **`Pending Requests`** tab, locate the request and click **`Review Request`** to review the payload (contract, method, args, gas, deposit).
3.  Cast your vote to **Approve** or **Reject**.

<div class="screenshot">

![Approve or Reject](/img/custom/approve.png)

</div>

Expired requests can no longer be approved. If the underlying contract method or parameters change, create a new request with the updated values.

---

## Exporting Request History

To export custom function call history to a `.csv` file:

1.  Navigate to the **`Function Calls`** section.
2.  Switch to the **`History`** tab.
3.  Click **`Export as CSV`**.

<div class="screenshot">

![Export](/img/custom/csv-export.png)

</div>
