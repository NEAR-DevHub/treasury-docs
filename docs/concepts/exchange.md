---
sidebar_position: 7
sidebar_label: "Exchange Backend"
title: Asset Exchange Backend
description: Using a ledger device to confirm your actions
---

Near Treasury utilizes the [Rhea Finance SDK](#about-rhea-finance), which enables token swaps through its [Smart Routing](#rhea-auto-router) feature.

In this article you'll find additional information about RHEA and the [Auto Router algorithm](#rhea-auto-router) used to get better prices, and better liquidity utilization compared to regular exchanges.

## About RHEA Finance

[RHEA Finance](https://rhea.finance/) is a community-led, multi-purpose DeFi platform built on the [NEAR Protocol](https://near.org) blockchain.

The platform is fully permissionless and removes the need for trusted intermediaries, prioritizing decentralization and censorship resistance. Anyone can trade or become a liquidity provider for a pool by depositing an equivalent value of each underlying token in return for pool tokens.
These tokens track pro-rata LP shares of the total reserves, and can be redeemed for the underlying assets at any time.

:::info
RHEA Finance's smart contract ([`v2.ref-finance.near`](https://github.com/ref-finance/ref-contracts)) swaps, provides liquidity, and contains all pairs or liquidity pools, made of reserves of two or three [NEP-141](https://nomicon.io/Standards/FungibleToken/Core) tokens ([ERC-20](https://eips.ethereum.org/EIPS/eip-20) equivalent on NEAR).
:::

## RHEA Auto Router

Auto Router, also known as Smart Routing, can be defined as the ability to find better prices for traders on RHEA Finance. This includes splitting the trade across multiple pools at once.

The Auto Router offers better prices and better liquidity utilization, and ultimately creates a win-win situation for market participants:

-    _Traders:_ better prices
-    _Liquidity Providers:_ fairer model (vs winner-takes-all approach)

:::tip
The Auto Router algorithm is open source, and available at [RHEA Finance GitHub](https://github.com/ref-finance/ref-ui/blob/main/src/services/smartRouteLogicWorker/smartRouteLogicSimple.js) repository.
:::

### Auto Router Design

RHEA Finance's Auto Router aims to find the best price for a trade. The algorithm takes advantage of all liquidity, using all pools when available:

-    Parallel pools
-    Intermediary pools

The Auto Router solution determines the best allocation across pools of the same pairs, and the best path using one hop or intermediary pool.

:::info
The Auto Router also leverages the [StableSwap](https://curve.fi/files/stableswap-paper.pdf) function, therefore combining both, normal and stable pools as potential intermediary pools.
:::

Here's a high-level flow chart of the Auto Router logic:

<div class="screenshot">

![smart router](/img/assets/smart-route.jpg)

</div>
