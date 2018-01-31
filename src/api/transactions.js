import transactions from './data.json';

const TIMEOUT = 250;

export default {
	getTransactions(cb) {
		setTimeout(() => {
			cb(transactions);
		}, TIMEOUT);
	},
};
