import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';
import DevTools from './containers/DevTools/DevTools';
import env from './utils/environment';
import localStore from './utils/localStore';

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

// Default settings
store.dispatch(
	addWallet(localStore.getItem('walletAddress') || env.REACT_APP_WALLET_ADDRESS)
);
store.dispatch(
	addToken(localStore.getItem('tokenAddress') || env.REACT_APP_CONTRACT_ADDRESS)
);
store.dispatch(setTrust(localStore.getItem('trustLevel') || 6));

// Preload token data for contract
store.dispatch(addTokenMetadata(env.REACT_APP_CONTRACT_ADDRESS));

// Fetch transactions
store.dispatch(getPendingTransactions());
store.dispatch(getAllTransactions());

// Set up polling for transactions
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
