import { createReducer } from '../util';
import * as types from '../../constants/actionTypes';

const initialTransactions = {};

const addTransaction = (transactionsState, { payload }) => {
	//check action against transactionsState
	//discard if duplicate or convert from hex if not a duplicate

	// If we already know about this transaction, return the state unmodified.
	if (transactionsState[payload.transactionHash]){
		return transactionsState;
	}

	const { timestamp, from, to, value, tokenInfo } = payload;

	const decimals = parseInt(tokenInfo.decimals, 10);
	const amount = (value * Math.pow(10, -decimals)).toFixed(2);

	// Otherwise, combine the new transaction with the existing ones.
	return {
		...transactionsState,

		// Stored at a computed key in the object.
		[payload.transactionHash]: {
			timestamp,
			from,
			to,
			amount,
		},
	};
};

const receiveTransactions = (transactionsState, action) => transactionsState.concat(action.payload.result);

const transactionsReducer = createReducer(initialTransactions, {
	[types.ADD_TRANSACTION]: addTransaction,
	[types.RECEIVE_TRANSACTIONS]: receiveTransactions,
});

export default transactionsReducer;
