> ⚠️ **this is beta software**: no significant security audits have yet been performed so use at your own discretion.


# @thencc/any-wallet
is a wallet connection handler for web3 dapps
![](./any-wallet-screenshot.png)

# [🌐 live-demo](https://thencc.github.io/any-wallet/) | [example dapp source code](https://github.com/thencc/any-wallet/blob/main/example-dapp/src/components/Demo.vue)


## about
any-wallet provides a common interface layer between the dapp and the wallet so that dapp developers can treat any connected wallet the same way. any-wallet does not load a wallet's client library until it needs to / when the user starts interacting with that wallet. for optimal user experience across page loads, any-wallet saves the last connected account(s) to localstorage (dont worry, no secrets are saved, just the user's public address and a reference to which wallet they connected with).

currently supported chains + wallets:
- algorand
	- pera
	- inkey
	- myalgo
	- algosigner
	- exodus
	- defly
	- mnemonic (not "safe" but helpful for development)


## usage

### install
```bash
pnpm i @thencc/any-wallet
```

### import
```ts
import {
	AnyWalletState,
	connectWallet,
	subscribeToStateChanges,
	subscribeToAccountChanges,
	signTransactions,
	WALLET_ID,
} from '@thencc/any-wallet';
```


### connecting
```ts
// connect pera
await AnyWalletState.allWallets.pera.connect();

// or, simpler api
await connectWallet('pera');

// or, connect inkey
const accts = await AnyWalletState.allWallets[WALLET_ID.INKEY].connect();

// now...
// accts[0] == AnyWalletState.activeAccount;
```

### signing transactions
```ts
import {
	signTransactions
} from '@thencc/any-wallet';

const txn1 = await algonaut.atomicSendAlgo({
	amount: 1000,
	to: receiverAddr,
	from: senderAddr // .from needed IF not authenticated
});

const assetId = 10458941;
const txn2 = await algonaut.atomicOptInAsset(assetId);

// prompts user for approval using current activeWallet as chosen by the user
const signedTxns = await signTransactions([txn1, txn2]); // throws if user rejects txn
// "signedTxns" is an array of Uint8Array's (raw algorand txn bytes)

// now do what you want w the signed txns, like submit them to the network
const txnGroup = await algonaut.algodClient.sendRawTransaction(signedTxns).do();
console.log('txn id: ', txnGroup.txId);
```


### state
`AnyWalletState` is your friend – it is a reactive proxy object where you can access instances of each wallet (which are connected or active), which account + address the user has picked as active, etc.

a few helpful things inside `AnyWalletState`
```ts
import { AnyWalletState } from '@thencc/any-wallet';

// access the current address
console.log(AnyWalletState.activeAddress);

// boolean for if any of the wallets are doing some txn signing
console.log(AnyWalletState.isSigning);
```


## using the mnemonic wallet (for dev!)
```ts
import {
	connectWallet
} from '@thencc/any-wallet';

let accts = await connectWallet('mnemonic', 'uniform eager witness salt evolve pole envelope name supreme column begin venue decline blast finger grunt avoid people crawl during street priority diary ability lend');
```



## vue!
when used with vue, you might need to re-render a component's `<template>` computations if you are displaying information stored in `AnyWalletState` because these deep object changes arent tracked by the vue runtime. for this, there are 2 helpful functions: `subscribeToAccountChanges` and `subscribeToStateChanges` which allow you to define a callback when say the active account changes or when anything in the state tree changes.

```ts
import {
	AnyWalletState,
	subscribeToStateChanges,
} from '@thencc/any-wallet';

// then in the vue component's mounted or setup hook you would add:
export default defineComponent({
	mounted() {
		let unsubscribe = subscribeToStateChanges(
			() => this.$forceUpdate()
		);

		// unsubscribe(); // if you wanted to call this at some point the handler would stop getting called
	},
});
```

> Applies to most frontends with components in some way. `this.requestUpdate()` in `lit` or `this.forceUpdate()` in `react`.



## Notes
- this lib handles txn signing and is supposed to be used in conjuction with a lib that does txn construction + submitting (we recommend `@thencc/algonautjs` though `algosdk` works as well)
- some wallets (like defly/pera) require that the mobile app is set to the same net (testnet/mainnet) as requested for signing by the dapp
- ...


## Attributions

big thanks to txnlab/use-wallet for developing the react groundwork for this pkg
