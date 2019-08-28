import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Moment from 'react-moment';

const BOOK_QUERY = gql`
  query BookQuery($id: Int!) {
    book(id: $id) {
      name
      author {
        name
      }
      madeInKenya
      publishedAt
      isbn
      format
      pages
    }
  }
`;

export class Book extends Component {
  render() {
    // console.log(this.props);
    let { id } = this.props.match.params;
    id = parseInt(id);
    return (
      <Fragment>
        {/* <h4 className="display-4 my-3">Book</h4>
        <p>Discover more about this book!</p> */}
        <Query query={BOOK_QUERY} variables={{ id }}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading Book..</h4>;
            if (error) console.log(error);

            const bookTitle = data.book.name;
            const { madeInKenya, publishedAt, isbn, format, pages } = data.book;
            const authorName = data.book.author.name;

            console.log(data);
            return (
              <div>
                <h1 className="display-4 my-3">
                  <span className="text-dark">{bookTitle}</span>
                </h1>
                <h4>Book Details:</h4>
                <ul className="list-group">
                  <li className="list-group-item">Author: {authorName}</li>
                  <li className="list-group-item">
                    Published:{' '}
                    <Moment format="YYYY">{publishedAt}</Moment>
                  </li>
                  <li className="list-group-item">
                    ISBN: {isbn}
                  </li>
                  <li className="list-group-item">
                    Format: {format}
                  </li>
                  <li className="list-group-item">
                    Pages: {pages}
                  </li>
                  <li className="list-group-item">
                   Made in Kenya: <span
                      className={classNames({
                        'text-success': madeInKenya,
                        'text-danger': !madeInKenya
                      })}
                    >
                      {madeInKenya ? 'Yes' : 'No'}
                    </span>
                  </li>
                </ul>
                
                <Link to="/" className="btn btn-secondary mt-2 mb-5">Back</Link>
              </div>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default Book;
