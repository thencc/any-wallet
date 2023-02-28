//
export function isBrowser() {
	let passes = false;
	if (typeof window !== undefined && typeof window == 'object') {
		// just checking window isnt enough, deno shims in window but not the DOM!
		if ('document' in window && typeof window.document == 'object') {
			passes = true;
		}
	}
	return passes;
};
