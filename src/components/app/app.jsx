import React, {PureComponent} from 'react';
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
        handleCardClick={this._handleCardClick}
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
            <MovieInfo/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
