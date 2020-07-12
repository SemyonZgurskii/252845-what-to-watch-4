import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from './video-player.jsx';
import {testMoviesData} from '../../mocks/testMovies.js';

describe(`Create VideoPlayer snapshot`, () => {
  it(`Should correctly rendeo VideoPlayer`, () => {
    const isPlaying = true;
    const {preview, images, title} = testMoviesData[0];

    const VideoPlayerElement = renderer.create(
        <VideoPlayer
          previewImage = {images.card}
          previewVideo = {preview}
          title = {title}
          isPlaying = {isPlaying}
        />
    ).toJSON();

    expect(VideoPlayerElement).toMatchSnapshot();
  });
});
