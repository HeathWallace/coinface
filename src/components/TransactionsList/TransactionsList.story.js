import React from 'react';
import { storiesOf, withInfo } from '../../stories';

import TransactionsList from './TransactionsList';

storiesOf('TransactionsList')

	.addDecorator((story, context) => withInfo(TransactionsList.description)(story)(context))

	.add('with no data', () => (
		<TransactionsList transactions={[]} />
	))

	.add('with junk data', () => (
		<TransactionsList transactions={
			[
				{
					from: '0x52903256dd18d85c2dc4a6c999907c9793ea61e3',
					to: '0x519475b31653e46d20cd09f9fdcf3b12bdacb4f5',
					amount: 1.2,
					timeStamp: '12/02/2018 11:51',
					trust: 4,
					hash: '0x2d9c28aefc4768aa0710391d1723743358ba0f1101d443478826e382edb74612',
				},
				{
					from: '0.740338835632784',
					to: '0.21455781911656757',
					amount: 2.3,
					timeStamp: '12/02/2018 15:33',
					trust: 2,
					hash: '0.14801239520291642',
				},
			]
		} />
	));
