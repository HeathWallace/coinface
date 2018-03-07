import React from 'react';
import PropTypes from 'prop-types';

import './ProgressBar.css';

const ProgressBar = ({ trust }) => (
	<div className="ProgressBar" style={{height:`${trust}%`}}>
		{trust < 100 &&
			<div className="wave"></div>
		}
	</div>
);

ProgressBar.description = `
Used as a visualisation of the percentage of confirmations required that the transaction has received.
`;

ProgressBar.propTypes = {

	/** the percentage of confirmations required that the transaction has received */
	trust: PropTypes.number.isRequired,
};

export default ProgressBar;
