import env from '../utils/environment';

import Api from './Api';

class TokenMetadata extends Api {
	getMetadata(tokenAddress) {
		const url = `/getTokenInfo/${tokenAddress}`;

		return this.fetch(url);
	}
}

export default new TokenMetadata('https://api.ethplorer.io', { apiKey: env.REACT_APP_ETHPLORER_API_KEY });
