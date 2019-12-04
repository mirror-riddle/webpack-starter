import React from 'react';
import classNames from 'classnames';

import styles from './index.module.css';

interface CommonContainerProps {
  title?: string;
  className?: string;
}

const CommonContainer: React.FunctionComponent<CommonContainerProps> = props => {
  const { children, className, title } = props;
  const containerClassName = classNames(className, styles.container);

  return (
    <div className={containerClassName}>
      <header className={styles.header}>{title}</header>
      <section className={styles.content}>{children}</section>
    </div>
  );
};

export { CommonContainer };
