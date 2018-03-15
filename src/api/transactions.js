import env from '../utils/environment';

import Api from './Api';

class Transactions extends Api {
	get erc20TransferSignature() {
		// ERC20 standard Transfer function "Transfer(address,address,uint256)"
		// converted to hex then run through SHA3
		return '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef';
	}

	createDestinationTopic(walletAddress) {
		return walletAddress.replace('0x', '0x000000000000000000000000');
	}

	getTransactions({ walletAddress }) {
		const module = 'logs';
		const action = 'getLogs';
		const fromBlock = 0;
		const toBlock = 'latest';
		const topic0 = this.erc20TransferSignature;
		const topic2 = this.createDestinationTopic(walletAddress);

		const url = '/api';
		const params = { module, action, fromBlock, toBlock, topic0, topic2 };

		return this.fetch(url, params)
			.then(response => response.result);
	}
}

export default new Transactions('https://api.etherscan.io', { apikey: env.REACT_APP_ETHERSCAN_API_KEY });
