import {Genre, ScreenMode, MAX_OVERVIEW_MOVIES} from '../../constants.js';

const initialState = {
  activeGenre: Genre.ALL,
  selectedMovie: null,
  currentScreen: ScreenMode.MAIN,
};

const ActionType = {
  CHANGE_FILTER: `CHANGE_FILTER`,
  CHANGE_SCREEN: `CHANGE_SCREEN`,
  SELECT_MOVIE: `SELECT_MOVIE`,
};

const ActionCreator = {
  changeFilter: (genre) => ({
    type: ActionType.CHANGE_FILTER,
    payload: genre,
  }),

  changeScreen: (screenMode) => ({
    type: ActionType.CHANGE_SCREEN,
    payload: screenMode,
  }),

  selectMovie: (movieData) => ({
    type: ActionType.SELECT_MOVIE,
    payload: movieData,
  })
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.CHANGE_FILTER:
      return Object.assign({}, state, {
        activeGenre: action.payload,
      });

    case ActionType.CHANGE_SCREEN:
      return Object.assign({}, state, {
        // selectedMovie: action.payload,
        currentScreen: ScreenMode.OVERVIEW,
      });

    case ActionType.SELECT_MOVIE:
      return Object.assign({}, state, {
        selectedMovie: action.payload,
      });
  }

  return state;
}

export {reducer, ActionType, ActionCreator};
