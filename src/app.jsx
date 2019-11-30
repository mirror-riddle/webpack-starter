import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { RootPage } from './pages/root';

const App = () => (
  <Router basename="/webpack-starter/demo">
    <RootPage />
  </Router>
);

export { App };
