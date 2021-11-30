const { AuthenticationError } = require('apollo-server-express');
const { Profile, Trip, Waypoint, Landmark } = require('../models');
const { signToken } = require('../utils/auth');
const axios = require('axios');

const key = process.env.KEY;

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find({});
    },

    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId }).populate('trips').populate({
        path: 'trips',
        populate: 'waypoints',
        populate: 'landmarks'
      });
    },
    trips: async () => {
      return Trip.find({}).populate('waypoints', 'landmarks');
    },

    trip: async (parent, { tripName }) => {
      return Trip.findOne({ tripName: $tripName }).populate('waypoints', 'landmarks');
    },

    waypoints: async () => {
      return Waypoint.find({});
      //  .populate('Trip');
    },

    waypoint: async (parent, { waypointName }) => {
      return Waypoint.findOne({ waypointName: $waypointName }).populate('Trip');
    },

    landmarks: async () => {
      return Landmark.find({});
      // .populate('Trip');
    },

    landmark: async (parent, { landmarkName }) => {
      return Landmark.findOne({ landmarkName: $landmarkName }).populate('Trip');
    },

    geoname: async (parent, { name, country }) => {

      const response = await axios.get(`https://api.opentripmap.com/0.1/en/places/geoname?name=${name}&country=${country || "us"}&apikey=${key}`)
      return response.data
    },

    bbox: async (parent, { lonmin, lonmax, latmin, latmax, limit, kind, name }) => {
      const response = await axios.get(`https://api.opentripmap.com/0.1/en/places/bbox?lon_min=${lonmin}&lon_max=${lonmax}&lat_min=${latmin}&lat_max=${latmax}&kinds=${kind || "interesting_places"}&name=${name || ""}&limit=${limit || 10}&apikey=key`)
      return response.data
    },

    places: async (parent, { radius, lon, lat, format, limit }) => {
      const response = await axios.get(`https://api.opentripmap.com/0.1/en/places/radius?radius=${radius}&lon=${lon}&lat=${lat}&format="json"&limit=${limit || 10}&apikey=key`)
    }


  },

  Mutation: {
    addProfile: async (parent, { firstName, lastName, email, password }) => {
      const profile = await Profile.create({ firstName, lastName, email, password });
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

    addTrip: async (parent, { tripName, datetostartTrip, startLocation, endLocation }) => {
      const trip = await Trip.create({ tripName, datetostartTrip, startLocation, endLocation, });
      // await Trip.findOneAndUpdate(
      //   { _id: tripId },
      //   {
      //     $addToSet: { trip: trip._id },
      //   },
      // );
      return trip;
    },

    updateTrip: async (parent, { id, datetostartTrip},) => {
      return await Trip.findOneAndUpdate(
        { _id: id },
        { datetostartTrip },
        { new:true },
      )
    },


    addWaypoint: async (parent, { waypointId }) => {
      const waypoint = await Waypoints.create({
        waypointName, wLocation, lodging: { hName, hAddress, ConfirmationNo, hPhone }
      });

      await waypoint > findOneAndUpdate(
        { _id: waypointId },
        {
          $addToSet: { waypoint: waypoint._id },
        },
      );
      return waypoint;
    },
    addLandmark: async (parent, { landmarkId }) => {
      const landmark = await Landmarks.create({
        landmarkName, lLocation, hours, cost, contact: { phone, weblink }
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
