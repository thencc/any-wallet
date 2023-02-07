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

		<p>keys of initialized clients (computed):</p>
		<p>
			{{ nccState.clientsC.initedClientKeys }}
		</p>

		<!-- <p>
			<button @click="doConnectInkey">doConnectInkey</button>
		</p>

		<p>
			<button @click="doConnectMyalgo">doConnectMyalgo</button>
		</p>

		<p>
			<button @click="doConnectPera">doConnectPera</button>
		</p> -->

		<p>clients loop</p>

		<!-- works -->
		<!-- <div v-for="(p, k) of rps"> -->
		<!-- <div v-for="(p, k) of nccState.clients.inited"> -->

		<!-- <div v-for="(p, k) of nccState.clients.fullClients"> -->

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

		<button @click="doTxnSimpleAlgJs">
			doTxnSimpleAlgJs
		</button>

		<p>
			handyWallet ?
			{{ hw.hello }}
			{{ hw.appStateProxy.state.count }}
		</p>


		<!-- <p>
			<button @click="changeStoredState">changeStoredState</button>
		</p> -->

		<!-- <p>
			<button @click="popProvs">pop provs</button>
		</p> -->

		<!-- <p>
			ips
			{{ ips }}

			inkProv
			<button v-if="inkProv" @click="inkProv.connect">inkey connect</button>
		</p> -->

		<!-- <p>
			provs
			<button v-for="prov of hw.appStateProxy.state.providers" @click="prov.connect()">connect</button>
		</p> -->
	</div>
</template>

<script lang="ts">
import {
	defineComponent,
	isReactive,
	markRaw,
	reactive,
	toRaw,
	// watch
} from 'vue';
import { watch } from '@vue-reactivity/watch'; // works

// static algosdk
// import algosdk from "algosdk";

import {
	handyWallet,
	initClients,
	initializeProviders,
	reconnectProviders,
	nccState,

	signTransactions,

	PROVIDER_ID,
	inkey, // client for configing
	myalgo, // client

	// getNccState as getNccState2, // how to name import
	// watch as watchIt // doesnt work yet its the exact same thing....
	// watch
} from '@thencc/web3-wallet-handler';

// reactive wrapper needed to make vue renderer update on changes
const hw = reactive(handyWallet);
console.log('handyWallet', handyWallet);

// const handy = getHandy();

// or the modular way
// const {
// 	clients,
// 	providers,
// 	connectedAccounts,
// 	defaultAccount,
// } = getHandy();

type ClientsTypeObj = Awaited<ReturnType<typeof initClients>>;

// const nccState = getNccState();
console.log('nccState', nccState);

// watch(
// 	nccState.rps,
// 	(r) => {
// 		// console.log('rps changed:', nccState.rps);
// 		console.log('rps change:', r);
// 	},
// 	{
// 		deep: true,
// 		immediate: true
// 	}
// );

// watch(
// 	() => nccState.rps,
// 	(r) => {
// 		console.log('(outside) rps changed:', nccState.rps);
// 		// console.log('(in lib) rps change:', r);
// 	},
// 	{
// 		deep: true,
// 		immediate: true
// 	}
// );

// watch(
// 	() => nccState.ls.connectedAccounts,
// 	() => {
// 		console.log('outside connectedAccounts changed:', nccState.ls.connectedAccounts);
// 	},
// 	{
// 		deep: true,
// 		immediate: true
// 	}
// );

import { stately } from '../state-proj';
// const stately2 = reactive( markRaw(stately) );
// const stately2 = reactive(stately);
// const stately2 = {...stately}; // nope
// const stately2 = reactive(toRaw(stately));
// const stately2 = toRaw(stately);
// console.log('stately2', stately2);

