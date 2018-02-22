import React from 'react';
import PropTypes from 'prop-types';

import './SettingsDrawer.css';

const SettingsDrawer = ({ children, closeButtonText, isOpen, onClose }) => (
	<div className={`SettingsDrawer ${isOpen ? 'is-open' : 'is-closed'}`}>
		{children}
		<button type="button" className="close-button" onClick={onClose}>
			{closeButtonText}
		</button>
	</div>
);

SettingsDrawer.description = `
A container for settings inputs which renders over the top of the header and transaction list.
`;

SettingsDrawer.defaultProps = {
	isOpen: false,
	closeButtonText: 'Close settings',
};

SettingsDrawer.propTypes = {
	/** The contents of the settings drawer. */
	children: PropTypes.node,

	/** If the settings drawer is open or closed. */
	isOpen: PropTypes.bool.isRequired,

	/** Text for the close drawer button */
	closeButtonText: PropTypes.string,

	/** A callback to fire when the close button is pressed */
	onClose: PropTypes.func,
};

export default SettingsDrawer;
