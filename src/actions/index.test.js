import * as types from '../constants/actionTypes';
import * as actions from './index';
const payload = {
	from: '0x52903256dd18d85c2dc4a6c999907c9793ea61e3',
	timestamp: 1519059931,
	to: '0xb794f5ea0ba39494ce839613fffba74279579268',
	tokenInfo: {
		decimals: 2,
		symbol: 'ABC',
	},
	transactionHash: '0x126f82dcb2f4a283b4ebe20887deb8fdae8b136bf6c732ab444fd8910b442e3b',
	type: 'lorem',
	value: '220',
};

describe('actions', () => {
	it('should create an action to add a transaction', () => {
		const expectedAction = {
			type: types.ADD_TRANSACTION,
			payload,
		};

		expect(actions.addTransaction(payload)).toEqual(expectedAction);
	});
});
