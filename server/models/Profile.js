const { Schema, model } = require('mongoose');

const profileSchema = new Schema({
  firstName: {
    type: String,
    // required: true,
    trim: true,
  },
  lastName: {
      type: String,
      // required: true,
      trim: true,
  },
  email: {
      type: String,
      allowNull: false,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
      type: String,
      required: true,
      allowNull: false,
      minlength: 8,
    },
  })
const Profile = model('Profile', profileSchema);

module.exports = Profile;
