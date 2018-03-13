import { createReducer } from '../util';
import * as types from '../../constants/actionTypes';

const initiallyKnownTokens = {};

class Handlers {
	static [types.FINISH_LOADING_TOKEN_METADATA] (tokensState, { payload }) {
		const { address, decimals, name, symbol } = payload;

		return {
			...tokensState,

			[ address ]: {
				decimals: parseInt(decimals, 10),
				name,
				symbol,
			},
		};
	}

	static [types.START_LOADING_TOKEN_METADATA] (tokensState, { payload }) {

		const { address } = payload;

		return {
			...tokensState,

			[ address ]: {
				decimals: 0,
				name: 'Loading...',
				symbol: '...',
			},
		};
	}
}

const tokensReducer = createReducer(initiallyKnownTokens, {
	[types.FINISH_LOADING_TOKEN_METADATA]: Handlers[types.FINISH_LOADING_TOKEN_METADATA],
	[types.START_LOADING_TOKEN_METADATA]: Handlers[types.START_LOADING_TOKEN_METADATA],
});

export default tokensReducer;
