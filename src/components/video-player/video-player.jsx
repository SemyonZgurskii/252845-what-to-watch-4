import React from 'react';
import PropTypes from 'prop-types';

function VideoPlayer(props) {
  const {previewImage} = props;

  return (
    <video width="280" height="175"
      poster={previewImage}
    />
  );
}

VideoPlayer.propTypes = {
  previewImage: PropTypes.string.isRequired,
};

export default VideoPlayer;
