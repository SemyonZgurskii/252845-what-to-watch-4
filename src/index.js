import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app.jsx';
import {promoInfo} from './mock.js';
import {moviesData} from './mocks/movies.js';

const onMovieTitleClick = () => {};

ReactDOM.render(
    <App
      promoInfo = {promoInfo}
      moviesData = {moviesData}
      onMovieTitleClick = {onMovieTitleClick}
    />,
    document.querySelector(`#root`)
);
