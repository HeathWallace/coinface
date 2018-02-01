import React from 'react';
import { storiesOf, action, withInfo } from '../../stories';

import Button from './Button';

storiesOf('Button')

	.add('default', withInfo(Button.description)(() => (
		<Button onClick={action('clicked')}>This is the button</Button>
	)))

	.add('with info', withInfo(Button.description)(() => (
		<Button onClick={action('clicked')}>This is the button</Button>
	)))

	.add('with no text', withInfo(Button.description)(() => (
		<Button onClick={action('clicked')}/>
	)))

	.add('with some emoji', withInfo(Button.description)(() => (
		<Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
	)));
