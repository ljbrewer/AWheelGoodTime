const { Schema, model } = require('mongoose');


const tripSchema = new Schema({
  
        tripName: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        datetostartTrip: {
            type: Date,
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
    owner: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Profile',
        },
     ],
    })
