import React from 'react';
import PropTypes from 'prop-types';

import './SectionHeader.css';

const SectionHeader = ({ children }) => (
	<div className="SectionHeader">
		<h2>{children}</h2>
	</div>
);

SectionHeader.description = `
Headers used for each section of the main app.
`;

SectionHeader.propTypes = {
	/** String of characters  */
	children: PropTypes.string,
};

export default SectionHeader;
