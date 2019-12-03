import React from 'react';
import Renderer from 'react-test-renderer';

import { GridItem } from '../interactive-grid/grid-item';
import { RandomKey } from '../random-key';

test('render <GridItem />', () => {
  const json = Renderer.create(<GridItem className="cell" />).toJSON();
  expect(json).toMatchSnapshot();
});

test('render <RandomKey />', () => {
  const json = Renderer.create(<RandomKey />).toJSON();
  expect(json).toMatchSnapshot();
});
