/* eslint-disable no-tabs */
import React, { Component } from 'react';
import CitiesList from './CitiesList';
import citiess from './citiess';

class CitiesApp extends Component {
	constructor() {
		super();
		console.log(citiess);
		this.state = {
			title: 'Top Cities to Visit the BarberShop',
			name: ' in these fine American Cities',
			cities: []
		};
	}

	componentDidMount() {
		const { data } = citiess;

		console.log('this is CDM Citiesdata : ', data);
		this.setState({ cities: data });
	}

	render() {
		const { title, name, cities } = this.state;

		console.log('RenderCalled : ');
		return (
  <div>
    <h4>{title}</h4>
    <CitiesList name={name} cities={cities} />
  </div>
		);
	}
}

export default CitiesApp;
