import { createReducer } from '../util';
import * as types from '../../constants/actionTypes';

import env from '../../utils/environment';

const initialSettings = {
	contractAddress: env.REACT_APP_CONTRACT_ADDRESS,
	trustLevel: '1',
	walletAddress: env.REACT_APP_WALLET_ADDRESS,
};

const updateSettings = (settingsState,  action) => {
	const newWalletAddressValue = action.payload.walletAddress;
	const newTransferSettingValue = action.payload.trustLevel;

	return {...settingsState,
		trustLevel: newTransferSettingValue,
		walletAddress: newWalletAddressValue,
	};
};

const settingsReducer = createReducer(initialSettings, {
	[types.UPDATE_SETTINGS]: updateSettings,
});

export default settingsReducer;
