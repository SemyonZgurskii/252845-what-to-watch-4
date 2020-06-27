import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card.jsx';
import {moviesData} from '../../mocks/movies.js';

describe(`Create MovieCard snapshot`, () => {
  it(`MovieCard should correctly render`, () => {
    const MovieCardElement = renderer.create(
        <MovieCard
          movieData = {moviesData[0]}
          onMovieTitleClick = {() => {}}
          onMouseEnter = {() => {}}
        />
    ).toJSON();

    expect(MovieCardElement).toMatchSnapshot();
  });
});
