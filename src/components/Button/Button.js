import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

//Some crazy utility making for simpler if statements
const _if = (conditional, ifTrue, ifFalse = '') =>
	conditional ? ifTrue : ifFalse;

//Declare a component that returns an HTML button with the given properties
const Button = ({ children, variant, disabled, onClick }) => {
	return (
		<button
			type="button"
			className={`Button ${variant} ${_if(disabled, 'disabled')}`}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

//Description - appears in the storybook item
Button.description = `
Buttons are used to initialize an action, either in the background or foreground of an experience.

Primary buttons should be used for the principle call to action on the page. Modify the behavior of the button by changing its onClick property.

Small buttons may be used when there is not enough space for a regular sized button. This issue is most found in tables. Small button should have three words or less.
`;

//This allows for the definition of rules that each prop type has to follow in order to be used properly
Button.propTypes = {
	/** Text that will appear in the button
	 This will default to 'I am a button' if not present*/
	children: PropTypes.string.isRequired,

	/** This determines the styling and purpose of the buttons
	 Defaults to primary*/
	variant: PropTypes.oneOf(['primary', 'secondary']).isRequired,

	/** The action performed when the button is clicked
	 There is no default and will throw an error if not present*/
	onClick: PropTypes.func.isRequired,

	/** Determines if the button is active or nothing
	 Disabled button should have different styling and not be clickable*/
	disabled: PropTypes.bool,
};

//What properties the component should have when nothing is defined
Button.defaultProps = {
	/** Adds this predetermined string when no child has been added to the button*/
	children: 'I am a button!',
	/** Sets the button type to primary if not defined*/
	variant: 'primary',
	/** The buttons are enabled unless otherwise specified*/
	disabled: false,
};

export default Button;
