const testMoviesData = [
  {
    title: `The Grand Budapest Hotel`,
    images: {
      card: `img/the-grand-budapest-hotel.jpg`,
      smallPoster: `img/the-grand-budapest-hotel-poster.jpg`,
      bigPoster: `img/bg-the-grand-budapest-hotel.jpg`,
    },
    genre: `Fighter`,
    releaseDate: 1994,
    runTime: `1h 23m`,
    rating: {score: 0.6, level: `Very good`, count: 74},
    info: {
      description:
        `Это жёсткий город - своя шкала контрастов.\n` +
        `Купеческая Мекка, государство в государстве.\n` +
        `Тот самый город, что не проводит гей-парады.\n` +
        `Тот самый город - профицит которого ярды.\n` +
        `\n` +
        `Плитка сыпется с небес, тебе нравится.\n` +
        `Эти штрафы и от них не избавиться.\n` +
        `Патриаршие и пруды, центр варится.\n` +
        `Рейды на Садовом. Ночь. Снова пятница.\n` +
        `\n` +
        `В пятом поколении коренной москвич.\n` +
        `Не хожу на митинги и не втираю дичь.\n` +
        `Помню этот город пятнадцать лет назад -\n` +
        `Отвечаю, он щас мировой стандарт.\n` +
        `\n` +
        `Квинтэссенция интеллигентов и джамшутов.\n` +
        `Здесь комерсы выходят в окна без парашюта.\n` +
        `Пешком с Арбата и до площади Гагарина -\n` +
        `Там хлопну бургер за здоровье Собянина.`,
      director: `Timati`,
      stars: [`Timati`, `Goof`, `Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`],
    },
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    reviews: [
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
    ]
  },
  {
    title: `Johnny English`,
    images: {
      card: `img/johnny-english.jpg`,
      smallPoster: `img/johnny-english-poster.jpg`,
      bigPoster: `img/bg-johnny-english.jpg`,
    },
    genre: `Fighter`,
    releaseDate: 1992,
    runTime: `1h 23m`,
    rating: {score: 2.9, level: `Bad`, count: 68},
    info: {
      description:
        `Это жёсткий город - своя шкала контрастов.\n` +
        `Купеческая Мекка, государство в государстве.\n` +
        `Тот самый город, что не проводит гей-парады.\n` +
        `Тот самый город - профицит которого ярды.\n` +
        `\n` +
        `Плитка сыпется с небес, тебе нравится.\n` +
        `Эти штрафы и от них не избавиться.\n` +
        `Патриаршие и пруды, центр варится.\n` +
        `Рейды на Садовом. Ночь. Снова пятница.\n` +
        `\n` +
        `В пятом поколении коренной москвич.\n` +
        `Не хожу на митинги и не втираю дичь.\n` +
        `Помню этот город пятнадцать лет назад -\n` +
        `Отвечаю, он щас мировой стандарт.\n` +
        `\n` +
        `Квинтэссенция интеллигентов и джамшутов.\n` +
        `Здесь комерсы выходят в окна без парашюта.\n` +
        `Пешком с Арбата и до площади Гагарина -\n` +
        `Там хлопну бургер за здоровье Собянина.`,
      director: `Timati`,
      stars: [`Timati`, `Goof`, `Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`],
    },
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    reviews: [
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
    ]
  },
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    images: {
      card: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
      smallPoster: `img/fantastic-beasts-the-crimes-of-grindelwald-poster.jpg`,
      bigPoster: `img/bg-fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    },
    genre: `Drama`,
    releaseDate: 2001,
    runTime: `1h 23m`,
    rating: {score: 5.1, level: `Awesome`, count: 16},
    info: {
      description:
        `Это жёсткий город - своя шкала контрастов.\n` +
        `Купеческая Мекка, государство в государстве.\n` +
        `Тот самый город, что не проводит гей-парады.\n` +
        `Тот самый город - профицит которого ярды.\n` +
        `\n` +
        `Плитка сыпется с небес, тебе нравится.\n` +
        `Эти штрафы и от них не избавиться.\n` +
        `Патриаршие и пруды, центр варится.\n` +
        `Рейды на Садовом. Ночь. Снова пятница.\n` +
        `\n` +
        `В пятом поколении коренной москвич.\n` +
        `Не хожу на митинги и не втираю дичь.\n` +
        `Помню этот город пятнадцать лет назад -\n` +
        `Отвечаю, он щас мировой стандарт.\n` +
        `\n` +
        `Квинтэссенция интеллигентов и джамшутов.\n` +
        `Здесь комерсы выходят в окна без парашюта.\n` +
        `Пешком с Арбата и до площади Гагарина -\n` +
        `Там хлопну бургер за здоровье Собянина.`,
      director: `Timati`,
      stars: [`Timati`, `Goof`, `Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`],
    },
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    reviews: [
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
    ]
  },
  {
    title: `Bohemian Rhapsody`,
    images: {
      card: `img/bohemian-rhapsody.jpg`,
      smallPoster: `img/bohemian-rhapsody-poster.jpg`,
      bigPoster: `img/bg-bohemian-rhapsody.jpg`,
    },
    genre: `Fighter`,
    releaseDate: 2004,
    runTime: `1h 23m`,
    rating: {score: 2, level: `Normal`, count: 28},
    info: {
      description:
        `Это жёсткий город - своя шкала контрастов.\n` +
        `Купеческая Мекка, государство в государстве.\n` +
        `Тот самый город, что не проводит гей-парады.\n` +
        `Тот самый город - профицит которого ярды.\n` +
        `\n` +
        `Плитка сыпется с небес, тебе нравится.\n` +
        `Эти штрафы и от них не избавиться.\n` +
        `Патриаршие и пруды, центр варится.\n` +
        `Рейды на Садовом. Ночь. Снова пятница.\n` +
        `\n` +
        `В пятом поколении коренной москвич.\n` +
        `Не хожу на митинги и не втираю дичь.\n` +
        `Помню этот город пятнадцать лет назад -\n` +
        `Отвечаю, он щас мировой стандарт.\n` +
        `\n` +
        `Квинтэссенция интеллигентов и джамшутов.\n` +
        `Здесь комерсы выходят в окна без парашюта.\n` +
        `Пешком с Арбата и до площади Гагарина -\n` +
        `Там хлопну бургер за здоровье Собянина.`,
      director: `Timati`,
      stars: [`Timati`, `Goof`, `Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`],
    },
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    reviews: [
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
    ]
  },
  {
    title: `Macbeth`,
    images: {
      card: `img/macbeth.jpg`,
      smallPoster: `img/macbeth-poster.jpg`,
      bigPoster: `img/bg-macbeth.jpg`,
    },
    genre: `Fighter`,
    releaseDate: 2011,
    runTime: `1h 23m`,
    rating: {score: 7.6, level: `Bad`, count: 60},
    info: {
      description:
        `Это жёсткий город - своя шкала контрастов.\n` +
        `Купеческая Мекка, государство в государстве.\n` +
        `Тот самый город, что не проводит гей-парады.\n` +
        `Тот самый город - профицит которого ярды.\n` +
        `\n` +
        `Плитка сыпется с небес, тебе нравится.\n` +
        `Эти штрафы и от них не избавиться.\n` +
        `Патриаршие и пруды, центр варится.\n` +
        `Рейды на Садовом. Ночь. Снова пятница.\n` +
        `\n` +
        `В пятом поколении коренной москвич.\n` +
        `Не хожу на митинги и не втираю дичь.\n` +
        `Помню этот город пятнадцать лет назад -\n` +
        `Отвечаю, он щас мировой стандарт.\n` +
        `\n` +
        `Квинтэссенция интеллигентов и джамшутов.\n` +
        `Здесь комерсы выходят в окна без парашюта.\n` +
        `Пешком с Арбата и до площади Гагарина -\n` +
        `Там хлопну бургер за здоровье Собянина.`,
      director: `Timati`,
      stars: [`Timati`, `Goof`, `Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`],
    },
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    reviews: [
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
    ]
  },
  {
    title: `Aviator`,
    images: {
      card: `img/aviator.jpg`,
      smallPoster: `img/aviator-poster.jpg`,
      bigPoster: `img/bg-aviator.jpg`,
    },
    genre: `Drama`,
    releaseDate: 2002,
    runTime: `1h 23m`,
    rating: {score: 2.2, level: `Very good`, count: 22},
    info: {
      description:
        `Это жёсткий город - своя шкала контрастов.\n` +
        `Купеческая Мекка, государство в государстве.\n` +
        `Тот самый город, что не проводит гей-парады.\n` +
        `Тот самый город - профицит которого ярды.\n` +
        `\n` +
        `Плитка сыпется с небес, тебе нравится.\n` +
        `Эти штрафы и от них не избавиться.\n` +
        `Патриаршие и пруды, центр варится.\n` +
        `Рейды на Садовом. Ночь. Снова пятница.\n` +
        `\n` +
        `В пятом поколении коренной москвич.\n` +
        `Не хожу на митинги и не втираю дичь.\n` +
        `Помню этот город пятнадцать лет назад -\n` +
        `Отвечаю, он щас мировой стандарт.\n` +
        `\n` +
        `Квинтэссенция интеллигентов и джамшутов.\n` +
        `Здесь комерсы выходят в окна без парашюта.\n` +
        `Пешком с Арбата и до площади Гагарина -\n` +
        `Там хлопну бургер за здоровье Собянина.`,
      director: `Timati`,
      stars: [`Timati`, `Goof`, `Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`],
    },
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    reviews: [
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
    ]
  },
  {
    title: `We need to talk about Kevin`,
    images: {
      card: `img/we-need-to-talk-about-kevin.jpg`,
      smallPoster: `img/we-need-to-talk-about-kevin-poster.jpg`,
      bigPoster: `img/bg-we-need-to-talk-about-kevin.jpg`,
    },
    genre: `Drama`,
    releaseDate: 2007,
    runTime: `1h 23m`,
    rating: {score: 0.3, level: `Very good`, count: 7},
    info: {
      description:
        `Это жёсткий город - своя шкала контрастов.\n` +
        `Купеческая Мекка, государство в государстве.\n` +
        `Тот самый город, что не проводит гей-парады.\n` +
        `Тот самый город - профицит которого ярды.\n` +
        `\n` +
        `Плитка сыпется с небес, тебе нравится.\n` +
        `Эти штрафы и от них не избавиться.\n` +
        `Патриаршие и пруды, центр варится.\n` +
        `Рейды на Садовом. Ночь. Снова пятница.\n` +
        `\n` +
        `В пятом поколении коренной москвич.\n` +
        `Не хожу на митинги и не втираю дичь.\n` +
        `Помню этот город пятнадцать лет назад -\n` +
        `Отвечаю, он щас мировой стандарт.\n` +
        `\n` +
        `Квинтэссенция интеллигентов и джамшутов.\n` +
        `Здесь комерсы выходят в окна без парашюта.\n` +
        `Пешком с Арбата и до площади Гагарина -\n` +
        `Там хлопну бургер за здоровье Собянина.`,
      director: `Timati`,
      stars: [`Timati`, `Goof`, `Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`],
    },
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    reviews: [
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
    ]
  },
  {
    title: `Revenant`,
    images: {
      card: `img/revenant.jpg`,
      smallPoster: `img/revenant-poster.jpg`,
      bigPoster: `img/bg-revenant.jpg`,
    },
    genre: `Horror`,
    releaseDate: 2011,
    runTime: `1h 23m`,
    rating: {score: 0.3, level: `Awesome`, count: 14},
    info: {
      description:
        `Это жёсткий город - своя шкала контрастов.\n` +
        `Купеческая Мекка, государство в государстве.\n` +
        `Тот самый город, что не проводит гей-парады.\n` +
        `Тот самый город - профицит которого ярды.\n` +
        `\n` +
        `Плитка сыпется с небес, тебе нравится.\n` +
        `Эти штрафы и от них не избавиться.\n` +
        `Патриаршие и пруды, центр варится.\n` +
        `Рейды на Садовом. Ночь. Снова пятница.\n` +
        `\n` +
        `В пятом поколении коренной москвич.\n` +
        `Не хожу на митинги и не втираю дичь.\n` +
        `Помню этот город пятнадцать лет назад -\n` +
        `Отвечаю, он щас мировой стандарт.\n` +
        `\n` +
        `Квинтэссенция интеллигентов и джамшутов.\n` +
        `Здесь комерсы выходят в окна без парашюта.\n` +
        `Пешком с Арбата и до площади Гагарина -\n` +
        `Там хлопну бургер за здоровье Собянина.`,
      director: `Timati`,
      stars: [`Timati`, `Goof`, `Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`],
    },
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    reviews: [
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
    ]
  },
];

export {testMoviesData};
