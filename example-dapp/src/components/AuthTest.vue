<template>
	<div class="auth-test-container">
		<p>
			AuthTest
		</p>

		<p>
			<button @click="doInitializeProviders">doInitializeProviders</button>
		</p>

		<div>
			<p>active acct</p>
			<div v-if="nccState.stored.activeAccount">
				<p>
					<span style="font-weight: bold;">{{ nccState.stored.activeAccount.providerId }}</span>:
					<span>{{ nccState.stored.activeAccount.name }}</span>
				</p>
				<!-- <p style="font-family: monospace;">{{ nccState.stored.activeAccount.address }}</p> -->
				<p style="font-family: monospace;">{{ nccState.activeAddress }}</p>
			</div>
			<div v-else>
				none
			</div>
		</div>

		<!-- <p>keys of initialized clients (computed):</p>
		<p>
			{{ nccState.clientsC.initedClientKeys }}
		</p> -->

		<p>clients loop</p>
		<div v-for="(p, k) of nccState.wallets">
			<span>{{k}}</span>
			<button @click="doAnyConnect(p)" :disabled="!!(p.isConnected)">connect</button>
			<button @click="doAnyDisconnect(p)" :disabled="!(p.isConnected)">disconnect</button>
			<button @click="p.setAsActiveWallet()" :disabled="!(p.isConnected && !p.isActive)">set as active</button>

			<select v-model="selectedAddrFromDropdown" style="width: 100px;" :name="`w_${k}_select`" id="" @change="activeAddrChanged(selectedAddrFromDropdown)">
				<option v-for="a of p.accounts" :value="a">
					{{ getAddrFromAccount(a) }}
				</option>
			</select>
		</div>

		<br />
		<button @click="doTxnSimpleAlgJs">
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

// TODO put w3h in algonaut
// import {
// 	// initClients,
// 	// nccState,
// 	// signTransactions,

// 	// PROVIDER_ID,
// 	// inkey, // client for configing
// 	// myalgo, // client
// 	// watch, // sometimes works, seriously.
// } from '@thencc/web3-wallet-handler';

// import * as w3h from '@thencc/web3-wallet-handler';

// works
// import { Algonaut, utils, initClients } from '@thencc/algonautjs';

// const w3h = {} as any;

import {
	Algonaut,
	utils,
	// web3yo,

	// w3h stuff
	// w3h,
	initClients,
	nccState,
	signTransactions,
	PROVIDER_ID,
	inkey, // client for configing
	// pera,
	// myalgo, // client
	watch, // sometimes works, seriously.
} from '@thencc/algonautjs';


// const w3h = web3yo();
// console.log('w3h', w3h);

// const initClients = w3h.initClients;
// const nccState = w3h.nccState;
// const signTransactions = w3h.signTransactions;
// // type PROVIDER_ID = w3h.PROVIDER_ID;
// const inkey = w3h.inkey;
// const myalgo = w3h.myalgo;
// const pera = w3h.pera;
// const watch = w3h.watch;

// type ClientsTypeObj = Awaited<ReturnType<typeof initClients>>;
// console.log('nccState', nccState);

// import { createClient } from '@thencc/inkey-client-js';

// const algonaut = new Algonaut({
// 	BASE_SERVER: 'https://testnet-api.algonode.cloud',
// 	INDEX_SERVER: '',
// 	API_TOKEN: { 'accept': 'application/json' },
// 	PORT:'',
// 	LEDGER: 'testnet',
// });

