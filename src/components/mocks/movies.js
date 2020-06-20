import {moviesNames} from '../../mock.js';

const MOVIES_COUNT = 8;

function getPhotoUrl(title) {
  const clearTitle = title.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ``);
  return `img/` +
    clearTitle.toLowerCase()
    .replace(/[` `]/g, `-`)
    + `.jpg`;
}

function getMovieData(movieName) {
  return {
    title: movieName,
    photoUrl: getPhotoUrl(movieName),
  };
}

let moviesData = [];

for (let i = 0; i <= MOVIES_COUNT; i++) {
  const currentMovie = moviesNames[i];
  moviesData.push(getMovieData(currentMovie));
}

export {
  moviesData,
};
