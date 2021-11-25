import { useState } from "react";
import '../Form/style.css';
import { useMutation } from '@apollo/client';
import { ADD_TRIP } from "../../utils/mutations";
import { QUERY_SINGLE_TRIP } from "../../utils/queries";

export default function MyForm() {
  const [inputs, setInputs] = useState({});

  const [addTrip, {error}] = useMutation(ADD_TRIP, {
    update(cache, { data:{ addTrip }}) {
      try{
        const { trip } = cache.readQuery({ query: QUERY_SINGLE_TRIP });

        cache.writeQuery({
          query:QUERY_SINGLE_TRIP,
          data: {trip: [...trip, addTrip] },
        });

      }catch (error){
        console.log(error)
      }
    },
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try{
      const { data } = await addTrip
      setInputs('');
      console.log(inputs);
    } catch (error) {
      console.log (error)
    }
   
  };

  return (
     
    <form onSubmit={handleSubmit}>
      <label>
      <input 
        type="text" 
        placeholder="Name your trip"
        name="name" 
        value={inputs.name || ""} 
        onChange={handleChange}
      />
      </label>
      <label>
        <input 
          type="text" 
          placeholder="Starting Point"
          name="origin" 
          value={inputs.origin || ""} 
          onChange={handleChange}
        />
        </label>
        <label>
        <input 
          type="text" 
          placeholder="Enter your destination"
          name="destination" 
          value={inputs.destination || ""} 
          onChange={handleChange}
        />
        </label>
        <label>
        <input 
          type="date" 
          placeholder="Date to Start"
          name="startdate" 
          value={inputs.startdate || ""} 
          onChange={handleChange}
        />
        </label>
        <label>
      <input 
        type="text" 
        placeholder="Name of stay"
        name="stayname" 
        value={inputs.stayname || ""} 
        onChange={handleChange}
      />
      </label>
      <label>
        <input 
          type="text" 
          placeholder="Address"
          name="address" 
          value={inputs.address || ""} 
          onChange={handleChange}
        />
        </label>
        <label>
        <input 
          type="time" 
          placeholder="check in"
          name="checkin" 
          value={inputs.checkin || ""} 
          onChange={handleChange}
        />
        </label>
        <label>
        <input 
          type="time" 
          placeholder="Checkout"
          name="checkout" 
          value={inputs.checkout || ""} 
          onChange={handleChange}
        />
        </label>


        <input type="submit" />
    </form>
    
  )
}


// ReactDOM.render(<MyForm />, document.getElementById('root'));
