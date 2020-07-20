import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {testMoviesData} from '../../mocks/testMovies.js';

import Tabs from './tabs.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Test Tabs component's functionality`, () => {
  it(`Clicked menu's name should be puted into the state`, () => {
    const TabsElement = mount(
        <Tabs
          movieData={testMoviesData[0]}
        />
    );

    const tabsMenuElement = TabsElement.find(`a.movie-nav__link`).at(1);
    tabsMenuElement.simulate(`click`);

    expect(TabsElement.state().currentTab).toEqual(tabsMenuElement.text());
  });
});
