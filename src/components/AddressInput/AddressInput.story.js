/* global module */
import React from 'react';
import { storiesOf, action, withInfo } from '../../stories';

import AddressInput from './AddressInput';

storiesOf('AddressInput', module)
	.addDecorator((story, context) =>
		withInfo(AddressInput.description)(story)(context)
	)

	.add('base', () => <AddressInput onChange={action('onChange')} />);
