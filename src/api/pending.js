import env from '../utils/environment';

import Api from './Api';

class Pending extends Api {
	getTransactionsTo(address) {
		const url = '/pending';
		return this.fetch(url, { address });
	}
}

export default new Pending(env.REACT_APP_PENDING_TRANSACTION_API);
