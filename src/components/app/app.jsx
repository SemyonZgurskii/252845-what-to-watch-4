import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';
import MovieInfo from '../movie-info/movie-info.jsx';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const ScreenMode = {
  MAIN: `main`,
  OVERVIEW: `overview`,
};

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedMovie: null,
      currentScreen: ScreenMode.MAIN,
    };

    this._handleCardClick = this._handleCardClick.bind(this);
  }

  _renderCurrentScreen() {
    if (this.state.currentScreen === ScreenMode.OVERVIEW) {
      return (
        <MovieInfo
          movieData={this.state.selectedMovie}
        />
      );
    }

    return (
      <Main
        {...this.props}
        onCardClick={this._handleCardClick}
      />
    );
  }

  _handleCardClick(movieData) {
    this.setState(() => ({
      currentScreen: ScreenMode.OVERVIEW,
      selectedMovie: movieData,
    }));
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderCurrentScreen()}
          </Route>
          <Route exact path="/movie-info">
            <MovieInfo
              movieData={this.props.moviesData[0]}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
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
  promoInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
  }),
};

export default App;
