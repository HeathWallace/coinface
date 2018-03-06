import { storiesOf, withInfo } from '../../stories';

import GasPrice from './GasPrice';

storiesOf(GasPrice)

	.addDecorator((story, context) => withInfo(GasPrice.description)(story)(context));
