import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';
import MovieInfo from '../movie-info/movie-info.jsx';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {ActionCreator} from '../../reducer.js';
import {connect} from 'react-redux';
import {ScreenMode} from '../../constants.js';

class App extends PureComponent {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     selectedMovie: null,
  //     currentScreen: ScreenMode.MAIN,
  //   };

  //   this._handleCardClick = this._handleCardClick.bind(this);
  // }

  _renderCurrentScreen() {
    if (this.props.currentScreen === ScreenMode.OVERVIEW) {
      return (
        <MovieInfo
          {...this.props}
          movieData={this.props.selectedMovie}
          onCardClick={this.props.onMovieSelect}
        />
      );
    }

    return (
      <Main
        {...this.props}
        onCardClick={this.props.onMovieSelect}
      />
    );
  }

  // _handleCardClick(movieData) {
  //   this.setState(() => ({
  //     currentScreen: ScreenMode.OVERVIEW,
  //     selectedMovie: movieData,
  //   }));
  // }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderCurrentScreen()}
          </Route>
          <Route exact path="/movie-info">
            <MovieInfo
              {...this.props}
              movieData={this.props.moviesData[0]}
              onCardClick={this.props.onMovieSelect}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  moviesData: PropTypes.arrayOf(PropTypes.object),
  promoInfo: PropTypes.object,
  onMovieTitleClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeGenre: state.activeGenre,
  filteredMoviesData: state.filteredMoviesData,
  moviesData: state.moviesData,
  currentMovie: state.currentMovie,
  selectedMovie: null,
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
