import React from 'react';
import { storiesOf, action, withInfo } from '../../stories';

import Button from './Button';

storiesOf('Button')
	.addDecorator((story, context) => withInfo(Button.description)(story)(context))
	.add('Primary button', () => (
		<Button onClick={action('clicked')}
			variant='primary'
			disabled={false}>Primary button!</Button>
	))
	.add('Secondary button', () => (
		<Button onClick={action('clicked')}
			variant='secondary'
			disabled={false}>Seondary button!</Button>
	))
	.add('Disabled primary button', () => (
		<Button onClick={action('clicked')}
			variant='primary'
			disabled={true}>Disabled primary button!</Button>
	))
	.add('Disabled secondary button', () => (
		<Button onClick={action('clicked')}
			variant='secondary'
			disabled={true}>Disabled secondary button!</Button>
	));
