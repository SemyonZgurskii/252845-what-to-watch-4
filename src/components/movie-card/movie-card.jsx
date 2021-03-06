import React from 'react';
import PropTypes from 'prop-types';
import history from "../../history.js";
import {AppRoute} from "../../constants.ts";

function MovieCard(props) {
  const {movieData, onMouseEnter, onCardClick, onMouseOut, children} = props;
  const {title} = movieData;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter = {() => onMouseEnter(movieData)}
      onMouseOut={onMouseOut}
    >
      <div className="small-movie-card__image"
        onClick = {() => {
          onCardClick(movieData)
          history.push(AppRoute.INFO)
        }}
      >
        {children}
      </div>
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href="movie-page.html"
          onClick={() => {
            onCardClick(movieData)
            history.push(AppRoute.INFO)
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
  onMouseEnter: PropTypes.func.isRequired,
  onCardClick: PropTypes.func.isRequired,
  onMouseOut: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default MovieCard;
