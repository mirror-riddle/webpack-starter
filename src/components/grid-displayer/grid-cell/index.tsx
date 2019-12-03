import classNames from 'classnames';
import React from 'react';

import styles from './index.module.css';

interface GridCellProps {
  className?: string;
}

const GridCell: React.FunctionComponent<GridCellProps> = props => {
  const { className, children } = props;
  const cellClassName = classNames(className, styles.cell);

  return (
    <div className={cellClassName}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export { GridCell };
