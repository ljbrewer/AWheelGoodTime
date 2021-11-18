const { AuthenticationError } = require('apollo-server-express');
const { Profile, Trip, Waypoint } = require('../models');
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

   trip: async (parent, { tripId }) => {
      return trip.findOne({ _id: tripId });
    },
   waypoints: async () => {
      return waypoints.find();
    },

    waypoint: async (parent, { waypointsId }) => {
      return waypoints.findOne({ _id: waypointsId });
    },
    landmarks: async () => {
      return landmarks.find();
    },

    landmark: async (parent, { landmarks}) => {
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

    addTrip: async (parent, {tripid }) => {
      const trip = await Trip.create({tripName, datetostartTrip,startLocation,endLocation,lodging:{hName, hAddress, ConfirmationNo,hPhone},});

      await Trip.findOneAndUpdate(
        { _id: tripId },
        {
          $addToSet: { trip: trip._id },
        },
      );
      return trip;
    },
    addWaypoint: async (parent,{waypointId}) =>{
      const waypoint = await Waypoints.create({
        waypointName,wLocation,lodging:{ hName, hAddress, ConfirmationNo, hPhone}
      });

      await waypoint>findOneAndUpdate(
        { _id: waypointId },
        {
          $addToSet:{waypoint: waypoint._id},
        },
       );
       return waypoint;
    },
    addLandmark: async (parent, { landmarkId }) => {
      const landmark = await Landmarks.create({
        landmarkName, lLocation, hours, cost, contact:{phone, weblink} 
      },
      );
      
      await landmark > findOneAndUpdate(
        { _id: landmarkId },
        {
          $addToSet: { waypoint: landmark._id },
        },
      );
      return landmark;
    },

    removeProfile: async (parent, { profileId }) => {
      return Profile.findOneAndDelete({ _id: profileId });
    },
    removeTrip: async (parent, { tripId }) => {
      return Trip.findOneAndDelete(
        { _id: tripId });
    },
    removeWaypoint: async (parent, { waypointId }) => {
      return waypoint.findOneAndDelete(
        { _id: waypointId });
    }, 
    removeLandmark: async (parent, { landmarkId }) => {
      return landmark.findOneAndDelete(
        { _id: landmarkId });
    },
  },
};

module.exports = resolvers;
