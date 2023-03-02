<template>
	<div class="auth-test-container">
		<header>
			<span style="color: red">{{ AnyWalletState.isSigning ? '(signing)' : '' }}</span>

			<button @click="walletListOpen = !walletListOpen">
				<span v-if="AnyWalletState.activeAddress">
					{{ `${AnyWalletState.activeAddress.substring(0,6)}...${AnyWalletState.activeAddress.substring(AnyWalletState.activeAddress.length - 3)}` }}
					({{ AnyWalletState.activeWalletId }})
				</span>
				<span v-else>
					Connect Wallet
				</span>
			</button>
		</header>

		<div v-if="walletListOpen" class="wallet-list">
			<div v-if="AnyWalletState.stored.activeAccount" class="active-account-details">
				<span style="font-weight: bold;">{{ AnyWalletState.stored.activeAccount.name }}</span>
				<span>({{ AnyWalletState.stored.activeAccount.walletId }})</span>
				<div style="font-family: monospace; word-break: break-all;">{{ AnyWalletState.activeAddress }}</div>
			</div>

			<div v-for="(p, key) of AnyWalletState.enabledWallets" class="wallet-list-item">
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
							{{ getAddrFromAccount(a) }}
						</option>
					</select>

					<button v-if="p.isConnected && !p.isActive" @click="p.setAsActiveWallet()" :disabled="!(p.isConnected && !p.isActive)">set as active</button>

					<button v-else-if="p.isConnected" @click="p.disconnect()" :disabled="!(p.isConnected)">disconnect</button>
					<button v-else="" @click="p.connect()" :disabled="!!(p.isConnected)">connect</button>
				</template>
			</div>
		</div>

		<button v-if="AnyWalletState.enabledWallets !== null" @click="doTxnSimpleAlgJs" :disabled="!(AnyWalletState.enabledWallets !== null)">
			sign transaction test
		</button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
	AnyWalletState,
	signTransactions,
	enableWallets,
	WALLET_ID,
	watch,
} from '@thencc/web3-wallet-handler';

import { Algonaut } from '@thencc/algonautjs';
const algonaut = new Algonaut({
	LEDGER: 'mainnet',
	BASE_SERVER: 'https://mainnet-api.algonode.cloud',
	INDEX_SERVER: '',
	API_TOKEN: { 'accept': 'application/json' },
	PORT:'',
});
// https://testnet-api.algonode.cloud
// https://mainnet-api.algonode.cloud

export default defineComponent({
	data() {
		return {
			walletListOpen: false,
			AnyWalletState,
			selectedAddrFromDropdown: AnyWalletState.stored.activeAccount
		}
	},
	mounted() {
		// call this at least once (choose which wallets to enable)
		enableWallets({
			[WALLET_ID.INKEY]: true,
			[WALLET_ID.PERA]: true,
			[WALLET_ID.MYALGO]: true,
			[WALLET_ID.ALGOSIGNER]: true,
			[WALLET_ID.EXODUS]: true,
			[WALLET_ID.DEFLY]: true,
			[WALLET_ID.MNEMONIC]: true,
		});

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
	methods: {
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
	max-height: 400px;
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