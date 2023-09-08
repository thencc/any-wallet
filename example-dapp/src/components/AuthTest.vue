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
			<div v-if="awState.activeAccount">
				<p>
					<span style="font-weight: bold;">{{ awState.activeAccount.walletId }}</span>:
					<span>{{ awState.activeAccount.name }}</span>
				</p>
				<p style="font-family: monospace;">{{ awState.activeAddress }}</p>
			</div>
			<div v-else>
				none
			</div>
		</div>

		<p>enabled wallets:</p>
		<div v-for="(p, k) of awState.allWallets">
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
		<button @click="doTxnSimpleAlgJs" :disabled="!(awState.activeWallet !== null)">
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
	WALLET_ID,
} from '@thencc/any-wallet';

const awState = new AnyWalletState({
	storageKey: 'state1',
});

import {
	Algonaut,
	// utils,
} from '@thencc/algonautjs';
const algonaut = new Algonaut();

export default defineComponent({
	data() {
		return {
			awState,
			selectedAddrFromDropdown: awState.activeAccount
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

		},

		doEnableWallets() {
			console.log('doEnableWallets');


			let wallets = awState.initWallets({
				[WALLET_ID.INKEY]: {
					id: WALLET_ID.INKEY,
					config: {
						src: 'https://inkey-staging.web.app#123',
						// src: 'http://localhost:5200/?wood',
						// align: 'right'
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
			awState.activeAccount = x;
		},

		async doTxnSimpleAlgJs() {
			console.log('doTxnSimpleAlgJs');

			let addr = awState.activeAddress;

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
				let res = await awState.signTransactions([txnArr]);
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
