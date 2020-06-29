import React from 'react';
import PropTypes from 'prop-types';


function MovieCard(props) {
  const {movieData, onMovieTitleClick, onMouseEnter, handleCardClick} = props;
  const {title, images} = movieData;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={() => onMouseEnter(movieData)}
    >
      <div className="small-movie-card__image"
        onClick={() => handleCardClick(movieData)}
      >
        <img src={images.card} alt={title} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href="movie-page.html"
          onClick={() => {
            handleCardClick(movieData);
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
  }),
  onMovieTitleClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  handleCardClick: PropTypes.func.isRequired,
};

export default MovieCard;
