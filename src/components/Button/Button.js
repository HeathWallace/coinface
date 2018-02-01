import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ children, disabled, onClick }) => (
	<button className="Button"
		disabled={disabled}
		type="button"
		onClick={onClick}
	>{children}</button>
);

Button.description = `
Buttons are used to initialize an action, either in the background or foreground of an experience.

Primary buttons should be used for the principle call to action on the page. Modify the behavior of the button by changing its onClick property.

Small buttons may be used when there is not enough space for a regular sized button. This issue is most found in tables. Small button should have three words or less.
`;

Button.defaultProps = {
	children: 'Click me!',
};

Button.propTypes = {
	/** The text shown inside the button. */
	children: PropTypes.string.isRequired,

	/** If the button should be disabled and unclickable. */
	disabled: PropTypes.bool,

	/** A function to be called when the Button is clicked. */
	onClick: PropTypes.func,
};

export default Button;
