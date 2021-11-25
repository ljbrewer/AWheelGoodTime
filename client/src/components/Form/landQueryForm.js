import { useState } from "react";
// import ReactDOM from "react-dom";
import '../Form/style.css'
import { useLazyQuery } from '@apollo/client'

export default function LandmarkForm() {
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
  localStorage.setItem("Landmark Name", (inputs.name))
}

function getLocalStorage () {
  let landmark = localStorage.getItem("Landmark Name", (inputs.name))
console.log(landmark)
}

  return (
     
    <form onSubmit={handleSubmit}>
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
