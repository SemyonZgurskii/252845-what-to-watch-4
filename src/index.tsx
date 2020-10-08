import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './components/app/app.tsx';
import {createAPI} from './api.js';
import {promoInfo} from './mocks/movies.js';
import {createStore, applyMiddleware, compose} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
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
    composeWithDevTools(
        applyMiddleware(thunkMiddleware.withExtraArgument(api))
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
