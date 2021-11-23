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
