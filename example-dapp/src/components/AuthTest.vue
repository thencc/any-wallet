<template>
	<div class="auth-test-container">
		<p>
			AnyWallet testbed
		</p>

		<p>
			<button @click="doEnableWallets">doEnableWallets</button>
		</p>

		<div>
			<p>active acct:</p>
			<div v-if="AnyWalletState.stored.activeAccount">
				<p>
					<span style="font-weight: bold;">{{ AnyWalletState.stored.activeAccount.walletId }}</span>:
					<span>{{ AnyWalletState.stored.activeAccount.name }}</span>
				</p>
				<p style="font-family: monospace;">{{ AnyWalletState.activeAddress }}</p>
			</div>
			<div v-else>
				none
			</div>
		</div>

		<p>enabled wallets:</p>
		<div v-for="(p, k) of AnyWalletState.enabledWallets">
			<template v-if="p">
				<!-- <img :src="p.client?.metadata.icon" alt="" style="width: 40px; height: 40px;"> -->
				<span>{{ k }}</span>
				<button @click="p.connect()" :disabled="!!(p.isConnected)">connect</button>
				<button @click="p.disconnect()" :disabled="!(p.isConnected)">disconnect</button>
				<button @click="p.setAsActiveWallet()" :disabled="!(p.isConnected && !p.isActive)">set as active</button>
				<span>{{ p.initing ? '(loading)' : '' }}</span>

				<select v-model="selectedAddrFromDropdown" style="width: 100px;" :name="`w_${k}_select`" id="" @change="activeAddrChanged(selectedAddrFromDropdown)">
					<option v-for="a of p.accounts" :value="a">
						{{ getAddrFromAccount(a) }}
					</option>
				</select>
			</template>
		</div>

		<br />
		<button @click="doTxnSimpleAlgJs" :disabled="!(AnyWalletState.enabledWallets !== null)">
			doTxnSimpleAlgJs
		</button>

	</div>
</template>

<script lang="ts">
import {
	defineComponent,
	isReactive,
	markRaw,
	reactive,
	toRaw,
	// watch // doesnt work w mixed vue-r
} from 'vue';
// import { watch } from '@vue-reactivity/watch'; // works

import {
	AnyWalletState,
	signTransactions,
	enableWallets,
	WALLET_ID,
	watch,
} from '@thencc/web3-wallet-handler';


import {
	Algonaut,
	utils,
} from '@thencc/algonautjs';

const algonaut = new Algonaut({
	BASE_SERVER: 'https://testnet-api.algonode.cloud',
	INDEX_SERVER: '',
	API_TOKEN: { 'accept': 'application/json' },
	PORT:'',
	LEDGER: 'testnet',
});

export default defineComponent({
	data() {
		return {
			AnyWalletState,
			selectedAddrFromDropdown: AnyWalletState.stored.activeAccount
		}
	},
	mounted() {
		console.log('mounted');
		this.init();
	},
	methods: {
		async init() {
			// algonaut.checkStatus().then(h => {
			// 	console.log('h', h);
			// });

			// this.doEnableWallets();

			// works IF watcher comes from @vue-r/watch
			watch(
				() => AnyWalletState.stored.activeAccount,
				(acct) => {
					// console.log('activeAccount changed:', acct);

					// for ui
					this.selectedAddrFromDropdown = acct;
					this.$forceUpdate(); // re-render <template> since vue's watcher doesnt work for this
				},
				{
					deep: true,
					immediate: true
				}
			);

			watch(
				() => AnyWalletState.enabledWallets,
				(ew) => {
					this.$forceUpdate(); // re-render <template>
				},
				{
					deep: true,
					immediate: true
				}
			);

		},

		doEnableWallets() {
			console.log('doEnableWallets');

			let wallets = enableWallets({
				[WALLET_ID.INKEY]: {
					id: WALLET_ID.INKEY,
					config: {
						src: 'https://inkey-staging.web.app#123'
					}
				},
				// [WALLET_ID.INKEY]: true, // simply accept the defaults
				[WALLET_ID.PERA]: true,
				[WALLET_ID.MYALGO]: true,
				[WALLET_ID.ALGOSIGNER]: true,
				[WALLET_ID.EXODUS]: true,
				[WALLET_ID.DEFLY]: true,
				[WALLET_ID.MNEMONIC]: {
					config: {
						mnemonic: 'uniform eager witness salt evolve pole envelope name supreme column begin venue decline blast finger grunt avoid people crawl during street priority diary ability lend'
					}
				},
			});
			console.log('wallets', wallets);
		},

		getAddrFromAccount(a: any) {
			return a.address;
		},

		activeAddrChanged(x: any) {
			// console.log('activeAddrChanged', x);
			AnyWalletState.stored.activeAccount = x;
		},

		async doTxnSimpleAlgJs() {
			console.log('doTxnSimpleAlgJs');

			let addr = AnyWalletState.activeAddress;

			if (!addr) {
				alert('no .to address provided');
				return;
			}

			const txn = await algonaut.atomicSendAlgo({
				amount: 1000,
				to: addr,
				from: addr // .from needed IF algonaut doesnt have this.account populated
			});
			console.log('txn', txn);

			const txnArr = txn.transaction.toByte();

			try {
				let res = await signTransactions([txnArr]);
				console.log('res', res);
			} catch(e) {
				console.warn(e);
			}

			// send it!
			// 	const groupedTxn = await algonaut.algodClient.sendRawTransaction(inkeyRes.signedTxns).do();
			// 	console.log('groupedTxn', groupedTxn);
			// 	console.log('id: ', groupedTxn.txId);
		},
	}
});
</script>

<style scoped>
.auth-test-container {
	display: flex;
	flex-direction: column;
	width: 600px;
}

p {
	color: palevioletred;
}

button {
	padding: 0 12px;
	margin: 2px;
	/* border-radius: 0; */

	--h: 48px;
	height: var(--h);
	line-height: var(--h);
}
</style>
