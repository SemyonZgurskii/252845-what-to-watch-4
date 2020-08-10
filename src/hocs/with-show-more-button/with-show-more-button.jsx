import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import ShowMore from '../../components/show-more/show-more.jsx';

const MOVIES_COUNT_SUMMAND = 8;

function getShowedMoviesCount(currentMoviesCount, allMoviesCount) {
  if (currentMoviesCount + MOVIES_COUNT_SUMMAND > allMoviesCount) {
    return allMoviesCount;
  }

  return currentMoviesCount + MOVIES_COUNT_SUMMAND;
}

function withShowMoreButton(Component) {
  class WithShowMoreButton extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        showedMoviesCount: getShowedMoviesCount(0, this.props.moviesData.length),
      };

      this._handleShowMoreButtonClick = this._handleShowMoreButtonClick.bind(this);
    }

    _handleShowMoreButtonClick() {
      this.setState((prevState) => {
        const {moviesData} = this.props;
        const {showedMoviesCount} = prevState;

        return {
          showedMoviesCount: getShowedMoviesCount(showedMoviesCount, moviesData.length)
        };
      });
    }

    render() {
      const {moviesData} = this.props;
      const showedMovies = moviesData.slice(0, this.state.showedMoviesCount);
      const correctedProps = Object.assign({}, this.props, {
        moviesData: showedMovies,
      });

      return (
        <Component
          {...correctedProps}
        >
          {
            this.state.showedMoviesCount !== this.props.moviesData.length &&
              <ShowMore
                onClick={this._handleShowMoreButtonClick}
              />
          }
        </Component>
      );
    }
  }

  WithShowMoreButton.propTypes = {
    moviesData: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  return WithShowMoreButton;
}

export default withShowMoreButton;
