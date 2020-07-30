import React from 'react';
import renderer from 'react-test-renderer';
import GenreFilter from './genre-filter.jsx';

import {testMoviesData} from '../../mocks/testMovies.js';
import {Genre} from '../../constants.js';

describe(`Create GenreFilter snapshot`, () => {
  it(`GenreFilter should render correctly`, () => {
    const genreFilterElement = renderer.create(
        <GenreFilter
          activeGenre={Genre.COMEDIES}
          onFilterChange={() => {}}
          moviesData={testMoviesData}
        />
    );

    expect(genreFilterElement).toMatchSnapshot();
  });
});
