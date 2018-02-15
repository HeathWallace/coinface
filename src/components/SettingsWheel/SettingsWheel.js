import React from 'react';
import PropTypes from 'prop-types';

import './SettingsWheel.css';

const SettingsWheel = ({accessibleText, onClick}) => (
	<button className="SettingsWheel"
		onClick={onClick}>
		<span className="accessible">{accessibleText}</span>
	</button>
);

SettingsWheel.description = `
The settings wheel component that will trigger or route to the vendor's settings page.
`;

SettingsWheel.defaultProps = {
	accessibleText: 'Settings',

};
SettingsWheel.propTypes = {
	/** The text provided for screen readers */
	accessibleText: PropTypes.string.isRequired,

	/** A function to be called when the settings wheel is clicked. */
	onClick: PropTypes.func.isRequired,
};

export default SettingsWheel;
