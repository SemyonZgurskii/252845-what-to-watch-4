import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

const promoInfo = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: 2014
};

const moviesNames = [`Fantastic Beasts: The Crimes of Grindelwald`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`, `We need to talk about Kevin`, `We need to talk about Kevin`, `Revenant`, `Johnny English`, `Shutter Island`, `Pulp Fiction`, `No Country for Old Men`, `Snatch`, `Moonrise Kingdom`, `Seven Years in Tibet`, `Midnight Special`, `War of the Worlds`, `Dardjeeling Limited`, `Orlando`, `Mindhunter`, `Midnight Special`];

describe(`Create Main snapshot`, () => {
  it(`Should correctly render Main`, () => {
    const MainElement = renderer
      .create(
          <Main
            promoInfo={promoInfo}
            moviesNames={moviesNames}
          />
      )
      .toJSON();

    expect(MainElement).toMatchSnapshot();
  });
});
