import {moviesNames} from '../mock.js';

const MOVIES_COUNT = 8;

const MIN_DATE = 1990;
const DATE_RANGE = 30;
const MAX_SCORE = 10;
const MAX_RATING_COUNT = 300;

const Format = {
  CARD: `card`,
  SMALL_POSTER: `small poster`,
  BIG_POSTER: `big poster`,
};

const levels = [`Bad`, `Normal`, `Good`, `Very good`, `Awesome`];
const genres = [`Drama`, `Comedy`, `Horror`, `Fighter`];

const sourceText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis rhoncus urna neque viverra justo nec ultrices dui. Sed felis eget velit aliquet sagittis id consectetur. Morbi leo urna molestie at elementum eu facilisis. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Viverra maecenas accumsan lacus vel facilisis volutpat est velit. Leo duis ut diam quam. A diam maecenas sed enim ut sem viverra aliquet eget. Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Diam maecenas sed enim ut sem viverra. Aliquet risus feugiat in ante metus dictum at. Egestas maecenas pharetra convallis posuere morbi leo urna. Cras fermentum odio eu feugiat. Nulla porttitor massa id neque aliquam vestibulum. Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis. Egestas pretium aenean pharetra magna ac placerat. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis.`;

function getRandomArraysItem(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

function getPhotoUrl(title, format) {
  const clearTitle = title.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ``);
  const formatedTitle = clearTitle.toLowerCase().replace(/[` `]/g, `-`);
  let photoUrl;

  switch (format) {
    case (Format.CARD):
      photoUrl = `img/` + formatedTitle + `.jpg`;
      break;
    case (Format.BIG_POSTER):
      photoUrl = `img/bg-` + formatedTitle + `.jpg`;
      break;
    case (Format.SMALL_POSTER):
      photoUrl = `img/` + formatedTitle + `-poster.jpg`;
      break;
  }

  return photoUrl;
}

function generateReleaseDate() {
  return Math.floor(MIN_DATE + Math.random() * DATE_RANGE);
}

function generateScore() {
  return Math.floor(Math.random() * MAX_SCORE);
}

function getMovieData(movieName) {
  return {
    title: movieName,
    images: {
      card: getPhotoUrl(movieName, Format.CARD),
      smallPoster: getPhotoUrl(movieName, Format.SMALL_POSTER),
      bigPoster: getPhotoUrl(movieName, Format.BIG_POSTER),
    },
    genre: getRandomArraysItem(genres),
    releaseDate: generateReleaseDate(),
    rating: {
      score: generateScore(),
      level: getRandomArraysItem(levels),
      count: Math.floor(Math.random() * MAX_RATING_COUNT),
    },
    info: sourceText,
  };
}

let moviesData = [];

for (let i = 0; i < MOVIES_COUNT; i++) {
  const currentMovie = moviesNames[i];
  moviesData.push(getMovieData(currentMovie));
}

export {
  moviesData,
};
