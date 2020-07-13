import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentMovie: null,
    };

    this.timerID = null;
  }

  render() {
    const {moviesData, onMovieTitleClick, onCardClick} = this.props;

    return (
      moviesData.map((movieData, index) => {
        return (
          <MovieCard
            movieData={movieData}
            onMovieTitleClick={onMovieTitleClick}
            onCardClick={onCardClick}
            key={movieData.title + index}
            isPlaying={this.state.currentMovie === movieData}
            onMouseEnter={(movieInfo) => {
              this.timerID = setTimeout(() => this.setState({
                currentMovie: movieInfo,
              }), 1000);
            }}
            onMouseOut={() => {
              this.setState({
                currentMovie: null,
              });
              clearTimeout(this.timerID);
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
  })),
  onMovieTitleClick: PropTypes.func.isRequired,
  onCardClick: PropTypes.func.isRequired
};

export default MoviesList;
