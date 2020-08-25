import {getRandomArraysItem, levels, reviews} from '../mocks/movies.js';

function convertData(movieData) {
  return {
    title: movieData.name,
    genre: movieData.genre,
    backgroundColor: movieData.background_color,
    video: movieData.video_link,
    id: movieData.id,
    isFavorite: movieData.is_favorite,
    releaseDate: movieData.released,
    preview: movieData.preview_video_link,
    runTime: movieData.run_time,
    images: {
      card: movieData.preview_image,
      smallPoster: movieData.poster_image,
      bigPoster: movieData.background_image,
    },
    rating: {
      score: movieData.rating,
      level: getRandomArraysItem(levels),
      count: movieData.scores_count,
    },
    info: {
      description: movieData.description,
      director: movieData.director,
      stars: movieData.starring,
    },
    reviews,
  };
}

export {convertData};
