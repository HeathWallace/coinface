import transactions from './data.json';
const TIMEOUT = 250;

export default {
	getTransactions() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (transactions.message === 'OK'){
					resolve(transactions.result);
				}else{
					reject(transactions);
				}
			}, TIMEOUT);
		});
	},
};
