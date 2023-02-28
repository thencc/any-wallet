export * from '../state';

export function isBrowser() {
	let pass = false;
	if (typeof window !== undefined && typeof window == 'object') {
		// just checking window isnt enough, deno shims in window but not the DOM!
		if ('document' in window && typeof window.document == 'object') {
			pass = true;
		}
	}
	return pass;
};
