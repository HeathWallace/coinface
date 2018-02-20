/* global process */

class Environment {
	constructor() {
		Object.assign(this, ...this.requiredEnvironmentVariables.map(this._loadOrWarn));
	}

	get requiredEnvironmentVariables() {
		return [
			'NODE_ENV',
			'REACT_APP_CONTRACT_ADDRESS',
			'REACT_APP_DEFAULT_DECIMALS',
			'REACT_APP_DEFAULT_SYMBOL',
			'REACT_APP_ETHPLORER_API_KEY',
			'REACT_APP_IDENTITY_RESOLVER',
			'REACT_APP_WALLET_ADDRESS',
		];
	}

	_loadOrWarn(name) {
		const val = process.env[name];

		if (!val) console.error(`The environment variable ${name} is not set. Create a '.env' file in the root and define this variable.`); //eslint-disable-line

		return {
			[name]: val,
		};
	}
}

export default new Environment();
