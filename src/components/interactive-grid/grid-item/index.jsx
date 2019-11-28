import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.css';

const GridItem = props => {
  const { className, children } = props;
  return (
    <div className={`${className} ${styles.item}`}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

GridItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

GridItem.defaultProps = {
  className: '',
  children: 'item',
};

export { GridItem };
