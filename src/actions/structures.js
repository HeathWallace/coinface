// https://github.com/HeathWallace/ethereum-pos/issues/28
import { struct as structLib } from '../lib/superstruct';
import env from '../utils/environment';

const structFake = () => x => x;
structFake.union = () => {};

const struct = env.NODE_ENV === 'production' ? structFake : structLib;

export const Transaction = struct({
	'from': 'string',
	'timestamp': 'number',
	'to': 'string',
	'tokenInfo': struct.union(['boolean', 'object']), // API is inconsistent with what it returns here.
	'transactionHash': 'string',
	'type': 'string',
	'value': 'string',
});
