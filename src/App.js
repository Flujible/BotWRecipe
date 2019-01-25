import React, { Component } from 'react';
import Recipes from '../src/components/Recipes/Recipes';
import Header from './components/Header/Header';
import './base.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header>Chef of the wilD</Header>
				<Recipes />
			</div>
		);
	}
}

export default App;
