import classNames from 'classnames';
import React from 'react';

import styles from './index.module.css';

interface PageProps {
  className?: string;
}

const Page: React.FunctionComponent<PageProps> = props => {
  const { className, children } = props;
  const pageClassName = classNames(styles.page, className);
  return <div className={pageClassName}>{children}</div>;
};

export { Page };
