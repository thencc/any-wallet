# web3-wallet-handler

name subject to change.

---

## TODO
- add docs
- can remove `buffer` + `algosdk` after most everything is working. reference + package.json deps
- whoever uses this pkg be sure to use `--no-optional` flag w pkg manager install like `pnpm i --no-optional` to no install all of the wallet's client apis. stands true w pkgs that depend on this pkg like algjs. then selectively install each. or should we default to all and let the next dev handle build/bundle/rollup optimizations like this. all just work?
- add correct err handling for browser extension not installed / OR is on mobile where extensions dont exist
-


## Attributions

special thanks to txnlab/use-wallet for developing the react groundwork for this pkg
