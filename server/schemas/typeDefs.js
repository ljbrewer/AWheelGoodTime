const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    firstName: String
    lastName: String
    email: [String]!
  },
  type Trip {
    _id: ID
    tripName: String
    datetostartTrip: Date
    startLocation: [String]!
    endLocation:[String]!
  },
  type waypoints {
    _id: ID
    waypointName: String
    wLocation: String
   }
  type landmarks {
    _id: ID
    landmarkName: String
    lLocation: String
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    Trips: [Trip]!
    Trips(tripId: ID!): Trip
    waypoints: [waypoint]!
    waypoints(waypointId: ID!): waypoint
    landmarks: [landmark]!
    landmarks(landmarkId: ID!): landmark
  }

  type Mutation {
    addProfile(name: String!): Profile
    addEmail(profileId: ID!, email: String!): Profile
    removeProfile(profileId: ID!): Profile
    removeEmail(profileId: ID!, email: String!): Profile
    addTrip(tripName: String!): Trip
    addWaypoint(waypointName: String!): waypoints
    addLandmark(LandmarkName: String!): landmarks
    removeTrip(tripId: ID!): Trip
    removeWaypoint(waypointid: ID!): waypoints
    removeLandmark(Landmarkid: ID!): landmarks
  }
`;

module.exports = typeDefs;
