import {Genre} from '../constants.js';

const MOVIES_COUNT = 16;
const MIN_DATE = 1990;
const DATE_RANGE = 30;
const MAX_SCORE = 10;
const MAX_RATING_COUNT = 300;

const promoInfo = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: 2014
};

const moviesNames = [`Fantastic Beasts: The Crimes of Grindelwald`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`, `We need to talk about Kevin`, `Revenant`, `Johnny English`, `Shutter Island`, `Pulp Fiction`, `No Country for Old Men`, `Snatch`, `Moonrise Kingdom`, `Seven Years in Tibet`, `Midnight Special`, `War of the Worlds`, `Dardjeeling Limited`, `Orlando`, `Mindhunter`, `Midnight Special`];

const Format = {
  CARD: `card`,
  SMALL_POSTER: `small poster`,
  BIG_POSTER: `big poster`,
};

const levels = [`Bad`, `Normal`, `Good`, `Very good`, `Awesome`];
const genres = Object.values(Genre).filter((genre) => genre !== Genre.ALL);

const sourceText = `Это жёсткий город - своя шкала контрастов.
Купеческая Мекка, государство в государстве.
Тот самый город, что не проводит гей-парады.
Тот самый город - профицит которого ярды.

Плитка сыпется с небес, тебе нравится.
Эти штрафы и от них не избавиться.
Патриаршие и пруды, центр "варится".
Рейды на Садовом. Ночь. Снова пятница.

В пятом поколении коренной москвич.
Не хожу на митинги и не втираю дичь.
Помню этот город пятнадцать лет назад -
Отвечаю, он щас мировой стандарт.

Квинтэссенция интеллигентов и джамшутов.
Здесь комерсы выходят в окна без парашюта.
Пешком с Арбата и до площади Гагарина -
Там хлопну бургер за здоровье Собянина.`;

const reviews = [
  {
    text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    author: `Kate Muir`,
    date: `2016-12-24`,
    rating: 8.9,
  }, {
    text: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
    author: `Bill Goodykoontz`,
    date: `2015-11-18`,
    rating: 8.0,
  }, {
    text: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
    author: `Amanda Greever`,
    date: `2015-11-18`,
    rating: 8.0,
  }, {
    text: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
    author: `Matthew Lickona`,
    date: `2016-12-20`,
    rating: 7.2,
  }, {
    text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
    author: `Paula Fleri-Soler`,
    date: `2016-12-20`,
    rating: 7.6,
  }
];

function getRandomArraysItem(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

function createPhotoUrl(title, format) {
  const clearTitle = title.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ``);
  const formatedTitle = clearTitle.toLowerCase().replace(/[` `]/g, `-`);
  let photoUrl;

  switch (format) {
    case (Format.CARD):
      photoUrl = `img/${formatedTitle}.jpg`;
      break;
    case (Format.BIG_POSTER):
      photoUrl = `img/bg-${formatedTitle}.jpg`;
      break;
    case (Format.SMALL_POSTER):
      photoUrl = `img/${formatedTitle}-poster.jpg`;
      break;
  }

  return photoUrl;
}

function generateReleaseDate() {
  return Math.floor(MIN_DATE + Math.random() * DATE_RANGE);
}

function generateScore() {
  return (Math.floor(Math.random() * MAX_SCORE * 10)) / 10;
}

function generateRunTime() {
  const hours = Math.floor(Math.random() * 5) + `h`;
  const minutes = Math.floor(Math.random() * 60) + `m`;

  return `${hours} ${minutes}`;
}

function createMovieData(movieName) {
  return {
    title: movieName,
    genre: getRandomArraysItem(genres),
    releaseDate: generateReleaseDate(),
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    runTime: generateRunTime(),
    images: {
      card: createPhotoUrl(movieName, Format.CARD),
      smallPoster: createPhotoUrl(movieName, Format.SMALL_POSTER),
      bigPoster: createPhotoUrl(movieName, Format.BIG_POSTER),
    },
    rating: {
      score: generateScore(),
      level: getRandomArraysItem(levels),
      count: Math.floor(Math.random() * MAX_RATING_COUNT),
    },
    info: {
      description: sourceText,
      director: `Timati`,
      stars: [`Timati`, `Goof`, `Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`],
    },
    reviews,
  };
}

let moviesData = [];

for (let i = 0; i < MOVIES_COUNT; i++) {
  const currentMovie = moviesNames[i];
  moviesData.push(createMovieData(currentMovie));
}

export {
  moviesData,
  promoInfo,
};
