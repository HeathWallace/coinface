// https://github.com/HeathWallace/coinface/issues/28
import { struct as structLib } from '../lib/superstruct';
import env from '../utils/environment';

const structFake = () => x => x;

const struct = env.NODE_ENV === 'production' ? structFake : structLib;

export const Transaction = struct({
	address: 'string',
	topics: ['string'],
	data: 'string',
	blockNumber: 'string',
	timeStamp: 'string',
	gasPrice: 'string',
	gasUsed: 'string',
	logIndex: 'string',
	transactionHash: 'string',
	transactionIndex: 'string',
	confirmations: 'number',
});

export const Settings = struct({
	walletAddress: 'string',
	trustLevel: 'number',
});
