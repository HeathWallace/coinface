import transactionsReducer from './transactions.js';
import * as types from '../../constants/actionTypes';

const newTransaction = {
	transactionHash: '0x126f82dcb2f4a283b4ebe20887deb8fdae8b136bf6c732ab444fd8910b442e3b',
	timestamp: 1519059931,
	from: '0x52903256dd18d85c2dc4a6c999907c9793ea61e3',
	to: '0xb794f5ea0ba39494ce839613fffba74279579268',
	value: 220,
	tokenInfo: {
		decimals: 2,
		symbol: 'ABC',
	},
};

describe('transactions reducer', () => {
	it('should return the initial state', () => {
		expect(transactionsReducer(undefined, {})).toEqual({});
	});

	it('should add a new transaction', () => {
		expect(transactionsReducer({}, {
			type: types.ADD_TRANSACTION,
			payload: newTransaction,
		})).toEqual({
			['0x126f82dcb2f4a283b4ebe20887deb8fdae8b136bf6c732ab444fd8910b442e3b']: {
				timestamp: 1519059931,
				from: '0x52903256dd18d85c2dc4a6c999907c9793ea61e3',
				to: '0xb794f5ea0ba39494ce839613fffba74279579268',
				amount: '2.20',
				symbol: 'ABC',
			},
		});
	});

	it('should disregard new transactions with similar transactionHash', () => {
		expect(transactionsReducer(
			{
				['0x126f82dcb2f4a283b4ebe20887deb8fdae8b136bf6c732ab444fd8910b442e3b']: {
					timestamp: 1519059931,
					from: '0x52903256dd18d85c2dc4a6c999907c9793ea61e3',
					to: '0xb794f5ea0ba39494ce839613fffba74279579268',
					amount: '2.20',
					symbol: 'ABC',
				},
			}, {
				type: types.ADD_TRANSACTION,
				payload: newTransaction,
			})).toEqual({
			['0x126f82dcb2f4a283b4ebe20887deb8fdae8b136bf6c732ab444fd8910b442e3b']: {
				timestamp: 1519059931,
				from: '0x52903256dd18d85c2dc4a6c999907c9793ea61e3',
				to: '0xb794f5ea0ba39494ce839613fffba74279579268',
				amount: '2.20',
				symbol: 'ABC',
			},
		});
	});

	it('should retrieve existing transactions', () => {
		expect(transactionsReducer(
			{
				['0x126f82dcb2f4a283b4ebe20887deb8fdae8b136bf6c732ab444fd8910b442e3b']: {
					timestamp: 1519059931,
					from: '0x52903256dd18d85c2dc4a6c999907c9793ea61e3',
					to: '0xb794f5ea0ba39494ce839613fffba74279579268',
					amount: '2.20',
					symbol: 'ABC',
				},
				['0xh5gf82dcb2f4a283b4ebe20887fewsv3twgb136bf6c732ab444fd8910bvkjdi38']: {
					timestamp: 1519059931,
					from: '0xb794f5ea0ba39494ce839613fffba74279579268',
					to: '0x52903256dd18d85c2dc4a6c999907c9793ea61e3',
					amount: '1.90',
					symbol: 'ABC',
				},
			}, {
				type: types.ADD_TRANSACTION,
				payload: newTransaction,
			})).toEqual({
			['0x126f82dcb2f4a283b4ebe20887deb8fdae8b136bf6c732ab444fd8910b442e3b']: {
				timestamp: 1519059931,
				from: '0x52903256dd18d85c2dc4a6c999907c9793ea61e3',
				to: '0xb794f5ea0ba39494ce839613fffba74279579268',
				amount: '2.20',
				symbol: 'ABC',
			},
			['0xh5gf82dcb2f4a283b4ebe20887fewsv3twgb136bf6c732ab444fd8910bvkjdi38']: {
				timestamp: 1519059931,
				from: '0xb794f5ea0ba39494ce839613fffba74279579268',
				to: '0x52903256dd18d85c2dc4a6c999907c9793ea61e3',
				amount: '1.90',
				symbol: 'ABC',
			},
		});
	});
});
