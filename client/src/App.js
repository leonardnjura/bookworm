import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Books from './components/Books';
import Book from './components/Book';
import Author from './components/Author';

import './App.css';
import logo from './assets/logo.png';

const client = new ApolloClient({
  uri: '/graphql'
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
          <Route exact path="/author/:id" component={Author} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
