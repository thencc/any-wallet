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

export const arrayBufferToBase64 = (buffer: ArrayBufferLike) => {
	if (typeof window == undefined) {
		throw new Error('Cannot access window for simple btoa conversion.');
	}
	var binary = '';
	var bytes = new Uint8Array(buffer);
	var len = bytes.byteLength;
	for (var i = 0; i < len; i++) {
		binary += String.fromCharCode(bytes[i]);
	}
	return window.btoa(binary);
};
