import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

function withVideo(Component) {

  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
      };

      this._timerId = null;
      this._videoRef = createRef();
    }

    componentDidUpdate() {
      const video = this._videoRef.current;

      if (this.state.isPlaying) {
        video.src = this.props.movieData.preview;
        video.play();
      } else {
        video.pause();
        video.src = ``;
      }
    }

    render() {
      const {title, images, preview} = this.props.movieData;
      const {card} = images;

      return (
        <Component
          {...this.props}
          onMouseEnter={() => {
            this._timerId = setTimeout(() => this.setState({
              isPlaying: true,
            }), 1000);
          }}
          onMouseOut={() => {
            this.setState({
              isPlaying: false,
            });
            clearTimeout(this._timerId);
          }}
        >
          <video width="280" height="175"
            preload="none"
            aria-label={`${title} movie preview`}
            ref={this._videoRef}
            poster={card}
            muted={true}
          >
            <source
              src={preview}
              type="video/mp4"
            />
          </video>
        </Component>
      );
    }
  }

  WithVideo.propTypes = {
    movieData: PropTypes.shape({
      title: PropTypes.string.isRequired,
      images: PropTypes.shape({
        card: PropTypes.string.isRequired
      }),
      preview: PropTypes.string.isRequired,
    }),
  };

  return WithVideo;
}

export default withVideo;
