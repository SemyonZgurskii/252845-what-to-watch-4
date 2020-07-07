import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: this.props.isPlaying,
    };

    this._videoRef = createRef();
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }

  render() {
    const {title, previewImage, previewVideo} = this.props;

    return (
      <video width="280" height="175"
        preload="none"
        aria-label={`${title} movie preview`}
        ref={this._videoRef}
        poster={previewImage}
      >
        <source
          src={previewVideo}
          type="video/mp4"
        />
      </video>
    );
  }
}

VideoPlayer.propTypes = {
  previewImage: PropTypes.string.isRequired,
  previewVideo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export default VideoPlayer;
