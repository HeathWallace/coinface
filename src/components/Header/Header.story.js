import React from 'react';
import { storiesOf, withInfo } from '../../stories';

import Header from './Header';

storiesOf('Header')

	.addDecorator((story, context) => withInfo(Header.description)(story)(context))

	.add('with light theme (default)', () => (
		<Header>Header</Header>
	))

	.add('with dark theme', () => (
		<Header theme="dark">Header</Header>
	));
