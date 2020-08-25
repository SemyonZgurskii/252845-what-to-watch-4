import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';
import MovieInfo from '../movie-info/movie-info.jsx';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {ActionCreator} from '../../reducer.js';
import {connect} from 'react-redux';
import {ScreenMode} from '../../constants.js';

class App extends PureComponent {
  _renderCurrentScreen() {
    const {currentScreen, selectedMovie, onMovieSelect} = this.props;

    if (currentScreen === ScreenMode.OVERVIEW) {
      return (
        <MovieInfo
          {...this.props}
          movieData={selectedMovie}
          onCardClick={onMovieSelect}
        />
      );
    }

    return (
      <Main
        {...this.props}
        onCardClick={onMovieSelect}
      />
    );
  }

  render() {
    const {moviesData, onMovieSelect} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderCurrentScreen()}
          </Route>
          <Route exact path="/movie-info">
            <MovieInfo
              {...this.props}
              movieData={moviesData[0]}
              onCardClick={onMovieSelect}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  moviesData: PropTypes.arrayOf(PropTypes.object),
  onMovieSelect: PropTypes.func.isRequired,
  promoInfo: PropTypes.object,
  currentScreen: PropTypes.string.isRequired,
  selectedMovie: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.instanceOf(null)
  ]),
};

const mapStateToProps = (state) => ({
  activeGenre: state.activeGenre,
  filteredMoviesData: state.filteredMoviesData,
  moviesData: state.moviesData,
  selectedMovie: state.selectedMovie,
  currentScreen: state.currentScreen,
});

const mapDispatchToProps = (dispatch) => ({
  onFilterChange(genre) {
    dispatch(ActionCreator.changeFilter(genre));
  },
  onMovieSelect(movieData) {
    dispatch(ActionCreator.changeScreen(movieData));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
