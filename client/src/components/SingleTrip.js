// import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';


// import { QUERY_SINGLE_TRIP } from '../utils/queries';
// import { UPDATE_TRIP } from '../../utils/mutations';

// const SingleTrip = () => {
//     const [name, setName] = useState('');

//     const [updateTrip, { error }] = useMutation(UPDATE_TRIP, {
//         update(cache, { data: { updateTrip } }) {
//             try {
//                 const { trip } = cache.readQuery({ query: QUERY_SINGLE_TRIP });

//                 cache.writeQuery({
//                     query: QUERY_SINGLE_TRIP,
//                     data: { trip: [...trip, updateTrip] },
//                 });
//             } catch (e) {
//                 console.error(e);
//             }
//         },
//     });

//     const handleFormSubmit = async (event) => {
//         event.preventDefault();

//         try {
//             const { data } = await updateTrip({
//                 variables: { name },
//             });

//             setName('');
//         } catch (err) {
//             console.error(err);
//         }
//     };

//     return (
//         <form onSubmit={handleFormSubmit}>
//             <div>
//           <input
//             placeholder="update trip name..."
//             value={name}
//             onChange={(event) => setName(event.target.value)}
//           />
//         </div>
//         </form>
//     );
// }

// export default SingleTrip