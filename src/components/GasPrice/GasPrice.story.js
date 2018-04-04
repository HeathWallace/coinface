/* global module */
import React from 'react';
import { storiesOf, withInfo } from '../../stories';

import GasPrice from './GasPrice';

storiesOf('GasPrice', module)
	.addDecorator((story, context) =>
		withInfo(GasPrice.description)(story)(context)
	)

	.add('base', () => <GasPrice recommendedPrice={123.45} />);
