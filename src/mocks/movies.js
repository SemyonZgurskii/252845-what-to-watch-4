import {Genre} from '../constants.ts';

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
  reviews,
  getRandomArraysItem,
  levels,
};

// const movies = [
//   {
//     background_color: "#E1DAD7",
//     background_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/background/legend.jpg",
//     description: "Identical twin gangsters Ronald and Reginald Kray terrorize London during the 1960s.",
//     director: "Brian Helgeland",
//     genre: "Crime",
//     id: 1,
//     is_favorite: false,
//     name: "Legend",
//     poster_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Legend.jpg",
//     preview_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/legend.jpg",
//     preview_video_link: "https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4",
//     rating: 3.5,
//     released: 2015,
//     run_time: 132,
//     scores_count: 138487,
//     starring: ["Tom Hardy", "Emily Browning", "Taron Egerton"],
//     video_link: "http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4",
//   }, {
//     background_color: "#D6CDAF",
//     background_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/background/Aviator.jpg",
//     description: "A biopic depicting the early years of legendary Director and aviator Howard Hughes' career from the late 1920s to ,the   mid 1940s.",
//     director: "Martin Scorsese",
//     genre: "Drama",
//     id: 2,
//     is_favorite: false,
//     name: "Aviator",
//     poster_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Aviator.jpg",
//     preview_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/aviator.jpg",
//     preview_video_link: "https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4",
//     rating: 9.8,
//     released: 2014,
//     run_time: 170,
//     scores_count: 307174,
//     starring: ["Leonardo DiCaprio", "Cate Blanchett", "Kate Beckinsale"],
//     video_link: "http://media.xiph.org/mango/tears_of_steel_1080p.webm",
//   }, {
//   background_color: "#977461",
//   background_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/background/Shutter_Island.jpg",
//   description: "In 1954, a U.S. Marshal investigates the disappearance of a murderer, who escaped from a hospital for the ,criminally insane.",
//   director: "Martin Scorsese",
//   genre: "Thriller",
//   id: 3,
//   is_favorite: false,
//   name: "Shutter Island",
//   poster_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Shutter_Island.jpg",
//   preview_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/shutter-island.jpg",
//   preview_video_link: "https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/,Big_Buck_Bunny_Trailer_400p.ogv.360p.webm",
//   rating: 4.1,
//   released: 2010,
//   run_time: 138,
//   scores_count: 1002557,
//   starring: ["Leonardo DiCaprio", "Emily Mortimer", "Mark Ruffalo"],
//   video_link: "http://media.xiph.org/mango/tears_of_steel_1080p.webm",
//   }, {
//   background_color: "#73B39A",
//   background_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/background/bronson.jpg",
//   description: "A young man who was sentenced to seven years in prison for robbing a post office ends up spending three decades in ,solitary confinement. During this time, his own personality is supplanted by his alter-ego, Charles Bronson.",
//   director: "Nicolas Winding Refn",
//   genre: "Action",
//   id: 4,
//   is_favorite: false,
//   name: "Bronson",
//   poster_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/bronson.jpg",
//   preview_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/bronson.jpg",
//   preview_video_link: "https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/,Big_Buck_Bunny_Trailer_400p.ogv.360p.webm",
//   rating: 3.6,
//   released: 2008,
//   run_time: 92,
//   scores_count: 109661,
//   starring: ["Tom Hardy", "Kelly Adams", "Luing Andrews"],
//   video_link: "http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4",
//   }, {
//   background_color: "#E1DFDE",
//   background_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/background/We_need_to_talk_about_Kevin.jpg",
//   description: "Kevin's mother struggles to love her strange child, despite the increasingly dangerous things he says and does as ,he grows up. But Kevin is just getting started, and his final act will be beyond anything anyone imagined.",
//   director: "Lynne Ramsay",
//   genre: "Drama",
//   id: 5,
//   is_favorite: false,
//   name: "We need to talk about Kevin",
//   poster_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/We_need_to_talk_about_Kevin.jpg",
//   preview_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/we-need-to-talk-about-kevin.jpg",
//   preview_video_link: "https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4",
//   rating: 3.8,
//   released: 2011,
//   run_time: 112,
//   scores_count: 123240,
//   starring: ["Tilda Swinton", "John C. Reilly", "Ezra Miller"],
//   video_link: "http://media.xiph.org/mango/tears_of_steel_1080p.webm",
//   }, {
//   background_color: "#D8D3BD",
//   background_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/background/Orlando.jpg",
//   description: "Young nobleman Orlando is commanded by Queen Elizabeth I to stay forever young. Miraculously, he does just that. ,The film follows him as he moves through several centuries of British history, experiencing a variety of lives and relationships ,along the way, and even changing sex.",
//   director: "Sally Potter",
//   genre: "Drama",
//   id: 6,
//   is_favorite: false,
//   name: "Orlando",
//   poster_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Orlando.jpg",
//   preview_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/orlando.jpg",
//   preview_video_link: "https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/,Big_Buck_Bunny_Trailer_400p.ogv.360p.webm",
//   rating: 2.6,
//   released: 1992,
//   run_time: 94,
//   scores_count: 12292,
//   starring: ["Tilda Swinton", "Billy Zane", "Quentin Crisp"],
//   video_link: "http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4",
//   }, {
//   background_color: "#B9B27E",
//   background_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/background/matrix.jpg",
//   description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war ,against its controllers.",
//   director: "Wachowski Brothers",
//   genre: "Action",
//   id: 7,
//   is_favorite: false,
//   name: "Matrix",
//   poster_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/matrix.jpg",
//   preview_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/matrix.jpg",
//   preview_video_link: "https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/,Big_Buck_Bunny_Trailer_400p.ogv.360p.webm",
//   rating: 4.4,
//   released: 1999,
//   run_time: 136,
//   scores_count: 1503092,
//   starring: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
//   video_link: "http://media.xiph.org/mango/tears_of_steel_1080p.webm",
//   }, {
//     background_color: "#9B7E61",
//     background_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/background/War_of_the_Worlds.jpg",
//     description: "As Earth is invaded by alien tripod fighting machines, one family fights for survival.",
//     director: "Steven Spielberg",
//     genre: "Adventure",
//     id: 8,
//     is_favorite: false,
//     name: "War of the Worlds",
//     poster_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/War_of_the_Worlds.jpg",
//     preview_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/war-of-the-worlds.jpg",
//     preview_video_link: "https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/, Big_Buck_Bunny_Trailer_400p.ogv.360p.webm",
//     rating: 9.3,
//     released: 2005,
//     run_time: 116,
//     scores_count: 386834,
//     starring: ["Tom Cruise", "Dakota Fanning", "Tim Robbins"],
//     video_link: "http://media.xiph.org/mango/tears_of_steel_1080p.webm",
//   }, {
//     background_color: "#828585",
//     background_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/background/Midnight_Special.jpg",
//     description: "A father and son go on the run, pursued by the government and a cult drawn to the child's special powers.",
//     director: "Jeff Nichols",
//     genre: "Action",
//     id: 9,
//     is_favorite: false,
//     name: "Midnight Special",
//     poster_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Midnight_Special.jpg",
//     preview_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/midnight-special.jpg",
//     preview_video_link: "https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/  ,Big_Buck_Bunny_Trailer_400p.ogv.360p.webm",
//     rating: 3.3,
//     released: 2016,
//     run_time: 112,
//     scores_count: 67815,
//     starring: ["Michael Shannon", "Joel Edgerton", "Kirsten Dunst "],
//     video_link: "http://media.xiph.org/mango/tears_of_steel_1080p.webm",
//   }, {
//     background_color: "#929FA5",
//     background_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/background/Bohemian_Rhapsody.jpg",
//     description: "Bohemian Rhapsody is a foot-stomping celebration of Queen, their music and their extraordinary lead singer Freddie ,Mercury. Freddie defied stereotypes and shattered convention to become one of the most beloved entertainers on the planet. The ,film traces the meteoric rise of the band through their iconic songs and revolutionary sound. They reach unparalleled success, ,but in an unexpected turn Freddie, surrounded by darker influences, shuns Queen in pursuit of his solo career. Having suffered ,greatly without the collaboration of Queen, Freddie manages to reunite with his bandmates just in time for Live Aid. While ,bravely facing a recent AIDS diagnosis, Freddie leads the band in one of the greatest performances in the history of rock music. ,  Queen cements a legacy that continues to inspire outsiders, dreamers and music lovers to this day.",
//     director: "Bryan Singer",
//     genre: "Drama",
//     id: 10,
//     is_favorite: false,
//     name: "Bohemian Rhapsody",
//     poster_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Bohemian_Rhapsody.jpg",
//     preview_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/bohemian_rhapsody.jpg",
//     preview_video_link: "https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/, Big_Buck_Bunny_Trailer_400p.ogv.360p.webm",
//     rating: 6.1,
//     released: 2018,
//     run_time: 134,
//     scores_count: 338903,
//     starring: ["Rami Malek", "Lucy Boynton", "Gwilym Lee"],
//     video_link: "http://media.xiph.org/mango/tears_of_steel_1080p.webm",
//   }, {
//     background_color: "#CBAC79",
//     background_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/background/ones_upon_a_time_in_america.jpg",
//     description: "A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where ,he once again must confront the ghosts and regrets of his old life.",
//     director: "Sergio Leone",
//     genre: "Crime",
//     id: 11,
//     is_favorite: false,
//     name: "Once Upon a Time in America",
//     poster_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Once_Upon_a_Time_in_America.jpg",
//     preview_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/Once_Upon_a_Time_in_America.jpg",
//     preview_video_link: "https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4",
//     rating: 9.9,
//     released: 1984,
//     run_time: 229,
//     scores_count: 276395,
//     starring: ["Robert De Niro", "James Woods", "Elizabeth McGovern"],
//     video_link: "http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4",
//   }, {
//     background_color: "#A6B7AC",
//     background_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/background/gangs_of_new_york.jpg",
//     description: "In 1862, Amsterdam Vallon returns to the Five Points area of New York City seeking revenge against Bill the , Butcher, his father's killer.",
//     director: "Martin Scorsese",
//     genre: "Crime",
//     id: 12,
//     is_favorite: false,
//     name: "Gangs of new york",
//     poster_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Gangs_of_New_York_Poster.jpg",
//     preview_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/gangs_of_new_york.jpg",
//     preview_video_link: "https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/, Big_Buck_Bunny_Trailer_400p.ogv.360p.webm",
//     rating: 8.8,
//     released: 2002,
//     run_time: 167,
//     scores_count: 370881,
//     starring: ["Leonardo DiCaprio", "Cameron Diaz", "Daniel Day-Lewis"],
//     video_link: "http://media.xiph.org/mango/tears_of_steel_1080p.webm",
//   }, {
//     background_color: "#A39E81",
//     background_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/background/What-We-Do-in-the-Shadows.jpg",
//     description: "A look into the daily (or rather, nightly) lives of three vampires who've lived together for over 100 years, in , Staten Island.",
//     director: "Jemaine Clement",
//     genre: "Comedy",
//     id: 13,
//     is_favorite: false,
//     name: "What We Do in the Shadows",
//     poster_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/What-We-Do-in-the-Shadows.jpg",
//     preview_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/what-we-do-in-the-shadows.jpg",
//     preview_video_link: "https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4",
//     rating: 7.2,
//     released: 2019,
//     run_time: 30,
//     scores_count: 6173,
//     starring: ["Kayvan Novak", "Matt Berry", "Natasia Demetriou"],
//     video_link: "http://media.xiph.org/mango/tears_of_steel_1080p.webm",
//   }, {
//     background_color: "#C4C0C0",
//     background_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/background/A_Star_is_Born.jpg",
//     description: "A musician helps a young singer find fame as age and alcoholism send his own career into a downward spiral.",
//     director: "Bradley Cooper",
//     genre: "Drama",
//     id: 14,
//     is_favorite: false,
//     name: "A Star Is Born",
//     poster_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/A_Star_Is_Born.jpg",
//     preview_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/A_Star_Is_Born.jpg",
//     preview_video_link: "https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/, Big_Buck_Bunny_Trailer_400p.ogv.360p.webm",
//     rating: 3.9,
//     released: 2018,
//     run_time: 136,
//     scores_count: 244484,
//     starring: ["Lady Gaga", "Bradley Cooper", "Sam Elliott"],
//     video_link: "http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4",
//   }, {
//     background_color: "#F1E9CE",
//     background_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/background/Macbeth.jpg",
//     description: "Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of ,  Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.",
//     director: "Justin Kurzel",
//     genre: "Drama",
//     id: 15,
//     is_favorite: false,
//     name: "Macbeth",
//     poster_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Macbeth.jpg",
//     preview_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/macbeth.jpg",
//     preview_video_link: "https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/, Big_Buck_Bunny_Trailer_400p.ogv.360p.webm",
//     rating: 3.3,
//     released: 2015,
//     run_time: 113,
//     scores_count: 48798,
//     starring: ["Michael Fassbender", "Marion Cotillard", "Jack Madigan"],
//     video_link: "http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4",
//   }, {
//     background_color: "#92918B",
//     background_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/background/Revenant.jpg",
//     description: "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left , for dead by members of his own hunting team.",
//     director: "Alejandro G. Iñárritu",
//     genre: "Action",
//     id: 16,
//     is_favorite: false,
//     name: "The Revenant",
//     poster_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Revenant.jpg",
//     preview_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/revenant.jpg",
//     preview_video_link: "https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/, Big_Buck_Bunny_Trailer_400p.ogv.360p.webm",
//     rating: 4,
//     released: 2015,
//     run_time: 156,
//     scores_count: 618498,
//     starring: ["Leonardo DiCaprio", "Tom Hardy", "Will Poulter"],
//     video_link: "http://media.xiph.org/mango/tears_of_steel_1080p.webm",
//   }, {
//     background_color: "#795433",
//     background_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/background/Pulp_Fiction.jpg",
//     description: "The lives of two mob hitmen, a boxer, a gangster & his wife, and a pair of diner bandits intertwine in four tales , of violence and redemption.",
//     director: "Quentin Tarantino",
//     genre: "Crime",
//     id: 17,
//     is_favorite: false,
//     name: "Pulp Fiction",
//     poster_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Pulp_Fiction.jpg",
//     preview_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/pulp-fiction.jpg",
//     preview_video_link: "https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4",
//     rating: 1.5,
//     released: 1994,
//     run_time: 153,
//     scores_count: 1635992,
//     starring: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
//     video_link: "http://media.xiph.org/mango/tears_of_steel_1080p.webm",
//   }, {
//     background_color: "#AD9F8B",
//     background_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/background/Dardjeeling_Limited.jpg",
//     description: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each ,  other.",
//     director: "Wes Anderson",
//     genre: "Adventure",
//     id: 18,
//     is_favorite: false,
//     name: "Dardjeeling Limited",
//     poster_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Dardjeeling_Limited.jpg",
//     preview_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/dardjeeling_limited.jpg",
//     preview_video_link: "https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4",
//     rating: 3.6,
//     released: 2007,
//     run_time: 91,
//     scores_count: 165106,
//     starring: ["Owen Wilson", "Adrien Brody", "Jason Schwartzman"],
//     video_link: "http://media.xiph.org/mango/tears_of_steel_1080p.webm",
//   }, {
//     background_color: "#FDFDFC",
//     background_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/background/Snatch.jpg",
//     description: "Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly , Jewish jewelers fight to track down a priceless stolen diamond.",
//     director: "Guy Ritchie",
//     genre: "Comedy",
//     id: 19,
//     is_favorite: false,
//     name: "Snatch",
//     poster_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Snatch.jpg",
//     preview_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/snatch.jpg",
//     preview_video_link: "https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/, Big_Buck_Bunny_Trailer_400p.ogv.360p.webm",
//     rating: 0.2,
//     released: 2000,
//     run_time: 104,
//     scores_count: 716577,
//     starring: ["Jason Statham", "Brad Pitt", "Benicio Del Toro"],
//     video_link: "http://media.xiph.org/mango/tears_of_steel_1080p.webm",
//   }, {
//     background_color: "#D8E3E5",
//     background_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/background/Moonrise_Kingdom.jpg",
//     description: "A pair of young lovers flee their New England town, which causes a local search party to fan out to find them.",
//     director: "Wes Anderson",
//     genre: "Adventure",
//     id: 20,
//     is_favorite: false,
//     name: "Moonrise Kingdom",
//     poster_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Moonrise_Kingdom.jpg",
//     preview_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/moonrise-kingdom.jpg",
//     preview_video_link: "https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4",
//     rating: 7.9,
//     released: 2012,
//     run_time: 94,
//     scores_count: 291183,
//     starring: ["Jared Gilman", "Kara Hayward", "Bruce Willis"],
//     video_link: "http://media.xiph.org/mango/tears_of_steel_1080p.webm",
//   }, {
//     background_color: "#F0DBA2",
//     background_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/background/Johnny_English.jpg",
//     description: "After a sudden attack on the MI5, Johnny English, Britain's most confident yet unintelligent spy, becomes Britain's ,only spy.",
//     director: "Peter Howitt",
//     genre: "Comedy",
//     id: 21,
//     is_favorite: false,
//     name: "Johnny English",
//     poster_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Johnny_English.jpg",
//     preview_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/johnny-english.jpg",
//     preview_video_link: "https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4",
//     rating: 10,
//     released: 2003,
//     run_time: 88,
//     scores_count: 136843,
//     starring: ["Rowan Atkinson", "John Malkovich", "Natalie Imbruglia"],
//     video_link: "http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4",
//   }, {
//     background_color: "#B6A99F",
//     background_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/background/Fantastic_Beasts.jpg",
//     description: "In an effort to thwart Grindelwald's plans of raising pure-blood wizards to rule over all non-magical beings, Albus Dumbledore enlists his former student Newt Scamander, who agrees to help, though he's unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among the truest friends and family, in an increasingly divided wizarding world.",
//     director: "David Yates",
//     genre: "Fantasy",
//     id: 22,
//     is_favorite: false,
//     name: "Fantastic Beasts: The Crimes of Grindelwald",
//     poster_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Fantastic_Beasts.jpg",
//     preview_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/fantastic-beasts-the-crimes-of-grindelwald.jpg",
//     preview_video_link: "https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/  ,Big_Buck_Bunny_Trailer_400p.ogv.360p.webm",
//     rating: 3.4,
//     released: 2018,
//     run_time: 134,
//     scores_count: 160757,
//     starring: ["Eddie Redmayne", "Katherine Waterston", "Dan Fogler"],
//     video_link: "http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4",
//   }, {
//     background_color: "#EBC996",
//     background_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/background/beach.jpg",
//     description: "Vicenarian Richard travels to Thailand and finds himself in possession of a strange map. Rumours state that it  leads to a solitary beach paradise, a tropical bliss. Excited and intrigued, he sets out to find it.",
//     director: "Danny Boyle",
//     genre: "Adventure",
//     id: 23,
//     is_favorite: false,
//     name: "Beach",
//     poster_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/beach.jpg",
//     preview_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/beach.jpg",
//     preview_video_link: "https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4",
//     rating: 3.3,
//     released: 2000,
//     run_time: 119,
//     scores_count: 207824,
//     starring: ["Leonardo DiCaprio", "Daniel York", "Patcharawan Patarakijjanon"],
//     video_link: "http://media.xiph.org/mango/tears_of_steel_1080p.webm",
//   }, {
//     background_color: "#C6CADF",
//     background_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/background/Seven_Years_in_Tibet.jpg",
//     description: "True story of Heinrich Harrer, an Austrian mountain climber who became friends with the Dalai Lama at the time of   China's takeover of Tibet.",
//     director: "Jean-Jacques Annaud",
//     genre: "Adventure",
//     id: 24,
//     is_favorite: false,
//     name: "Seven Years in Tibet",
//     poster_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Seven_Years_in_Tibet.jpg",
//     preview_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/seven-years-in-tibet.jpg",
//     preview_video_link: "https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/  ,Big_Buck_Bunny_Trailer_400p.ogv.360p.webm",
//     rating: 3.6,
//     released: 1997,
//     run_time: 136,
//     scores_count: 112612,
//     starring: ["Brad Pitt", "David Thewlis", "BD Wong"],
//     video_link: "http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4",
//   }, {
//     background_color: "#BDAD8F",
//     background_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/background/No_Country_for_Old_Men.jpg",
//     description: "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in  cash near the Rio Grande.",
//     director: "Ethan Coen",
//     genre: "Crime",
//     id: 25,
//     is_favorite: false,
//     name: "No Country for Old Men",
//     poster_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/No_Country_for_Old_Men.jpg",
//     preview_image: "https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/no-country-for-old-men.jpg",
//     preview_video_link: "https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4",
//     rating: 4.1,
//     released: 2007,
//     run_time: 122,
//     scores_count: 764976,
//     starring: ["Tommy Lee Jones", "Javier Bardem", "Josh Brolin"],
//     video_link: "http://media.xiph.org/mango/tears_of_steel_1080p.webm",
//   }
// ]
