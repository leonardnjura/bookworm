import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import BookItem from './BookItem';
import BookKey from './BookKey';

const BOOKS_QUERY = gql`
  query BooksQuery {
    books {
      id
      name
      authorId
      author {
        name
      }
      madeInKenya
      publishedAt
    }
  }
`;

export class Books extends Component {
  render() {
    return (
      <Fragment>
        <h4 className="display-4 my-3">Books</h4>
        <p>Checkout these awesome books from my collection!</p>
        <BookKey />
        <Query query={BOOKS_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading..</h4>;
            if (error) console.log(error);

            // console.log(data)
            return (
              <Fragment>
                {data.books.map(book => (
                  <BookItem key={book.id} book={book} />
                ))}
              </Fragment>
            );
          }}
        </Query>
        <hr className="mb-5" />

      </Fragment>
    );
  }
}

export default Books;
