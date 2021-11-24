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
export const QUERY_TRIPS = gql`
  query allTrips {
    trips {
      _id
      tripName
      datetostartTrip
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
  query singleTrip($tripId: ID!) {
    trip(tripId: $tripId) {
       _id
      tripname
      datetostartTrip
      startLocation
      endLocation
      lodging{
        hName
        hAddress
        ConfirmationNo
        hPhone
      }
    }
  }
`; export const QUERY_SINGLE_WAYPOINT = gql`
  query singleWaypoint($waypointsId: ID!) {
    waypoint(waypointsId: $waypointsId) {
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
`; export const QUERY_SINGLE_LANDMARK = gql`
  query singleLandmark($landmarksId: ID!) {
   landmark(landmarksId: $landmarksId) {
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