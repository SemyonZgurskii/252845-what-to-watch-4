import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {moviesData} from '../../mocks/movies.js';

import MoviesList from './movies-list.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`Test MoviesList component's functionality`, () => {
  it(`onMouseEnter function should return correct value`, () => {
    const onMovieTitleClick = jest.fn();

    const MoviesListElement = shallow(
        <MoviesList
          onMovieTitleClick={onMovieTitleClick}
          moviesData={moviesData}
        />
    );

    const testMovieCard = MoviesListElement.find(`article`).at(0);
    testMovieCard.simulate(`mouseEnter`);

    expect(MoviesListElement.state.currentMovie).toMatchObject(moviesData[0]);
  });
});
