import React from 'react';
import PropTypes from 'prop-types';

import './DailyTotal.css';

const DailyTotal = ({ total, symbol }) => (
	<div className='DailyTotal'>
		<p>Total: {total} {symbol}</p>
	</div>
);

DailyTotal.description = `
Displaying to the vendor the total monetary value of the transactions made in that day, particularly useful for quick reference.
`;

DailyTotal.propTypes = {
	/** the total value of all transactions made on that day */
	total: PropTypes.number.isRequired,

	/** The suffix to show after the transaction amount, such as "BTC" or "ETH" */
	symbol: PropTypes.string,
};

export default DailyTotal;
