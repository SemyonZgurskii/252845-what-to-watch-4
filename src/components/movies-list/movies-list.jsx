import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentMovie: null,
    };
  }

  render() {
    const {moviesData, onMovieTitleClick} = this.props;

    return (
      moviesData.map((movieData, index) => {
        return (
          <MovieCard
            movieData = {movieData}
            onMovieTitleClick = {onMovieTitleClick}
            key = {movieData + index}
            onMouseEnter = {(movieInfo) => {
              this.setState({
                currentMovie: movieInfo,
              });
            }}
          />
        );
      })
    );
  }
}

MoviesList.propTypes = {
  moviesData: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
  })),
  onMovieTitleClick: PropTypes.func,
};

export default MoviesList;
