import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';


// import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import PageContainer from "./components/PageContainer";

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        
        <Header />
        
        
       
        <div className="container">
          <PageContainer />
          </div>
        

        
        <Footer />
        
      </div>
      </Router>
     </ApolloProvider>
  );
}

export default App;

