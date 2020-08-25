import React from 'react';
import renderer from "react-test-renderer";
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './app.jsx';
import {Genre} from '../../constants.js';

import {promoInfo} from '../../mocks/movies.js';
import {testMoviesData} from '../../mocks/testMovies.js';

const mockStore = configureStore([]);


describe(`Create App snapshot`, () => {
  it(`Should correctly render App`, () => {
    const store = mockStore({
      activeGenre: Genre.ALL,
      moviesData: testMoviesData,
      filteredMoviesData: testMoviesData,
    });

    const AppElement = renderer
      .create(
          <Provider store={store}>
            <App
              promoInfo={promoInfo}
              moviesData={testMoviesData}
            />
          </Provider>)
      .toJSON();

    expect(AppElement).toMatchSnapshot();
  });
});

