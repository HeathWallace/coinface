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
	getGasPrice,
    enableGasPricePolling,
} from './actions';

// Default settings
store.dispatch(addWallet(env.REACT_APP_WALLET_ADDRESS));
store.dispatch(addToken(env.REACT_APP_CONTRACT_ADDRESS));
store.dispatch(setTrust(6));

// Preload token data for contract
store.dispatch(addTokenMetadata(env.REACT_APP_CONTRACT_ADDRESS));

// Fetch transactions
store.dispatch(getPendingTransactions());
store.dispatch(getAllTransactions());

// Set up polling for transactions
store.dispatch(enableTransactionPolling());

// Fetch gas price
store.dispatch(getGasPrice());

// Set up polling for gas price
store.dispatch(enableGasPricePolling());

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
