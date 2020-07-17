import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Details from '../details/details.jsx';
import Reviews from '../reviews/reviews.jsx';
import Overview from '../ovierview/overview.jsx';

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

class Tabs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: Tab.OVERVIEW,
    };
  }

  render() {
    const tabsNames = Object.values(Tab);

    return (
      <>
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {tabsNames.map((tab) => {
              const activeClass = this.state.currentTab === tab ? `movie-nav__item--active` : ``;
              return (
                <li className={`movie-nav__item ${activeClass}`} key={tab}>
                  <a href="#" className="movie-nav__link"
                    onClick={() => this.setState({currentTab: tab})}
                  >{tab}</a>
                </li>
              );
            })}
          </ul>
        </nav>
        {getComponentByType(this.state.currentTab, this.props.movieData)}
      </>
    );
  }
}

Tabs.propTypes = {
  movieData: PropTypes.object.isRequired,
};

export default Tabs;
