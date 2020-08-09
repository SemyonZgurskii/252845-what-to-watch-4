import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';
import ShowMore from '../show-more/show-more.jsx';
import withVideo from '../../hocs/with-video/with-video.jsx';

const MOVIES_COUNT_SUMMAND = 8;
const MovieCardWrapped = withVideo(MovieCard);

function getShowedMoviesCount(currentMoviesCount, allMoviesCount) {
  if (currentMoviesCount + MOVIES_COUNT_SUMMAND > allMoviesCount) {
    return allMoviesCount;
  }

  return currentMoviesCount + MOVIES_COUNT_SUMMAND;
}

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showedMoviesCount: getShowedMoviesCount(0, this.props.moviesData.length),
    };

    this._handleShowMoreButtonClick = this._handleShowMoreButtonClick.bind(this);
  }

  componentWillUnmount() {
    clearTimeout(this.timerID);
  }

  _handleShowMoreButtonClick() {
    this.setState((prevState) => {
      const {moviesData} = this.props;
      const {showedMoviesCount} = prevState;

      return {
        showedMoviesCount: getShowedMoviesCount(showedMoviesCount, moviesData.length)
      };
    });
  }

  render() {
    const {moviesData, onMovieTitleClick, onCardClick} = this.props;
    const showedMovies = moviesData.slice(0, this.state.showedMoviesCount);

    return (
      <>
        <div className="catalog__movies-list">
          {showedMovies.map((movieData, index) => {
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
        {this.state.showedMoviesCount !== this.props.moviesData.length &&
          <ShowMore
            onClick={this._handleShowMoreButtonClick}
          />
        }
      </>
    );
  }
}

MoviesList.propTypes = {
  moviesData: PropTypes.array.isRequired,
  onMovieTitleClick: PropTypes.func.isRequired,
  onCardClick: PropTypes.func.isRequired
};

export default MoviesList;
