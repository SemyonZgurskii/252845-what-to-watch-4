import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from './movie-card.jsx';
import {moviesData} from '../../mocks/movies.js';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Test MovieCard component's functionality`, () => {
  it(`data should be correct`, () => {
    const onMovieTitleClick = jest.fn();

    const MovieCardElement = mount(
        <MovieCard
          isPlaying={true}
          onMovieTitleClick={onMovieTitleClick}
          onCardClick={() => {}}
          movieData={moviesData[1]}
          onMouseEnter={() => {}}
          onMouseOut={() => {}}
        />
    );

    const imageSrc = MovieCardElement.find(`video`).prop(`poster`);
    const title = MovieCardElement.find(`a.small-movie-card__link`).text();

    expect(title).toEqual(moviesData[1].title);
    expect(imageSrc).toEqual(moviesData[1].images.card);
  });
});
