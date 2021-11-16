const { Schema, model } = require('mongoose');

const waypointSchema = new Schema({
   
        waypointName: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
  
       wLocation: {
            type: String,
            trim: true,
        },
        wLat: {
            type: String,
        },
        wLon: {
            type: String,
        },
        lodging: {
            hName: {
                type: String,
        },
            hAddress: {
                type: String,
        },
            ConfirmationNo: {
                type: String,
        },
            hPhone:{
                type: String,
        }
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

const waypoint = model('waypoints', waypointSchema);

module.exports = waypoint;