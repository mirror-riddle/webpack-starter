import React from 'react';
import renderer from 'react-test-renderer';

import { RandomKey } from '.';

test('render Random Key', () => {
  const app = renderer.create(<RandomKey />);
  const tree = app.toJSON();
  expect(tree).toMatchSnapshot();
});
