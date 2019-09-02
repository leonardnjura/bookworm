import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import BookAnimation, { CoverAnimation } from './GsapAnimation';
import moment from 'moment';

const BOOK_QUERY = gql`
  query BookQuery($id: Int!) {
    book(id: $id) {
      name
      author {
        id
        name
      }
      madeInKenya
      publishedAt
      isbn
      format
      coverUrl
      pages
      bookDesc
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
        <Query query={BOOK_QUERY} variables={{ id }}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading Book..</h4>;
            if (error) console.log(error);

            const bookTitle = data.book.name;
            const {
              madeInKenya,
              publishedAt,
              isbn,
              format,
              coverUrl,
              pages,
              bookDesc
            } = data.book;
            const authorId = data.book.author.id;
            const authorName = data.book.author.name;
            const publicationDay = moment(publishedAt)
              .local()
              .format('Do MMMM, YYYY');

            console.log({ publicationDay });
            console.log(data);
            return (
              <div>
                <Link to="/" className="btn btn-secondary mt-2">
                  Back
                </Link>
                <h1 className="display-4 my-3">
                  <span className="text-dark">{bookTitle}</span>
                </h1>

                <div className="row">
                  <div className="col-md-9">
                    <ul className="list-group mb-3">
                      <li className="list-group-item">
                        Author:
                        <Link
                          to={`/author/${authorId}`}
                          className="silent-link"
                        >
                          <BookAnimation item={authorName} />
                        </Link>
                      </li>
                      <li className="list-group-item">
                        Published: <BookAnimation item={publicationDay} />
                      </li>
                      <li className="list-group-item">
                        ISBN: <BookAnimation item={isbn} />
                      </li>
                      <li className="list-group-item">
                        Format: <BookAnimation item={format} />
                      </li>
                      <li className="list-group-item">
                        Pages: <BookAnimation item={pages} />
                      </li>

                      <li className="list-group-item">
                        Overview: <BookAnimation item={bookDesc} />
                      </li>

                      <li className="list-group-item">
                        Made in Kenya:{' '}
                        <span
                          className={classNames({
                            'text-success': madeInKenya,
                            'text-danger': !madeInKenya
                          })}
                        >
                          {madeInKenya ? 'Yes' : 'No'}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-3">
                    <CoverAnimation item={coverUrl} />

                    <hr className="mb-5" />
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

export default Book;
