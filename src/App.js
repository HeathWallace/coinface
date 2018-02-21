import React, { Component } from 'react';
import './reset.css';
import './base.css';
import './App.css';

import Header from './components/Header/Header';
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
					<img src="http://api.skype.com/users/gary_purbrick/profile/avatar?size=s" />
				</Header>
				<TransactionList/>
			</div>
		);
	}
}

export default App;
