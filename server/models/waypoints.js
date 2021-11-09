const { Schema, model } = require('mongoose');

const waypointSchema = new Schema({
   
        waypointName: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
  
       Location: {
            type: String,
            trim: true,
        },
        wLat: {
            type: String,
        },
        wLon: {
            type: String,
        },
       
        owner: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Profile',
            },
        ],
    Trip: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Trip',
        },
    ],
    })

