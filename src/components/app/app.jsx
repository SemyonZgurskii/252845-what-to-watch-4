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
          {...this.props}
          movieData={this.state.selectedMovie}
          onCardClick={this._handleCardClick}
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
              {...this.props}
              movieData={this.props.moviesData[0]}
              onCardClick={this._handleCardClick}
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

export default App;
