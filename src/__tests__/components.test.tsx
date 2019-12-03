import React from 'react';
import Renderer from 'react-test-renderer';

import { GridCell } from 'components/grid-displayer/grid-cell';

describe('components tests: ', () => {
  test('GridItem className contains cell', () => {
    const json = Renderer.create(<GridCell className="cell" />).toJSON();
    expect(json).toMatchSnapshot();
  });
});
