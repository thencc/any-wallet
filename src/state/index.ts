import { computed, reactive, readonly } from '@vue/reactivity';
import { watch } from '@vue-reactivity/watch';
export { watch } from '@vue-reactivity/watch'; // re-export for frontend use // TODO figure out how to export just the state change handler, not this who func

// wallet things
import { WALLET_ID, WalletType, WalletsObj, createWallet } from "src/wallets";


import { AnyWalletLS, lsKey } from './localStored';
import { ClientType } from 'src/clientsNEW';


export const ALL_WALLETS: WalletsObj = {
	[WALLET_ID.PERA]: createWallet<ClientType<WALLET_ID.PERA>>(WALLET_ID.PERA),
	[WALLET_ID.INKEY]: createWallet<ClientType<WALLET_ID.INKEY>>(WALLET_ID.INKEY),
	[WALLET_ID.MYALGO]: createWallet<ClientType<WALLET_ID.MYALGO>>(WALLET_ID.MYALGO),
	[WALLET_ID.ALGOSIGNER]: createWallet<ClientType<WALLET_ID.ALGOSIGNER>>(WALLET_ID.ALGOSIGNER),
	// test: '123'; // breaks, as it should
};


export const AnyWalletState = reactive({
	activeAddress: '',
	activeWalletId: null as null | WALLET_ID,
	activeWallet: null as null | WalletType, // should be a computed...

	allWallets: ALL_WALLETS,
	enabledWallets: null as null | WalletsObj, // .wallets (should it be renamed this?)

	// part to store in localstorage/ls (DONT put Maps or Sets or Functions in here...)
	stored: AnyWalletLS,

	// computeds
	isSigning: readonly(computed(() => {
		let someWalletIsSigning = false;
		if (!AnyWalletState.enabledWallets) {
			// pass
		} else {
			for (let [k, w] of Object.entries(AnyWalletState.enabledWallets)) {
				if (w.signing) {
					someWalletIsSigning = true;
					break;
				}
			}
		}
		return someWalletIsSigning;
	})),

});



/*
// const lsKey = 'w3h';
// save '.stored' to localstorage
watch(
	() => AnyWalletState.stored,
	() => {
		// console.log('save me!', AnyWalletState.stored);
		localStorage.setItem(lsKey, JSON.stringify(AnyWalletState.stored));


		// update helpful top level prop
		let activeAddress = '';
		if (AnyWalletState.stored.activeAccount) {
			activeAddress = AnyWalletState.stored.activeAccount.address;
		}
		AnyWalletState.activeAddress = activeAddress;
	},
	{
		deep: true
	}
);

// this has to come AFTER the main state obj (not in the ls file)
watch(
	() => AnyWalletState.stored.activeAccount,
	(acct) => {
		// console.log('lib activeAccount changed:', acct);

		// update helpful top level prop
		let activeAddress = '';
		let activeWalletId: null | WALLET_ID = null;
		let activeWallet: null | WalletType = null;
		if (acct) {
			activeAddress = acct.address;
			activeWalletId = acct.providerId;
			activeWallet = AnyWalletState.enabledWallets ? AnyWalletState.enabledWallets[acct.providerId] || null : null;
		}
		AnyWalletState.activeAddress = activeAddress;
		AnyWalletState.activeWalletId = activeWalletId;
		AnyWalletState.activeWallet = activeWallet;
	},
	{
		deep: true,
		immediate: true
	}
);
*/




// TODO figure out how to let client user define their own onChange handler. use setOnChange( userFun ) ?
/**
 * try...
 *
 * import { onChange } ...
 * // set it
 * onChange = () => {
 * 	console.log('custom');
 * }
 */
export const onChange = (n: typeof AnyWalletState) => {
	console.log('onChange');
	console.log('latest', n);
};

watch(
	AnyWalletState,
	(latestState) => {
		console.log('[in pkg] something changed');
		onChange(latestState);
	},
	{
		deep: true
	}
);
