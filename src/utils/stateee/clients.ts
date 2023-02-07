import { computed, reactive, ref, toRefs, unref, readonly, toRef } from '@vue/reactivity';
import { getAccountsByProvider } from '../initClients';

export const clientsReactive = reactive({

	all: [], //
	enabled: null as any, // uses passed in client from init, defaults to all.
	inited: {}, // .client is awaited + initialized
	// withState: null as any, // has .isConnected .isActive etc
	// withState: computed(() => {
	// 	// return {}
	// 	return nccState.clients;
	// })

});

const objectMap = (obj: Object, fn: any) =>
	Object.fromEntries(
		Object.entries(obj).map(
			([k, v], i) => [k, fn(v, k, i)]
		)
	);

export const clientsComputed = readonly(reactive(({
// export const clientsComputed = reactive(({
	initedClientKeys: computed(() => {
		// return (clientsReactive.inited as any).map(c => c.);
		return Object.keys(clientsReactive.inited);
	}),

	// hydrated clients (aka wallets...)
	fullClients: computed(() => {
		//
		return objectMap(clientsReactive.inited, (c: any) => {
			// console.log('c', c);

			return {
				// ...c, // loses class methods this way, treats as an obj
				client: c,
				accounts: getAccountsByProvider(c.metadata.id),
				andSomeState: 'bewm',
				connect: () => c.connect() // works but eh
			};
		});
	}),
// }));
})));


// export const clientsState = reactive({
// 	...toRefs(clientsReactive),
// 	...toRefs(clientsComputed)
// });

// export const clientsState = {
// 	...toRefs(clientsReactive),
// 	...toRefs(clientsComputed)
// };

// combine like megatron
export const clientsState = {
	...toRefs(clientsReactive),
	...toRefs(clientsComputed), // is readonly
};
