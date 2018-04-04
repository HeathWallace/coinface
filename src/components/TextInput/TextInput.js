import React from 'react';
import PropTypes from 'prop-types';
import inputIdGenerator from '../../utils/inputIdGenerator';

import './TextInput.css';

const TextInput = ({
	id = inputIdGenerator.nextIndex,
	labelText,
	value,
	onChange,
	isValid,
}) => (
	<div className={`TextInput ${isValid ? '' : 'is-invalid'}`}>
		<label htmlFor={id}>{labelText}</label>
		<input
			id={id}
			type="text"
			onChange={e => onChange(e.target.value)}
			value={value}
			aria-invalid={!isValid}
		/>
	</div>
);

TextInput.description = `
Basic text input complete with label
`;

TextInput.propTypes = {
	/** HTML id attribute for the input
	 If not present one is generated automagically */
	id: PropTypes.string,

	/** Text used for the label */
	labelText: PropTypes.string.isRequired,

	/** A function to be called when the value of the input is changed. */
	onChange: PropTypes.func,

	/** Pre-defined value for input, if present */
	value: PropTypes.string,

	/** Flag if the input is valid or not */
	isValid: PropTypes.bool,
};

TextInput.defaultProps = {
	isValid: true,
};

export default TextInput;
