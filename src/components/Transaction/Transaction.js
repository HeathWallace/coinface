import React from 'react';
import PropTypes from 'prop-types';
import human from 'human-time';

import './Transaction.css';

class Transaction extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			secondsElapsed: 0,
		};

		this.tick = this.tick.bind(this);
	}

	componentDidMount() {
		this._interval = setInterval(this.tick, 1000);
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
		const { from, to, amount, timestamp, trust, symbol } = this.props;

		return (
			<div className="Transaction">
				<dl>
					<dt className="from">From:</dt>
					<dd className="from">{from}</dd>
					<dt className="to">To:</dt>
					<dd className="to">{to}</dd>
					<dt className="amount">Amount:</dt>
					<dd className="amount">{amount} {symbol}</dd>
					<dt className="time">Time:</dt>
					<dd className="time">{this._toHumanReadableInterval(timestamp)}</dd>
					<dt className="trust">Trust:</dt>
					<dd className="trust">{trust}</dd>
				</dl>
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

	/** address from which the transaction was sent */
	to: PropTypes.string.isRequired,

	/** the amount of currency moved in the transaction */
	amount: PropTypes.string.isRequired,

	/** The suffix to show after the transaction amount, such as "BTC" or "ETH" */
	symbol: PropTypes.string.isRequired,

	/** the timestamp at which the transaction occurred */
	timestamp: PropTypes.number.isRequired,

	/** the number of confirmations that the transaction has received */
	trust: PropTypes.number,
};

export default Transaction;
