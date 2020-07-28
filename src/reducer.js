import {moviesData} from './mocks/movies.js';
import {Genre} from './constants.js';

const initialState = {
  activeGenre: Genre.ALL,
  moviesData,
  filteredMoviesData: moviesData,
};

const ActionType = {
  CHANGE_FILTER: `CHANGE_FILTER`,
  FILTER_MOVIES: `FILTER_MOVIES`,
};

const ActionCreator = {
  changeFilter: (genre) => ({
    type: ActionType.CHANGE_FILTER,
    payload: genre,
  })
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.CHANGE_FILTER:
      const filteredMoviesData = action.payload === Genre.ALL ?
        state.moviesData
        : moviesData.filter(({genre}) => genre === action.payload);

      return Object.assign({}, state, {
        activeGenre: action.payload,
        filteredMoviesData,
      });
  }

  return state;
}

export {reducer, ActionType, ActionCreator};
