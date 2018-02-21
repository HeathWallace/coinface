import React, { Component } from 'react';
import './reset.css';
import './base.css';
import './App.css';

import Header from './components/Header/Header';
import logo from './assets/images/logo.svg';
import TransactionList from './containers/TransactionList/TransactionList';
import CreateRandomTransaction from './containers/CreateRandomTransaction/CreateRandomTransaction';

class App extends Component {

	openSettingsDraw() {
		console.log("hello");
	}

	render() {
		return (
			<div className="App">
				<Header onOpenSettings={this.openSettingsDraw}>
					<div className="logo">
						<img src={logo} alt="Shed" />
					</div>
				</Header>
				<TransactionList/>
			</div>
		);
	}
}

export default App;
