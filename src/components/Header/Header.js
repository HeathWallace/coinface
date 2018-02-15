import React from 'react';
import PropTypes from 'prop-types';

import SettingsWheel from '../SettingsWheel/SettingsWheel';

import './Header.css';

const Header = ({ theme, children, onOpenSettings }) => (
	<div className={`Header ${theme}`}>
		<div className="Header__content">{children}</div>
		<SettingsWheel onClick={onOpenSettings} />
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

	/** function to parse through to SettingsWheel for onClick event */
	onOpenSettings: PropTypes.func.isRequired,

};

export default Header;
