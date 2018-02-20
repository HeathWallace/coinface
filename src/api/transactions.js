/* global process */

class Transactions {
	constructor() {
		this.base = 'https://api.ethplorer.io';

		this.token = process.env.REACT_APP_CONTRACT_ADDRESS;
		this.wallet = process.env.REACT_APP_WALLET_ADDRESS;
		this.apiKey = process.env.REACT_APP_ETHPLORER_API_KEY;

		if (!this.token) {
			throw new Error('Environment variable REACT_APP_CONTRACT_ADDRESS is required.');
		}

		if (!this.wallet) {
			throw new Error('Environment variable REACT_APP_WALLET_ADDRESS is required.');
		}

		if (!this.apiKey) {
			console.error('Warning: environment variable REACT_APP_ETHPLORER_API_KEY is unset. Using default free key - watch out for rate limits!'); // eslint-disable-line
			this.apiKey = 'freekey';
		}
	}

	get routes() {
		return {
			getAddressHistory: wallet => `${this.base}/getAddressHistory/${wallet}`,
		};
	}

	buildQuery({ url, params }) {
		if (!params) return url;

		const esc = encodeURIComponent;
		return url + '/?' + Object.keys(params)
			.map(key => `${esc(key)}=${esc(params[key])}`)
			.join('&');
	}

	getTransactions() {
		const type = 'transfer';
		const { apiKey, token, wallet } = this;

		const url = this.routes.getAddressHistory(wallet);
		const params = { token, type, apiKey };

		return fetch(this.buildQuery({ url, params }))
			.then(response => response.json())
			.then(result => result.operations.filter(transfer => transfer.to === wallet));
	}
}

export default new Transactions();
