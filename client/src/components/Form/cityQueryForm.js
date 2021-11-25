import { useState } from "react";
import { useLazyQuery } from '@apollo/client';
import { QUERY_GEONAME } from "../../utils/queries";
import '../Form/style.css'

export default function CityForm() {
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
    getLocalStorage()
  }

function saveToLocal () {
  localStorage.setItem("City Name", (inputs.name))
}

function getLocalStorage () {
 let city = localStorage.setItem("City Name", (inputs.name))
console.log(city)
}

 
// if (loading) return <p>Loading ...</p>;
// if (error) return `Error! ${error}`;

  return (
     <>
    <form onSubmit={handleSubmit}>
      <label>City Name:
      <input 
        type="text" 
        name="name" 
        value={inputs.name || ""} 
        onChange={handleChange}
      />
      </label>
      <button type="submit" onClick={() => findGeoname({ variables: { name:inputs.name } })}>Find Something</button>
    </form>

    </>
  );

}
