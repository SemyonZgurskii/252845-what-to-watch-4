import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';

import {promoInfo} from '../../mock.js';
import {moviesData} from '../../mocks/movies.js';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Test Main component's functionality`, () => {
  it(`Movie title handler should be done`, () => {
    const onMovieTitleClick = jest.fn();

    const MainElement = mount(
        <Main
          promoInfo={promoInfo}
          moviesData={moviesData}
          onMovieTitleClick={onMovieTitleClick}
        />
    );

    const moviesElements = MainElement.find(`a.small-movie-card__link`);

    moviesElements.forEach((movieElement) => {
      movieElement.simulate(`click`);
    });

    expect(onMovieTitleClick.mock.calls.length).toBe(moviesData.length);
  });
});
