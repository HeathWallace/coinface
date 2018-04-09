import { combineReducers } from 'redux';

import settingsReducer from './slices/settings';
import transactionsReducer from './slices/transactions';
import tokensReducer from './slices/tokens';
import gasPriceReducer from './slices/gasPrice';

const appReducer = combineReducers({
	settings: settingsReducer,
	transactions: transactionsReducer,
	tokens: tokensReducer,
	gasPrice: gasPriceReducer,
});

export default appReducer;
