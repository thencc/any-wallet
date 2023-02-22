import { CLIENT_ID } from "src/constants";

import pera from "./pera";
import myalgo from "./myalgo";
import inkey from "./inkey";
// import defly from "./defly";
// import exodus from "./exodus";
// import algosigner from "./algosigner";
// import walletconnect from "./walletconnect";
// import kmd from "./kmd";

export {
	pera,
	myalgo,
	inkey,
	// defly,
	// exodus,
	// algosigner,
	// walletconnect,
	// kmd
};


// import InkeyClient from "./inkey";

// export {
// 	// pera,
// 	// myalgo,
// 	InkeyClient,
// 	// defly,
// 	// exodus,
// 	// algosigner,
// 	// walletconnect,
// 	// kmd
// };

// export const CLIENT_SDK_MAP = Object.freeze({
// });
export const CLIENT_SDK_MAP = {
	// [CLIENT_ID.PERA]: pera,
	// [CLIENT_ID.MYALGO]: myalgo,
	// [CLIENT_ID.INKEY]: InkeyClient
};

export default CLIENT_SDK_MAP;