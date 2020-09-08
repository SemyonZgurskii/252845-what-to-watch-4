import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';
import MovieInfo from '../movie-info/movie-info.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import AddReview from '../add-review/add-review.jsx';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {ActionCreator} from '../../reducer/app/app.js';
import {getFilteredMovies, getMovies} from '../../reducer/data/selector.js';
import {getAuthorizationStatus} from '../../reducer/user/selector.js';
import {connect} from 'react-redux';
import {ScreenMode} from '../../constants.js';
import {getGenre, getSelectedMovie, getCurrentScreen} from '../../reducer/app/selector.js';
import {Operation} from '../../reducer/user/user.js';

class App extends PureComponent {
  _renderCurrentScreen() {
    const {currentScreen, selectedMovie, onMovieSelect, login} = this.props;

    switch (currentScreen) {
      case (ScreenMode.OVERVIEW):
        return (
          <MovieInfo
            {...this.props}
            movieData={selectedMovie}
            onCardClick={onMovieSelect}
          />
        );
      case (ScreenMode.AUTH):
        return (
          <SignIn
            login={login}
          />
        );
      case (ScreenMode.ADD_REVIEW):
        return (
          <AddReview
            movieData={selectedMovie}
            onAddReviewSubmit={() => {}}
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
  login: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeGenre: getGenre(state),
  filteredMoviesData: getFilteredMovies(state),
  moviesData: getMovies(state),
  selectedMovie: getSelectedMovie(state),
  currentScreen: getCurrentScreen(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFilterChange(genre) {
    dispatch(ActionCreator.changeFilter(genre));
  },
  onMovieSelect(movieData) {
    dispatch(ActionCreator.changeFilter(movieData.genre));
    dispatch(ActionCreator.selectMovie(movieData));
    dispatch(ActionCreator.changeScreen(ScreenMode.OVERVIEW));
  },
  onSignInClick() {
    dispatch(ActionCreator.changeScreen(ScreenMode.AUTH));
  },
  login(authData) {
    dispatch(Operation.login(authData));
  },
  onAddReviewButtonClick() {
    dispatch(ActionCreator.changeScreen(ScreenMode.ADD_REVIEW));
  }
  // TODO: доделать onAddReviewSubmit(movie)
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
