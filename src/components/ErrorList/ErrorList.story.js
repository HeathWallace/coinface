/* global module */
import React from 'react';
import { storiesOf, withInfo } from '../../stories';

import ErrorList from './ErrorList';

storiesOf('ErrorList', module)

	.addDecorator((story, context) => withInfo(ErrorList.description)(story)(context))

	.add('base', () => (
		<ErrorList
			errors={['Value is too long',
				'Must start with 0x',
				'Incorrect format']}
		/>
	));
