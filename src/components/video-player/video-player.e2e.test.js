import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {moviesData} from '../../mocks/movies.js';

import VideoPlayer from './video-player.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`Test VideoPlayer component's functionality`, () => {
  it(`isPlaying flag should be passed correctly`, () => {
    const isPlaying = true;
    const {preview, images, title} = moviesData[0];

    const VideoPlayerElement = shallow(
        <VideoPlayer
          previewImage = {images.card}
          previewVideo = {preview}
          title = {title}
          isPlaying = {isPlaying}
        />
    );

    expect(VideoPlayerElement.state().isPlaying).toEqual(isPlaying);
  });
});
