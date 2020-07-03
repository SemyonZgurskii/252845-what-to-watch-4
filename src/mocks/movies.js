const MOVIES_COUNT = 8;
const MIN_DATE = 1990;
const DATE_RANGE = 30;
const MAX_SCORE = 10;
const MAX_RATING_COUNT = 300;

const promoInfo = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: 2014
};

const moviesNames = [`The Grand Budapest Hotel`, `Fantastic Beasts: The Crimes of Grindelwald`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`, `We need to talk about Kevin`, `Revenant`, `Johnny English`, `Shutter Island`, `Pulp Fiction`, `No Country for Old Men`, `Snatch`, `Moonrise Kingdom`, `Seven Years in Tibet`, `Midnight Special`, `War of the Worlds`, `Dardjeeling Limited`, `Orlando`, `Mindhunter`, `Midnight Special`];


const Format = {
  CARD: `card`,
  SMALL_POSTER: `small poster`,
  BIG_POSTER: `big poster`,
};

const levels = [`Bad`, `Normal`, `Good`, `Very good`, `Awesome`];
const genres = [`Drama`, `Comedy`, `Horror`, `Fighter`];

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

function createMovieData(movieName) {
  return {
    title: movieName,
    images: {
      card: createPhotoUrl(movieName, Format.CARD),
      smallPoster: createPhotoUrl(movieName, Format.SMALL_POSTER),
      bigPoster: createPhotoUrl(movieName, Format.BIG_POSTER),
    },
    genre: getRandomArraysItem(genres),
    releaseDate: generateReleaseDate(),
    rating: {
      score: generateScore(),
      level: getRandomArraysItem(levels),
      count: Math.floor(Math.random() * MAX_RATING_COUNT),
    },
    info: {
      description: sourceText,
      director: `Timati`,
      stars: [`Timati`, `Goof`],
    },
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
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
