import React from 'react';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import SkillsList from '../components/SkillsList';
import SkillForm from '../components/SkillForm';

import {QUERY_WAYPOINTS } from '../utils/queries';

let cityName = {
fetchCity: function (Cityname) {
  let name = "San%20Francisco";
let apiKey = "5ae2e3f221c38a28845f05b6a30e2a4eca4c4f97eaab63cf9407abda";
fetch("https://api.opentripmap.com/0.1/en/places/geoname?name="
+ name
+ "&apikey=" 
+ apiKey)
.then((response) => response.json())
        .then((data) => this.displayCity(data))
},
displayCity: function (){

}
};
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
      <h2 className="card-header">
        {WayPoints.name}'s friends have endorsed these skills...
      </h2>

      {WayPoints.skills?.length > 0 && <SkillsList skills={WayPoints.skills} />}

      <div className="my-4 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <SkillForm WayPointsId={WayPoints._id} />
      </div>
    </div>
  );
};

export default WayPoints;
