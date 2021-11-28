import { useState } from "react";
import '../Form/style.css';
import { useMutation } from '@apollo/client';
import { ADD_TRIP } from "../../utils/mutations";
import { QUERY_SINGLE_TRIP } from "../../utils/queries";

export default function MyForm() {
  const [inputs, setInputs] = useState({});

  const [addTrip, {error}] = useMutation(ADD_TRIP)
  //   update(cache, { data:{ addTrip }}) {
  //     try{
  //       const { trip } = cache.readQuery({ query: QUERY_SINGLE_TRIP });

  //       cache.writeQuery({
  //         query:QUERY_SINGLE_TRIP,
  //         data: {trip: [...trip, addTrip] },
  //       });

  //     }catch (error){
  //       console.log(error)
  //     }
  //   },
  // });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try{
      const { data } = await addTrip({ variables: {...inputs} })
      setInputs({});
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
        name="tripName"
        value={inputs.tripName || ""}
        onChange={handleChange}
      />
      </label>
      <label>
        <input
          type="text"
          placeholder="Starting Point"
          name="startLocation"
          value={inputs.startLocation || ""}
          onChange={handleChange}
        />
        </label>
        <label>
        <input
          type="text"
          placeholder="Enter your destination"
          name="endLocation"
          value={inputs.endLocation || ""}
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
        {/* <label>
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
        </label> */}
        <input type="submit" />
    </form>
  )
}


// ReactDOM.render(<MyForm />, document.getElementById('root'));
