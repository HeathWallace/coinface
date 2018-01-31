import { createReducer } from '../util';
import * as types from '../../constants/actionTypes';

const initialTransactions = [];

const addTransaction = (transactionsState, action) => transactionsState.concat(action.payload);
const receiveTransactions = (transactionsState, action) => transactionsState.concat(action.payload.result);

const transactionsReducer = createReducer(initialTransactions, {
	[types.ADD_TRANSACTION]: addTransaction,
	[types.RECEIVE_TRANSACTIONS]: receiveTransactions,
});

export default transactionsReducer;
