<template>
	<div class="auth-test-container">
		<p>
			AuthTest
		</p>

		<p>
			handyWallet ?
			{{ hw.hello }}
			{{ hw.appStateProxy.state.count }}
		</p>

		<p>
			<button @click="doInitializeProviders">doInitializeProviders</button>
		</p>

		<p>
			<button @click="doConnectInkey">doConnectInkey</button>
		</p>

		<p>
			<button @click="doConnectMyalgo">doConnectMyalgo</button>
		</p>

		<p>
			<button @click="doConnectPera">doConnectPera</button>
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
import { defineComponent, reactive, watch } from 'vue';

// static algosdk
// import algosdk from "algosdk";

import { handyWallet, initializeProviders, reconnectProviders } from '@thencc/web3-wallet-handler';

// reactive wrapper needed to make vue renderer update on changes
const hw = reactive(handyWallet);


// const handy = getHandy();

// or the modular way
// const {
// 	clients,
// 	providers,
// 	connectedAccounts,
// 	defaultAccount,
// } = getHandy();

export default defineComponent({
	data() {
		return {
			// handyWallet,
			// state: handyWallet.appStateProxy,
			hw,
			// handy,

			ips: null as any,
			inkProv: null as any
		}
	},
	mounted() {
		console.log('mounted');
		this.init();
	},
	methods: {
		async init() {
			// console.log('handy', handy);

			// this.doInitializeProviders();

			setInterval(() => {
				// this.hw.appStateProxy.count++;
				hw.appStateProxy.state.count++;

				// this.handyWallet.appStateProxy.count++;
				// handyWallet.appStateProxy.count++;
			}, 5 * 1000);
			// }, 2500);

			// await inkeyClient.frameBus.isReady()
			// this.$forceUpdate(); // needed to update .ready readout in DOM template
		},

		async doInitializeProviders() {
			let ips = initializeProviders(); // aka initClients()
			console.log('ips', ips);
			this.ips = ips;

			let rps = await reconnectProviders(ips);
			// console.log('rps', rps);

			// inkey
			// const inkProv = await ips['inkey'];
			// console.log('inkProv', inkProv);
			// this.inkProv = inkProv;
		},

		async doConnectInkey() {
			console.log('doConnectInkey');

			let clientInk = await hw.appStateProxy.state.initializedProviders['inkey'];
			if (clientInk) {
				clientInk.connect(() => { });
			}
		},

		async doConnectMyalgo() {
			console.log('doConnectMyalgo');

			let c = await hw.appStateProxy.state.initializedProviders['myalgo'];
			if (c) {
				c.connect(() => { });
			}
		},

		async doConnectPera() {
			console.log('doConnectPera');

			let c = await hw.appStateProxy.state.initializedProviders['pera'];
			if (c) {
				c.connect(() => { });
			}
		},

		changeStoredState() {
			// if (hw.appStateProxy.state.stored.activeAccount == '123') {
			// 	hw.appStateProxy.state.stored.activeAccount = '456';
			// } else {
			// 	hw.appStateProxy.state.stored.activeAccount = '123';
			// }
		},

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

		// }
	}
});
</script>

<style scoped>
.auth-test-container {
	display: flex;
	flex-direction: column;
	width: 350px;
}

p {
	color: palevioletred;
}

button {
	margin: 2px 0;
}
</style>
