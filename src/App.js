import React, { Component } from 'react';
import './reset.css';
import './base.css';
import './App.css';

import TransactionList from './containers/TransactionList/TransactionList';
import CreateRandomTransaction from './containers/CreateRandomTransaction/CreateRandomTransaction';

class App extends Component {
	render() {
		return (
			<div className="App">
				<TransactionList/>
			</div>
		);
	}
}

export default App;
