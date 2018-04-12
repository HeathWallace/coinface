import settingsReducer from './settings.js';
import * as types from '../../constants/actionTypes';

describe('settings reducer', () => {
	it('it should add the token address', () => {
		const initialState = {
			tokenAddress: '',
			trustLevel: 1,
			walletAddress: '',
		};
		const newPayload = {
			tokenAddress: '0x987654321',
		};
		const action = {
			type: types.ADD_TOKEN,
			payload: newPayload,
		};
		const expectedState = {
			tokenAddress: '0x987654321',
			trustLevel: 1,
			walletAddress: '',
		};

		expect(settingsReducer(initialState, action)).toEqual(expectedState);
	});

	it('it should set the trust level', () => {
		const initialState = {
			tokenAddress: '',
			trustLevel: 1,
			walletAddress: '',
		};
		const newPayload = {
			trustLevel: 5,
		};
		const action = {
			type: types.SET_TRUST,
			payload: newPayload,
		};
		const expectedState = {
			tokenAddress: '',
			trustLevel: 5,
			walletAddress: '',
		};

		expect(settingsReducer(initialState, action)).toEqual(expectedState);
	});

	it('it should add the wallet address', () => {
		const initialState = {
			tokenAddress: '',
			trustLevel: 1,
			walletAddress: '',
		};
		const newPayload = {
			walletAddress: '0x987654321',
		};
		const action = {
			type: types.ADD_WALLET,
			payload: newPayload,
		};
		const expectedState = {
			tokenAddress: '',
			trustLevel: 1,
			walletAddress: '0x987654321',
		};

		expect(settingsReducer(initialState, action)).toEqual(expectedState);
	});
});
