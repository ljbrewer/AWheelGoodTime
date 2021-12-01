import React from 'react';
import { useQuery } from '@apollo/client';
import {useParams} from 'react-router-dom'


import { QUERY_SINGLE_TRIP } from '../utils/queries';

export default function SingleTrip() {
  const trip_id = window.location.href.split('/')[window.location.href.split('/').length - 1];
  const { loading, err, data} = useQuery(QUERY_SINGLE_TRIP, {
    variables: {trip_id}
  })
  if (err) console.log(err)
console.log(data)

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>trip details</h2>
      <span>Trip Name: {data.trip.tripName}</span>
      <span>Date to Start Trip: {data.trip.datetostartTrip}</span>
      <span>Start Location: {data.trip.startLocation}</span>
      
    </div>

    
  );
}




