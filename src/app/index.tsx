import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { AppNoRouter } from './app-no-router';

const App: React.FunctionComponent = () => (
  <Router>
    <AppNoRouter />
  </Router>
);

export { App };
