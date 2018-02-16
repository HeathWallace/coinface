import React from 'react';
import { storiesOf, action, withInfo } from '../../stories';

import AddressInput from './AddressInput';

storiesOf('AddressInput')

	.addDecorator((story, context) => withInfo(AddressInput.description)(story)(context))

	.add('base', () => (
		<AddressInput onChange={action('onChange')} />
	));
