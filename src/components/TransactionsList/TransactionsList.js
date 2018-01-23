import React from 'react';
import PropTypes from 'prop-types';

import Transaction from '../Transaction/Transaction';

const TransactionsList = ({ transactions }) => (
	<div className="TransactionsList">
		{ transactions.map(transaction => (
			<Transaction
				key={transaction.transactionHash}
				{...transaction}
			/>
		)) }
	</div>
);

TransactionsList.propTypes = {
	transactions: PropTypes.array.isRequired,
};

export default TransactionsList;
