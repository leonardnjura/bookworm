import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

export default function BookItem(props) {
  console.log(props.book);
  const { id, name, author, madeInKenya } = props.book;
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
          <h1 className="author">By {author.name}</h1>
        </div>
        <div className="col-md-3">
          <Link to={`/book/${id}`} className="btn btn-secondary float-right">
            Book Details
          </Link>
        </div>
      </div>
    </div>
  );
}
