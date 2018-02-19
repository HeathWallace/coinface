import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';
import DevTools from './containers/DevTools/DevTools';

import { getAllTransactions, enableTransactionPolling } from './actions';

store.dispatch(getAllTransactions());
store.dispatch(enableTransactionPolling());

ReactDOM.render(
	<Provider store={store}>
		<div>
			<App />
			<DevTools />
		</div>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
