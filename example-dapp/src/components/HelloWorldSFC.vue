<template>
	<div>
		<p>
			HelloWorldSFC
		</p>
		<p>
			{{ bewm }}
		</p>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	data() {
		return {
			bewm: 'skeet'
		}
	},
	mounted() {
		console.log('mounted');
	},

});
</script>

<style scoped>
p {
	color: palevioletred;
}
</style>
