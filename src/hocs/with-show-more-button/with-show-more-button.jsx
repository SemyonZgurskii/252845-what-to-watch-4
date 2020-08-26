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
        showedMoviesCount: getShowedMoviesCount(0, this.props.filteredMoviesData.length),
      };

      this._handleShowMoreButtonClick = this._handleShowMoreButtonClick.bind(this);
    }

    _handleShowMoreButtonClick() {
      this.setState((prevState) => {
        const {filteredMoviesData} = this.props;
        const {showedMoviesCount} = prevState;

        return {
          showedMoviesCount: getShowedMoviesCount(showedMoviesCount, filteredMoviesData.length),
        };
      });
    }

    componentDidUpdate(prevProps) {
      if (prevProps.filteredMoviesData.length !== this.props.filteredMoviesData.length) {
        this.setState({
          showedMoviesCount: getShowedMoviesCount(0, this.props.filteredMoviesData.length),
        });
      }
    }

    render() {
      const {filteredMoviesData} = this.props;
      const showedMovies = filteredMoviesData.slice(0, this.state.showedMoviesCount);
      const correctedProps = Object.assign({}, this.props, {
        filteredMoviesData: showedMovies,
      });

      return (
        <Component
          {...correctedProps}
        >
          {
            this.state.showedMoviesCount !== filteredMoviesData.length &&
              <ShowMore
                onClick={this._handleShowMoreButtonClick}
              />
          }
        </Component>
      );
    }
  }

  WithShowMoreButton.propTypes = {
    filteredMoviesData: PropTypes.array.isRequired,
  };

  return WithShowMoreButton;
}

export default withShowMoreButton;
