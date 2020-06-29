import React from 'react';
import renderer from 'react-test-renderer';
import MovieInfo from './movie-info.jsx';
import {moviesData} from '../../mocks/movies.js';

describe(`Create MovieInfo snapshot`, () => {
  it(`Should correctly render MovieInfo`, () => {
    const MovieInfoElement = renderer.create(
        <MovieInfo
          movieData={moviesData[0]}
        />
    ).toJSON();

    expect(MovieInfoElement).toMatchSnapshot();
  });
});
