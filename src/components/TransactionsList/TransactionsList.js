import React from 'react';
import PropTypes from 'prop-types';

import Transaction from '../Transaction/Transaction';

const TransactionsList = ({ transactions }) => (
	<div className="TransactionsList">
		{ transactions.map(transaction => (
			<Transaction
				key={transaction.hash}
				{...transaction}
			/>
		)) }
	</div>
);

TransactionsList.description = `
Iterates through the transactions and hands rendering responsibility to child <Transaction/> components.

Should have an empty state for no transactions.
`;

TransactionsList.propTypes = {
	/** Array of Transactions, see the Transaction component for specific propTypes */
	transactions: PropTypes.array.isRequired,
};

export default TransactionsList;
