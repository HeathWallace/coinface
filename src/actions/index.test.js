import * as types from '../constants/actionTypes';
import * as actions from './index';

describe('transaction actions', () => {
	const payload = {
		transactionHash: '0x00000000',
		timeStamp: '0x5a8edf01',
		topics: [ '', '0x0000000000000000001111111111111111111111', '0x00000000000000000022222222222222222' ],
		data: '0xe1',
		address: '0x987654321',
		blockNumber: '0x123456789',
		gasPrice: '0x123456789',
		gasUsed: '0x123456789',
		logIndex: '0x123456789',
		transactionIndex: '0x123456789',
		confirmations: 0,
	};

	it('should create an action to add a transaction', () => {
		const expectedAction = {
			type: types.ADD_TRANSACTION,
			payload,
		};

		expect(actions.addTransaction(payload)).toEqual(expectedAction);
	});

	it('should create an action for a pending transaction', () => {
		const expectedAction = {
			type: types.ADD_PENDING_TRANSACTION,
			payload,
		};

		expect(actions.addPendingTransaction(payload)).toEqual(expectedAction);
	});

	it('should create an action for clearing all transactions', () => {
		const expectedAction = {
			type: types.CLEAR_TRANSACTIONS,
		};

		expect(actions.clearTransactions()).toEqual(expectedAction);
	});
});

describe('token actions', () => {
	const payload = {
		address: '0x987654321',
	};

	it('should create an action to mark new tokens as loading', () => {
		const expectedAction = {
			type: types.START_LOADING_TOKEN_METADATA,
			payload,
		};

		expect(actions.startLoadingTokenMetadata(payload)).toEqual(expectedAction);
	});

	it('should create an action to store the loaded token metadata', () => {
		const expectedAction = {
			type: types.FINISH_LOADING_TOKEN_METADATA,
			payload,
		};

		expect(actions.finishLoadingTokenMetadata(payload)).toEqual(expectedAction);
	});
});

describe('settings', () => {
	it('should create an action to add wallet address', () => {
		const payload = {
			walletAddress: '0x987654321',
		};
		const expectedAction = {
			type: types.ADD_WALLET,
			payload,
		};

		expect(actions.addWallet('0x987654321')).toEqual(expectedAction);
	});

	it('should create an action to set a trust level', () => {
		const payload = {
			trustLevel: 100,
		};
		const expectedAction = {
			type: types.SET_TRUST,
			payload,
		};

		expect(actions.setTrust(100)).toEqual(expectedAction);
	});
});
