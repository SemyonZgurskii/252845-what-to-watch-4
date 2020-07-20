import React from 'react';
import renderer from 'react-test-renderer';
import Reviews from './reviews.jsx';

import {testMoviesData} from '../../mocks/testMovies.js';

describe(`Create Reviews snapshot`, () => {
  it(`Should correctly render Review`, () => {
    const ReviewsElement = renderer
      .create(
          <Reviews
            movieData={testMoviesData[0]}
          />
      )
      .toJSON();

    expect(ReviewsElement).toMatchSnapshot();
  });
});
