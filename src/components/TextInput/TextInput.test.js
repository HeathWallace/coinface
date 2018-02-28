import React from 'react';
import { shallow } from 'enzyme';
import TextInput from './TextInput';

describe('TextInput does the thing', () => {

	test('renders an input component', () => {
		const wrapper = shallow(<TextInput labelText='Foo' />);

		expect(wrapper.find('input').exists()).toEqual(true);
	});

	test('generates matching IDs on the label and input', () => {
		const wrapper = shallow(<TextInput labelText='Foo' />);

		let inputId = wrapper.find('input').prop('id');
		let labelId = wrapper.find('label').prop('htmlFor');

		expect(inputId).toEqual(labelId);
	});

	test('starts with the value of the input equal to the value prop', () => {
		const wrapper = shallow(<TextInput labelText='Foo' value='Bar' />);

		expect(wrapper.find('input').prop('value')).toEqual('Bar');
	});

	test('calls the onChange prop when a change happens', () => {
		let mockChange = jest.fn();
		let mockEvent = {
			target: { value: 'Bar' },
		};
		const wrapper = shallow(<TextInput labelText='Foo' onChange={mockChange} />);

		let input = wrapper.find('input');

		input.simulate('change', mockEvent);

		expect(mockChange).toBeCalledWith('Bar');
	});
});
