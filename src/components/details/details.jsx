import React from 'react';
import PropTypes from 'prop-types';

// TODO переместить в компонент:
function getStarsMarkup(stars) {
  return (stars.map((star) => {
    return (
      <React.Fragment key={star}>
        {star} <br/>
      </React.Fragment>
    );
  }));
}

function Details(props) {
  const {info, genre, releaseDate, runTime} = props.movieData;
  const {director, stars} = info;

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {getStarsMarkup(stars)}
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{runTime}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{releaseDate}</span>
        </p>
      </div>
    </div>
  );
}

Details.propTypes = {
  movieData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    images: PropTypes.shape({
      card: PropTypes.string.isRequired,
      smallPoster: PropTypes.string.isRequired,
      bigPoster: PropTypes.string.isRequired,
    }),
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
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
    runTime: PropTypes.string.isRequired,
  }),
};

export default Details;
