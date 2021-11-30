import React from 'react';
import { useQuery } from '@apollo/client';
import {useParams} from 'react-router-dom'


import { QUERY_SINGLE_TRIP } from '../utils/queries';

export default function SingleTrip() {

  const { loading, data} = useQuery(QUERY_SINGLE_TRIP, {})
console.log(data)

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>{data.trip.tripName}</h1>
      
    </div>

    
  );
}




