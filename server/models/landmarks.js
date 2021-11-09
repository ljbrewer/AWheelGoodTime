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
const landmark = model('landmark', landmarkSchema);

module.exports = landmark;
