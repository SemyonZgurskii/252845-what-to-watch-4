import * as React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../constants.ts';
import MoviesList from '../movies-list/movies-list.jsx';
import GenreFilter from '../genre-filter/genre-filter.jsx';
import withShowMoreButton from '../../hocs/with-show-more-button/with-show-more-button.jsx';
import {AuthorizationStatus} from '../../reducer/user/user.js';
import {MovieData} from '../../types.ts';

interface Props {
  promoInfo: {
    title: string,
    genre: string,
    releaseDate: number,
  },
  activeGenre: string,
  onFilterChange: () => void,
  moviesData: MovieData[],
  authorizationStatus: string,
  onHomePageClick: () => void,
}

const MoviesListWrapped = withShowMoreButton(MoviesList);

function Main(props: Props): React.ReactElement {
  const {title, genre, releaseDate} = props.promoInfo;
  const {activeGenre, onFilterChange, moviesData, authorizationStatus, onHomePageClick} = props;
  // const {title, genre, releaseDate} = moviesData[0];

  return (
    <>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <Link
              to={AppRoute.MAIN}
              onClick={onHomePageClick}
              className="logo__link"
            >
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="user-block">
            {authorizationStatus === AuthorizationStatus.NO_AUTH &&
              <Link
                className="user-block__link"
                to={AppRoute.LOGIN}
              >Sign in</Link>}

            {authorizationStatus === AuthorizationStatus.AUTH &&
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>}
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{releaseDate}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreFilter
            moviesData={moviesData}
            activeGenre={activeGenre}
            onFilterChange={onFilterChange}
          />

          <MoviesListWrapped
            {...props}
          />

        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link
              className="logo__link logo__link--light"
              to={AppRoute.MAIN}
            >
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Main;
