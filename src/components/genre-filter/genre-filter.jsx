import React from 'react';
import PropTypes from 'prop-types';
import {MAX_FILTERS} from '../../constants.js';

const ACTIVE_CLASS = `catalog__genres-item--active`;

function GenreFilter(props) {
  const {activeGenre, onFilterChange, moviesData} = props;
  const genres = [...new Set(moviesData.map(({genre}) => genre))]
    .slice(0, MAX_FILTERS);

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => {
        return (
          <li className={`catalog__genres-item ${genre === activeGenre ? ACTIVE_CLASS : ``}`}
            key={genre}
          >
            <a href="#" className="catalog__genres-link"
              onClick={() => onFilterChange(genre)}
            >{genre}</a>
          </li>
        );
      })}
    </ul>
  );
}

GenreFilter.propTypes = {
  activeGenre: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  moviesData: PropTypes.array.isRequired,
};

export default GenreFilter;
