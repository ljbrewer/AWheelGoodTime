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
    saveToLocal()
  }

  function saveToLocal () {
    localStorage.setItem("Trip Name", (inputs.name))
    localStorage.setItem("Starting Point", (inputs.origin))
    localStorage.setItem("Destination Point", (inputs.destination))
    localStorage.setItem("Start Date", (inputs.startdate))
    localStorage.setItem("Name of Stay", (inputs.stayname))
    localStorage.setItem("Stay Address", (inputs.address))
    localStorage.setItem("Check In", (inputs.checkin))
    localStorage.setItem("Check Out", (inputs.checkout))
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
      <h3>Name Your Trip:</h3>
      <input
        type="text"
        placeholder="Name your trip"
        name="tripName"
        value={inputs.tripName || ""}
        onChange={handleChange}
      />
      <br /><br />
      </label>
      <label>
      <h3>Starting Point:</h3>
        <input
          type="text"
          placeholder="Starting Point"
          name="startLocation"
          value={inputs.startLocation || ""}
          onChange={handleChange}
        />
        </label>
        <br /><br />
        <label>
        <h3>Final Destination:</h3>
        <input
          type="text"
          placeholder="Enter your destination"
          name="endLocation"
          value={inputs.endLocation || ""}
          onChange={handleChange}
        />
        </label>
        <br /><br />
        <label>
        <h3>Start Date:</h3>
        <input
          type="date"
          placeholder="datetostartTrip"
          name="datetostartTrip"
          value={inputs.datetostartTrip || ""}
          onChange={handleChange}
        />
        </label>
        <br />
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
