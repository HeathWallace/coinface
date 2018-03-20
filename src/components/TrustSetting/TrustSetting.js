import React from 'react';
import PropTypes from 'prop-types';
import inputIdGenerator from '../../utils/inputIdGenerator';

import './TrustSetting.css';

class TrustSetting extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: props.value,
		};

		this.onChange = this.onChange.bind(this);
	}

	componentWillReceiveProps({ value }) {
		if (value !== this.state.value) {
			this.setState({ value });
		}
	}

	onChange(event) {
		const { value: valueString } = event.target;
		const { onChange } = this.props;
		const value = parseInt(valueString, 10);
		this.setState({ value }, () => onChange(value));
	}

	render() {
		const { id = inputIdGenerator.nextIndex, labelText, min, max, step } = this.props;
		const { value } = this.state;
		return (
			<div className={`TrustSetting ${value === max ? 'max': ''}`}>
				<label htmlFor={id}>
					{labelText}
				</label>
				<input
					type='range'
					id={id}
					min={min}
					max={max}
					step={step}
					value={value}
					onChange={this.onChange}
				/>
			</div>
		);
	}
}

TrustSetting.description = `
A mechanism by which the user can configure a preference between waiting a long time for high confidence or short time with low confidence in transactions validity.`;

TrustSetting.defaultProps = {
	/** Text for input label */
	labelText: 'Trust input',

	value: 0,

	step: 1,
};

TrustSetting.propTypes = {
	/** HTML id attribute for the input
	If not present one is generated automagically */
	id: PropTypes.string,

	/** Text used for the label */
	labelText: PropTypes.string.isRequired,

	/** Minimum value for the slider to decrease to*/
	min: PropTypes.number.isRequired,

	/** Maximum value for the slider to increase to*/
	max: PropTypes.number.isRequired,

	/** A function to be called when the value of the input is changed. */
	onChange: PropTypes.func,

	/** Pre-defined value for input, if present */
	value: PropTypes.number.isRequired,

	/** Change the step prop to control the granularity of the slider */
	step: PropTypes.number.isRequired,
};

export default TrustSetting;
