import React, { Component } from "react";
import Recipes from "../src/components/Recipes/Recipes";
import "./base.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Recipes />
			</div>
		);
	}
}

export default App;
