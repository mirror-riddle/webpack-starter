import classNames from 'classnames';
import React from 'react';

import styles from './index.module.css';

interface GridItemProps {
  className?: string;
}

const GridItem: React.FunctionComponent<GridItemProps> = props => {
  const { className, children } = props;
  const itemClassName = classNames(className, styles.item);

  return (
    <div className={itemClassName}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export { GridItem };
