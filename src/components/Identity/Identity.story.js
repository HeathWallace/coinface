/* global module */
import React from 'react';
import { storiesOf, withInfo } from '../../stories';

import Identity from './Identity';

storiesOf('Identity', module)

	.addDecorator((story, context) => withInfo(Identity.description)(story)(context))

	.add('with unknown address', () => (
		<Identity address='0x0000000000000000000000000000000000000000'/>
	))

	.add('with known address', () => (
		<Identity address='0xe8Ce6240773C9772d38eBbb6EF63aaD2FA9311E4'/>
	));
