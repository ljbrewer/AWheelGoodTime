const { Schema, model } = require('mongoose');

const landmarkSchema = new Schema({

    landmarkName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },

    lLocation: {
        type: String,
        trim: true,
    },
    lLat: {
        type: String,
    },
    lLon: {
        type: String,
    },
    hours:{
        type: String,
    },
    cost:{
        type: String,
    },
    contact:{
        phone:{
            type: String,
        },
        weblink:{
            wlink: String,
        },
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
const Landmark = model('Landmark', landmarkSchema);

module.exports = Landmark;
