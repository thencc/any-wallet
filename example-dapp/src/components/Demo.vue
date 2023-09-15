<template>
	<div class="auth-test-container">
		<header>
			<span style="color: red">{{ awState.isSigning ? '(signing)' : '' }}</span>

			<button @click="walletListOpen = !walletListOpen">
				<span v-if="awState.activeAddress">
					{{ `${awState.activeAddress.substring(0,6)}...${awState.activeAddress.substring(awState.activeAddress.length - 3)}` }}
					({{ awState.activeWalletId }})
				</span>
				<span v-else>
					Connect Wallet
				</span>
			</button>
		</header>

		<div v-if="walletListOpen" class="wallet-list">
			<div v-if="awState.activeAccount" class="active-account-details">
				<span style="font-weight: bold;">{{ awState.activeAccount.name }}</span>
				<span>({{ awState.activeAccount.walletId }})</span>
				<div style="font-family: monospace; word-break: break-all;">{{ awState.activeAddress }}</div>
			</div>

			<div v-for="(p, key) of awState.allWallets" class="wallet-list-item">
				<template v-if="p">
					<img :src="p.metadata.icon" alt="" style="width: 40px; height: 40px;">
					<span style="padding: 0 1em">{{ p.metadata.name }}</span>

					<div style="flex-grow: 1"></div>

					<span>{{ p.initing ? '(loading)' : '' }}</span>
					<span>{{ p.connecting ? '(connecting)' : '' }}</span>
					<span>{{ p.signing ? '(signing)' : '' }}</span>

					<select
						v-if="p.isActive"
						v-model="selectedAddrFromDropdown"
						style="width: 100px;"
						:name="`w_${key}_select`"
						id=""
						@change="activeAddrChanged(selectedAddrFromDropdown)">
						<option v-for="a of p.accounts" :value="a">
							{{ getAddrFromAccount(a) }} ({{ a.name }})
						</option>
					</select>

					<button v-if="p.isConnected && !p.isActive" @click="p.setAsActiveWallet()" :disabled="!(p.isConnected && !p.isActive)">set as active</button>
					<button v-else-if="p.isConnected" @click="p.disconnect()" :disabled="!(p.isConnected)">disconnect</button>
					<button @click="p.connect()">connect</button>
				</template>
			</div>
		</div>

		<button v-if="awState.activeWallet !== null" @click="doTxnSimpleAlgJs" :disabled="!(awState.activeWallet !== null)">
			sign transaction test
		</button>
		<br />
		<button v-if="awState.activeWallet !== null" @click="doTxnSimpleAlgosdk" :disabled="!(awState.activeWallet !== null)">
			sign transaction test (algosdk)
		</button>

		<!-- <br />
		<button @click="doUnsub">
			doUnsub
		</button> -->
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
	AnyWalletState,
	WALLET_ID,
} from '@thencc/any-wallet';

// algonautjs - helper lib for constructing + submitting txns
import { Algonaut } from '@thencc/algonautjs';
const algonaut = new Algonaut();;
const awState = new AnyWalletState({
	storageKey: 'state1',
});

// algosdk - main algorand sdk
import algosdk from 'algosdk';
const algodClient = new algosdk.Algodv2(
	'', 
	'https://testnet-api.algonode.cloud', 
	''
);

// https://testnet-api.algonode.cloud
// https://mainnet-api.algonode.cloud

const unsubAcctChange1 = awState.subscribeToAccountChanges(
	(acct) => {
		console.log('outside acct changed', acct);
	}
);

export default defineComponent({
	data() {
		return {
			walletListOpen: false,
			
			awState,
			selectedAddrFromDropdown: awState.activeAccount
		}
	},
	mounted() {
		awState.subscribeToAccountChanges(
			(acct) => {
				this.selectedAddrFromDropdown = acct;
				this.$forceUpdate(); // re-render <template> since vue's watcher doesnt work for this
			}
		);
	},
	methods: {
		getAddrFromAccount(a: any) {
			return a.address;
		},

		activeAddrChanged(x: any) {
			// console.log('activeAddrChanged', x);
			awState.activeAccount = x;
		},

		async connectInkey() {
			let accts = await awState.connectWallet('inkey');
			return accts;
		},

		async connectMnemonic() {
			return await awState.connectWallet('mnemonic', '123 456 789 ...')
		},

		async doTxnSimpleAlgJs() {
			console.log('doTxnSimpleAlgJs');

			let addr = awState.activeAddress;
			// hardcoding addr is possible but often not the correct dapp flow
			// FYI when hardcoding addr, it must match the desired authd wallet acct addr
			// let addr = 'ORYM5ELCOF6IDSMPOXMUPYSQFEWWAWMZ5YTGW55YJDOR3E4P7ATSS4JXLY';

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

			const txnBytes = txn.transaction.toByte();
			const txnArray = [
				txnBytes
			];

			try {
				let res = await awState.signTransactions(txnArray);
				console.log('res', res);
			} catch(e) {
				console.warn(e);
			}

			// send it!
			// 	const groupedTxn = await algonaut.algodClient.sendRawTransaction(inkeyRes.signedTxns).do();
			// 	console.log('groupedTxn', groupedTxn);
			// 	console.log('id: ', groupedTxn.txId);
		},

		async doTxnSimpleAlgosdk() {
			console.log('doTxnSimpleAlgosdk');

			let addr = awState.activeAddress;
			// hardcoding addr is possible but often not the correct dapp flow
			// FYI when hardcoding addr, it must match the desired authd wallet acct addr
			// let addr = 'ORYM5ELCOF6IDSMPOXMUPYSQFEWWAWMZ5YTGW55YJDOR3E4P7ATSS4JXLY';

			if (!addr) {
				alert('no .to address provided');
				return;
			}

			const suggestedParams = await algodClient.getTransactionParams().do();
			console.log('suggestedParams', suggestedParams);

			const transaction = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
				from: addr,
				to: addr,
				amount: 1000,
				suggestedParams
			});
			console.log('transaction', transaction);

			const txnBytes = transaction.toByte();
			const txnArray = [
				txnBytes
			];

			try {
				let res = await awState.signTransactions(txnArray);
				console.log('res', res);
			} catch(e) {
				console.warn(e);
			}

			// send it!
			// 	const groupedTxn = await algonaut.algodClient.sendRawTransaction(inkeyRes.signedTxns).do();
			// 	console.log('groupedTxn', groupedTxn);
			// 	console.log('id: ', groupedTxn.txId);
		},
		doUnsub() {
			console.log('doUnsub');
			unsubAcctChange1();
		}
	}
});
</script>

<style scoped>
header {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	background: #e6e6e6;

	display: flex;
	align-items: center;
	justify-content: flex-end;
}

.wallet-list {
	position: absolute;
	top: 48px;
	right: 20px;
	padding: 2em 1em;
	max-height: 450px;
	min-width: 400px;
	overflow-y: scroll;
	background: #e5e5e5;
	box-shadow: 2px 2px 4px rgba(0,0,0,0.5);
	border-radius: 6px;
}

.wallet-list-item {
	display: flex;
	align-items: center;
	border-top: 1px solid rgba(0,0,0,0.5);
	color: #000;
	font-weight: bold;
}

.active-account-details {
	width: 300px;
	margin: 0 auto 1em;
	color: #000;
}

button {
	padding: 0 12px;
	margin: 2px;
	--h: 48px;
	height: var(--h);
	line-height: var(--h);
}
</style>