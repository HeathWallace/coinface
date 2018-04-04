/* global module */
import React from 'react';
import { storiesOf, withInfo } from '../../stories';

import FirstName from './FirstName';

storiesOf('FirstName', module)
	.addDecorator((story, context) =>
		withInfo(FirstName.description)(story)(context)
	)

	.add('with unknown name', () => <FirstName name="Unknown" />)

	.add('with known name', () => <FirstName name="Gary Purbrick" />);
