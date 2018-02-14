import React from 'react';
import PropTypes from 'prop-types';

const GButton = ({children, variant, disabled, onClick}) => {
	return <button type="button"
		variant={variant}
		onClick={onClick}
		disabled={disabled}
	>{children}</button>;
};

GButton.description = `
Buttons are used to initialize an action, either in the background or foreground of an experience.

Primary buttons should be used for the principle call to action on the page. Modify the behavior of the button by changing its onClick property.

Small buttons may be used when there is not enough space for a regular sized button. This issue is most found in tables. Small button should have three words or less.
`;

GButton.propTypes = {
	children: PropTypes.string.isRequired,
	variant: PropTypes.oneOf(['primary', 'secondary']).isRequired,
	onClick: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
};

GButton.defaultProps = {
	children: 'I am a button!',
	variant: 'primary',
	disabled: false,
};

export default GButton;
