import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app.jsx';
import {createAPI} from './api.js';
import {promoInfo} from './mocks/movies.js';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer/reducer.js';
import {Operation as DataOperation} from './reducer/data/data.js';
import {Operation as UserOperation, AuthorizationStatus, ActionCreator} from './reducer/user/user.js';

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

store.dispatch(DataOperation.loadMovies());
store.dispatch(UserOperation.checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App
        promoInfo = {promoInfo}
      />
    </Provider>,
    document.querySelector(`#root`)
);
