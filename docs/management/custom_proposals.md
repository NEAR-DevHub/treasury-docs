---
sidebar_position: 6
sidebar_label: Custom Function Call
title: Custom Function Call
description: Call any contract method via a multi‑sig proposal.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

Use a Custom Function Call to invoke any method on a NEAR account.

It can target your DAO itself, another DAO, or any other contract. This mechanism lets you extend the DAO’s capabilities without editing the DAO contract — commonly by calling helper contracts that act as agents, proxies, oracles, or banking modules. Provide JSON arguments, set a gas limit (in Tgas), and optionally attach a deposit, then submit the request for multi‑sig approval.

<div class="screenshot">

![Custom Function Call](/img/screens/my-treasury.png)

</div>

**Available actions:**

- [Creating Custom Function Call Requests](#creating-custom-function-call-requests)
- [Approving or Rejecting Requests](#approving-or-rejecting-requests)
- [Exporting Request History](#exporting-request-history)

---

## Creating Custom Function Call Requests

To create a request that calls a contract method:

1.  Navigate to the **`Custom Proposals`** section.
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

4.  Submit the request for approval.

<div class="screenshot">
<img src="/img/custom/create.png" width="40%" alt="Create custom function call request" />
</div>

:::::info
Double‑check the contract interface and argument schema before submitting. Incorrect method names or argument shapes will cause the transaction to fail at execution time.
:::::

---

## Approving or Rejecting Requests

Custom function call requests require approval from authorized members according to your treasury thresholds. To review and vote on pending requests:

1.  Navigate to the **`Custom Proposals`** section.
2.  In the **`Pending Requests`** tab, locate the request and click **`Details`** to review the payload (contract, method, args, gas, deposit).
3.  Cast your vote to **Approve** or **Reject**.

<div class="screenshot">

![Approve or Reject](/img/custom/approve.png)

</div>

:::::tip
Expired requests can no longer be approved. If the underlying contract method or parameters change, create a new request with the updated values.
:::::

---

## Exporting Request History

To export custom function call history to a `.csv` file:

1.  Navigate to the **`Custom Proposals`** section.
2.  Switch to the **`History`** tab.
3.  Click **`Export as CSV`**.

<div class="screenshot">

![Export](/img/custom/csv-export.png)

</div>
