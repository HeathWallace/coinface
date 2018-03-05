import * as types from '../constants/actionTypes';
import * as actions from './index';
const payload = {
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

describe('actions', () => {
	it('should create an action to add a transaction', () => {
		const expectedAction = {
			type: types.ADD_TRANSACTION,
			payload,
		};

		expect(actions.addTransaction(payload)).toEqual(expectedAction);
	});
});
