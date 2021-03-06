import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import Tabs from '../tabs/tabs.jsx';
import MoviesList from '../movies-list/movies-list.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item.jsx';
import {AppRoute} from "../../constants.ts";

const TabsWrapped = withActiveItem(Tabs);

function MovieInfo(props) {
  const {moviesData, movieData, filteredMoviesData, onCardClick, onAddReviewButtonClick, onHomePageClick} = props;
  const {title, images, genre, releaseDate} = movieData;
  const {bigPoster, smallPoster} = images;

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={bigPoster} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <Link
                to={AppRoute.MAIN}
                onClick={onHomePageClick}
                className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
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
                <Link
                  to={AppRoute.ADD_REVIEW}
                  onClick={onAddReviewButtonClick}
                  className="btn movie-card__button"
                >Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={smallPoster} alt={`${title} poster`} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <TabsWrapped
                movieData={movieData}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        {moviesData.length > 0 && (
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <MoviesList
              onCardClick={onCardClick}
              moviesData={moviesData}
              filteredMoviesData={filteredMoviesData}
            />

          </section>
        )}

        <footer className="page-footer">
          <div className="logo">
            <Link
              to={AppRoute.MAIN}
              className="logo__link logo__link--light"
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

MovieInfo.propTypes = {
  moviesData: PropTypes.arrayOf(PropTypes.object).isRequired,
  movieData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    images: PropTypes.shape({
      card: PropTypes.string.isRequired,
      smallPoster: PropTypes.string.isRequired,
      bigPoster: PropTypes.string.isRequired,
    }),
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
  }),
  onCardClick: PropTypes.func.isRequired,
  filteredMoviesData: PropTypes.array.isRequired,
  onAddReviewButtonClick: PropTypes.func.isRequired,
};

export default MovieInfo;
