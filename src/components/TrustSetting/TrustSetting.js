import React from 'react';
import PropTypes from 'prop-types';
import inputIdGenerator from '../../utils/inputIdGenerator';

const TrustSetting = ({ id = inputIdGenerator.nextIndex, labelText, minValue, maxValue, value, onChange }) => (
	<div className='TrustSetting'>
		<label htmlFor={id}>
			{labelText}
		</label>
		<input
			type='range'
			id={id}
			min={minValue}
			max={maxValue}
			value={value}
			onChange={e => onChange(e.target.value)}
		/>
	</div>
);

TrustSetting.description = `
A mechanism by which the user can configure a preference between waiting a long time for high confidence or short time with low confidence in transactions validity.`;

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

	/** Minimum value for the slider to decrease to*/
	minValue: PropTypes.number.isRequired,

	/** Maximum value for the slider to increase to*/
	maxValue: PropTypes.number.isRequired,

	/** A function to be called when the value of the input is changed. */
	onChange: PropTypes.func,

	/** Pre-defined value for input, if present */
	value: PropTypes.number,
};

export default TrustSetting;
