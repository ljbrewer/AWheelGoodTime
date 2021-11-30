const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

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
  trips: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Trip',
    },
  ],
  })

  profileSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

  profileSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Profile = model('Profile', profileSchema);

module.exports = Profile;
