/* global process */
import React from 'react';
import PropTypes from 'prop-types';
import human from 'human-time';

import './Transaction.css';

import SkypeProfile from '../SkypeProfile/SkypeProfile';
import FirstName from '../FirstName/FirstName';

class Transaction extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			secondsElapsed: 0,
			username: 'gary_purbrick',
			name: 'Gary Purbrick',
		};

		this.tick = this.tick.bind(this);
	}

	componentDidMount() {
		this._interval = setInterval(this.tick, 1000);

		const { REACT_APP_IDENTITY_RESOLVER: url } = process.env;
		if (!url) throw new Error('REACT_APP_IDENTITY_RESOLVER unset in .env file');

		const { from } = this.props;

		fetch(`${url}/search/?address=${from}`)
			.then(response => response.json())
			.then(([ user ]) => {
				if (user) {
					const { username, name } = user;

					this.setState({ username, name });
				}
			});
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

	render() {
		const { from, amount, timestamp, symbol } = this.props;
		const { username, name } = this.state;

		return (
			<div className="Transaction">
				<div className="transactionInner">
					<SkypeProfile username={username}/>
					<div className="customerDetails">
						<FirstName name={name}></FirstName>
						<p className="time">{this._toHumanReadableInterval(timestamp)}</p>
						<p className="from">{from}</p>
					</div>
					<p className="amount">{amount} {symbol}</p>
				</div>
				<div className="progressBar"></div>
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
	amount: PropTypes.string.isRequired,

	/** The suffix to show after the transaction amount, such as "BTC" or "ETH" */
	symbol: PropTypes.string,

	/** the timestamp at which the transaction occurred */
	timestamp: PropTypes.number.isRequired,

	/** the number of confirmations that the transaction has received */
	trust: PropTypes.number,
};

export default Transaction;
