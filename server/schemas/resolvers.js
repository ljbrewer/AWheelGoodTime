const { Profile } = require('../models');

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
    addProfile: async (parent, { name }) => {
      return Profile.create({ name });
    },
    addSkill: async (parent, { profileId, skill }) => {
      return Profile.findOneAndUpdate(
        { _id: profileId },
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
    removeSkill: async (parent, { profileId, skill }) => {
      return Profile.findOneAndUpdate(
        { _id: profileId },
        { $pull: { skills: skill } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
