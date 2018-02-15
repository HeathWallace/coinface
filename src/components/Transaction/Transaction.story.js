import React from 'react';
import { storiesOf, withInfo } from '../../stories';

import Transaction from './Transaction';

storiesOf('Transaction')

	.addDecorator((story, context) => withInfo(Transaction.description)(story)(context))

	.add('with junk data', () => (
		<Transaction
			from={'0x52903256dd18d85c2dc4a6c999907c9793ea61e3'}
			to={'0x519475b31653e46d20cd09f9fdcf3b12bdacb4f5'}
			amount={1.2}
			timeStamp={'12/02/2018 11:51'}
			trust={4}
			hash={'0x2d9c28aefc4768aa0710391d1723743358ba0f1101d443478826e382edb74612'}
		/>
	));
