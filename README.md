> ⚠️ **this is beta software**: no significant security audits have yet been performed so use at your own discretion.


# @thencc/any-wallet
is a wallet connection handler for web3 dapps
![](./any-wallet-screenshot.png)

# [🌐 live-demo](https://thencc.github.io/any-wallet/) | [example dapp source code](https://github.com/thencc/any-wallet/blob/main/example-dapp/src/components/Demo.vue)


## about
any-wallet provides a common interface layer between the dapp and the wallet so dapp developers can treat any connected wallet the same way. any-wallet does not load a wallet's client library until it needs to / when the user starts interacting with that wallet. for optimal user experience across page loads, any-wallet saves the last connected account to localstorage (dont worry, no secrets are saved, just the user's public address and a reference to which wallet they connected with).

currently supported chains + wallets:
- algorand
	- pera
	- inkey
	- myalgo
	- algosigner
	- exodus
	- defly
	- mnemonic input (not "safe" but helpful for development)


## usage

### install
firstly, install it!
```bash
pnpm i @thencc/any-wallet
```

### import
then you're able to import the lib + use its features:
```ts
import {
	AnyWalletState,
	enableWallets,
	subscribeToStateChanges,
	subscribeToAccountChanges,
	signTransactions,
	WALLET_ID,
} from '@thencc/any-wallet';
```

### enable
to interact with any wallet(s), you need to call `enableWallets` (at least once)
```ts
// enables defaults
enableWallets();

// or, pick which wallet(s) you want to enable in the dapp
enableWallets({
	[WALLET_ID.INKEY]: true,
	[WALLET_ID.PERA]: true,
	[WALLET_ID.MYALGO]: true,
	[WALLET_ID.ALGOSIGNER]: true,
	[WALLET_ID.EXODUS]: true,
	[WALLET_ID.DEFLY]: true,
	[WALLET_ID.MNEMONIC]: true,
});

// or, initialize w specific wallet config
enableWallets({
	[WALLET_ID.INKEY]: {
		config: {
			align: 'right',
		}
	},
	['pera']: {
		config: {
			shouldShowSignTxnToast: true
		}
	},
	[WALLET_ID.ALGOSIGNER]: true, // simply accept the defaults
	[WALLET_ID.EXODUS]: true,
	['mnemonic']: {
		config: {
			mnemonic: '25 secret words'
		}
	},
});
```

after that, `AnyWalletState.enabledWallets` will be populated and connections + signing can now happen

### connecting
```ts
// connect pera
await AnyWalletState.enabledWallets.pera.connect();

// or, connect inkey
await AnyWalletState.enabledWallets![WALLET_ID.INKEY]?.connect();

// and if you want to be typescript safe...
if (AnyWalletState.enabledWallets) {
	if (AnyWalletState.enabledWallets[WALLET_ID.INKEY]) {
		let accts = await AnyWalletState.enabledWallets[WALLET_ID.INKEY].connect();
	}
}
```

### signing transactions
```ts
import {
	enableWallets,
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

// boolean for if any of the enabled wallets are doing some txn signing
console.log(AnyWalletState.isSigning);
```


## using the mnemonic wallet (for dev!)
this wallet can be connected via a mnemonic passed into the init params OR via html prompt input.
1. mnemonic via prompt input (the default behavior, no config change needed)

2. mnemonic via code config
```ts
enableWallets({
	[WALLET_ID.MNEMONIC]: {
		config: {
			mnemonic: 'uniform eager witness salt evolve pole envelope name supreme column begin venue decline blast finger grunt avoid people crawl during street priority diary ability lend'
		}
	},
});
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
