import { reactive } from '@vue/reactivity'; // DOESNT work w vue's watch??? has to use @vue-r/watch
// import { reactive } from 'vue'; // works w watch

export const stately = reactive({
	someAddr: ''
});
