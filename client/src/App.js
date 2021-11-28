import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import NavTabs from './components/NavTabs';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import CreateTrip from './pages/CreateTrip';
import WayPoints from './pages/WayPoints';
import Landmarks from './pages/Landmarks';
import Login from './pages/Login';
import Signup from './pages/Signup'
import SingleTrip from './components/SingleTrip';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <NavTabs />
          <div className="container">
            <Route exact path="/">
              <Profile />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
              <Route exact path="/createtrip">
                <CreateTrip />
                </Route>
                <Route exact path="/waypoints">
                <WayPoints />
                </Route>
                <Route exact path="/landmarks">
                <Landmarks />
                </Route>

            <Route exact path="/trip/:tripId">
              <SingleTrip />
            </Route>






          </div>
          <Footer />

        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

