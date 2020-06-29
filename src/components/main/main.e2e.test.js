import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';

import {moviesData, promoInfo} from '../../mocks/movies.js';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Test Main component's functionality`, () => {
  it(`MovieCard title handler should be executed`, () => {
    const onMovieTitleClick = jest.fn();

    const MainElement = mount(
        <Main
          promoInfo={promoInfo}
          moviesData={moviesData}
          onMovieTitleClick={onMovieTitleClick}
          handleCardClick={() => {}}
        />
    );

    const moviesElements = MainElement.find(`a.small-movie-card__link`);

    moviesElements.forEach((movieElement) => {
      movieElement.simulate(`click`);
    });

    expect(onMovieTitleClick.mock.calls.length).toBe(moviesData.length);
  });

  it(`MovieCard and it's title handler should be executed`, () => {
    const handleCardClick = jest.fn();

    const MainElement = mount(
        <Main
          promoInfo={promoInfo}
          moviesData={moviesData}
          onMovieTitleClick={() => {}}
          handleCardClick={handleCardClick}
        />
    );

    const movieCardElement = MainElement.find(`article.small-movie-card`).at(0);
    const movieCardImageElement = movieCardElement.find(`div.small-movie-card__image`);
    const movieCardTitleElement = movieCardElement.find(`a.small-movie-card__link`);

    movieCardImageElement.simulate(`click`);
    movieCardTitleElement.simulate(`click`);

    expect(handleCardClick.mock.calls.length).toBe(2);
  });
});
