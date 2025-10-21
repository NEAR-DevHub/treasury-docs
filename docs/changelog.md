---
sidebar_position: 10
sidebar_label: "Changelog"
title: Latest Changes
description: Latest changes and updates on NEAR Treasury.
---

## Roadmap

The NEAR Treasury team is working hard every day, simplifying the management of your treasury operations.
We're excited to share [our roadmap](https://github.com/NEAR-DevHub/.github/issues/12) and offer you a glimpse of our upcoming new features!

:::info
To learn more about upcoming features and improvements, check out the [NEAR Treasury roadmap](https://github.com/NEAR-DevHub/.github/issues/12).
:::

---

## Changelog

This section tracks the evolution of NEAR Treasury: find out what's new, what's fixed, or just take a trip down memory lane, remembering those bugs of yesterday.

## October 2025

**What's New ✨**

- Added Global Contract deployment support for Treasury instances: reduces treasury instance creation costs and enables centralized updates.
- Updated wallet selector in Web4 to the latest version.
  - Added support for Intear, Hot, and NEAR Mobile wallets.
  - Removed support for Here wallet.
- Added a timezone selector in `Settings` → `Preferences`, allowing users to choose their timezone and time format, with standardized date displays across NEAR Treasury.
- Added filter options in the `Settings` page: users can now filter by proposal type, creation date, status, approver, and creator.

**Bug Fixes 🐛**

- Fixed: Removed Vote buttons on expired NEAR Intents quotes.

---

## September 2025

**What's New ✨**

- Asset Exchange for NEAR Intents leveraging the OneClick API:
  - Shows info about USD values, network info, and more.
- Improved OneClick Exchange loading and error states.
- Added support to look for FT lockups deployed using Lockup factory.
- Added historical balance for NEAR Intents.
- Intelligent token decimal display formatting across the Treasury dashboard.
- Implemented a new design flow for [NEAR Intents deposits](payments/intents.md#making-deposits).
- Updated Deposit modal: improved the Deposit UI so users understand the difference between Sputnik DAO and NEAR Intents.
- [Display FT lockup portfolio in the Dashboard](dashboard.md#ft-lockup-optional): when users have a FT lockup attached to their treasury, it's presented in the Dashboard page. [Contact the support team](help/support.md) to get started.

**Bug Fixes 🐛**

- Fixed: Display Bitcoin network correctly and add token icon support.
- Fixed: Tooltip texts for quote deadline and estimated time.

---

## August 2025

**What's New ✨**

- [NEAR Intents support](payments/intents.md): the NEAR Treasury integration with [NEAR Intents](https://near-intents.org/) has been successfully completed. Now Sputnik-DAO treasuries can execute simple cross-network token payments via NEAR Intents.
- [Filter support for Payments](payments/manage-payments.md#filtering-payment-requests): filter by creation date, approvals, vote status, recipient, and requested tokens.
- Enhanced the [Create Asset Exchange Request](management/asset-exchange.md#creating-asset-exchange-requests) Modal with improved validation and user experience.
- Improved the payment details page and table view for [NEAR Intents payments](payments/intents.md).
- Filter support for Stake delegation: filter by amount, type (`stake`/`unstake`/`withdraw`/`whitelist`), and validator.

---

## July 2025

**What's New ✨**

- 📥 [Bulk Payment Import](payments/bulk-import.md): Upload multiple payment requests in one go using our Google Sheet template. Great for handling contributor payouts, grant rounds, and large payment sets.

- 👥 [Batch Member Management](settings.md#members): Admins can now add, edit, or remove multiple members in a single request. No more repetitive approvals for each change.

- 🤝 [NEARN Integration](https://docs.nearn.io/sponsor/treasury): You can now connect your [NEARN](https://nearn.io/) sponsor account directly to your treasury, making it easy to manage the entire contributor reward workflow – from approved submission to on-chain payments.

- ⚙️ [System Upgrades](settings.md#system-updates): We've rolled out background upgrades to all treasuries – including a switch to FastNEAR RPC and improved Web4 caching. You should notice faster load times and a more reliable experience. We've also built a scalable system update framework to support future contract and UI upgrades when needed.

:::tip
We strongly recommend using the Web4 Gateway for managing your treasury. It ensures you're always on the latest version with the best performance.
:::

---

## June 2025

**What's New ✨**

- 🔐 [Lockups](management/lockup.md): Now you can create and manage accounts with specific vesting conditions, such as grants. You can also directly manage your lockup accounts within NEAR Treasury, including staking, payment requests, and withdrawals.

- ↕️ [Asset Exchange](management/asset-exchange.md): Swap different assets using multi-signature approvals.

- 🔁 BOS Gateway Switching: Easily switch between your BOS gateways so you can access your treasury in your preferred way.

---

## April 2025

**What's New ✨**

- 🛡 Security update for NEAR Treasury: SputnikDAO V2 just passed a full audit with no critical findings. Same contract, verified stronger.

- 💾 No more starting over on NEAR Treasury: You can now save your Treasury setup as a draft and finish it whenever.

- 📂 One overview to see every DAO you're in — not just NEAR Treasury. Less friction. More flow.

---
