import React from 'react';
import renderer from "react-test-renderer";
import App from './app.jsx';

import {promoInfo, moviesNames} from '../../mock.js';

describe(`Create App snapshot`, () => {
  it(`Should correctly render App`, () => {
    const AppElement = renderer
      .create(
          <App
            promoInfo={promoInfo}
            moviesNames={moviesNames}
          />)
      .toJSON();

    expect(AppElement).toMatchSnapshot();
  });
});

