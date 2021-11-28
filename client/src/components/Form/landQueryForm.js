import { useState } from "react";
import { useLazyQuery } from '@apollo/client';
import { QUERY_GEONAME } from "../../utils/queries";
import '../Form/style.css'

export default function LandmarkForm() {
  const [inputs, setInputs] = useState({});
  const [findGeoname, { loading, error, value }] = useLazyQuery(QUERY_GEONAME);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    saveToLocal()
    getLocalStorage ()
  }

function saveToLocal () {
  localStorage.setItem("Landmark Name", (inputs.name))
}

function getLocalStorage () {
  let landmark = localStorage.getItem("Landmark Name", (inputs.name))
console.log(landmark)
}

  return (
     
    <form onSubmit={handleSubmit}>
     <label>Trip Name:
      <input 
        type="text" 
        name="trip" 
        value={inputs.trip || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Landmark Name:
      <input 
        type="text" 
        name="name" 
        value={inputs.name || ""} 
        onChange={handleChange}
      />
      </label>
        <input type="submit" />
    </form>
    
  )
}
