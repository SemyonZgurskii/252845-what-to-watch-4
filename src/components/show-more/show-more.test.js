import ShowMore from './show-more.jsx';
import React from 'react';
import renderer from 'react-test-renderer';

describe(`Create ShowMore snapshot`, () => {
  it(`Should correctly render ShowMore`, () => {
    const showMoreElement = renderer.create(
        <ShowMore
          onClick={() => {}}
        />
    ).toJSON();

    expect(showMoreElement).toMatchSnapshot();
  });
});
