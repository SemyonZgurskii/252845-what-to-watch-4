import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from './movie-card.jsx';
import {moviesData} from '../../mocks/movies.js';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Test MovieCard component's functionality`, () => {
  it(`data should be correct`, () => {
    const onMovieTitleClick = jest.fn();

    const MovieCardElement = shallow(
        <MovieCard
          onMovieTitleClick={onMovieTitleClick}
          handleCardClick={() => {}}
          movieData={moviesData[1]}
          onMouseEnter={() => {}}
        />
    );

    const imageSrc = MovieCardElement.find(`img`).prop(`src`);
    const title = MovieCardElement.find(`a.small-movie-card__link`).text();

    expect(title).toEqual(moviesData[1].title);
    expect(imageSrc).toEqual(moviesData[1].images.card);
  });
});
