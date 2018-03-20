import tokensReducer from './tokens.js';
import * as types from '../../constants/actionTypes';

describe('tokens reducer', () => {
	it('it should mark new tokens as loading', () => {
		const initialState = {};
		const newPayload = {
			address: '0x987654321',
		};
		const action = {
			type: types.START_LOADING_TOKEN_METADATA,
			payload: newPayload,
		};
		const expectedState = {
			'0x987654321': {
				decimals: 0,
				name: 'Loading...',
				symbol: '...',
			},
		};

		expect(tokensReducer(initialState, action)).toEqual(expectedState);
	});

	it('it should store token metadata', () => {
		const initialState = {};
		const newPayload = {
			address: '0x987654321',
			decimals: 2,
			name: 'Test',
			symbol: 'TST',
		};
		const action = {
			type: types.FINISH_LOADING_TOKEN_METADATA,
			payload: newPayload,
		};
		const expectedState = {
			'0x987654321': {
				decimals: 2,
				name: 'Test',
				symbol: 'TST',
			},
		};

		expect(tokensReducer(initialState, action)).toEqual(expectedState);
	});
});
