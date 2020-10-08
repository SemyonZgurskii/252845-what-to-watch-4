import {createSelector} from 'reselect';
import {getGenre, getCurrentScreen} from '../app/selector.js';
import {Genre, ScreenMode, MAX_OVERVIEW_MOVIES} from '../../constants.ts';
import NameSpace from '../name-space.js';

const NAME_SPACE = NameSpace.DATA;

function getMovies(state) {
  return state[NAME_SPACE].moviesData;
}

const getFilteredMovies = createSelector(
    getMovies,
    getGenre,
    getCurrentScreen,
    (movies, genre, screen) => {
      if (genre === Genre.ALL) {
        return movies;
      }

      const filteredMovies = movies.filter((movie) => movie.genre === genre);

      if (screen === ScreenMode.OVERVIEW) {
        return filteredMovies.slice(0, MAX_OVERVIEW_MOVIES);
      }

      return filteredMovies;
    }
);

export {getMovies, getFilteredMovies};
