import { createReducer } from '../util';
import * as types from '../../constants/actionTypes';

import env from '../../utils/environment';

const initialSettings = {
	contractAddress: env.REACT_APP_CONTRACT_ADDRESS,
	trustConfirmationLevel: 1,
	walletAddress: '0x5c3216a6d9fbd7cf2afbe9157ff7e7d1db3d7bee',
};

const setWalletAddress = (settingsState,  action) => {
	const newWalletAddressValue = action.payload.newWalletAddressValue;

	return {...settingsState, walletAddress: newWalletAddressValue};
};

const settingsReducer = createReducer(initialSettings, {
	[types.SET_WALLET_ADDRESS]: setWalletAddress,
});

export default settingsReducer;
