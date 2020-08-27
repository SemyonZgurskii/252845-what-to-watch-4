import NameSpace from '../name-space.js';

const NAME_SPACE = NameSpace.APP;

function getGenre(state) {
  return state[NAME_SPACE].activeGenre;
}

function getSelectedMovie(state) {
  return state[NAME_SPACE].selectedMovie;
}

function getCurrentScreen(state) {
  return state[NAME_SPACE].currentScreen;
}

export {getGenre, getSelectedMovie, getCurrentScreen};
