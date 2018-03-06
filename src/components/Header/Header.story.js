import React from 'react';
import { storiesOf, action, withInfo } from '../../stories';

import Header from './Header';

storiesOf('Header')

	.addDecorator((story, context) => withInfo(Header.description)(story)(context))

	.add('with light theme (default)', () => (
		<Header onClick={action('clicked')}>Header</Header>
	))

	.add('with dark theme', () => (
		<Header theme='dark' onClick={action('clicked')}>Header</Header>
	));
