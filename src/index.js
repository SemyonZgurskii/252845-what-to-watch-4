import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app.jsx';

const promoInfo = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: `2014`
};

ReactDOM.render(
    <App {...promoInfo} />,
    document.querySelector(`#root`)
);
