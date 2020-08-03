import {reducer, ActionCreator} from './reducer.js';
import {Genre} from './constants.js';
import {testMoviesData} from './mocks/testMovies.js';

const testInitialState = {
  activeGenre: Genre.ALL,
  moviesData: testMoviesData,
  filteredMoviesData: testMoviesData,
};

describe(`Test reducer`, () => {
  it(`should return passed inital state`, () => {
    expect(reducer(testInitialState, {})).toEqual(testInitialState);
  });

  it(`should return correctly filtered data`, () => {
    const expectedData = testMoviesData
      .filter(({genre}) => genre === Genre.COMEDIES);

    expect(reducer(testInitialState, ActionCreator.changeFilter(Genre.COMEDIES)).filteredMoviesData).toEqual(expectedData);
  });

  it(`If passed genre value is "All",it should return current state`, () => {
    expect(reducer(testInitialState, ActionCreator.changeFilter(Genre.ALL))).toEqual(testInitialState);
  });
});
