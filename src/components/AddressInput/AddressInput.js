import React from 'react';
import PropTypes from 'prop-types';
import inputIdGenerator from '../../utils/inputIdGenerator';
import TextInput from '../TextInput/TextInput';

const AddressInput = ({ id = inputIdGenerator.nextIndex, labelText, value, onChange }) => (
	<div className='AddressInput'>
		<TextInput
			id={id}
			labelText={labelText}
			onChange={onChange}
			value={value}
		/>
	</div>
);

AddressInput.description = `
A mechanism by which the currently selected address can be changed.

Further expansions include multiple address support or QR input.
`;

AddressInput.defaultProps = {
	/** Text for input label */
	labelText: 'Address input',
};

AddressInput.propTypes = {
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

export default AddressInput;
