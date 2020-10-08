import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.tsx';

import {promoInfo} from '../../mocks/movies.js';
import {testMoviesData} from '../../mocks/testMovies.js';
import {Genre} from '../../constants.ts';

describe(`Create Main snapshot`, () => {
  it(`Should correctly render Main`, () => {
    const MainElement = renderer
      .create(
          <Main
            activeGenre={Genre.ALL}
            onFilterChange={() => {}}
            promoInfo={promoInfo}
            moviesData={testMoviesData}
            onCardClick={() => {}}
          />
      )
      .toJSON();

    expect(MainElement).toMatchSnapshot();
  });
});
