import React from 'react';
import PropTypes from 'prop-types';
import inputIdGenerator from '../../utils/inputIdGenerator';
import TextInput from '../TextInput/TextInput';

const TrustSetting = ({ id = inputIdGenerator.nextIndex, labelText, value, onChange }) => (
	<div className='TrustSetting'>
		<TextInput
			id={id}
			labelText={labelText}
			onChange={onChange}
			value={value}
		/>
	</div>
);

TrustSetting.description = `
A mechanism by which the user can configure a preference between waiting a long time for high confidence or short time with low confidence in transactions validity.

Initial draft is a basic text input, but future releases will revisit the UX of this input.
`;

TrustSetting.defaultProps = {
	/** Text for input label */
	labelText: 'Trust input',
};

TrustSetting.propTypes = {
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

export default TrustSetting;
