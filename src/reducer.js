import {moviesData} from './mocks/movies.js';
import {Genre, ScreenMode, MAX_OVERVIEW_MOVIES} from './constants.js';

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
      const moviesForOverview = state.moviesData
        .filter(({genre}) => genre === action.payload.genre)
        .slice(0, MAX_OVERVIEW_MOVIES);

      return Object.assign({}, state, {
        selectedMovie: action.payload,
        currentScreen: ScreenMode.OVERVIEW,
        filteredMoviesData: moviesForOverview,
      });
  }

  return state;
}

export {reducer, ActionType, ActionCreator};
