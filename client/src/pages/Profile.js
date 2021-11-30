import React from 'react';
import { Link } from 'react-router-dom';
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
        
        
      {data?.trips?.length > 0? data.trips.map(trip => <div key={trip._id}>{trip.tripName}<Link 
        to={`/trip/${trip._id}`}>View Details</Link></div>):undefined}
      
      

       
      
      </span>
    </div>

    
  );
}
