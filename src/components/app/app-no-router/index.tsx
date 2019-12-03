import React from 'react';

import { AppContent, AppHeader } from 'components';
import { links, routes } from './links-and-routes';
import styles from './index.module.css';

const AppNoRouter: React.FunctionComponent = () => {
  return (
    <div className={styles.app}>
      <AppHeader className={styles.header} links={links} />
      <AppContent className={styles.content} routes={routes} />
    </div>
  );
};

export { AppNoRouter };
