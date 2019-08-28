import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Books from './components/Books';
import Book from './components/Book';

import './App.css';
import logo from './assets/logo.png';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img
            src={logo}
            style={{ width: 230, display: 'block', margin: 'auto' }}
          />
          {/* <Books /> */}
          <Route exact path="/" component={Books} />
          <Route exact path="/book/:id" component={Book} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
