import { struct } from 'superstruct';

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