export default defineComponent({
	data() {
		return {
			nccState,
			selectedAddrFromDropdown: nccState.stored.activeAccount
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

			this.doInitializeProviders();

			// works IF watcher comes from @vue-r/watch
			watch(
				() => this.nccState.stored.activeAccount,
				// () => this.nccState.ls,
				(acct) => {
					console.log('(in v comp) activeAccount changed:', this.nccState.stored.activeAccount);
					// console.log('(in v comp) ls changed:', this.nccState.ls);

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
				() => this.nccState.wallets,
				(w) => {
					console.log('wallets changed:', w);
					this.$forceUpdate(); // re-render <template>
				},
				{
					deep: true,
					immediate: true
				}
			);

			// watch(
			// 	() => nccState.count,
			// 	(c) => {
			// 		console.log('count changed:', c);
			// 		this.$forceUpdate(); // re-render <template>
			// 	},
			// 	{
			// 		deep: true,
			// 		immediate: true
			// 	}
			// );

			//
			// setInterval(() => {
			// 	nccState.count++;
			// }, 2 * 1000);

		},

		async doInitializeProviders() {

			// empty arr inits all minus kmd
			const providersToInit = [
				PROVIDER_ID.INKEY,
				PROVIDER_ID.MYALGO,
				PROVIDER_ID.PERA,
			] as PROVIDER_ID[];
			// ] as w3h.PROVIDER_ID[];
			// ] as any[];

			// const inkeyClient = await createClient({
			// 	src: 'https://inkey-staging.web.app'
			// });
			// console.log('inkeyClient', inkeyClient);

			const inkeyClient: any = {};

			// api to strive for
			const clientsToInit = {
				// [1] true imports lib async + uses default client config
				'myalgo': true,

				// object syntax
				[PROVIDER_ID.PERA]: {
					// [2] imports lib async + uses this config
					config: {
						network: 'testnet', // for example. used by algosigner for field in class. but inkey would pass to client gen func.
						// src: '',
						// + contains sdkConfig
					},

					// [3] pass an already initialized + configured sdk of this wallet
					sdk: await inkeyClient.createClient({}),

					// FYI can pass # 2 or 3 but not both.
				}
			};

			const enabledClients = {
				[PROVIDER_ID.INKEY]: inkey.init({
				// [w3h.PROVIDER_ID.INKEY]: inkey.init({
					clientOptions: {
						// iFrameUrl: 'http://localhost:5200',
						iFrameUrl: 'https://inkey-staging.web.app',
						// iFrameUrl: 'https://inkey-staging--pr133-refactor-for-inkey-c-nz9xfhhh.web.app',
					},
					// clientOptions: undefined,
					// clientStatic: inkeyClient,
				}),
				// [PROVIDER_ID.MYALGO]: myalgo.init({}),
				// [PROVIDER_ID.PERA]: pera.init({}),
			};

			// const rps = await initClients(providersToInit);
			const rps = await initClients(enabledClients);
			console.log('rps', rps);

		},

		getAddrFromAccount(a: any) {
			return a.address;
		},

		activeAddrChanged(x: any) {
			console.log('activeAddrChanged', x);
			this.nccState.stored.activeAccount = x;
		},

		// async doAnyConnect(p: BaseClient ) {
		async doAnyConnect(p: any) {
			console.log('doAnyConnect', p);

			// this.nccState.wallets?.inkey.accounts.push('test')

			// let connectRes = await p.client.connect();
			let connectRes = await p.connect();
			console.log('connectRes', connectRes);
		},
		async doAnyDisconnect(p: any) {
			console.log('doAnyDisconnect', p);

			let disconnectRes = await p.disconnect();
			console.log('disconnectRes', disconnectRes);
		},

		async doTxnSimpleAlgJs() {
			console.log('doTxnSimpleAlgJs');

			let addr = this.nccState.activeAddress;

			if (!addr) {
				alert('no .to address provided');
				return;
			}


			// const txn = await algonaut.atomicSendAlgo({
			// 	amount: 1000,
			// 	to: addr,
			// 	from: addr // .from needed IF algonaut doesnt have this.account populated
			// });
			// console.log('txn', txn);

			// const txnArr = txn.transaction.toByte();

			// try {
			// 	let res = await signTransactions([txnArr]);
			// 	console.log('res', res);
			// } catch(e) {
			// 	console.warn(e);
			// }




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
