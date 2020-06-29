import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

import {promoInfo} from '../../mock.js';
import {moviesData} from '../../mocks/movies.js';

const onMovieTitleClick = () => {};

describe(`Create Main snapshot`, () => {
  it(`Should correctly render Main`, () => {
    const MainElement = renderer
      .create(
          <Main
            promoInfo={promoInfo}
            moviesData={moviesData}
            onMovieTitleClick={onMovieTitleClick}
          />
      )
      .toJSON();

    expect(MainElement).toMatchSnapshot();
  });
});
