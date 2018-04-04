/* global module */
import React from 'react';
import { storiesOf, withInfo } from '../../stories';

import './TransactionsList.story.css';

import TransactionsList from './TransactionsList';

storiesOf('TransactionsList', module)
	.addDecorator((story, context) =>
		withInfo(TransactionsList.description)(story)(context)
	)

	.add('with no data', () => <TransactionsList transactions={[]} />)

	.add('with junk data', () => (
		<TransactionsList
			transactions={[
				{
					from: '0x52903256dd18d85c2dc4a6c999907c9793ea61e3',
					to: '0x519475b31653e46d20cd09f9fdcf3b12bdacb4f5',
					amount: '1.20',
					timestamp: 1519121200,
					trust: 5,
					hash:
						'0x2d9c28aefc4768aa0710391d1723743358ba0f1101d443478826e382edb74612',
					symbol: 'ABC',
				},
				{
					from: '0x52903256dd18d85c2dc4a6c999907c9793ea61e3',
					to: '0x519475b31653e46d20cd09f9fdcf3b12bdacb4f5',
					amount: '1.20',
					timestamp: 1519121200,
					trust: 25,
					hash:
						'0x2d9c28aefc4768aa0710391d1723743358ba0f1101d443478826e382edb74612',
					symbol: 'ABC',
				},
				{
					from: '0.740338835632784',
					to: '0.21455781911656757',
					amount: '2.30',
					timestamp: 1519121364,
					trust: 50,
					hash: '0.14801239520291642',
					symbol: 'ABC',
				},
				{
					from: '0.740338835632784',
					to: '0.21455781911656757',
					amount: '2.30',
					timestamp: 1519121364,
					trust: 100,
					hash: '0.14801239520291642',
					symbol: 'ABC',
				},
			]}
		/>
	));
