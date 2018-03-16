import React from 'react';
import PropTypes from 'prop-types';

import './ErrorList.css';

const ErrorList = ({ errors }) => (
	<div className='base'>
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
Displays a list of errors
`;

ErrorList.propTypes = {
	/** array of error strings */
	errors: PropTypes.array,
};

ErrorList.defaultProps = {
	errors: [],
};

export default ErrorList;
