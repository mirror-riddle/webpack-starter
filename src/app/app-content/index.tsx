import React from 'react';
import { Route, Switch } from 'react-router-dom';
import classNames from 'classnames';

import styles from './index.module.css';

export interface RouteItem {
  path: string;
  page: JSX.Element;
}

interface AppContentProps {
  className?: string;
  routes?: RouteItem[];
}

const AppContent: React.FunctionComponent<AppContentProps> = props => {
  const { className, routes } = props;
  const contentClassName = classNames(className, styles.content);

  return (
    <section className={contentClassName}>
      <Switch>
        {routes &&
          routes.map(route => (
            <Route key={route.path} path={route.path} exact>
              {route.page}
            </Route>
          ))}
      </Switch>
    </section>
  );
};

export { AppContent };
