---
sidebar_position: 4
sidebar_label: "Ledger"
title: Using a Ledger device
description: Using a ledger device to confirm your actions
---

# About Ledger devices

A [Ledger device](https://www.ledger.com/) lets you confirm transactions outside your computer. If connected with a ledger device, the app you are interacting with does not have any access keys to your account, and has to ask your ledger to confirm every blockchain transaction. Your private key, which is needed to sign a transaction, is then on the ledger device. With a web wallet or mobile wallet app, that private key is stored in the wallet application, on your computer or mobile device. With a ledger, you have a dedicated device for the private keys. While there are fewer attack surfaces on a separate ledger device, compared to a web or mobile wallet, you still need to trust the ledger just as much as any other wallet software for keeping your keys safe.

Confirming transactions with the ledger device requires a bit more effort than with a web or mobile wallet. When confirming the transaction, the ledger needs to be unlocked and the NEAR app must be open. You need to click through the transaction content and sign. Applications on BOS may time out while waiting for the transaction to confirm, and assume there's an error, while you are just in the process of clicking through the confirmation of the transaction on your ledger device.

# Prerequisites

Ledger devices have software installed to support its operations. There is an operating system, and there are apps for different blockchain. You need to make sure that the operating system and NEAR app is installed and up to date, otherwise you may get unexpected results. Consult with the documentation of your ledger device to make sure that it is updated.

Also make sure to navigate to the web4 version of your treasury, and that you are not already connected with another wallet. The direct ledger device support, described below, is only available through URLs on the form `https://<your-treasury-instance-name>.near.page`, and not through the `near.social` or `dev.near.page gateways`.

# Using a Ledger device with the Treasury app

When connecting a wallet, you may choose to use a ledger device directly. While many wallets like e.g. MyNearWallet or Meteor supports confirming transactions via a ledger device, there will be less steps if connecting the ledger device directly through the wallet selector. This guide also only covers the direct ledger device connection. To find documentation and support for connecting the ledger through another wallet, you need to consult with your wallet providers documentation resources.

To establish a direct connection from the web4 page of your treasury ( `https://<your-treasury-instance-name>.near.page` ), click the "Connect Wallet" button, and choose Ledger.

![alt text](/img/screens/wallet-selector-ledger.png)

Make sure your ledger device is connected, and that you have opened the NEAR app. Follow the instructions on screen to get you through the process for connecting it to the treasury application. Once connected you are ready to confirm every action through your ledger device. Every time you click confirm on the transaction modal screen, your ledger device will prompt you to confirm the transaction.

# Known limitations

The treasury app assumes a transaction to complete within some time frame, and may display a message that something went wrong if the transaction does not complete within that time. You may still be in the process of confirming the transaction on your ledger, while you see a toast with the error message on the screen. If this happens, you may still proceed and confirm. The transaction will be processed.

Ledger devices have limitations in transaction size. The treasury app may send large payloads, such as when the configuration of the DAO is updated. If this payload is too big, then signing a transaction using ledger may fail, and you may need to use another wallet for performing the action.

