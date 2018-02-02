import React from 'react';
import { storiesOf, action, withInfo } from '../../stories';

import Button from './Button';

storiesOf('Button')

	.addDecorator((story, context) => withInfo(Button.description)(story)(context))

	.add('with no text', () => (
		<Button onClick={action('clicked')}/>
	))

	.add('with children', () => (
		<Button onClick={action('clicked')}>This is the button</Button>
	))

	.add('with some emoji', () => (
		<Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
	));
