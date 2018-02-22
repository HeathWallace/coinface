import React from 'react';
import './reset.css';
import './base.css';
import './App.css';

import Header from './components/Header/Header';
import logo from './assets/images/logo.svg';
import TransactionList from './containers/TransactionList/TransactionList';
import SettingsDrawer from './components/SettingsDrawer/SettingsDrawer';
import AddressInput from './components/AddressInput/AddressInput';
import Button from './components/Button/Button';

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			settingsDrawerIsOpen: false,
		};

		this.toggleSettingsDrawer = this.toggleSettingsDrawer.bind(this);
	}

	toggleSettingsDrawer() {
		this.setState(prevState => {
			return { settingsDrawerIsOpen: !prevState.settingsDrawerIsOpen };
		});
	}

	render() {
		const { settingsDrawerIsOpen } = this.state;

		return (
			<div className='App'>
				<h1 className='accessible'>Gromits POS</h1>
				<Header onOpenSettings={this.toggleSettingsDrawer}>
					<div className='logo'>
						<img src={logo} alt='Shed' />
					</div>
				</Header>

				<TransactionList/>

				<SettingsDrawer
					isOpen={settingsDrawerIsOpen}
					onClose={this.toggleSettingsDrawer}
				>
					<h2>Settings</h2>
					<AddressInput labelText='Address' />
					<Button variant='secondary'>Save</Button>
				</SettingsDrawer>

				<div className="overlay"></div>
			</div>
		);
	}
}

export default App;
