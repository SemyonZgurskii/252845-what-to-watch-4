import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

function formatTime(time) {
  return moment(time).format(`MMMM DD, YYYY`);
}

function getReviewMarkup(review) {
  const {text, author, date, rating} = review;

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

function Reviews(props) {
  const {reviews} = props.movieData;
  const leftColumnReviews = reviews.slice(0, reviews.length / 2);
  const rightColumnReviews = reviews.slice(reviews.length / 2, reviews.length);

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {leftColumnReviews.map((review) => getReviewMarkup(review))}
      </div>
      <div className="movie-card__reviews-col">
        {rightColumnReviews.map((review) => getReviewMarkup(review))}
      </div>
    </div>
  );
}

Reviews.propTypes = {
  movieData: PropTypes.shape({
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired,
          author: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
          rating: PropTypes.number.isRequired,
        })
    )
  }),
};

export default Reviews;
