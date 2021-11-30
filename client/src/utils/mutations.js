import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($firstName: String!, $lastName:String!, $email: String!, $password: String!) {
    addProfile(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      token
      profile {
        _id
        firstName
        lastName
        email
        
      }
    }
  }
`;

export const ADD_TRIP= gql`
  mutation addTrip($tripName: String!, $datetostartTrip:String, $startLocation:String, $endLocation:String ) {
    addTrip(tripName: $tripName, datetostartTrip: $datetostartTrip, startLocation: $startLocation, endLocation: $endLocation) {
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
`;

export const UPDATE_TRIP= gql`
  mutation updateTrip($tripName: String!, $datetostartTrip:String, $startLocation:String, $endLocation:String ) {
    addTrip(tripName: $tripName, datetostartTrip: $datetostartTrip, startLocation: $startLocation, endLocation: $endLocation) {
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


export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        # name
        email
      }
    }
  }
`;
export const ADD_WAYPOINT = gql`
  mutation addWaypoint($waypointId: ID!, $waypointName: String!) {
    addWaypoint(waypointId: $waypointId ) {
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
`;

export const ADD_LANDMARK = gql`
  mutation addLandmark($landmarkId: ID!, $landmarkName: String!) {
    addLandmark(landmarkId: $landmarkId ) {
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

