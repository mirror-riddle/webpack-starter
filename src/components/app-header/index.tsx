import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import styles from './index.module.css';

export interface LinkItem {
  path: string;
  name: string;
}

interface AppHeaderProps {
  className?: string;
  links?: LinkItem[];
}

const AppHeader: React.FunctionComponent<AppHeaderProps> = props => {
  const { className, links } = props;
  const headerClassName = classNames(className, styles.header);

  return (
    <header className={headerClassName}>
      {links &&
        links.map(link => (
          <Link key={link.name} to={link.path}>
            {link.name}
          </Link>
        ))}
    </header>
  );
};

export { AppHeader };
