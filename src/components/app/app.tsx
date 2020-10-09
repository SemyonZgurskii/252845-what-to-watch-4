import * as React from 'react';
import Main from '../main/main.tsx';
import MovieInfo from '../movie-info/movie-info.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import AddReview from '../add-review/add-review.jsx';
import {Router, Switch, Route} from 'react-router-dom';
import {ActionCreator} from '../../reducer/app/app.js';
import {getFilteredMovies, getMovies} from '../../reducer/data/selector.js';
import {getAuthorizationStatus} from '../../reducer/user/selector.js';
import {connect} from 'react-redux';
import {ScreenMode, AppRoute, Genre} from '../../constants.ts';
import {getGenre, getSelectedMovie, getCurrentScreen} from '../../reducer/app/selector.js';
import {Operation} from '../../reducer/user/user.js';
import history from '../../history.js';

interface Props {
  currentScreen: string,
  selectedMovie: object | null,
  onMovieSelect: () => void;
  moviesData: object;
  login: () => void;
}

class App extends React.PureComponent<Props, {}> {
  //     case (ScreenMode.ADD_REVIEW):
  //       return (
  //         <AddReview
  //           movieData={selectedMovie}
  //           onAddReviewSubmit={() => {}}
  //         />
  //       );
  //   }

  render() {
    const {selectedMovie, onMovieSelect, login} = this.props;

    return (
      <Router
        history={history}
      >
        <Switch>
          <Route exact path={AppRoute.MAIN}>
            <Main
              {...this.props}
              onCardClick={onMovieSelect}
            />
          </Route>
          <Route exact path={AppRoute.LOGIN}>
            <SignIn
              login={login}
            />
          </Route>
          <Route exact path={AppRoute.INFO}>
            <MovieInfo
              {...this.props}
              movieData={selectedMovie}
              onCardClick={onMovieSelect}
            />
          </Route>
          <Route exact path={AppRoute.ADD_REVIEW}>
            <AddReview
              // onAddReviewSubmit={}
              movieData={selectedMovie}
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}

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
  onHomePageClick() {
    dispatch(ActionCreator.changeFilter(Genre.ALL));
    dispatch(ActionCreator.changeScreen(ScreenMode.MAIN));
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