import { Algonaut, utils } from '@thencc/algonautjs';
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
			// handyWallet,
			// state: handyWallet.appStateProxy,
			hw,
			// handy,

			ips: null as any,
			inkProv: null as any,

			// rps: [] as any,
			rps: undefined as ClientsTypeObj,

			nccState,
			stately,
			// stately2,

			// selectedAddrFromDropdown: null as any
			selectedAddrFromDropdown: nccState.stored.activeAccount
		}
	},
	mounted() {
		console.log('mounted');
		this.init();
	},
	watch: {
		'nccState.activeAddr': {
			immediate: true,
			handler(a: any) {
				console.log('activeAddr change:', a);
			}
		},
		'stately.someAddr': {
			immediate: true,
			handler(a: any) {
				console.log('someAddr change:', a);
			}
		},
		// 'stately2.someAddr': {
		// 	immediate: true,
		// 	handler(a: any) {
		// 		console.log('(stately2) someAddr change:', a);
		// 	}
		// },
	},
	methods: {
		async init() {
			// console.log('handy', handy);

			algonaut.checkStatus().then(h => {
				console.log('h', h);
			});

			this.doInitializeProviders();

			// only thing that works is if we use the watch fn FROM @vue-r/watch lib
			watch(
				() => stately.someAddr,
				(s) => {
					console.log('someAddr changed (2)', s);
				},
				{
					immediate: true
				}
			);

			// watch(
			// 	// () => stately2.someAddr,
			// 	() => this.stately2.someAddr,
			// 	(s) => {
			// 		console.log('someAddr changed (stately in v comp)', s);
			// 	},
			// 	{
			// 		immediate: true
			// 	}
			// );

			// let i = reactive(null);
			// console.log('nccState.ls.activeAccount', nccState.ls.activeAccount);
			// console.log('nccState isReactive?', isReactive(nccState.ls.activeAccount));

			// TODO - dang... this watcher doesnt work right...
			// watch(
			// 	() => this.nccState.ls.connectedAccounts,
			// 	() => {
			// 		console.log('connectedAccounts changed:', this.nccState.ls.connectedAccounts);
			// 	},
			// 	{
			// 		deep: true,
			// 		immediate: true
			// 	}
			// );

			// works.... (but how not .ls things..?)
			// watch(
			// 	() => this.nccState.rps,
			// 	() => {
			// 		console.log('(in v comp) rps changed:', this.nccState.rps);
			// 	},
			// 	{
			// 		deep: true,
			// 		immediate: true
			// 	}
			// );

			// watch(
			// 	() => this.nccState.activeAddr,
			// 	() => {
			// 		console.log('(in v comp) upper activeAddr changed:', this.nccState.activeAddr);
			// 	},
			// 	{
			// 		// deep: true,
			// 		immediate: true
			// 	}
			// );

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
				() => this.nccState.clients.fullClients,
				(fc) => {
					console.log('fullClients change', fc);
				},
				{
					deep: true,
					immediate: true
				}
			);

			watch(
				() => this.nccState.wallets,
				(w) => {
					console.log('wallets change', w);
					this.$forceUpdate(); // re-render <template>
				},
				{
					deep: true,
					immediate: true
				}
			);


			setInterval(() => {
				// this.hw.appStateProxy.count++;
				hw.appStateProxy.state.count++;

				// this.handyWallet.appStateProxy.count++;
				// handyWallet.appStateProxy.count++;
			}, 10 * 1000);
			// }, 2500);

			// await inkeyClient.frameBus.isReady()
			// this.$forceUpdate(); // needed to update .ready readout in DOM template
		},

		async doInitializeProviders() {
			// let ips = await initializeProviders(); // aka initClients()
			// console.log('ips', ips);
			// this.ips = ips;

			// let rps = await reconnectProviders(ips);
			// console.log('rps', rps);

			// empty arr inits all minus kmd
			const providersToInit = [
				// PROVIDER_ID.INKEY,
				// PROVIDER_ID.MYALGO,
			] as PROVIDER_ID[];

			const enabledClients = {
				[PROVIDER_ID.INKEY]: inkey.init({
					clientOptions: {
						iFrameUrl: 'http://localhost:5200',
					},
				}),
				[PROVIDER_ID.MYALGO]: myalgo.init({}),
			};

			// const rps = await initClients(providersToInit);
			const rps = await initClients(enabledClients);
			console.log('rps', rps);
			this.rps = rps;

			// inkey
			// const inkProv = await ips['inkey'];
			// console.log('inkProv', inkProv);
			// this.inkProv = inkProv;
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

		async doConnectInkey() {
			console.log('doConnectInkey');

			// let clientInk0 = hw.appStateProxy.state.initedClients['inkey'];
			// console.log('clientInk0', clientInk0);
			// if (clientInk0) {
			// 	clientInk0.connect(() => { });
			// }

			// let clientInk = await hw.appStateProxy.state.initializedProviders['inkey'];
			// console.log('clientInk', clientInk);

			// if (clientInk) {
			// 	clientInk.connect(() => { });
			// }



			// let clientInk3 = this.rps[2];
			// clientInk3.connect();


			// let clientInk4 = this.rrr.rps[2];
			// clientInk4.connect();


			let client = this.nccState.rps.inkey;
			client.connect();
		},

		async doConnectMyalgo() {
			console.log('doConnectMyalgo');

			let client = this.nccState.rps.myalgo;
			client.connect();

			// let c = await hw.appStateProxy.state.initializedProviders['myalgo'];
			// if (c) {
			// 	c.connect(() => { });
			// }
		},

		async doConnectPera() {
			console.log('doConnectPera');

			let client = this.nccState.rps.pera;
			client.connect();

			// let c = await hw.appStateProxy.state.initializedProviders['pera'];
			// if (c) {
			// 	c.connect(() => { });
			// }
		},

		changeStoredState() {
			// if (hw.appStateProxy.state.stored.activeAccount == '123') {
			// 	hw.appStateProxy.state.stored.activeAccount = '456';
			// } else {
			// 	hw.appStateProxy.state.stored.activeAccount = '123';
			// }
		},

		// async doSignTxn() {
		// 	console.log('doSignTxn');
		// },

		// popProvs() {
		// 	hw.appStateProxy.state.populateProviders(this.ips);
		// },

		// async doConnect() {
		// 	const gotAcct = await inkeyClient.connect();
		// 	console.log('gotAcct', gotAcct);
		// },
		// async doDisconnect() {
		// 	const discRes = await inkeyClient.disconnect();
		// 	console.log('discRes', discRes);
		// },
		// showInkey() {
		// 	inkeyClient.show();
		// },
		// hideInkey() {
		// 	inkeyClient.hide();
		// },

		//
		// async doTxnSimple() {
		// 	console.log('doTxnSimple');

		// 	// let addr = this.inkeyClient.account?.addr;

		// 	// if (!addr) {
		// 	// 	console.warn('not authd');
		// 	// 	return;
		// 	// }

		// 	// temp hardcoded addr to prove inkey does not need a .account - itll ask for auth first IF not authd THEN show to txn needing approval
		// 	let addr = 'LL4YSTJUZWK4YHSR6QMSTPSHSSFLSH7TYP2VE3BLHLNPAPFBPJC4DXVIRY';

		// 	const params = await algonaut.algodClient.getTransactionParams().do();
		// 	console.log('params', params);

		// 	// Construct a transaction to be signed and sent.
		// 	const transaction = algonaut.sdk.makePaymentTxnWithSuggestedParamsFromObject({
		// 		from: addr,
		// 		to: addr,
		// 		amount: 1000,
		// 		suggestedParams: params,
		// 	});
		// 	console.log('transaction', transaction);


		// 	const txnForInkey = buffer.from(transaction.toByte()).toString('base64')
		// 	console.log('txnForInkey', txnForInkey);

		// 	const inkeyRes = await inkeyClient.signTxns([txnForInkey]);
		// 	console.log('inkeyRes', inkeyRes);

		// 	if (inkeyRes.success && inkeyRes.signedTxns) {
		// 		const groupedTxn = await algonaut.algodClient.sendRawTransaction(inkeyRes.signedTxns).do();
		// 		console.log('groupedTxn', groupedTxn);
		// 		console.log('id: ', groupedTxn.txId);
		// 	}

		// },

		// async doTxnSimpleAlgJs() {
		// 	console.log('doTxnSimpleAlgJs');

		// 	// temp hardcoded addr to prove inkey does not need a .account - itll ask for auth first IF not authd THEN show to txn needing approval
		// 	let addr = 'LL4YSTJUZWK4YHSR6QMSTPSHSSFLSH7TYP2VE3BLHLNPAPFBPJC4DXVIRY';

		// 	const txn = await algonaut.atomicSendAlgo({
		// 		amount: 1000,
		// 		to: addr,
		// 		from: addr // .from needed IF algonaut doesnt have this.account populated
		// 	});
		// 	console.log('txn', txn);

		// 	const txnForInkey = utils.txnToStr(txn.transaction);
		// 	console.log('txnForInkey', txnForInkey);

		// 	const inkeyRes = await inkeyClient.signTxns([txnForInkey]);
		// 	console.log('inkeyRes', inkeyRes);

		// 	if (inkeyRes.success && inkeyRes.signedTxns) {
		// 		const groupedTxn = await algonaut.algodClient.sendRawTransaction(inkeyRes.signedTxns).do();
		// 		console.log('groupedTxn', groupedTxn);
		// 		console.log('id: ', groupedTxn.txId);
		// 	}

		// },

		async doTxnSimpleAlgJs() {
			console.log('doTxnSimpleAlgJs');

			let addr = this.nccState.activeAddress;

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
