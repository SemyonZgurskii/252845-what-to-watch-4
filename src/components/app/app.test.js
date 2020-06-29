import React from 'react';
import renderer from "react-test-renderer";
import App from './app.jsx';

import {moviesData, promoInfo} from '../../mocks/movies.js';

describe(`Create App snapshot`, () => {
  it(`Should correctly render App`, () => {
    const AppElement = renderer
      .create(
          <App
            promoInfo={promoInfo}
            moviesData={moviesData}
            onMovieTitleClick={() => {}}
          />)
      .toJSON();

    expect(AppElement).toMatchSnapshot();
  });
});

