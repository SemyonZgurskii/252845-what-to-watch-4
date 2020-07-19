import React from 'react';
import renderer from 'react-test-renderer';
import Details from './details.jsx';

import {testMoviesData} from '../../mocks/testMovies.js';

describe(`Create Details snapshot`, () => {
  it(`Should correctly render Main`, () => {
    const DetailsElement = renderer
      .create(
          <Details
            movieData={testMoviesData[0]}
          />
      )
      .toJSON();

    expect(DetailsElement).toMatchSnapshot();
  });
});
