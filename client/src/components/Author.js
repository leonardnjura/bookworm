import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import BookAnimation from './GsapAnimation';

const AUTHOR_QUERY = gql`
  query AuthorQuery($id: Int!) {
    author(id: $id) {
      name
      books {
        id
        name
      }
      authorDesc
    }
  }
`;

export class Author extends Component {
  render() {
    console.log(this.props);
    let { id } = this.props.match.params;
    id = parseInt(id);
    return (
      <Fragment>
        <Query query={AUTHOR_QUERY} variables={{ id }}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading Author..</h4>;
            if (error) console.log(error);

            console.log(data);
            const { authorDesc, name, books } = data.author;
            return (
              <div>
                <Link to="/" className="btn btn-secondary mt-2">
                  All Books
                </Link>
                <h1 className="display-4 my-3">
                  <span className="text-dark">{name}</span>
                </h1>
                <div className="row">
                  <div className="col-md-8">
                    <h4>Bio</h4>
                    <BookAnimation item={authorDesc} />

                    <hr className="mb-5" />
                  </div>
                  <div className="col-md-4">
                    <h4>Books</h4>
                    <ul className="list-group mb-3">
                      {books.map(book => (
                        <li className="list-group-item" key={book.id}>
                          Book:
                          <Link to={`/book/${book.id}`} className="silent-link">
                            <BookAnimation item={book.name} />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default Author;
