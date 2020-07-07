import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';


function MovieCard(props) {
  const {movieData, onMovieTitleClick, onMouseEnter, onCardClick, isPlaying, onMouseOut} = props;
  const {title, images, preview} = movieData;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter = {() => onMouseEnter(movieData)}
      onMouseOut={onMouseOut}
    >
      <div className="small-movie-card__image"
        onClick = {() => onCardClick(movieData)}
      >
        <VideoPlayer
          previewImage = {images.card}
          previewVideo = {preview}
          title = {title}
          isPlaying = {isPlaying}
        />
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
};

export default MovieCard;
