import * as types from '../constants/actionTypes';
import transactionApi from '../api/transactions';
import tokenMetadataApi from '../api/tokenMetadata';
import pendingApi from '../api/pending';
import txHashApi from '../api/txHash';

import { Transaction } from './structures';

const POLL_RATE = 10000; // milliseconds

/*
|--------------------------------------------------------------------------
| Transactions
|--------------------------------------------------------------------------
*/

export const addTransaction = data => {
	const payload = Transaction(data);

	return {
		type: types.ADD_TRANSACTION,
		payload,
	};
};

export const receiveTransactions = transactions => (dispatch, getState) => {
	const { settings, transactions: knownTxs } = getState();

	const { trustLevel } = settings;

	transactions.forEach(async transaction => {
		// If we already know about it, skip if it's already exceeded the confirmation target.
		const transactionIsKnown = !!knownTxs[transaction.transactionHash];
		if (
			transactionIsKnown &&
			knownTxs[transaction.transactionHash].confirmations >= trustLevel
		)
			return;

		// Otherwise, scrape for how many confirmations it has.
		const meta = await txHashApi.getMeta(transaction.transactionHash);
		const { confirmations } = meta;
		dispatch(addTransaction({ ...transaction, confirmations }));
	});
};

export const getAllTransactions = () => (dispatch, getState) => {
	const { walletAddress } = getState().settings;

	transactionApi
		.getTransactions({ walletAddress })
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
	setInterval(() => {
		dispatch(getAllTransactions());
		dispatch(getPendingTransactions());
	}, POLL_RATE);
};

/*
|--------------------------------------------------------------------------
| Pendings
|--------------------------------------------------------------------------
*/

export const createSimulatedTransactions = () => (dispatch, getState) => {
	const { settings } = getState();

	const { tokenAddress, walletAddress, trustLevel } = settings;

	let i = Number(trustLevel);
	while (i--) {
		dispatch(
			addPendingTransaction({
				confirmations: i,
				from: walletAddress,
				params: [
					walletAddress,
					'00000000000000000000000000000000000000000000000000000000000000c8',
				],
				timestamp: 0,
				token: tokenAddress,
				txHash: `0x000000000000000000000000000000000000000000000000000000000000000${i}`,
			})
		);
	}
};

export const addPendingTransaction = meta => ({
	type: types.ADD_PENDING_TRANSACTION,
	payload: meta,
});

export const getPendingTransaction = txHash => dispatch => {
	txHashApi.getMeta(txHash).then(meta => {
		dispatch(addPendingTransaction(meta));
	});
};

export const getPendingTransactions = () => (dispatch, getState) => {
	const { walletAddress } = getState().settings;
	pendingApi.getTransactionsTo(walletAddress).then(transactions => {
		transactions.forEach(({ txHash }) => {
			dispatch(getPendingTransaction(txHash));
		});
	});
};

/*
|--------------------------------------------------------------------------
| Tokens
|--------------------------------------------------------------------------
*/

export const startLoadingTokenMetadata = metadata => ({
	type: types.START_LOADING_TOKEN_METADATA,
	payload: metadata,
});

export const finishLoadingTokenMetadata = metadata => ({
	type: types.FINISH_LOADING_TOKEN_METADATA,
	payload: metadata,
});

export const addTokenMetadata = address => dispatch => {
	dispatch(startLoadingTokenMetadata({ address }));
	tokenMetadataApi.getMetadata(address).then(metadata => {
		dispatch(finishLoadingTokenMetadata(metadata));
	});
};

/*
|--------------------------------------------------------------------------
| Settings
|--------------------------------------------------------------------------
*/

export const addWallet = walletAddress => ({
	type: types.ADD_WALLET,
	payload: { walletAddress },
});

export const addToken = tokenAddress => ({
	type: types.ADD_TOKEN,
	payload: { tokenAddress },
});

export const setTrust = trustLevel => ({
	type: types.SET_TRUST,
	payload: { trustLevel },
});
