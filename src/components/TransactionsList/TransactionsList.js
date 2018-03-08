import React from 'react';
import PropTypes from 'prop-types';

import './TransactionsList.css';

import PendingTransactionsList from '../PendingTransactionsList/PendingTransactionsList';
import CompletedTransactionsList from '../CompletedTransactionsList/CompletedTransactionsList';

const TransactionsList = ({ transactions }) => {
	const pendingTransactions = transactions.filter(transaction => transaction.trust < 100);
	const completedTransactions = transactions.filter(transaction => transaction.trust >= 100);

	return (
		<div className='TransactionsList'>
			{transactions.length >0 &&
				<div>
					<PendingTransactionsList transactions={pendingTransactions}/>
					<CompletedTransactionsList transactions={completedTransactions}/>
				</div>
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
};

TransactionsList.description = `
Iterates through the transactions and hands rendering responsibility to child <Transaction/> components.

Should have an empty state for no transactions.
`;

TransactionsList.propTypes = {
	/** Array of Transactions, see the Transaction component for specific propTypes */
	transactions: PropTypes.array,
};

export default TransactionsList;
