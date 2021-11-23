import React from 'react';
// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';


import { QUERY_TRIPS } from '../utils/queries';

export default function Profile() {
  // Use `useParams()` to retrieve value of the route parameter `:tripId`
  const { tripsId } = useParams();

  const { loading, data } = useQuery(QUERY_TRIPS, {
    // pass URL parameter
    variables: { trips_id: tripsId },
  });

  const trips = data?.tripname || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>User's profile</h1>
      <p>
      {trips.tipname}
      </p>
    </div>

    
  );
}
