const { Schema, model } = require('mongoose');

const profileSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  lastName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
  },
  email: {
      type: String,
      allowNull: false,
      unique: true,
      validate: [
        isEmail: true
      ],
  },
  password: {
      type: String,
      required: true,
      allowNull: false,
      validate: {
        len: [8]
      },
  },
});

const Profile = model('Profile', profileSchema);

module.exports = Profile;
