import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
        email
      }
    }
  }
`;

export const ADD_TRIP= gql`
  mutation addTrip($tripId: ID!, $tripName: String!) {
    addTrip(tripId: $tripId ) {
       _id
      tripame
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
`;



export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
        email
      }
    }
  }
`;
export const ADD_WAYPOINT = gql`
  mutation addwaypoint($waypointId: ID!, $waypointName: String!) {
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