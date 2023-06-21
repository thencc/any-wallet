import { WALLET_ID } from 'src/wallets';
import type { ClientMetadata } from '../base/types';

export const ICON =
	'data:image/svg+xml;base64,' +
	'PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAzMiAzMiI+CiAgPHBhdGggZmlsbD0iIzI0NUVDNiIgZD0iTTE2LDMyYy0zLjIsMC02LjItMC45LTguOS0yLjdjLTIuNi0xLjgtNC43LTQuMy01LjktNy4yQzAsMTkuMi0wLjMsMTYsMC4zLDEyLjlDMC45LDkuOCwyLjQsNyw0LjcsNC43IEM2LjIsMy4yLDcuOSwyLDkuOSwxLjJDMTEuOCwwLjQsMTMuOSwwLDE2LDBzNC4yLDAuNCw2LjEsMS4yYzEuOSwwLjgsMy43LDIsNS4yLDMuNXMyLjcsMy4zLDMuNSw1LjJjMC44LDEuOSwxLjIsNCwxLjIsNi4xIHMtMC40LDQuMi0xLjIsNi4xYy0wLjgsMS45LTIsMy43LTMuNSw1LjJjLTEuNSwxLjUtMy4yLDIuNy01LjIsMy41QzIwLjIsMzEuNiwxOC4xLDMyLDE2LDMyTDE2LDMyeiBNMjAuMiwxMS4ybDAuMSwwLjVsMi42LDkuNWgyLjEgTDIxLjUsOC45bC0wLjEtMC4zaC0xLjlsMCwwLjFsLTEuNywzLjFMMTYsMTQuOWwwLDAuMWwwLTAuMWwtMC4yLTAuOGwtMC42LTIuNGwtMC4xLTAuMmwtMC43LTIuNmwtMC4xLTAuM2gtMS45bDAsMC4xbC0xLjcsMy4xIGwtMS44LDMuMkw3LjEsMThsLTEuOCwzLjJoMi4xTDkuMiwxOGwxLjgtMy4ybDEuOC0zLjJsMC4zLTAuNWwwLjEsMC41bDAuNSwyLjFsMC43LDIuNmwwLjIsMC45TDE0LjIsMThsLTEuOCwzLjJoMi4xbDAuOC0xLjMgbDEuMy0yLjNsMS41LTIuN2wxLjgtMy4yTDIwLjIsMTEuMkwyMC4yLDExLjJ6Ii8+Cjwvc3ZnPgo=';

export const METADATA: ClientMetadata = {
	id: WALLET_ID.MYALGO,
	chain: 'algorand',
	name: 'MyAlgo',
	icon: ICON,
	pkg: '@randlabs/myalgo-connect',
};
