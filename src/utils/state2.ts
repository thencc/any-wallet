import { reactive, toRefs } from "@vue/reactivity";
import { CLIENT_ID } from "src/constants";
import { createWallet, nccState } from "./initClients";

export const nccStateBaseState = reactive({
	allWallets: {
		// inkey: createWallet(CLIENT_ID.INKEY),
		// pera: createWallet(CLIENT_ID.PERA),
		// myalgo: createWallet(CLIENT_ID.MYALGO),

		// [CLIENT_ID.INKEY]: {
		// 	...createWallet(CLIENT_ID.INKEY),
		// },
		// [CLIENT_ID.PERA]: createWallet(CLIENT_ID.PERA),
		// [CLIENT_ID.MYALGO]: createWallet(CLIENT_ID.MYALGO),
	},


});

// const combined3 = reactive({
// 	state1: {
// 		...toRefs(reactive(nccState))
// 	},
// });

// export const megaCombined = reactive({
// 	...toRefs(nccStateBaseState),
// 	...toRefs(combined3)
// });
