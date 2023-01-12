<template>
	<div>
		<button @click="connectToWallet">Connect to Pera Wallet</button>
	</div>
</template>

<script setup lang="ts">
import { PeraWalletConnect } from '@perawallet/connect';
import { ref } from 'vue';

const peraWallet = new PeraWalletConnect();

const accountAddress = ref('');

const connectToWallet = () => {
	peraWallet
		.connect()
		.then((accounts) => {
			//peraWallet.connector.on("disconnect", this.disconnectWallet);

			accountAddress.value = accounts[0];
		})
		.catch((e) => console.log(e));
};
</script>
