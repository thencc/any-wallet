> ⚠️ **this is beta software**: no significant security audits have yet been performed so use at your own discretion.


# @thencc/any-wallet
a wallet connection handler for web3 dapps
![](./any-wallet-screenshot.png)

# [🌐 live-demo](https://thencc.github.io/any-wallet/) | [example dapp source code](https://github.com/thencc/any-wallet/blob/main/example-dapp/src/components/Demo.vue)

🔗 [npm](https://www.npmjs.com/package/@thencc/any-wallet) 🔗 [jsdelivr](https://www.jsdelivr.com/package/npm/@thencc/any-wallet)

## about
`any-wallet` provides a common interface layer between the dapp and the wallet so that dapp developers can treat any connected wallet the same way. any-wallet does not load a wallet's client library until it needs to / when the user starts interacting with that wallet. for optimal user experience across page loads, any-wallet saves the last connected account(s) to localstorage (dont worry, no secrets are saved, just the user's public address and a reference to which wallet they connected with).

currently supported chains + wallets:
- algorand
	- ✅ Pera
	- ✅ Inkey
	- ✅ MyAlgo
	- ✅ AlgoSigner 
	- ✅ Exodus 
	- ✅ Defly
	- ✅⚠️ Mnemonic (not secure client-side)


## usage

### install
```bash
npm i @thencc/any-wallet
# or
pnpm add @thencc/any-wallet
```

### import + construct
```ts
import {
	AnyWalletState
} from '@thencc/any-wallet';

const awState = new AnyWalletState();
```


### connecting
```ts
// connect pera
await awState.connectWallet('pera');

// or, connect inkey
const accts = await awState.connectWallet('inkey');

// now...
// accts[0] == awState.activeAccount;
```

### signing transactions
```ts
import { 
	AnyWalletState
} from '@thencc/any-wallet';

const awState = new AnyWalletState();

const txn1 = await algonaut.atomicSendAlgo({
	amount: 1000,
	to: receiverAddr,
	from: senderAddr // .from needed IF not authenticated
});

const assetId = 10458941;
const txn2 = await algonaut.atomicOptInAsset(assetId);

// prompts user for approval using current activeWallet as chosen by the user
const signedTxns = await awState.signTransactions([txn1, txn2]); // throws if user rejects txn
// "signedTxns" is an array of Uint8Array's (raw algorand txn bytes)

// now do what you want w the signed txns, like submit them to the network
const txnGroup = await algonaut.algodClient.sendRawTransaction(signedTxns).do();
console.log('txn id: ', txnGroup.txId);
```


### state
the `AnyWalletState` instance is enhanced with reactive proxy fields that update as you connect client wallets, sign transactions and change connected accounts. 

a few helpful things inside `AnyWalletState`
```ts
import { 
	AnyWalletState
} from '@thencc/any-wallet';

const awState = new AnyWalletState();

// access the current address
console.log(awState.activeAddress);

// boolean for if any of the wallets are doing some txn signing
console.log(awState.isSigning);
```

recall previous state (`localstorage`):
```ts
// even after a page reload, the dapp can access the last connected account(s) by initializing with the same storageKey, which uses localstorage (by default) to remember relavent state fields. 
import { 
	AnyWalletState
} from '@thencc/any-wallet';

const awStateA = new AnyWalletState({
	storageKey: 'state1'
});
const awStateB = new AnyWalletState({
	storageKey: 'state1'
});

// now... 
/// awStateA.activeAddress == awStateB.activeAddress
```


## using the mnemonic wallet (for dev!)
```ts
import {
	AnyWalletState
} from '@thencc/any-wallet';

const awState = new AnyWalletState();

let accts = await awState.connectWallet('mnemonic', 'uniform eager witness salt evolve pole envelope name supreme column begin venue decline blast finger grunt avoid people crawl during street priority diary ability lend');
```



## vue
when used with vue, you might need to re-render a component's `<template>` computations if you are displaying information stored in `awState` because these deep object changes arent tracked by the vue runtime. for this, there is the helpful method `subscribeToAccountChanges` which allows you to define a callback when the active account changes.

> Errors in builds have been observed if the entire `awState` is included in a component's `data`

> This note on reactivity applies to most frontend frameworks with components in some way: 
<br />• `this.requestUpdate()` in `lit`
<br />• `this.forceUpdate()` in `react`.

```ts
import {
	AnyWalletState
} from '@thencc/any-wallet';

const awState = new AnyWalletState();

// then in the vue component's mounted or setup hook you would add:
export default defineComponent({
	mounted() {
		let unsubscribe = awState.subscribeToAccountChanges(
			() => this.$forceUpdate()
		);

		// unsubscribe(); // call to stop callbacks
	},
});
```


## Notes
- this lib handles txn signing and is supposed to be used in conjuction with a lib that does txn construction + submitting (we recommend `@thencc/algonautjs` though `algosdk` works as well)
- some wallets (like defly/pera) require that the mobile app is set to the same net (testnet/mainnet) as requested for signing by the dapp


## Attributions

big thanks to [`txnlab/use-wallet`](https://github.com/TxnLab/use-wallet) for developing the react groundwork for this pkg
