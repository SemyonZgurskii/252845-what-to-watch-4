import {Genre, ScreenMode, MAX_OVERVIEW_MOVIES} from './constants.js';
import {convertData} from './adapter/data.js';

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  activeGenre: Genre.ALL,
  moviesData: [],
  filteredMoviesData: [],
  selectedMovie: null,
  currentScreen: ScreenMode.MAIN,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const ActionType = {
  CHANGE_FILTER: `CHANGE_FILTER`,
  CHANGE_SCREEN: `CHANGE_SCREEN`,
  LOAD_MOVIES: `LOAD_MOVIES`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
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

  loadMovies: (movies) => ({
    type: ActionType.LOAD_MOVIES,
    payload: movies,
  }),

  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  }
};

const Operation = {
  loadMovies: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        return response.data.map(convertData);
      })
      .then((response) => {
        dispatch(ActionCreator.loadMovies(response));
      });
  }
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

    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });

    case ActionType.LOAD_MOVIES:
      return Object.assign({}, state, {
        moviesData: action.payload,
        filteredMoviesData: action.payload,
      });
  }

  return state;
}

export {reducer, Operation, ActionType, ActionCreator, AuthorizationStatus};
