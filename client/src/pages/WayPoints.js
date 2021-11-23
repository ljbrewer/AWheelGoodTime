import React from 'react';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';


import {QUERY_WAYPOINTS } from '../utils/queries';
let cityName = {
fetchCity: function (Cityname) {
  let name = "San%20Francisco";
fetch("https://api.opentripmap.com/0.1/en/places/geoname?name="
+ name)
.then((response) => response.json())
        .then((data) => this.displayCity(data))
},
displayCity: function (){

}
};
const handleInputChange = (e) => {
  const { target } = e;
  const inputType = target.cityName;
  const inputvalue = target.value;
}

const handleFormSubmit = (e) => {
  e.preventDefault();
  cityName = cityName;
  console.log(cityName)
}
cityName.fetchCity()

const WayPoints = () => {
  const { WayPointsId } = useParams();

  const { loading, data } = useQuery(QUERY_WAYPOINTS, {
    variables: { WayPointsId: WayPointsId },
  });

  const WayPoints = data?.WayPoints || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
    <h1>Map Your Waypoints</h1>
    <form className="form">
      <input
          inputvalue={cityName}
          name="cityName"
          onChange={handleInputChange}
          type="text"
          placeholder="cityname"
        />
        <button type="button" onClick={handleFormSubmit}>Find a City</button>
        </form>
  </div>
  );

};
export default WayPoints;
