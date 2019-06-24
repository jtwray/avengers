/* eslint-disable no-tabs ,use 'esversion: 6' */
import React, { Component } from 'react';
import CitiesIndex from './cities/CitiesIndex';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			title: 'May the Force Be With You!',
			chars: []
		};
	}

	componentDidMount() {
		const chars = ['Luke', 'Leia', 'Han', 'Chewy', 'C3-P0'];
		console.log('CDM Called');
		this.setState({ chars });
	}

	render() {
		console.log('Render called: here is state ', this.state);
		const { chars } = this.state;
		const { title } = this.state;
		return (
  <div>
    <h2>{title}</h2>
    {chars.map(char => (
      <div key={`${char}`}>{char}</div>
				))}
    <hr />
    <CitiesIndex />
  </div>
		);
	}
}

export default App;
