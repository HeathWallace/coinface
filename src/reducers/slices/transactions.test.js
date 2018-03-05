import transactionsReducer from './transactions.js';
import * as types from '../../constants/actionTypes';
import env from '../../utils/environment';

// all values are inserted as hexadecimal values
// which are then converted in the reducer
const newTransaction = {
	transactionHash: '0x20797147bd5b2990df11d3c8fb861eb7314fc74fb37a74c9365367ee5f880aab',
	timeStamp: '0x5a8edf01',
	topics: [ '', '0xf5a3fa2065e82a7e53c4782f9f5961259d5629b8', '0x5c3216a6d9fbd7cf2afbe9157ff7e7d1db3d7bed' ],
	data: '0xe1',
	address: '0xe3b3651b2987f76a45753b5160504a2ab606716b',
	blockNumber: '0x4e6196',
	gasPrice: '0xee6b2800',
	gasUsed: '0x8ee9',
	logIndex: '0x3a',
	transactionIndex: '0x51',
};

describe('transactions reducer', () => {
	it('should return the initial state', () => {
		const initialState = undefined;
		const action = {};
		const expectedState = {};

		expect(transactionsReducer(initialState, action)).toEqual(expectedState);
	});

	it('should add a new transaction', () => {
		const initialState = {};
		const action = {
			type: types.ADD_TRANSACTION,
			payload: newTransaction,
		};
		const expectedState = {
			'0x20797147bd5b2990df11d3c8fb861eb7314fc74fb37a74c9365367ee5f880aab': {
				amount: '2.25',
				timestamp: 1519312641,
				from: '0x9f5961259d5629b8',
				to: '0x7ff7e7d1db3d7bed',
				symbol: env.REACT_APP_DEFAULT_SYMBOL,
			},
		};

		expect(transactionsReducer(initialState, action)).toEqual(expectedState);
	});

	it('should disregard new transactions with similar transactionHash', () => {
		const initialState = {
			'0x20797147bd5b2990df11d3c8fb861eb7314fc74fb37a74c9365367ee5f880aab': {
				amount: '1.80',
				timestamp: 1519312612,
				from: '0x9f5961259d562123',
				to: '0x7ff7e7d1db3d7456',
				symbol: env.REACT_APP_DEFAULT_SYMBOL,
			},
		};
		const action = {
			type: types.ADD_TRANSACTION,
			payload: newTransaction,
		};
		const expectedState = {
			'0x20797147bd5b2990df11d3c8fb861eb7314fc74fb37a74c9365367ee5f880aab': {
				amount: '1.80',
				timestamp: 1519312612,
				from: '0x9f5961259d562123',
				to: '0x7ff7e7d1db3d7456',
				symbol: env.REACT_APP_DEFAULT_SYMBOL,
			},
		};

		expect(transactionsReducer(initialState, action)).toEqual(expectedState);
	});
});
