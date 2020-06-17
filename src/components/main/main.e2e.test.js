import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';

const promoInfo = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: 2014
};

const moviesNames = [`Fantastic Beasts: The Crimes of Grindelwald`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`, `We need to talk about Kevin`, `We need to talk about Kevin`, `Revenant`, `Johnny English`, `Shutter Island`, `Pulp Fiction`, `No Country for Old Men`, `Snatch`, `Moonrise Kingdom`, `Seven Years in Tibet`, `Midnight Special`, `War of the Worlds`, `Dardjeeling Limited`, `Orlando`, `Mindhunter`, `Midnight Special`];

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Test Main component's functionality`, () => {
  it(`Movie title handler should be done`, () => {
    const onMovieTitleClick = jest.fn();

    const MainElement = shallow(
        <Main
          promoInfo={promoInfo}
          moviesNames={moviesNames}
          onMovieTitleClick={onMovieTitleClick}
        />
    );

    const moviesElements = MainElement.find(`a.small-movie-card__link`);

    moviesElements.forEach((movieElement) => {
      movieElement.simulate(`click`);
    });

    expect(onMovieTitleClick.mock.calls.length).toBe(moviesNames.length);
  });
});
