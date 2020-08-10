import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';
import withVideo from '../../hocs/with-video/with-video.jsx';

const MovieCardWrapped = withVideo(MovieCard);

function MoviesList(props) {
  const {moviesData, onMovieTitleClick, onCardClick, children} = props;

  return (
    <>
      <div className="catalog__movies-list">
        {moviesData.map((movieData, index) => {
          return (
            <MovieCardWrapped
              movieData={movieData}
              onMovieTitleClick={onMovieTitleClick}
              onCardClick={onCardClick}
              key={movieData.title + index}
            />
          );
        })}
      </div>
      {children}
    </>
  );
}

MoviesList.propTypes = {
  moviesData: PropTypes.array.isRequired,
  onMovieTitleClick: PropTypes.func.isRequired,
  onCardClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default MoviesList;
