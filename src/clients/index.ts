import { WALLET_ID } from 'src/wallets/constants';

import pera from './pera';
import myalgo from './myalgo';
// import inkey from './inkey';
// import defly from './defly';
// import exodus from './exodus';
// import algosigner from './algosigner';
// import walletconnect from './walletconnect';
// import kmd from './kmd';

export {
	pera,
	myalgo,
	// inkey,
	// defly,
	// exodus,
	// algosigner,
	// walletconnect,
	// kmd
};


// import InkeyClient from './inkey';

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
	// [WALLET_ID.PERA]: pera,
	// [WALLET_ID.MYALGO]: myalgo,
	// [WALLET_ID.INKEY]: InkeyClient
};

export default CLIENT_SDK_MAP;