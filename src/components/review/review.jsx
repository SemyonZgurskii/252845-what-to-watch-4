import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

function formatTime(time) {
  return moment(time).format(`MMMM DD, YYYY`);
}

function Review(props) {
  const {text, author, date, rating} = props;

  return (
    <div className="review" key={author + date}>
      <blockquote className="review__quote">
        <p className="review__text">{text}</p>

        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime={date}>{formatTime(date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}

Review.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Review;
