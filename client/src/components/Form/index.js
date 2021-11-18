import React, { useState } from 'react';
import './style.css';

function Form() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [triptName, setTripName] = useState('');
  const [startLocation, setstartLocation] = useState('');
  const [endLocation, setendLocation] = useState('');
  const [hName, sethName] = useState('');
  const [hAddress, sethAddress] = useState('');
  const [ConfirmationNo, setConfirmationNo] = useState('');
  const [hPhone, sethPhone] = useState('');
  const [triptName, setTripName] = useState('');
  const [datetostartTrip, setdatetostartTrip] = useState('');


  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { tripname, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    return tripname === 'tripName' ? settripName(value) : console.log("please enter a name for your trip.");
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Hello your trip is named ${tripName} $`);
    settripName('');
   
  };

  return (
    <div>
      <p>
         {tripName} 
      </p>
      <form className="form">
        <input
          value={tripName}
          name="tripName"
          onChange={handleInputChange}
          type="text"
          placeholder="Trip Name"
        />
        <input
          value={startLocation}
          name="startLocation"
          onChange={handleInputChange}
          type="text"
          placeholder="Start"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
