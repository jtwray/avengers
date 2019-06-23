/* eslint-disable no-tabs ,use 'esversion: 6' */
import React, { Component } from 'react';

import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chars: ['Luke', 'Leia', 'Han', 'Chewy', 'C3-P0']
		};
	}

	render() {
		const { chars } = this.state;
		return (
  <div>
    <h2>May The Force be with You!</h2>
    {chars.map((char, index) => [
      <div key={char + index}>
        <p>Name:</p>
        {char}
      </div>
					])}
  </div>
		);
	}
}

export default App;
