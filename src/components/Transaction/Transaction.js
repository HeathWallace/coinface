import React from 'react';
import PropTypes from 'prop-types';
import human from 'human-time';

import bindMethods from 'yaab';

import './Transaction.css';

import env from '../../utils/environment';

import SkypeProfile from '../SkypeProfile/SkypeProfile';
import FirstName from '../FirstName/FirstName';
import ProgressBar from '../ProgressBar/ProgressBar';

const identityCache = {};

class Transaction extends React.Component {
	constructor(props) {
		super(props);
		bindMethods(this);

		this.state = {
			secondsElapsed: 0,
			username: 'unknown',
			name: 'Unknown',
		};
	}

	componentDidMount() {
		this._interval = setInterval(this.tick, 1000);

		const url = env.REACT_APP_IDENTITY_RESOLVER;

		const { from } = this.props;

		if (identityCache[from]) {
			const { username, name } = identityCache[from];
			this.setState({ username, name });
		} else {
			fetch(`${url}/search/?address=${from}`)
				.then(response => response.json())
				.then(([ user ]) => {
					if (user) {
						const { username, name } = user;

						identityCache[from] = { username, name };

						this.setState({ username, name });
					}
				});
		}

	}

	componentWillUnmount() {
		clearInterval(this._interval);
	}

	tick() {
		this.setState(prevState => {
			const { secondsElapsed } = prevState;

			return { secondsElapsed: secondsElapsed + 1 };
		});
	}

	_toHumanReadableInterval(timestamp) {
		const now = new Date();
		const then = new Date(timestamp * 1000);
		const difference = Math.abs((now.getTime() - then.getTime()) / 1000);
		return human(difference);
	}

	_toHumanReadableAmount(value, decimals = 0) {
		// Converts the indivisible base amount with a decimal
		// to a human-readable amount. I.e., 300 base units
		// with 2 decimals is represented as 3.00

		return (value * Math.pow(10, -decimals)).toFixed(decimals);
	}

	render() {
		const { from, amount, timestamp, symbol, trust, decimals } = this.props;
		const { username, name } = this.state;

		return (
			<div className='Transaction'>
				<div className='transactionInner'>
					<SkypeProfile username={username}/>
					<div className='customerDetails'>
						<FirstName name={name}></FirstName>
						<p className='time'>{this._toHumanReadableInterval(timestamp)}</p>
						<p className='from'><code>{from}</code></p>
					</div>
					<p className='amount'>{this._toHumanReadableAmount(amount, decimals)} {symbol}</p>
				</div>
				<ProgressBar trust={trust}></ProgressBar>
			</div>
		);
	}
}

Transaction.description = `
Used as a visualisation of a particular transaction, containing all the required information that would be useful to a user of the POS system.
`;

Transaction.propTypes = {
	/** unique identification for the transaction */
	hash: PropTypes.string.isRequired,

	/** the address from which the transaction was sent */
	from: PropTypes.string.isRequired,

	/** the amount of currency moved in the transaction */
	amount: PropTypes.number.isRequired,

	/** The suffix to show after the transaction amount, such as "BTC" or "ETH" */
	symbol: PropTypes.string.isRequired,

	/** the timestamp at which the transaction occurred */
	timestamp: PropTypes.number.isRequired,

	/** the percentage of confirmations required that the transaction has received */
	trust: PropTypes.number.isRequired,

	/** the number of decimals which the currency uses: i.e., 300 pennies with 2 decimals is 3.00 GBP. */
	decimals: PropTypes.number,
};

export default Transaction;
