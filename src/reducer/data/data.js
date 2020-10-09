import {convertData} from '../../adapter/data.js';

const initialState = {
  moviesData: [],
};

const ActionType = {
  CHANGE_FILTER: `CHANGE_FILTER`,
  CHANGE_SCREEN: `CHANGE_SCREEN`,
  LOAD_MOVIES: `LOAD_MOVIES`,
};

const ActionCreator = {
  changeFilter: (genre) => ({
    type: ActionType.CHANGE_FILTER,
    payload: genre,
  }),

  loadMovies: (movies) => ({
    type: ActionType.LOAD_MOVIES,
    payload: movies,
  }),
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
    case ActionType.LOAD_MOVIES:
      return Object.assign({}, state, {
        moviesData: action.payload,
      });
  }

  return state;
}

export {reducer, Operation, ActionType, ActionCreator};
