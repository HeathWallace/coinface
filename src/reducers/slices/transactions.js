import { createReducer } from '../util';
import * as types from '../../constants/actionTypes';

import env from '../../utils/environment';

const initialTransactions = {};

class Handlers {
	static [types.ADD_TRANSACTION] (transactionsState, { payload }) {

		const { transactionHash, data, timeStamp, topics: [/*functionSignature*/, paddedFrom, paddedTo] } = payload;

		// If we already know about this transaction, return the state unmodified.
		if (transactionsState[transactionHash]) {
			return transactionsState;
		}

		const timestamp = parseInt(timeStamp, 16);

		// Remove the left-padding of addresses
		const to = '0x' + paddedTo.substr(26);
		const from = '0x' + paddedFrom.substr(26);

		let symbol = env.REACT_APP_DEFAULT_SYMBOL;

		// Converts the indivisible base amount with a decimal
		// to a human-readable amount. I.e., 300 base units
		// with 2 decimals is represented as 3.00
		const value = parseInt(data, 16);
		const decimals = parseInt(env.REACT_APP_DEFAULT_DECIMALS, 10);
		const amount = (value * Math.pow(10, -decimals)).toFixed(decimals);

		// Otherwise, combine the new transaction with the existing ones.
		return {
			...transactionsState,

			// Stored at a computed key in the object.
			[ transactionHash ]: {
				timestamp,
				from,
				to,
				amount,
				symbol,
			},
		};
	}

	static [types.CLEAR_TRANSACTIONS] () {
		return initialTransactions;
	}
}

const transactionsReducer = createReducer(initialTransactions, {
	[types.ADD_TRANSACTION]: Handlers[types.ADD_TRANSACTION],
	[types.CLEAR_TRANSACTIONS]: Handlers[types.CLEAR_TRANSACTIONS],
});

export default transactionsReducer;
