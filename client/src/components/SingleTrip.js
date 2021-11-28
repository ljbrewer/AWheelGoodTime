// import { useState } from "react";
// // import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import {UPDATE_TRIP} from '../utils/mutations'


// export default function SingleTrip() {
//     const [inputs, setInputs] = useState({});
  
//     const [updateTrip, {error}] = useMutation(UPDATE_TRIP)
 
  
//     const handleChange = (event) => {
//       const name = event.target.name;
//       const value = event.target.value;
//       setInputs(values => ({...values, [name]: value}))
//     }
  
//     const handleSubmit = async (event) => {
//       event.preventDefault();
  
//       try{
//         const { data } = await updateTrip({ variables: {...inputs} })
//         setInputs({});
//         console.log(inputs);
//       } catch (error) {
//         console.log (error)
//       }
     
//     };
  
//     return (
//       <form onSubmit={handleSubmit}>
//         <label>
//         <input
//           type="text"
//           placeholder="Name your trip"
//           name="tripName"
//           value={inputs.tripName || ""}
//           onChange={handleChange}
//         />
//         </label>
//         <label>
//           <input
//             type="text"
//             placeholder="Starting Point"
//             name="startLocation"
//             value={inputs.startLocation || ""}
//             onChange={handleChange}
//           />
//           </label>
//           <label>
//           <input
//             type="text"
//             placeholder="Enter your destination"
//             name="endLocation"
//             value={inputs.endLocation || ""}
//             onChange={handleChange}
//           />
//           </label>
//           <label>
//           <input
//             type="date"
//             placeholder="datetostartTrip"
//             name="datetostartTrip"
//             value={inputs.datetostartTrip || ""}
//             onChange={handleChange}
//           />
//           </label>
    
//           <input type="update" />
//       </form>
//     )
//   }




