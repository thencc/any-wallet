<template>
    <button class="w-connect-btn" @click="wallet.connect()">
        <img 
            class="w-icon" 
            :src="wallet.metadata.icon" 
            alt=""
        >
        <span class="w-label">
            connect: {{ walletId }}
        </span>
    </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { AnyWalletState, W_ID, WALLET_ID } from '@thencc/any-wallet';

export default defineComponent({
    props: {
        walletId: {
            type: String as PropType<W_ID>,
            required: true,
        }
    },
    computed: {
        wallet() {
            return AnyWalletState.allWallets[this.walletId];
        }
    },
	data() {
		return {
			hello: 'world'
		}
	},
    methods: {
        // getWalletClient() {

        // }
    }
});
</script>

<style scoped>
.w-connect-btn {
    height: 50px;
    padding: 0px;
    border-radius: 4px;
    background: #e6e6e6;
    color: #000;
    
    display: flex;
    align-items: center;
    justify-content: left;
}
.w-icon {
    width: 40px;
    height: 40px;
    padding: 4px;
}
</style>
