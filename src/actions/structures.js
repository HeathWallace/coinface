// https://github.com/HeathWallace/ethereum-pos/issues/28
// import { struct } from 'superstruct';

const struct = () => x => x;

export const Transaction = struct({
	'address': 'string',
	'topics': ['string'],
	'data': 'string',
	'blockNumber': 'string',
	'timeStamp': 'string',
	'gasPrice': 'string',
	'gasUsed': 'string',
	'logIndex': 'string',
	'transactionHash': 'string',
	'transactionIndex': 'string',
});
