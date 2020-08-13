import {moviesData} from './mocks/movies.js';
import {Genre, ScreenMode} from './constants.js';

const initialState = {
  activeGenre: Genre.ALL,
  moviesData,
  filteredMoviesData: moviesData,
  selectedMovie: null,
  currentScreen: ScreenMode.MAIN,
};

const ActionType = {
  CHANGE_FILTER: `CHANGE_FILTER`,
  CHANGE_SCREEN: `CHANGE_SCREEN`,
};

const ActionCreator = {
  changeFilter: (genre) => ({
    type: ActionType.CHANGE_FILTER,
    payload: genre,
  }),

  changeScreen: (movieData) => ({
    type: ActionType.CHANGE_SCREEN,
    payload: movieData,
  }),

  // _handleCardClick(movieData) {
  //   this.setState(() => ({
  //     currentScreen: ScreenMode.OVERVIEW,
  //     selectedMovie: movieData,
  //   }));
  // }
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.CHANGE_FILTER:
      const filteredMoviesData = action.payload === Genre.ALL ?
        state.moviesData
        : state.moviesData.filter(({genre}) => genre === action.payload);

      return Object.assign({}, state, {
        activeGenre: action.payload,
        filteredMoviesData,
      });

    case ActionType.CHANGE_SCREEN:
      return Object.assign({}, state, {
        selectedMovie: action.payload,
        currentScreen: ScreenMode.OVERVIEW,
      });
  }

  return state;
}

export {reducer, ActionType, ActionCreator};
