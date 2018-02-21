import React from 'react';
import { storiesOf, withInfo } from '../../stories';

import Transaction from './Transaction';

storiesOf('Transaction')

	.addDecorator((story, context) => withInfo(Transaction.description)(story)(context))

	.add('with junk data', () => (
		<Transaction
			from={'0xb794f5ea0ba39494ce839613fffba74279579268'}
			amount={'88.00'}
			timestamp={1519059931}
			trust={4}
			hash={'0x126f82dcb2f4a283b4ebe20887deb8fdae8b136bf6c732ab444fd8910b442e3b'}
			symbol={'ABC'}
		/>
	));
