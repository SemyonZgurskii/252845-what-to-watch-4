import React from 'react';
import renderer from 'react-test-renderer';
import MovieInfo from './movie-info.jsx';
import {testMoviesData} from '../../mocks/testMovies.js';

describe(`Create MovieInfo snapshot`, () => {
  it(`Should correctly render MovieInfo`, () => {
    const MovieInfoElement = renderer.create(
        <MovieInfo
          movieData={testMoviesData[0]}
          moviesData={testMoviesData}
          onCardClick={() => {}}
        />
    ).toJSON();

    expect(MovieInfoElement).toMatchSnapshot();
  });
});
