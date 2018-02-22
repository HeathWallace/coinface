import React from 'react';
import './reset.css';
import './base.css';
import './App.css';

import Header from './components/Header/Header';
import logo from './assets/images/logo.svg';
import TransactionList from './containers/TransactionList/TransactionList';
import SettingsDrawer from './components/SettingsDrawer/SettingsDrawer';

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

				<Header onOpenSettings={this.toggleSettingsDrawer}>
					<div className='logo'>
						<img src={logo} alt='Shed' />
					</div>
				</Header>

				<TransactionList/>

				<SettingsDrawer
					isOpen={settingsDrawerIsOpen}
					onClose={this.toggleSettingsDrawer}
				>This is the settings drawer.</SettingsDrawer>
				
			</div>
		);
	}
}

export default App;
