import * as types from '../constants/actionTypes';
import api from '../api/transactions';

import { Transaction } from './structures';

export const addTransaction = data => {
	const payload = Transaction(data);

	return {
		type: types.ADD_TRANSACTION,
		payload,
	};
};

export const receiveTransaction = transactions => dispatch => {
	transactions.forEach(transaction => {
		dispatch(addTransaction(transaction));
	});
};

export const receiveTransactions = transactions => ({
	type: types.RECEIVE_TRANSACTIONS,
	payload: transactions,
});

export const getAllTransactions = () => dispatch => {
	api.getTransactions(transactions => {
		dispatch(receiveTransactions(transactions));
	});
};
