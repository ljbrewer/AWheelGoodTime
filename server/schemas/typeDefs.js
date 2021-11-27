const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID!
    firstName: String
    lastName: String
    email:String
    trips:[Trip]
  }
  type Trip {
    _id: ID!
    tripName: String!
    datetostartTrip: String
    startLocation:String
    endLocation:String
    owner:Profile
    waypoints:[Waypoint]
    landmarks:[Landmark]
  }
  type Waypoint {
    _id: ID!
    waypointName: String!
    wLocation: String
    Trip: Trip
   }
  type Landmark {
    _id: ID!
    landmarkName: String!
    lLocation: String
    Trip: Trip
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
    trip(tripId:ID!): Trip
    waypoints: [Waypoint]!
    waypoint(waypointName: String!): Waypoint
    landmarks: [Landmark]!
    landmark(landmarkName: String!): Landmark
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
    addWaypoint(waypointName: String!): Waypoint
    addLandmark(LandmarkName: String!): Landmark
    removeTrip(tripId: ID!): Trip
    removeWaypoint(waypointid: ID!): Waypoint
    removeLandmark(Landmarkid: ID!): Landmark
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
    ): Waypoint

    updatelandmark(
     landmarkname: String
     lLocation: String
    ): Landmark
  }
`;

module.exports = typeDefs;
