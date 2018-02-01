import React from 'react';
import { storiesOf, withInfo } from '../../stories';

import Transaction from './Transaction';

storiesOf('Transaction')
	.add('with junk data', withInfo()(() => (
		<Transaction foo='bar'/>
	)));
