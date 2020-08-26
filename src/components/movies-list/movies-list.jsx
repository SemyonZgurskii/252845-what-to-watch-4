import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';
import withVideo from '../../hocs/with-video/with-video.jsx';

const MovieCardWrapped = withVideo(MovieCard);

function MoviesList(props) {
  const {filteredMoviesData, onCardClick, children} = props;

  return (
    <>
      <div className="catalog__movies-list">
        {filteredMoviesData.map((movieData) => {
          const {id} = movieData;

          return (
            <MovieCardWrapped
              movieData={movieData}
              onCardClick={onCardClick}
              key={id}
            />
          );
        })}
      </div>
      {children}
    </>
  );
}

MoviesList.propTypes = {
  filteredMoviesData: PropTypes.array.isRequired,
  onCardClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
};

export default MoviesList;
