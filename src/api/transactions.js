import env from '../utils/environment';
import { getWalletAddress } from '../actions';
import store from '../store';

class Transactions {
	get erc20TransferSignature() {
		// ERC20 standard Transfer function "Transfer(address,address,uint256)"
		// converted to hex then run through SHA3
		return '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef';
	}

	constructor() {
		this.base = 'https://api.etherscan.io';
		this.token = env.REACT_APP_CONTRACT_ADDRESS;
		this.apiKey = env.REACT_APP_ETHERSCAN_API_KEY;
	}

	buildQuery({ url, params }) {
		if (!params) return url;

		const esc = encodeURIComponent;
		return url + '/?' + Object.keys(params)
			.map(key => `${esc(key)}=${esc(params[key])}`)
			.join('&');
	}

	createDestinationTopic(walletAddress) {
		return walletAddress.replace('0x', '0x000000000000000000000000');
	}

	getTransactions(walletAddress) {
		// this.wallet = getWalletAddress(store);

		const { apiKey, token } = this;

		const module = 'logs';
		const action = 'getLogs';
		const fromBlock = 0;
		const toBlock = 'latest';
		const topic0 = this.erc20TransferSignature;
		const topic2 = this.createDestinationTopic(walletAddress);

		const url = `${this.base}/api`;
		const params = { module, action, fromBlock, toBlock, topic0, topic2, apiKey };

		return fetch(this.buildQuery({ url, params }))
			.then(response => response.json())
			.then(response => response.result)
			.then(transactions => transactions.filter(transaction => transaction.address === token));
	}
}

export default new Transactions();
