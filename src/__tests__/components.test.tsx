import React from 'react';
import Renderer from 'react-test-renderer';

import { GridItem } from 'components/grid-item';

describe('components tests: ', () => {
  test('GridItem className contains cell', () => {
    const json = Renderer.create(<GridItem className="cell" />).toJSON();
    expect(json).toMatchSnapshot();
  });
});
