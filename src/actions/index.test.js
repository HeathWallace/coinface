import * as types from '../constants/actionTypes';
import * as actions from './index';
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

describe('actions', () => {
	it('should create an action to add a transaction', () => {
		const expectedAction = {
			type: types.ADD_TRANSACTION,
			payload,
		};

		expect(actions.addTransaction(payload)).toEqual(expectedAction);
	});
});
