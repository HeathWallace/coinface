import React from 'react';
import { storiesOf, action, withInfo } from '../../stories';

import NumberInput from './NumberInput';

storiesOf('NumberInput')

	.addDecorator((story, context) => withInfo(NumberInput.description)(story)(context))

	.add('base', () => (
		<NumberInput onChange={action('onChange')} />
	));
