import React from 'react';
import PropTypes from 'prop-types';

import './GButton.css';

//Declare a component that returns an HTML button with the given properties
const GButton = ({children, variant, disabled, onClick}) => {
	return <button type="button"
		className={`GButton ${variant}`}
		onClick={onClick}
		disabled={disabled}
	>{children}</button>;
};

//Description - appears in the storybook item
GButton.description = `
Buttons are used to initialize an action, either in the background or foreground of an experience.

Primary buttons should be used for the principle call to action on the page. Modify the behavior of the button by changing its onClick property.

Small buttons may be used when there is not enough space for a regular sized button. This issue is most found in tables. Small button should have three words or less.
`;

//This allows for the definition of rules that each prop type has to follow in order to be used properly
GButton.propTypes = {
	children: PropTypes.string.isRequired,
	variant: PropTypes.oneOf(['primary', 'secondary']).isRequired,
	onClick: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
};

//What properties the component should have when nothing is defined
GButton.defaultProps = {
	children: 'I am a button!',
	variant: 'primary',
	disabled: false,
};

export default GButton;
