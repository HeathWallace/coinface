import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';
import DevTools from './containers/DevTools/DevTools';
import env from './utils/environment';

import {
	getAllTransactions,
	getPendingTransactions,
	enableTransactionPolling,
	createSimulatedTransactions,
	addTokenMetadata,
	setTrust,
	addToken,
	addWallet,
} from './actions';

store.dispatch(addWallet(env.REACT_APP_WALLET_ADDRESS));
store.dispatch(addToken(env.REACT_APP_CONTRACT_ADDRESS));
store.dispatch(addTokenMetadata(env.REACT_APP_CONTRACT_ADDRESS));

store.dispatch(setTrust(6));

store.dispatch(getPendingTransactions());
store.dispatch(getAllTransactions());
store.dispatch(enableTransactionPolling());

if (env.REACT_APP_SIMULATED_TRANSACTIONS) {
	store.dispatch(createSimulatedTransactions());
}

ReactDOM.render(
	<Provider store={store}>
		<div>
			<App />
			{env.NODE_ENV !== 'production' && <DevTools />}
		</div>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
