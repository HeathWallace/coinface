import React from 'react';
import PropTypes from 'prop-types';

import './AddressInput.css';

const AddressInput = ({ inputId, labelText, value, onChange }) => (
	<div className="AddressInput">
		<label htmlFor={inputId}>
			{labelText}
		</label>
		<input
			id={inputId}
			type="text"
			onChange={e => onChange(e.target.value)}
			value={value}
		/>
	</div>
);

AddressInput.description = `
A mechanism by which the currently selected address can be changed.

Further expansions include multiple address support or QR input.
`;

AddressInput.defaultProps = {
	labelText: 'Address input',
};

AddressInput.propTypes = {
	/** HTML id attribute for the input */
	inputId: PropTypes.string.isRequired,

	/** Text used for the label */
	labelText: PropTypes.string.isRequired,

	/** A function to be called when the value of the input is changed. */
	onChange: PropTypes.func,

	/** Pre-defined value for input, if present */
	value: PropTypes.string,
};

export default AddressInput;
