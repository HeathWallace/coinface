import React, { Component } from 'react';
import './reset.css';
import './base.css';
import './App.css';

import Header from './components/Header/Header';
import logo from './assets/images/logo.svg';
import TransactionList from './containers/TransactionList/TransactionList';

class App extends Component {

	openSettingsDraw() {
		console.log('hello'); //eslint-disable-line
	}

	render() {
		return (
			<div className='App'>
				<Header onOpenSettings={this.openSettingsDraw}>
					<div className='logo'>
						<img src={logo} alt='Shed' />
					</div>
				</Header>
				<TransactionList/>
			</div>
		);
	}
}

export default App;
