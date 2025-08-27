---
sidebar_position: 10
title: NEAR Intents
description: NEAR Intents User Guide.
---

## Overview

NEAR Intents is a powerful feature of the Treasury Dashboard that enables cross-chain asset management and payment processing. This system allows DAOs to receive deposits from multiple blockchain networks and create payment requests for various cryptocurrencies while maintaining assets in a unified interface.

<div class="screenshot">

![Dashboard with NEAR Intents](/img/intents/dashboard.png)

</div>

**Available actions:**

- [Asset Management](#asset-management)
- [Making Deposits](#making-deposits)
- [Creating Payment Requests](#creating-payment-requests)

---

## Asset Management

The NEAR Intents dashboard integrates seamlessly into the Treasury Dashboard, providing a comprehensive view of your cross-chain assets.

### Dashboard Components

1. **Total Balance Card**:
   - Displays aggregate USD value including NEAR Intents assets
   - Features a **`Deposit`** button for new deposits
   - Updates automatically when Intents balances change

2. **NEAR Intents Section**:
   - Shows individual asset balances with proper token precision
   - Displays assets from all supported networks
   - Includes icons for each blockchain and asset
   - Shows USD equivalent values when available

<div class="screenshot">

![Token Amount Display](/img/intents/token-amount-display.png)

</div>

### Supported Networks

| Display Name | Technical ID | Assets Supported |
|--------------|-------------|------------------|
| ETH | eth:1 | USDC, USDT, WETH, AAVE, UNI |
| BTC | btc:mainnet | BTC |
| SOL | sol:mainnet | SOL, USDC |
| BASE | eth:8453 | USDC, BRETT, DEGEN |
| ARB | eth:42161 | USDC, GMX, ARB |
| NEAR | near:mainnet | wNEAR, REF, AURORA |
| XRP | xrp:mainnet | XRP |
| TRON | tron:mainnet | TRX, USDT |

### Supported Assets

The system supports a wide range of assets including:
- **Native tokens**: ETH, BTC, SOL, XRP, TRX
- **Stablecoins**: USDC, USDT, DAI
- **DeFi tokens**: AAVE, UNI, COMP
- **NEAR ecosystem**: wNEAR, REF, AURORA
- **Memecoins**: SHITZU, PEPE, DOGE


## Making Deposits

NEAR Intents supports deposits from multiple blockchain networks into your DAO treasury.

### How to Make a Deposit

1. **Access Deposit Interface**
   - Click the green **`Deposit`** button in the Total Balance card

2. **Select NEAR Intents**
   - Click on the **`Intents`** button to access cross-chain deposits
   - This shows all supported assets and networks

<div class="screenshot">

![Dashboard with NEAR Intents](/img/intents/deposit.png)

</div>

3. **Select Asset and Network**
   - Browse available assets or use the search function
   - Select the blockchain network (displayed with human-readable names)
   - Each network shows its native name (e.g., `ETH` for Ethereum, `BTC` for Bitcoin)

4. **Get Deposit Address**
   - The system generates a unique deposit address for your selected asset/network
   - QR codes are automatically generated for easy mobile wallet scanning
   - Copy the address or scan the QR code with your wallet

:::info
The deposit address might change, so always get the latest deposit address before making a new transaction.
:::

<div class="screenshot">
<img alt="Network Selection Dropdown" src="/img/intents/net-select.png" width="70%" />
</div>

5. **Complete the Deposit**

   - Send your assets to the provided address
   - Deposits are processed automatically through the bridge infrastructure
   - Assets appear in your dashboard once confirmed on the source network

:::tip
We recommend starting with a small test transaction to ensure everything works correctly before sending the full amount.
:::

## Creating Payment Requests

NEAR Intents enables DAOs to create payment requests that utilize cross-chain assets for disbursements, including:
- **Cross-Chain Payments**: Send BTC, ETH, or other assets to external addresses
- **NEAR Native Payments**: Transfer wNEAR or other NEAR tokens
- **Multi-Asset Support**: Choose from any available asset in your treasury

### Creating a Payment Request

Follow the regular process to [create a payment request](../payments/manage-payments.md#creating-payment-requests):

1. **Access Payment Interface**
   - Navigate to the **`Payments`** section
   - Select **`Create Request`**

2. **Set the Treasury Wallet**
   - Select **`NEAR Intents`**

3. **Configure Payment Details**
   - **Requested Token**: Choose from available Intents assets
   - **Recipient**: Enter the destination address
     - 💡 _The recipient address should be of the chain where the token is. E.g., if the selected token is BTC on the Bitcoin blockchain, then the recipient should also be a Bitcoin chain address._
   - **Amount**: Specify the payment amount
   - **Description**: Add context for the payment

<div class="screenshot">
<img alt="BTC Payment Request" src="/img/intents/btc-payment.png" width="40%" />
</div>
<br />

:::info Address Validation
   - The system validates recipient addresses for the selected network
   - Format checking ensures compatibility with the target blockchain
   - Network-specific validation prevents errors
:::

4. **Submit for Approval**
   - Payment requests follow standard DAO governance processes
   - Council members vote on approval
   - Approved payments are executed automatically

5. **Payment is Executed**
   - Once the payment is approved and executed successfully, the user can seen the transaction links in the proposal details page.

<div class="screenshot">
<img alt="Payment Executed" src="/img/intents/payment-executed.jpg" width="70%" />
</div>


## Troubleshooting

Here's a quick reference for troubleshooting common issues:

- **Deposit Not Appearing**
   - Check transaction status on source blockchain
   - Verify minimum confirmation requirements
   - Ensure correct deposit address was used
   - [Contact support](../help/support.md) if delayed beyond expected timeframe

- **Payment Request Failures**
   - Verify sufficient balance in treasury
   - Check recipient address format
   - Ensure network compatibility
   - Review gas fee requirements

- **Balance Display Issues**
   - Refresh the dashboard
   - Check network connectivity
   - Verify RPC endpoint status
   - Clear browser cache if necessary

- **Error Messages**
   - *`Insufficient Balance`*: Treasury lacks required funds for payment
   - *`Invalid Address`*: Recipient address format is incorrect
   - *`Network Mismatch`*: Asset not supported on selected network
