import React from 'react';
import './reset.css';
import './base.css';
import './App.css';

import Header from './components/Header/Header';
import logo from './assets/images/logo.svg';
import TransactionList from './containers/TransactionList/TransactionList';
import SettingsDrawer from './components/SettingsDrawer/SettingsDrawer';
import TrustSetting from './components/TrustSetting/TrustSetting';
import AddressInput from './containers/AddressInput/AddressInput';
import Button from './components/Button/Button';
import DailyTotal from './containers/DailyTotal/DailyTotal';

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			settingsDrawerIsOpen: false,
		};

		this.toggleSettingsDrawer = this.toggleSettingsDrawer.bind(this);
	}

	tempLog(e) {
		console.log(e); // eslint-disable-line
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

				<DailyTotal/>

				<SettingsDrawer
					isOpen={settingsDrawerIsOpen}
					onClose={this.toggleSettingsDrawer}
				>
					<h2>Settings</h2>
					<TrustSetting labelText='Trust' onChange={this.tempLog} />
					<AddressInput labelText='Address' onChange={this.tempLog} />
					<Button variant='secondary' onClick={this.toggleSettingsDrawer}>Save</Button>
				</SettingsDrawer>
			</div>
		);
	}
}

export default App;
