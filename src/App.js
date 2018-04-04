import React from 'react';
import './reset.css';
import './base.css';

import bindMethods from 'yaab';

import Header from './components/Header/Header';
import logo from './assets/images/logo.svg';
import TransactionList from './containers/TransactionList/TransactionList';
import ConnectedSettingsDrawer from './containers/SettingsDrawer/SettingsDrawer';

class App extends React.Component {
	constructor(props) {
		super(props);
		bindMethods(this);

		this.state = {
			settingsDrawerIsOpen: false,
		};
	}

	toggleSettingsDrawer() {
		this.setState(prevState => {
			return { settingsDrawerIsOpen: !prevState.settingsDrawerIsOpen };
		});
	}

	render() {
		const { settingsDrawerIsOpen } = this.state;

		return (
			<div className="App">
				<h1 className="accessible">Gromits POS</h1>
				<Header onOpenSettings={this.toggleSettingsDrawer}>
					<div className="logo">
						<img src={logo} alt="Shed" />
					</div>
				</Header>

				<TransactionList />

				<ConnectedSettingsDrawer
					isOpen={settingsDrawerIsOpen}
					onClose={this.toggleSettingsDrawer}
					heading="Settings"
					trustSettingValue="1"
					onSave={this.toggleSettingsDrawer}
				/>
			</div>
		);
	}
}

export default App;
