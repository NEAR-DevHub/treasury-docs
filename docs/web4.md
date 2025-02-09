---
sidebar_position: 6
sidebar_label: "Web4"
title: About the Web4 hosting
description: Upgrading the web4 contract and setting social link preview metadata
---

# Web4

Instances created by the treasury factory, will get two accounts:

- `your-treasury-name.sputnik-dao.near`
- `your-treasury-name.near`

The first account will have the sputnik-dao contract deployed, and the second will get a web4 contract. [Web4](https://github.com/vgrichina/web4) contracts acts as a web server, so that you can get a dedicated page for your treasury in addition to gateways like https://near.social or https://dev.near.org. You can find the web4 page for your treasury at https://your-treasury-name.near.page.

## Upgrading the web4 contract

The [web4 contract for the treasury app](https://github.com/NEAR-DevHub/neardevhub-treasury-dashboard/tree/staging/web4/treasury-web4), is under constant development, and there may be newer versions available since your treasury instance was created.

If you wish to update your web4 contract to the latest version you can download the WebAssembly ( `.wasm` ) file from the account `treasury-testing.near`.

The easiest way to download the contract wasm is using [near-cli-rs](https://github.com/near/near-cli-rs), which you should install first if you don't already have it.

Once installed you can type the following in a terminal to download the `treasury-web4.wasm` file.

```bash
near contract download-wasm treasury-testing.near save-to-file treasury-web4.wasm network-config mainnet now
```

The next step is to deploy the contract to your treasury account. You can do this by typing the following (remember to replace `your-treasury-name` with your own treasury account name):

```bash
near contract deploy your-treasury-name.near use-file treasury-web4.wasm without-init-call network-config mainnet
```

Follow the instructions to sign the transaction using your preferred way of signing. You may access the web4 account with the same key that you used to create the treasury.

## Setting social link preview metadata

A feature of web4 is to provide metadata for social link previews. The treasury factory will set some defaults when creating the treasury, but you may set your own metadata by calling the `set_social_metadata` function of the web4 contract.

Here is an example that was used to set metadata for the treasury created at https://webassemblymusic-treasury.near.page ( remember to replace `webassemblymusic-treasury.near` with your treasury web4 account name.

```bash
near contract call-function as-transaction webassemblymusic-treasury.near set_social_metadata json-args '{"name": "WebAssembly Music NEAR treasury", "description": "NEAR Treasury for the WebAssembly Music project", "ipfs_cid": "bafybeihsid3qgrb2dd4adsd4kuwe3pondtjr3u27ru6e2mbvabvm4rocru"}' prepaid-gas '100.0 Tgas' attached-deposit '0 NEAR' sign-as webassemblymusic-treasury.near network-config mainnet
```

If you then share the link to https://webassemblymusic-treasury.near.page, you will get the following preview when e.g. using Twitter/X:

<img width="539" alt="image" src="https://github.com/user-attachments/assets/fc2ee19a-a5dd-4dd3-8e83-7c53ab8768ed" />

The metadata you set here will also be available for preview links via the near.social gateway. Here's how it looks like when sharing the link https://near.social/webassemblymusic-treasury.near/widget/app via Telegram.

<img width="472" alt="image" src="https://github.com/user-attachments/assets/66596f1c-2b18-4932-b066-dc5f75465759" />



