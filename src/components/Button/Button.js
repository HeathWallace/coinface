import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, disabled, onClick }) => (
	<button
		disabled={disabled}
		type="button"
		onClick={onClick}
	>{children}</button>
);

Button.propTypes = {
	children: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
};

export default Button;
