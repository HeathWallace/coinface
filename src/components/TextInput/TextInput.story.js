import React from 'react';
import { storiesOf, action, withInfo } from '../../stories';

import TextInput from './TextInput';

storiesOf('TextInput')

	.addDecorator((story, context) => withInfo(TextInput.description)(story)(context))

	.add('base', () => (
		<TextInput onChange={action('onChange')} />
	));
