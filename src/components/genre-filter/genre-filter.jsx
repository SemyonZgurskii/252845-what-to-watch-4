import React from 'react';
import PropTypes from 'prop-types';

function GenreFilter(props) {
  const {activeGenre, onFilterChange, moviesData} = props;
  const activeClass = `catalog__genres-item--active`;
  const genres = [...new Set(moviesData.map(({genre}) => genre))];

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => {
        return (
          <li className={`catalog__genres-item ${genre === activeGenre ? activeClass : ``}`}
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
