import React from 'react';
import renderer from "react-test-renderer";
import App from './app.jsx';

import {promoInfo} from '../../mock.js';
import {moviesData} from '../../mocks/movies.js';

describe(`Create App snapshot`, () => {
  it(`Should correctly render App`, () => {
    const AppElement = renderer
      .create(
          <App
            promoInfo={promoInfo}
            moviesData={moviesData}
          />)
      .toJSON();

    expect(AppElement).toMatchSnapshot();
  });
});

