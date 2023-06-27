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

			<div v-for="(p, key) of AnyWalletState.allWallets" class="wallet-list-item">
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

		<button v-if="AnyWalletState.activeWallet !== null" @click="doTxnSimpleAlgJs" :disabled="!(AnyWalletState.activeWallet !== null)">
			sign transaction test
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
	// enableWallets,
	subscribeToStateChanges,
	subscribeToAccountChanges,
	signTransactions,
	WALLET_ID,
connectWallet,
	// initWallets,
	// WALLET_ID_ENUM,
} from '@thencc/any-wallet';

// helper lib for constructing + submitting txns
import { Algonaut } from '@thencc/algonautjs';
const algonaut = new Algonaut();;
// https://testnet-api.algonode.cloud
// https://mainnet-api.algonode.cloud



const unsubAcctChange1 = subscribeToAccountChanges(
	(acct) => {
		console.log('outside acct changed', acct);
	}
);

export default defineComponent({
	data() {
		return {
			walletListOpen: false,
			AnyWalletState,
			selectedAddrFromDropdown: AnyWalletState.stored.activeAccount
		}
	},
	mounted() {
		subscribeToAccountChanges(
			(acct) => {
				this.selectedAddrFromDropdown = acct;
				this.$forceUpdate(); // re-render <template> since vue's watcher doesnt work for this
			}
		);

		subscribeToStateChanges(
			() => this.$forceUpdate()
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

		async connectInkey() {
			let accts = await connectWallet('inkey');
			return accts;
		},

		async connectMnemonic() {
			return await connectWallet('mnemonic', '123 456 789 ...')
		},

		async doTxnSimpleAlgJs() {
			console.log('doTxnSimpleAlgJs');

			let addr = AnyWalletState.activeAddress;
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