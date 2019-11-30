import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { RootPage } from './pages/root';

const App = () => (
  <Router>
    <RootPage />
  </Router>
);

export { App };
