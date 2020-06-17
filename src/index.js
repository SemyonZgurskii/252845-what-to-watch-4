import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app.jsx';

const promoInfo = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: 2014
};

const moviesNames = [`Fantastic Beasts: The Crimes of Grindelwald`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`, `We need to talk about Kevin`, `We need to talk about Kevin`, `Revenant`, `Johnny English`, `Shutter Island`, `Pulp Fiction`, `No Country for Old Men`, `Snatch`, `Moonrise Kingdom`, `Seven Years in Tibet`, `Midnight Special`, `War of the Worlds`, `Dardjeeling Limited`, `Orlando`, `Mindhunter`, `Midnight Special`];

const onMovieTitleClick = () => {};

ReactDOM.render(
    <App
      promoInfo = {promoInfo}
      moviesNames = {moviesNames}
      onMovieTitleClick={onMovieTitleClick}
    />,
    document.querySelector(`#root`)
);
