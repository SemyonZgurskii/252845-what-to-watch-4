import React from 'react';
import PropTypes from 'prop-types';

function MovieCard(props) {
  const {movieData, onMovieTitleClick, onMouseEnter, onCardClick, isPlaying, onMouseOut, children} = props;
  const {title} = movieData;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter = {() => onMouseEnter(movieData)}
      onMouseOut={onMouseOut}
    >
      <div className="small-movie-card__image"
        onClick = {() => onCardClick(movieData)}
      >
        {children}
      </div>
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href="movie-page.html"
          onClick={() => {
            onCardClick(movieData);
            onMovieTitleClick();
          }}
        >{title}</a>
      </h3>
    </article>
  );
}

MovieCard.propTypes = {
  movieData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    images: PropTypes.shape({
      card: PropTypes.string.isRequired
    }),
    preview: PropTypes.string.isRequired,
  }),
  onMovieTitleClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onCardClick: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onMouseOut: PropTypes.func.isRequired,
};

export default MovieCard;
