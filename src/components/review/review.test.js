import React from 'react';
import renderer from 'react-test-renderer';
import Review from './review.jsx';

import {testMoviesData} from '../../mocks/testMovies.js';

describe(`Create Review snapshot`, () => {
  it(`Should correctly render Main`, () => {
    const {date, rating, author, text} = testMoviesData[0].reviews[0];

    const ReviewElement = renderer
      .create(
          <Review
            date={date}
            rating={rating}
            author={author}
            text={text}
          />
      )
      .toJSON();

    expect(ReviewElement).toMatchSnapshot();
  });
});
