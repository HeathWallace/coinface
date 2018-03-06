import { createReducer } from '../util';
import * as types from '../../constants/actionTypes';

import env from '../../utils/environment';

const initialSettings = {
	contractAddress: env.REACT_APP_CONTRACT_ADDRESS,
	trustConfirmationLevel: '1',
	walletAddress: env.REACT_APP_WALLET_ADDRESS,
};

const setWalletAddress = (settingsState,  action) => {
	const newWalletAddressValue = action.payload.newWalletAddressValue;

	return {...settingsState, walletAddress: newWalletAddressValue};
};

const settingsReducer = createReducer(initialSettings, {
	[types.SET_WALLET_ADDRESS]: setWalletAddress,
});

export default settingsReducer;
