import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

import {promoInfo, moviesNames} from '../../mock.js';

const onMovieTitleClick = () => {};

describe(`Create Main snapshot`, () => {
  it(`Should correctly render Main`, () => {
    const MainElement = renderer
      .create(
          <Main
            promoInfo={promoInfo}
            moviesNames={moviesNames}
            onMovieTitleClick={onMovieTitleClick}
          />
      )
      .toJSON();

    expect(MainElement).toMatchSnapshot();
  });
});
