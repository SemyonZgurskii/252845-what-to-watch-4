import React from 'react';
import PropTypes from 'prop-types';

function Overview(props) {
  const {rating, info} = props.movieData;
  const {score: ratingScore, level: ratingLevel, count: ratingCount} = rating;
  const {description, director, stars} = info;

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{ratingScore}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{ratingLevel}</span>
          <span className="movie-rating__count">{ratingCount}</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {stars.join(`, `)}</strong></p>
      </div>
    </>
  );
}

Overview.propTypes = {
  movieData: PropTypes.shape({
    rating: PropTypes.shape({
      score: PropTypes.number.isRequired,
      level: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    }),
    info: PropTypes.shape({
      description: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
      stars: PropTypes.arrayOf(PropTypes.string),
    }),
  }),
};

export default Overview;
