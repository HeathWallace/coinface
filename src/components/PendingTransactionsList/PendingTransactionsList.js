import React from 'react';
import PropTypes from 'prop-types';

import './PendingTransactionsList.css';

import Transaction from '../Transaction/Transaction';

const PendingTransactionsList = ({ transactions }) => (
	<div className='PendingTransactionsList'>
		{transactions.length > 0 &&
			transactions.map(transaction => (
				<Transaction
					key={transaction.hash}
					{...transaction}
				/>
			))
		}
		{transactions.length <= 0 &&
			<div className='no-results'>
				<p>
					There are no transactions to show...yet
				</p>
			</div>
		}
	</div>
);

PendingTransactionsList.description = `
Iterates through the transactions and hands rendering responsibility to child <Transaction/> components.

Should have an empty state for no transactions.
`;

PendingTransactionsList.propTypes = {
	/** Array of Transactions, see the Transaction component for specific propTypes */
	transactions: PropTypes.array,
};

export default PendingTransactionsList;
