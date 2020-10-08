export interface MovieData {
    title: string,
    genre: string,
    backgroundColor: string,
    video: string,
    id: string,
    isFavorite: boolean,
    releaseDate: number,
    preview: string,
    runTime: number,
    images: {
      card: string,
      smallPoster: string,
      bigPoster: string,
    },
    rating: {
      score: number,
      level: string,
      count: number,
    },
    info: {
      description: string,
      director: string,
      stars: string[],
    },
    reviews: string[],
}


// return {
//   title: originalData.name,
//   genre: originalData.genre,
//   backgroundColor: originalData.background_color,
//   video: originalData.video_link,
//   id: originalData.id,
//   isFavorite: originalData.is_favorite,
//   releaseDate: originalData.released,
//   preview: originalData.preview_video_link,
//   runTime: originalData.run_time,
//   images: {
//     card: originalData.preview_image,
//     smallPoster: originalData.poster_image,
//     bigPoster: originalData.background_image,
//   },
//   rating: {
//     score: originalData.rating,
//     level: getRandomArraysItem(levels),
//     count: originalData.scores_count,
//   },
//   info: {
//     description: originalData.description,
//     director: originalData.director,
//     stars: originalData.starring,
//   },
//   reviews,
// };