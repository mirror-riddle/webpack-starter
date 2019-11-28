import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import { InteractiveGrid } from 'components/interactive-grid';
import { RandomKey } from 'components/random-key';

import styles from './index.css';

const paths = {
  randomKey: '/random-key',
  interaciveGrid: '/interactive-grid',
};

const RootPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to="/">home</Link>
        <Link to={paths.randomKey}>random key</Link>
        <Link to={paths.interaciveGrid}>interactive grid</Link>
      </div>
      <div className={styles.content}>
        <Switch>
          <Route path={paths.randomKey}>
            <RandomKey />
          </Route>
          <Route path={paths.interaciveGrid}>
            <InteractiveGrid />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export { RootPage };
