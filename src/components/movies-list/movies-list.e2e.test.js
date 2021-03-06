import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {moviesData} from '../../mocks/movies.js';

import MoviesList from './movies-list.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`Test MoviesList component's functionality`, () => {
  it(`onMouseEnter function should return correct value`, () => {
    const MoviesListElement = mount(
        <MoviesList
          onCardClick={() => {}}
          moviesData={moviesData}
        />
    );

    MoviesListElement.find(`article.small-movie-card`).at(0).simulate(`mouseEnter`);

    setTimeout(
        () => {
          expect(MoviesListElement.state().currentMovie).toMatchObject(moviesData[0]);
        },
        1000
    );
  });
});
