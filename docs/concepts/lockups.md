---
description: Secure way to lock NEAR tokens for a period of time
title: About Lockups
sidebar_position: 6
---

These docs include information about lockups in general, how they are implemented on NEAR, some challenges this causes, and how you can delegate your locked tokens.

## Lockup Basics

A **lockup** is when tokens are prevented from being transferred. The configuration of this lockup may vary significantly from case to case, but the same smart contract is used for each of them.

The most common configuration of lockup is to linearly release the tokens for transfer during the entire term of the lockup. For example, a 24-month linear lockup would make a small amount of tokens eligible for transfer with each block that passes until the full amount is free to transfer at the end of 24 months.

![Lockup vesting](@site/static/img/lockup/lockup-1.png)

### Smart contract

A Lockup is a special smart contract that ensures that the full, or the partial amount of tokens is not transferable until it is supposed to be.
The lockups are implemented as a separate smart contract from your main account.

:::tip
 Have a look at the [Lockup page](https://github.com/near/core-contracts/tree/master/lockup) in the NEAR GitHub repository for a deeper dive into Lockups.
:::

### Cliffs

Another factor in lockups is the **cliff**, which means that no tokens are unlocked until that date (often 12 months after the lockup start).

On that date, a large chunk of tokens is unlocked at once to make it as if the cliff never existed at all.

![Lockup cliff](@site/static/img/lockup/lockup-cliff.png)


#### Example

For example, a 4-year linear lockup with a 1-year cliff will have the following characteristics:

1. Months 0-12: all tokens are locked
2. Month 12+1 block: the first 25% of the tokens are immediately unlocked
3. Months 13-48: the remaining 75% of tokens are unlocked smoothly over each block of the remaining 36 months.
4. Months 48+: all tokens are unlocked


:::info
_See how NEAR tokens have been distributed and what lockups generally apply in_ [_this post_](https://near.org/blog/near-token-supply-and-distribution/)_._
:::

### Vesting

Vesting is an additional mechanism. It also locks the tokens, and it allows to configure 2 more options:

- Ability to terminate tokens vesting and refund non-vested tokens back.
- Cliff vesting period.

![Lockup vesting](@site/static/img/lockup/lockup-vesting.png)

### Vesting Termination

Vesting can be terminated by the `foundation` (an account configured at the moment of initializing the contract). It's important to understand how the termination works combining with the lockup schedule.

![Lockup vesting](@site/static/img/lockup/lockup-term.png)

At the moment of termination, we stop the vesting process, so the vested amount is going to remain constant after that; the lockup process keeps going and will unlock the tokens on its schedule. We continue to unlock the tokens by getting the minimum between unlocked and vested amounts.

## Delegating Locked Tokens

One of the unique features of the NEAR lockups is the ability to delegate tokens while they are still locked.

There are a few things you need to know:

1. You can only delegate to whitelisted pools, right now it's all the pools that end with `.poolv1.near`.
2. A Lockup contract can delegate to one pool at a time. If you want to delegate to another pool, you must withdraw all, and then delegate to a different pool.
3. The account must keep a minimum balance of `3.5 $NEAR` to cover storage for the lockup contract itself (transactions that will try to withdraw over that amount will just fail).
4. Delegation rewards can be withdrawn back to the lockup contract but are unlocked, so they can be withdrawn from it right away.
