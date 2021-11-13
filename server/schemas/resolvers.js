const { AuthenticationError } = require('apollo-server-express');
const { Profile } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find();
    },

    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },
   trips: async () => {
      return Trip.find();
    },

   trips: async (parent, { tripId }) => {
      return trip.findOne({ _id: tripId });
    },
   waypoints: async () => {
      return waypoints.find();
    },

    waypoints: async (parent, { waypointsId }) => {
      return waypoints.findOne({ _id: waypointsId });
    },
    landmarks: async () => {
      return landmarks.find();
    },

    landmarks: async (parent, { landmarks}) => {
      return landmarks.findOne({ _id: landmarksId });
    },
  },

  Mutation: {
    addProfile: async (parent, { name, email, password }) => {
      const profile = await Profile.create({ name, email, password });
      const token = signToken(profile);

      return { token, profile };
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(profile);
      return { token, profile };
    },

    addTrip: async (parent, {tripid, trip }) => {
      return trip.findOneAndUpdate(
        { _id: tripId },
        {
          $addToSet: { skills: skill },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeProfile: async (parent, { profileId }) => {
      return Profile.findOneAndDelete({ _id: profileId });
    },
    removeSkill: async (parent, { tripId, skill }) => {
      return Profile.findOneAndUpdate(
        { _id: tripId },
        { $pull: { trip: trip } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
