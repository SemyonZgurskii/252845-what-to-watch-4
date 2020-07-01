import React from 'react';
import renderer from 'react-test-renderer';
import MoviesList from './movies-list.jsx';
import {testMoviesData} from '../../mocks/testMovies.js';

describe(`Create MoviesList snapshot`, () => {
  it(`Should correctly render MoviesList`, () => {
    const MoviesListElement = renderer.create(
        <MoviesList
          moviesData={testMoviesData}
          onMovieTitleClick={() => {}}
          onCardClick={() => {}}
        />
    ).toJSON();

    expect(MoviesListElement).toMatchSnapshot();
  });
});
