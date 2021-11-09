const { Schema, model } = require('mongoose');

const tripSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
})