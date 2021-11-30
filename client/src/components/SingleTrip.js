import { useState } from "react";
import { useMutation } from '@apollo/client';
import {UPDATE_TRIP} from '../utils/mutations'
import { QUERY_SINGLE_TRIP } from '../utils/queries';
import { useParams } from "react-router";

export default function SingleTrip() {
    const [inputs, setInputs] = useState({});
  
 const[updateTrip, {error}] = useMutation(UPDATE_TRIP)
 
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try{
        const { data } = await updateTrip({ variables: {...inputs} })
        setInputs({});
        console.log(inputs);
      } catch (error) {
        console.log (error)
      }
     
    };
  
    return (
    //    <span> {data.trips.map(trip => <div key={trip._id}>{trip.tripName}</div>)}
       
      <form onSubmit={handleSubmit}>
        <label>
        <input
          type="text"
          placeholder="name trip"
          name="tripName"
          value={inputs.tripName || ""}
          onChange={handleChange}
        />
        </label>
          <label>
          <input
            type="date"
            placeholder="datetostartTrip"
            name="datetostartTrip"
            value={inputs.datetostartTrip || ""}
            onChange={handleChange}
          />
          </label>
    
          <input type="submit" />
          
      </form>
    //   </span>
    )
  }




