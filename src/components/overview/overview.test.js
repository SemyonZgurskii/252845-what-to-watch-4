import React from 'react';
import renderer from 'react-test-renderer';
import Overview from './overview.jsx';

import {testMoviesData} from '../../mocks/testMovies.js';

describe(`Create Overview snapshot`, () => {
  it(`Should correctly render Main`, () => {
    const OverviewElement = renderer
      .create(
          <Overview
            movieData={testMoviesData[0]}
          />
      )
      .toJSON();

    expect(OverviewElement).toMatchSnapshot();
  });
});
