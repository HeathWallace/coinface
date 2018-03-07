import * as types from '../constants/actionTypes';
import api from '../api/transactions';

import { Transaction, Settings } from './structures';
import checkFSA from './checkFSA';

export const addTransaction = checkFSA(data => {
	const payload = Transaction(data);

	return ({
		type: types.ADD_TRANSACTION,
		payload,
	});
});

export const receiveTransactions = transactions => dispatch => {
	transactions.forEach(transaction => {
		dispatch(addTransaction(transaction));
	});
};

export const getAllTransactions = () => (dispatch, getState) => {

	const { walletAddress } = getState().settings;

	api.getTransactions(walletAddress)
		.then(transactions => {
			dispatch(receiveTransactions(transactions));
		})
		.catch(err => {
			console.log(err); //eslint-disable-line
		});
};

export const clearTransactions = () => ({
	type: types.CLEAR_TRANSACTIONS,
});

export const enableTransactionPolling = () => dispatch => {
	setInterval(() => dispatch(getAllTransactions()), 5000);
};

export const updateSettings = checkFSA(data => {
	const payload = Settings(data);

	return ({
		type: types.UPDATE_SETTINGS,
		payload,
	});
});
