import React from 'react';
// import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';


import { QUERY_TRIPS } from '../utils/queries';

export default function Profile() {

  const { loading, data} = useQuery(QUERY_TRIPS, {})
console.log(data)

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div class="backbox">
      <h1>User's profile</h1>
      <span>
        {/* <Link 
        className="btn btn-block btn-squared btn-light text-dark"
        to={`/profiles/${data.trips._id}`}
        { */}
      {data.trips.map(trip => <div key={trip._id}>{trip.tripName}</div>)}
       {/* </Link>  */}

      
      </span>
    </div>

    
  );
}
