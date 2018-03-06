import { combineReducers } from 'redux';

import settingsReducer from './slices/settings';
import transactionsReducer from './slices/transactions';

const appReducer = combineReducers({
	settings: settingsReducer,
	transactions: transactionsReducer,
});

export default appReducer;
