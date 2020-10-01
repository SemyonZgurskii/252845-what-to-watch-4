export const MAX_FILTERS: number = 9;
export const MAX_OVERVIEW_MOVIES: number = 4;

export const Genre: {
  [key: string]: string;
} = {
  ALL: `All genres`,
  COMEDIES: `Comedies`,
  CRIME: `Crime`,
  DOCUMENTARY: `Documentary`,
  DRAMAS: `Dramas`,
  HORROR: `Horror`,
  KIDS_AND_FIMILY: `Kids & Family`,
  ROMANCE: `Romance`,
  SCI_FI: `Sci-Fi`,
  THRILLERS: `Thrillers`,
};

export const ScreenMode: {
  [key: string]: string;
} = {
  MAIN: `main`,
  OVERVIEW: `overview`,
  AUTH: `auth`,
  ADD_REVIEW: `add review`,
};

export const AppRoute: {
  [key: string]: string;
} = {
  LOGIN: `/login`,
  INFO: `/info`,
  MAIN: `/`,
};
