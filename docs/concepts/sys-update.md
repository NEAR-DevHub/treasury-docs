---
sidebar_position: 9
sidebar_label: "System Updates"
title: About System Updates
description: Update Treasury functionality including contract, policy, and app widget.
---

## About updates

The [system update](../settings.md#system-updates) allows Treasury developers to share important updates with treasury instances. These updates can relate to contract or frontend UI (e.g., Sputnik contract upgrades, DAO policy updates, or new UI features).
These available updates can be reviewed, approved, and applied manually by treasury administrators.

## Update Types

The following system updates are supported:

- **Web4 Contract**: Used to upgrade the underlying Web4 smart contract for the treasury instance to the latest version. Applying this update triggers a self-upgrade of the contract.

- **Widgets**: Updates the main application widget to the latest version from the reference account. Ensures the UI and logic are up-to-date with the latest features and bug fixes.

- **Policy**: Updates that change the DAO policy, such as voting rules, roles, or permissions. Applying this update creates a proposal to change the policy on the DAO contract.

- **DAO contract**: Upgrades the DAO contract itself (e.g., to a new version of Sputnik DAO). May involve deploying new contract code or migrating state.


## How System Updates Work

When a system update is published, treasury administrators may see a notification banner or badge indicating that a new update is available for their treasury instance. This is designed to help administrators and users stay informed about important changes, such as contract upgrades or policy updates.

### Banner Notifications

When an update is available and has not been marked as finished in your browser, a banner or notification will appear:

<div class="screenshot">

![System updates](/img/settings/update-banner.png)

</div>

If you visit the updates page and the system detects that your instance is already up to date (for example, the contract or widget has already been upgraded), the update will disappear from the list and the banner will be moved to the `History` tab.

:::info Why Updates May Disappear?

  - If you see an update notification but when you visit the [Settings page](../settings.md) the update disappears, this means the system has checked your instance and determined that the update is no longer needed (e.g.,  the upgrade may have already been applied—possibly by another admin or from a different browser—or the update request might have already been created and is still pending a vote).
  - This can be confusing, but it is expected behavior due to the decentralized and stateless nature of the [update tracking system](#how-update-status-is-tracked).

:::

### How Update Status is Tracked

There is no central server or database that tracks which updates have been applied for each instance or user. The system relies on local checks and the current state of your instance (e.g., contract version, widget version, policy) to determine if an update is still relevant.

The status of which updates have been applied or acknowledged is tracked in your browser's local storage. This means the update banner or notification is specific to your browser and device.

:::info Local storage

If you clear your browser storage or use a different browser/device, you may see update notifications again, even if you have already applied or dismissed them elsewhere.

:::

### Tips for Users

- If you want to keep a record of which updates have been applied, consider keeping your browser storage intact or using the same device for administrative actions.
- If you are collaborating with other admins, be aware that update status is not synchronized between users—each admin's browser tracks updates independently, but the system will always check the actual state of the instance before showing or hiding updates.

