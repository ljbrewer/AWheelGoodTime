const { Schema, model } = require('mongoose');


const tripSchema = new Schema({
  
        tripName: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        datetostartTrip: {
            type: String,
            trim: true,
        },
        startLocation: {
            type: String,
            trim: true,
        },
        sLat: {
            type: String,
        },
        sLon: {
            type: String,
        },
        endLocation: {
            type: String,
            trim: true,
        },
        eLat: {
            type: String,
        },
        eLon: {
            type: String,
        },
        lodging:{
            hName:{
                type: String,
            },
            hAddress:{
                type: String,
            },
            ConfirmationNo:{
                type: String,
            },
            hPhone:{
                type: String,
            },
        },
        owner: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Profile',
        },
     ],
    })
const Trip = model('Trip', tripSchema);

module.exports = Trip;