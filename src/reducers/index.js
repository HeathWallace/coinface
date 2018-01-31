import { combineReducers } from 'redux';

import transactionsReducer from './slices/transactions';

const appReducer = combineReducers({
	transactions: transactionsReducer,
});

export default appReducer;
