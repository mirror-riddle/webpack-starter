import React from 'react';

import styles from './index.css';

interface Props {
  className?: string;
}

const GridItem: React.FunctionComponent<Props> = props => {
  const { className, children } = props;
  return (
    <div className={`${className} ${styles.item}`}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export { GridItem };
