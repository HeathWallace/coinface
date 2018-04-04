/* global process */

class Environment {
	constructor() {
		// Convert each required variable to a key/value
		// pair, and merge all the pairs into the instance
		Object.assign(
			this,
			...this.requiredEnvironmentVariables.map(this._loadOrWarn)
		);
		Object.assign(this, ...this.optionalEnvironmentVariables.map(this._load));
	}

	get requiredEnvironmentVariables() {
		return [
			'NODE_ENV',
			'REACT_APP_CONTRACT_ADDRESS',
			'REACT_APP_DEFAULT_DECIMALS',
			'REACT_APP_DEFAULT_SYMBOL',
			'REACT_APP_ETHERSCAN_API_KEY',
			'REACT_APP_ETHPLORER_API_KEY',
			'REACT_APP_IDENTITY_RESOLVER',
			'REACT_APP_PENDING_TRANSACTION_API',
			'REACT_APP_WALLET_ADDRESS',
		];
	}

	get optionalEnvironmentVariables() {
		return ['REACT_APP_SIMULATED_TRANSACTIONS'];
	}

	// Convert a variable name into a key/value pair from
	// the process.env, and warn if the variable does
	// not have a value i.e. is unset.
	_load(name) {
		const val = process.env[name];

		return {
			[name]: val,
		};
	}

	// Convert a variable name into a key/value pair from
	// the process.env
	_loadOrWarn(name) {
		const isCI = process.env.CI || false;
		const val = process.env[name];

		if (!val && !isCI) console.error(`The environment variable ${name} is not set. Create a '.env' file in the root and define this variable.`); //eslint-disable-line

		return {
			[name]: val,
		};
	}
}

export default new Environment();
