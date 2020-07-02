import React from 'react';
import renderer from "react-test-renderer";
import App from './app.jsx';

import {promoInfo} from '../../mocks/movies.js';
import {testMoviesData} from '../../mocks/testMovies.js';


describe(`Create App snapshot`, () => {
  it(`Should correctly render App`, () => {
    const AppElement = renderer
      .create(
          <App
            promoInfo={promoInfo}
            moviesData={testMoviesData}
            onMovieTitleClick={() => {}}
          />)
      .toJSON();

    expect(AppElement).toMatchSnapshot();
  });
});

