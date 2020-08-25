import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card.jsx';
import {testMoviesData} from '../../mocks/testMovies.js';

describe(`Create MovieCard snapshot`, () => {
  it(`MovieCard should correctly render`, () => {
    const MovieCardElement = renderer.create(
        <MovieCard
          isPlaying={true}
          onCardClick={() => {}}
          movieData = {testMoviesData[0]}
          onMouseEnter = {() => {}}
          onMouseOut={() => {}}
        />
    ).toJSON();

    expect(MovieCardElement).toMatchSnapshot();
  });
});
