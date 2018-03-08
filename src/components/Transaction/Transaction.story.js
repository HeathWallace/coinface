/* global module */
import React from 'react';
import { storiesOf, withInfo } from '../../stories';

import Transaction from './Transaction';

storiesOf('Transaction', module)

	.addDecorator((story, context) => withInfo(Transaction.description)(story)(context))

	.add('0 Confirmations', () => (
		<Transaction
			from={'0xb794f5ea0ba39494ce839613fffba74279579268'}
			amount={'88.00'}
			timestamp={1519059931}
			trust={0}
			hash={'0x126f82dcb2f4a283b4ebe20887deb8fdae8b136bf6c732ab444fd8910b442e3b'}
			symbol={'ABC'}
		/>
	))

	.add('Quarter of confirmations reached', () => (
		<Transaction
			from={'0xb794f5ea0ba39494ce839613fffba74279579268'}
			amount={'88.00'}
			timestamp={1519059931}
			trust={25}
			hash={'0x126f82dcb2f4a283b4ebe20887deb8fdae8b136bf6c732ab444fd8910b442e3b'}
			symbol={'ABC'}
		/>
	))

	.add('Half of confirmations reached', () => (
		<Transaction
			from={'0xb794f5ea0ba39494ce839613fffba74279579268'}
			amount={'88.00'}
			timestamp={1519059931}
			trust={50}
			hash={'0x126f82dcb2f4a283b4ebe20887deb8fdae8b136bf6c732ab444fd8910b442e3b'}
			symbol={'ABC'}
		/>
	))

	.add('Target trust level reached', () => (
		<Transaction
			from={'0xb794f5ea0ba39494ce839613fffba74279579268'}
			amount={'88.00'}
			timestamp={1519059931}
			trust={100}
			hash={'0x126f82dcb2f4a283b4ebe20887deb8fdae8b136bf6c732ab444fd8910b442e3b'}
			symbol={'ABC'}
		/>
	));
