/* global module */
import React from 'react';
import { storiesOf, withInfo } from '../../stories';

import SkypeProfile from './SkypeProfile';

storiesOf('SkypeProfile', module)
	.addDecorator((story, context) =>
		withInfo(SkypeProfile.description)(story)(context)
	)

	.add('known user', () => <SkypeProfile username="gary_purbrick" />)

	.add('unknown user', () => <SkypeProfile username="giohsdhsn" />)

	.add('empty user', () => <SkypeProfile />);
