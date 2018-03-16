import React from 'react';
import PropTypes from 'prop-types';

import './ErrorList.css';

const ErrorList = ({ errors }) => (
	<div className='ErrorList'>
		{errors.length > 0 &&
		<ul>
			{errors.map((item, index) => (
				<li key={index}>
					{item}
				</li>
			))}
		</ul>
		}
	</div>
);

ErrorList.description = `
Displaying to the vendor the total monetary value of the transactions made in that day, particularly useful for quick reference.
`;

ErrorList.propTypes = {
	/** array of error strings */
	errors: PropTypes.array,
};

export default ErrorList;
