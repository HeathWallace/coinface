import React from 'react';
import PropTypes from 'prop-types';
import inputIdGenerator from '../../utils/inputIdGenerator';

import './TextInput.css';

const TextInput = ({ id = inputIdGenerator.nextIndex, labelText, value, onChange }) => (
	<div className='TextInput'>
		<label htmlFor={id}>
			{labelText}
		</label>
		<input
			id={id}
			type='text'
			onChange={e => onChange(e.target.value)}
			value={value}
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
};

export default TextInput;
