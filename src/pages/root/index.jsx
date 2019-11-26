import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import { RandomKey } from 'components/random-key';

import styles from './index.css';

const paths = {
  randomKey: '/random-key',
};

const RootPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sider}>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to={paths.randomKey}>
            <li>Random Key</li>
          </Link>
        </ul>
      </div>
      <div className={styles.content}>
        <Switch>
          <Route path={paths.randomKey}>
            <RandomKey />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export { RootPage };
