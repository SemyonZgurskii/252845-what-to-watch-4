import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app.jsx';
import {promoInfo, moviesNames} from './mock.js';

const onMovieTitleClick = () => {};

ReactDOM.render(
    <App
      promoInfo = {promoInfo}
      moviesNames = {moviesNames}
      onMovieTitleClick={onMovieTitleClick}
    />,
    document.querySelector(`#root`)
);
