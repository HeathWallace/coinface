import { createReducer } from '../util';
import * as types from '../../constants/actionTypes';

const initialSettings = {
	tokenAddress: '',
	trustLevel: 1,
	walletAddress: '',
};

const addWallet = (settings, { payload }) => ({ ...settings, walletAddress: payload.walletAddress });
const setTrust = (settings, { payload }) => ({ ...settings, trustLevel: payload.trustLevel });
const addToken = (settings, { payload }) => ({ ...settings, tokenAddress: payload.tokenAddress });

const settingsReducer = createReducer(initialSettings, {
	[types.ADD_WALLET]: addWallet,
	[types.SET_TRUST]: setTrust,
	[types.ADD_TOKEN]: addToken,
});

export default settingsReducer;
