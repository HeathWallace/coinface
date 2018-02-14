import React from 'react';
import { storiesOf, action, withInfo } from '../../stories';

import GButton from './GButton';

storiesOf('GButton')
	.addDecorator((story, context) => withInfo(GButton.description)(story)(context))
	.add('Primary button', () => (
		<GButton onClick={action('clicked')}
			variant='primary'
			disabled={false}>I&apos;m a primary button!</GButton>
	))
	.add('Secondary button', () => (
		<GButton onClick={action('clicked')}
			variant='secondary'
			disabled={false}>I&apos;m a seondary button!</GButton>
	))
	.add('Disabled primary button', () => (
		<GButton onClick={action('clicked')}
			variant='primary'
			disabled={true}>I&apos;m a disabled primary button!</GButton>
	))
	.add('Disabled secondary button', () => (
		<GButton onClick={action('clicked')}
			variant='secondary'
			disabled={true}>I&apos;m a disabled secondary button!</GButton>
	));
