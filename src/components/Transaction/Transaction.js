import React from 'react';
import PropTypes from 'prop-types';

import './Transaction.css';


const Transaction = props => (
	<div className="Transaction">
		<dl>
			<dt className="from">From:</dt>
			<dd className="from">{props.from}</dd>
			<dt className="to">To:</dt>
			<dd className="to">{props.to}</dd>
			<dt className="amount">Amount:</dt>
			<dd className="amount">{props.amount} GRM</dd>
			<dt className="time">Time:</dt>
			<dd className="time">{props.timeStamp}</dd>
			<dt className="trust">Trust:</dt>
			<dd className="trust">{props.trust}</dd>
		</dl>
	</div>
);

Transaction.description = `
Used as a visualisation of a particular transaction, containing all the required information that would be useful to a user of the POS system.
`;

Transaction.propTypes = {
	/** unique identification for the transaition */
	transactionHash: PropTypes.string.isRequired,

	/** the address from which the transaction was sent */
	from: PropTypes.string.isRequired,

	/** address from which the transaction was sent */
	to: PropTypes.string.isRequired,

	/** the amount of currency moved in the transaction */
	amount: PropTypes.number.isRequired,

	/** the timestamp at which the transaction occurred */
	timeStamp: PropTypes.string.isRequired,

	/** the number of confirmations that the transaction has received */
	trust: PropTypes.number.isRequired,
};

export default Transaction;
