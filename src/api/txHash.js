import env from '../utils/environment';

import Api from './Api';

class TxHash extends Api {
	getMeta(hash) {
		const url = '/transaction';
		return this.fetch(url, { hash });
	}
}

export default new TxHash(env.REACT_APP_PENDING_TRANSACTION_API);
