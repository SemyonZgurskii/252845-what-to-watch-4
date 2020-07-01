import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

import {promoInfo} from '../../mocks/movies.js';
import {testMoviesData} from '../../mocks/testMovies.js';

const onMovieTitleClick = () => {};

describe(`Create Main snapshot`, () => {
  it(`Should correctly render Main`, () => {
    const MainElement = renderer
      .create(
          <Main
            promoInfo={promoInfo}
            moviesData={testMoviesData}
            onMovieTitleClick={onMovieTitleClick}
            onCardClick={() => {}}
          />
      )
      .toJSON();

    expect(MainElement).toMatchSnapshot();
  });
});
