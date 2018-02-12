import React from 'react';
import PropTypes from 'prop-types';

import './Header.css';

const Header = ({ theme, children }) => (
	<div className={`Header ${theme}`}>
		{children}
	</div>
);

Header.description = `
A fixed header bar that renders above the transaction list and contains the settings wheel
`;

Header.defaultProps = {
	theme: 'light',
};

Header.propTypes = {
	/** content to display with the header. */
	children: PropTypes.string.isRequired,

	/** background theme of the header. */
	theme: PropTypes.oneOf(['light', 'dark']).isRequired,

};

export default Header;
