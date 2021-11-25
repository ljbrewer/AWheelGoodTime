import React from 'react';
// Import the `useParams()` hook
import { useQuery } from '@apollo/client';


import { QUERY_TRIPS } from '../utils/queries';

export default function Profile() {

  const { loading, data} = useQuery(QUERY_TRIPS, {})
console.log(data)

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>User's profile</h1>
      <p>
      {/* {data.trips.map(trip => <div key={trip._id}>{trip.tripName}</div>)} */}
      
      </p>
    </div>

    
  );
}
