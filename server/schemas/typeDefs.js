const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID!
    firstName: String!
    lastName: String!
    email: [String]!
  }
  type Trip {
    _id: ID!
    tripName: String!
    datetostartTrip: String
    startLocation: [String]!
    endLocation:[String]!
  }
  type waypoint {
    _id: ID!
    waypointName: String!
    wLocation: String
   }
  type landmark {
    _id: ID!
    landmarkName: String!
    lLocation: String
  }
  type Auth{
    token: ID!
    profile: Profile
  }

  type Geoname{
    name: String
    country: String
    lat:Float
    lon:Float
    population: Int
    timezone:String
    status: String

  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    trips: [Trip]!
    trip(tripId: ID!): Trip
    waypoints: [waypoint]!
    waypoint(waypointId: ID!): waypoint
    landmarks: [landmark]!
    landmark(landmarkId: ID!): landmark
    geoname(name: String!, country:String): Geoname
  }

  type Mutation {
    addProfile(name: String!): Profile
    addEmail(profileId: ID!, email: String!): Profile
    removeProfile(profileId: ID!): Profile
    removeEmail(profileId: ID!, email: String!): Profile
    addTrip(tripName: String!): Trip
    addWaypoint(waypointName: String!): waypoint
    addLandmark(LandmarkName: String!): landmark
    removeTrip(tripId: ID!): Trip
    removeWaypoint(waypointid: ID!): waypoint
    removeLandmark(Landmarkid: ID!): landmark
    login(email:String!, password:String!): Auth
   
  }
`;

module.exports = typeDefs;
