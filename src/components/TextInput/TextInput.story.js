import React from 'react';
import { storiesOf, action, withInfo } from '../../stories';
import { specs, describe, it } from 'storybook-addon-specifications';

import { mount } from 'enzyme';
// import expect from 'expect';

import TextInput from './TextInput';

storiesOf('TextInput')

	.addDecorator((story, context) => withInfo(TextInput.description)(story)(context))

	.add('base', () => (
		<TextInput onChange={action('onChange')} />
	))

	.add('base with test', () => {
		const story = <TextInput labelText='Foo' />;

		specs(() => describe('base with test', function () {
			it('Should have the foo label', function() {
				let output = mount(story);
				expect(output.find('label').text()).toEqual('Foo');
			});
		}));

		return story;
	});
