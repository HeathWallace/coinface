import { combineReducers } from 'redux';

import settingsReducer from './slices/settings';
import transactionsReducer from './slices/transactions';
import tokensReducer from './slices/tokens';

const appReducer = combineReducers({
	settings: settingsReducer,
	transactions: transactionsReducer,
	tokens: tokensReducer,
});

export default appReducer;
