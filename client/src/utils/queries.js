import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      email
     
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      email
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      trip {
        _id
        tripName
      }
    }
  }
`;


export const QUERY_TRIPS = gql`
  query allTrips {
    trips {
      _id
      tripName
      # datetostartTrip
      # startLocation
      # endLocation
      # lodging{
      #   hName
      #   hAddress
      #   ConfirmationNo
      #   hPhone
      # }
    }
  }
`;

export const QUERY_WAYPOINTS = gql`
  query allWaypoints {
    waypoints {
      _id
     waypointname
      wLocation
      lodging {
        hName
        hAddress
        ConfirmationNo
        hPhone
      }
    }
  }
`; export const QUERY_LANDMARKS = gql`
  query allLandmarks {
    landmarks {
      _id
      landmarkname
      lLocation
      hours
      cost
      contact {
        phone
        weblink
      }
    }
  }
`;
export const QUERY_SINGLE_TRIP = gql`
  query singleTrip($trip_id:ID!, $tripName:
  String!, $datetostartTrip:String) {
    trip(tripName: $tripName) {
       _id
      tripName
      datetostartTrip
      startLocation
      endLocation
      # lodging{
      #   hName
      #   hAddress
      #   ConfirmationNo
      #   hPhone
      # }

    }
  }
`; export const QUERY_SINGLE_WAYPOINT = gql`
  query singleWaypoint($waypointName:String!) {
    waypoint(waypointName: $waypointName) {
     _id
     waypointName
      wLocation
      lodging {
        hName
        hAddress
        ConfirmationNo
        hPhone
    }
  }
  }
`; export const QUERY_SINGLE_LANDMARK = gql`
  query singleLandmark($landmarkName:
  String!) {
   landmark(landmarkName: $landmarkName) {
       _id
      landmarkName
      lLocation
      hours
      cost
      contact {
        phone
        weblink
      }
    }
  }
`;
export const QUERY_GEONAME = gql`
query geoname($name:String!) {
  geoname(name: $name) {
    name
    country
    lat
    lon
    population
    timezone
    status
  }
}
` 