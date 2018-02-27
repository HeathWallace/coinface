import { createReducer } from '../util';
import * as types from '../../constants/actionTypes';

import env from '../../utils/environment';

const initialTransactions = {};

const addTransaction = (transactionsState, { payload }) => {
	//check action against transactionsState
	//discard if duplicate or convert from hex if not a duplicate

	// If we already know about this transaction, return the state unmodified.
	if (transactionsState[payload.transactionHash]){
		return transactionsState;
	}

	const { timestamp, from, to, value, tokenInfo } = payload;

	let decimals = parseInt(env.REACT_APP_DEFAULT_DECIMALS, 10);
	let symbol = env.REACT_APP_DEFAULT_SYMBOL;

	if (tokenInfo) {
		decimals = parseInt(tokenInfo.decimals, 10);
		symbol = tokenInfo.symbol;
	}

	// Converts the indivisible base amount with a decimal
	// to a human-readable amount. I.e., 300 base units
	// with 2 decimals is represented as 3.00
	const amount = (value * Math.pow(10, -decimals)).toFixed(decimals);

	// Otherwise, combine the new transaction with the existing ones.
	return {
		...transactionsState,

		// Stored at a computed key in the object.
		[payload.transactionHash]: {
			timestamp,
			from,
			to,
			amount,
			symbol,
		},
	};
};

const receiveTransactions = (transactionsState, action) => transactionsState.concat(action.payload.result);

const transactionsReducer = createReducer(initialTransactions, {
	[types.ADD_TRANSACTION]: addTransaction,
	[types.RECEIVE_TRANSACTIONS]: receiveTransactions,
});

export default transactionsReducer;
