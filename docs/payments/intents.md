---
sidebar_position: 10
title: NEAR Intents
description: NEAR Intents User Guide.
---

## Overview

NEAR Intents is a powerful feature of the Treasury Dashboard that enables cross-chain asset management and payment processing. This system allows DAOs to receive deposits from multiple blockchain networks and create payment requests for various cryptocurrencies while maintaining assets in a unified interface.

:::info
NEAR Intents is currently available on selected treasuries. If you'd like to enable this feature on your Treasury, please [contact the support team](support.md).
:::

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
   - Features a green **`Deposit`** button for new deposits
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
   - The deposit modal will open with asset selection

<div class="screenshot">

![Dashboard with NEAR Intents](/img/intents/dashboard.png)

</div>

2. **Switch to NEAR Intents Tab**
   - Click on the **`NEAR Intents`** tab to access cross-chain deposits
   - This shows all supported assets and networks

<div class="screenshot">
<img alt="Network Selection Dropdown" src="/img/intents/net-select.png" width="60%" />
</div>

3. **Select Asset and Network**
   - Browse available assets or use the search function
   - Select the blockchain network (displayed with human-readable names)
   - Each network shows its native name (e.g., `ETH` for Ethereum, `BTC` for Bitcoin)

4. **Get Deposit Address**
   - The system generates a unique deposit address for your selected asset/network
   - QR codes are automatically generated for easy mobile wallet scanning
   - Copy the address or scan the QR code with your wallet

<div class="screenshot">
<img alt="Bitcoin Deposit" src="/img/intents/btc-deposit.png" width="60%" />
</div>

5. **Complete the Deposit**
   - Send your assets to the provided address
   - Deposits are processed automatically through the bridge infrastructure
   - Assets appear in your dashboard once confirmed on the source network


## Creating Payment Requests

NEAR Intents enables DAOs to create payment requests that utilize cross-chain assets for disbursements, including:
- **Cross-Chain Payments**: Send BTC, ETH, or other assets to external addresses
- **NEAR Native Payments**: Transfer wNEAR or other NEAR tokens
- **Multi-Asset Support**: Choose from any available asset in your treasury

### Creating a Payment Request

Follow the regular process to [create a payment request](payments.md#creating-payment-requests):

1. **Access Payment Interface**
   - Navigate to the **`Payments`** section
   - Select **`Create Request`**

2. **Configure Payment Details**
   - **Recipient**: Enter the destination address
   - **Asset**: Choose from available treasury assets
   - **Amount**: Specify the payment amount
   - **Description**: Add context for the payment

<div class="screenshot">
<img alt="BTC Payment Request" src="/img/intents/btc-payment.png" width="40%" />
</div>

:::info Address Validation
   - The system validates recipient addresses for the selected network
   - Format checking ensures compatibility with the target blockchain
   - Network-specific validation prevents errors
:::

3. **Submit for Approval**
   - Payment requests follow standard DAO governance processes
   - Council members vote on approval
   - Approved payments are executed automatically

## Troubleshooting

Here's a quick reference for troubleshooting common issues:

- **Deposit Not Appearing**
   - Check transaction status on source blockchain
   - Verify minimum confirmation requirements
   - Ensure correct deposit address was used
   - [Contact support](support.md) if delayed beyond expected timeframe

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
   - *`Proposal Required`*: Payment exceeds single-signer limit

