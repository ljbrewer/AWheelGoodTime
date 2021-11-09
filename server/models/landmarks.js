const { Schema, model } = require('mongoose');

const profileSchema = new Schema({

    landmarkName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },

    Location: {
        type: String,
        trim: true,
    },
    lLat: {
        type: String,
    },
    lLon: {
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
            