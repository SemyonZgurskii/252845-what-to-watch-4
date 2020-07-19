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

  componentWillUnmount() {
    clearTimeout(this.timerID);
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
  moviesData: PropTypes.array.isRequired,
  onMovieTitleClick: PropTypes.func.isRequired,
  onCardClick: PropTypes.func.isRequired
};

export default MoviesList;
