import React from 'react';
import { storiesOf, withInfo } from '../../stories';

import DailyTotal from './DailyTotal';

import './reset-fixed.css';

storiesOf('DailyTotal')

	.addDecorator((story, context) => withInfo(DailyTotal.description)(story)(context))

	.add('base', () => (
		<div className="reset-fixed">
			<DailyTotal total="123.45" symbol="GRM" />
		</div>
	));
