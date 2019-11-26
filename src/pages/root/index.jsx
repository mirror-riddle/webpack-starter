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
      <ul>
        <Link to={paths.randomKey}>
          <li className={styles.li}>Random Key</li>
        </Link>
      </ul>
      <Switch>
        <Route path={paths.randomKey}>
          <RandomKey />
        </Route>
      </Switch>
    </div>
  );
};

export { RootPage };
