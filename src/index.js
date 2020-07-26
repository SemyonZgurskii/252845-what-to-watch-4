import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app.jsx';
import {moviesData, promoInfo} from './mocks/movies.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './reducer.js';

const onMovieTitleClick = () => {};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        promoInfo = {promoInfo}
        moviesData = {moviesData}
        onMovieTitleClick = {onMovieTitleClick}
      />
    </Provider>,
    document.querySelector(`#root`)
);
