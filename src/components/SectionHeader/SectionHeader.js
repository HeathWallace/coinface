import React from 'react';
import PropTypes from 'prop-types';

import './SectionHeader.css';

const SectionHeader = ({ header }) => (
	<div className='SectionHeader'>
		<h2>{header}</h2>
	</div>
);

SectionHeader.description = `
Headers used for each section of the main app.
`;

SectionHeader.propTypes = {
	/** String of characters  */
	header: PropTypes.string,
};

export default SectionHeader;
