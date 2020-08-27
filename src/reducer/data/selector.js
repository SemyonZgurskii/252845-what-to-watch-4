import {createSelector} from 'reselect';
import {getGenre} from '../app/selector.js';
import {Genre} from '../../constants.js';
import NameSpace from '../name-space.js';

const NAME_SPACE = NameSpace.DATA;
// TODO: нажатие по фильтру > изменение genre в стейте > селектор фильтрует и отдает данные исходя из выбранного жанра
function getMovies(state) {
  return state[NAME_SPACE].moviesData;
}

const getFilteredMovies = createSelector(
    getMovies,
    getGenre,
    (movies, genre) => {
      if (genre === Genre.ALL) {
        return movies;
      }

      return movies.filter((movie) => movie.genre === genre);
    }
);

export {getMovies, getFilteredMovies};
