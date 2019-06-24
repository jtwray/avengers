import React from 'react';
import './City.css';



const CitiesList = (props) => {
	console.log('this is CitiesList props : ', props);
	const { cities, name } = props;
	return (
  <div>
    <h2>
				Get ya haircut here
      {name}
    </h2>
    {cities.map(cityObj => (
      <div className={'cityCard'} key={cityObj.state}>
				<div className={'city'} >
          <p>{`City : ${cityObj.city} | `}</p>
          <p>{`State : ${cityObj.state} | `}</p>
          <p>{`Population : ${cityObj.population} |`}</p>
          <p>{`Land Area: ${cityObj.land_area} |`}</p>
        </div>
      </div>
			))}
  </div>
	);
};
export default CitiesList;
