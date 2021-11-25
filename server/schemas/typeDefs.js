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

  type Bbox{
    lonmin:Float
    lonmax:Float
    latmin:Float
    latmax:Float
    limit:Int
    kind:String
    name:String  
  }
 

  type Places{
    radius:Int
    lon:Float
    lat:Float
    limit:Int 
    format:String
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
    bbox(lonmin:Float,lonmax:Float, latmin:Float,latmax:Float,name:String,kind:String,limit:Int):Bbox
    places(radius:Int,lon:Float, lat:Float,limit:Int):Places
  }

  type Mutation {
    addProfile(name: String!): Profile
    addEmail(profileId: ID!, email: String!): Profile
    removeProfile(profileId: ID!): Profile
    removeEmail(profileId: ID!, email: String!): Profile
    addTrip(tripName: String!, datetostartTrip: String, startLocation: String, endLocation: String): Trip
    addWaypoint(waypointName: String!): waypoint
    addLandmark(LandmarkName: String!): landmark
    removeTrip(tripId: ID!): Trip
    removeWaypoint(waypointid: ID!): waypoint
    removeLandmark(Landmarkid: ID!): landmark
    login(email:String!, password:String!): Auth
    
    updateTrip(
     name: String
     datetostartTrip: String
     startLocation: String
     endLocation: String
    ): Trip

    updateWaypoint(
     waypointname: String
     wlocation: String
    ): waypoint

    updatelandmark(
     landmarkname: String
     lLocation: String
    ): landmark
  }
`;

module.exports = typeDefs;
