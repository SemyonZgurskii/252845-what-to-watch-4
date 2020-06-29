import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card.jsx';
import {testMoviesData} from '../../mocks/testMovies.js';

describe(`Create MovieCard snapshot`, () => {
  it(`MovieCard should correctly render`, () => {
    const MovieCardElement = renderer.create(
        <MovieCard
          handleCardClick={() => {}}
          movieData = {testMoviesData[0]}
          onMovieTitleClick = {() => {}}
          onMouseEnter = {() => {}}
        />
    ).toJSON();

    expect(MovieCardElement).toMatchSnapshot();
  });
});
