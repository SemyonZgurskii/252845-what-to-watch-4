import React from 'react';
import PropTypes from 'prop-types';

import Details from '../details/details.jsx';
import Reviews from '../reviews/reviews.jsx';
import Overview from '../overview/overview.jsx';

const Tab = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

function getComponentByType(type, movieData) {
  let selectedTab = null;

  switch (type) {
    case (Tab.OVERVIEW):
      selectedTab = <Overview movieData={movieData} />;
      break;
    case (Tab.DETAILS):
      selectedTab = <Details movieData={movieData} />;
      break;
    case (Tab.REVIEWS):
      selectedTab = <Reviews movieData={movieData} />;
      break;
  }

  return selectedTab;
}

function Tabs(props) {
  const {setActiveItem, activeItem, movieData} = props;
  const tabsNames = Object.values(Tab);
  const activeTab = activeItem ? activeItem : Tab.OVERVIEW;

  return (
    <>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {tabsNames.map((tab) => {
            const activeClass = activeTab === tab ? `movie-nav__item--active` : ``;
            return (
              <li className={`movie-nav__item ${activeClass}`} key={tab}>
                <a href="#" className="movie-nav__link"
                  onClick={() => setActiveItem(tab)}
                >{tab}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      {getComponentByType(activeTab, movieData)}
    </>
  );
}

Tabs.propTypes = {
  movieData: PropTypes.object.isRequired,
  setActiveItem: PropTypes.func.isRequired,
  activeItem: PropTypes.string.isRequired,
};

export default Tabs;
