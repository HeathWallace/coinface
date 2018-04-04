import React from 'react';
import PropTypes from 'prop-types';

import './FirstName.css';

const FirstName = props => (
	<div className="FirstName">
		<p>{props.name.split(' ')[0]}</p>
	</div>
);

FirstName.description = `
Used as a visualisation of the customers first name.
`;

FirstName.propTypes = {
	/** Full name for the customer */
	name: PropTypes.string.isRequired,
};

export default FirstName;
