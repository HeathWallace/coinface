import React from 'react';
import './reset.css';
import './base.css';
import './App.css';

import Header from './components/Header/Header';
import logo from './assets/images/logo.svg';
import TransactionList from './containers/TransactionList/TransactionList';
import ConnectedSettingsDrawer from './containers/SettingsDrawer/SettingsDrawer';
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

				<ConnectedSettingsDrawer
					isOpen={settingsDrawerIsOpen}
					onClose={this.toggleSettingsDrawer}
					heading='Settings'

					trustSettingValue='1'
					onSave={this.toggleSettingsDrawer}
				/>
			</div>
		);
	}
}

export default App;
