# any-wallet

name subject to change.

---

## TODO
- add docs
- can remove `buffer` + `algosdk` after most everything is working. reference + package.json deps
- whoever uses this pkg be sure to use `--no-optional` flag w pkg manager install like `pnpm i --no-optional` to no install all of the wallet's client apis. stands true w pkgs that depend on this pkg like algjs. then selectively install each. or should we default to all and let the next dev handle build/bundle/rollup optimizations like this. all just work?
- add correct err handling for browser extension not installed / OR is on mobile where extensions dont exist
- combine clients and wallets consts + types so PRing a new wallet is simpler (less files to change)
- note how @randlabs/myalgo requires buffer to be installed too
- note how pera (mobile + web) + delfy require that the mobile app is set to the same net (testnet/mainnet) as the dapp requesting a txn to be signed
- Q: try mnemonic connect, reload, then try to sign txn. cant because its lost the mnemonic from the input. should we store the mnemonic in ls or what?
- known err: if defly was connected, page reloads, then try test txn on Demo.vue page. lib has err constructing. but signing IS ok if connected + signed in same flow w/out reload
-


## Attributions

special thanks to txnlab/use-wallet for developing the react groundwork for this pkg
