import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

export default function BookItem(props) {
  console.log(props.book);
  const { id, name, author, authorId, madeInKenya, coverUrl } = props.book;
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>
            <span
              className={classNames({
                'bg-success': madeInKenya,
                'bg-danger': !madeInKenya,
                'px-1 mr-2': true
              })}
            ></span>
            Book: {name}
          </h4>
          <h1 className="author">
            <Link to={`/author/${authorId}`} className="silent-link">
              By {author.name}
            </Link>
          </h1>
          <Link to={`/book/${id}`} className="btn btn-secondary  mb-2">
            Book Details
          </Link>
        </div>
        <div className="col-md-3">
          <img
            src={coverUrl}
            alt="Book Cover"
            style={{ width: 30, float: 'right', borderRadius: 3 }}
          />
        </div>
      </div>
    </div>
  );
}
