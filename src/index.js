import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app.jsx';
import {createAPI} from './api.js';
import {promoInfo} from './mocks/movies.js';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import {reducer, ActionCreator, Operation, AuthorizationStatus} from './reducer.js';
import thunkMiddleware from 'redux-thunk';

const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunkMiddleware.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(Operation.loadMovies());

ReactDOM.render(
    <Provider store={store}>
      <App
        promoInfo = {promoInfo}
      />
    </Provider>,
    document.querySelector(`#root`)
);
