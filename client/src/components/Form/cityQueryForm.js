import { useState } from "react";
// import ReactDOM from "react-dom";
import '../Form/style.css'

export default function CityForm() {
  const [inputs, setInputs] = useState({});

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
  localStorage.setItem("City Name", (inputs.name))
}

function getLocalStorage () {
 let city = localStorage.getItem("City Name", (inputs.name))
console.log(city)
}

  return (
     
    <form onSubmit={handleSubmit}>
      <label>City Name:
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
