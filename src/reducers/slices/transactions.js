import { createReducer } from '../util';
import * as types from '../../constants/actionTypes';

const initialTransactions = {};

class Handlers {
	static [types.ADD_TRANSACTION] (transactionsState, { payload }) {

		const { address, transactionHash, data, timeStamp, topics: [/*functionSignature*/, paddedFrom, paddedTo], confirmations } = payload;

		const timestamp = parseInt(timeStamp, 16);

		// Remove the left-padding of addresses
		const to = '0x' + paddedTo.substr(26);
		const from = '0x' + paddedFrom.substr(26);

		// Converts the indivisible base amount with a decimal
		// to a human-readable amount. I.e., 300 base units
		// with 2 decimals is represented as 3.00
		const amount = parseInt(data, 16);

		// Otherwise, combine the new transaction with the existing ones.
		return {
			...transactionsState,

			// Stored at a computed key in the object.
			[ transactionHash ]: {
				timestamp,
				from,
				to,
				amount,
				token: address,
				confirmations,
			},
		};
	}

	static [types.ADD_PENDING_TRANSACTION] (transactionsState, { payload }) {

		const { from, params, timestamp, token, txHash, confirmations } = payload;

		const [ paddedTo, _amount ] = params;

		const to = '0x' + paddedTo.substr(26);
		const amount = parseInt(_amount, 16);

		return {
			...transactionsState,

			[txHash]: {
				timestamp,
				from,
				to,
				amount,
				token,
				confirmations,
			},
		};
	}

	static [types.CLEAR_TRANSACTIONS] () {
		return initialTransactions;
	}
}

const transactionsReducer = createReducer(initialTransactions, {
	[types.ADD_TRANSACTION]: Handlers[types.ADD_TRANSACTION],
	[types.ADD_PENDING_TRANSACTION]: Handlers[types.ADD_PENDING_TRANSACTION],
	[types.CLEAR_TRANSACTIONS]: Handlers[types.CLEAR_TRANSACTIONS],
});

export default transactionsReducer;
