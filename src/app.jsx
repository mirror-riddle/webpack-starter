import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { RootPage } from './pages/root';

const App = () => (
  <Router basename="/webpack-starter">
    <Route path="/">
      <RootPage />
    </Route>
  </Router>
);

export { App };
