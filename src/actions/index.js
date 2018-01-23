import * as types from '../constants/actionTypes';
import api from '../api/transactions';

export const addTransaction = transaction => ({
	type: types.ADD_TRANSACTION,
	payload: transaction,
});

export const receiveTransactions = transactions => ({
	type: types.RECEIVE_TRANSACTIONS,
	payload: transactions,
});

export const getAllTransactions = () => dispatch => {
	api.getTransactions(transactions => {
		dispatch(receiveTransactions(transactions));
	});
};
