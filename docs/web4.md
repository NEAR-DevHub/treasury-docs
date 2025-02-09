# Web4

Instances created by the treasury factory, will get two accounts:

- `<name>.sputnik-dao.near`
- `<name>.near`

The first account will have the sputnik-dao contract deployed, and the second will get a web4 contract. [Web4](https://github.com/vgrichina/web4) contracts acts as a web server, so that you can get a dedicated page for your treasury in addition to gateways like https://near.social or https://dev.near.org. You can find the web4 page for your treasury at https://<name>.near.page.

## Updating the web4 contract

The [web4 contract for the treasury app](https://github.com/NEAR-DevHub/neardevhub-treasury-dashboard/tree/staging/web4/treasury-web4), is under constant development, and there may be newer versions available since your treasury instance was created.

If you wish to update your web4 contract to the latest version you can download the WebAssembly ( `.wasm` ) file from the account `treasury-testing.near`.

The easiest way to download the contract wasm is using [near-cli-rs](https://github.com/near/near-cli-rs), which you should install first if you don't already have it.

Once installed you can type the following in a terminal to download the `treasury-web4.wasm` file.

```bash
near contract download-wasm treasury-testing.near save-to-file treasury-web4.wasm network-config mainnet now
```

The next step is to deploy the contract to your treasury account. You can do this by typing the following (remember to replace `<name>` with your own treasury account name):

```bash
near contract deploy <name>.near use-file treasury-web4.wasm without-init-call network-config mainnet
```

## Setting metadata



