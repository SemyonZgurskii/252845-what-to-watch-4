import React from 'react';
import renderer from 'react-test-renderer';
import MoviesList from './movies-list.jsx';
import {moviesData} from '../../mocks/movies.js';

describe(`Create MoviesList snapshot`, () => {
  it(`Should correctly render MoviesList`, () => {
    const MoviesListElement = renderer.create(
        <MoviesList
          moviesData={moviesData}
          onMovieTitleClick={() => {}}
          handleCardClick={() => {}}
        />
    ).toJSON();

    expect(MoviesListElement).toMatchSnapshot();
  });
});
