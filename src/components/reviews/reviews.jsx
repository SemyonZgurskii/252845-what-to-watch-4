import React from 'react';
import PropTypes from 'prop-types';
import Review from '../review/review.jsx';

function Reviews(props) {
  const {reviews} = props.movieData;
  const leftColumnReviews = reviews.slice(0, reviews.length / 2);
  const rightColumnReviews = reviews.slice(reviews.length / 2, reviews.length);

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {leftColumnReviews.map((review) => {
          return (
            <Review {...review} key={review.date + review.author}/>
          );
        })}
      </div>
      <div className="movie-card__reviews-col">
        {rightColumnReviews.map((review) => {
          return (
            <Review {...review} key={review.date + review.author}/>
          );
        })}
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
