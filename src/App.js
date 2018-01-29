import React, { Component } from 'react';
import './App.css';

import TransactionList from './containers/TransactionList/TransactionList';
import CreateRandomTransaction from './containers/CreateRandomTransaction/CreateRandomTransaction';

class App extends Component {
	render() {
		return (
			<div className="App">
				<CreateRandomTransaction>Add random transaction</CreateRandomTransaction>
				<TransactionList/>
			</div>
		);
	}
}

export default App;
