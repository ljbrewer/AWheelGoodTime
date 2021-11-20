import { useState } from "react";
// import ReactDOM from "react-dom";
import '../Form/style.css'

export default function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
     
    <form onSubmit={handleSubmit}>
      <label>Name your Trip:
      <input 
        type="text" 
        name="name" 
        value={inputs.name || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter starting point
        <input 
          type="text" 
          name="start" 
          value={inputs.start || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter your destination:
        <input 
          type="text" 
          name="destination" 
          value={inputs.destination || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
    
  )
}

// ReactDOM.render(<MyForm />, document.getElementById('root'));