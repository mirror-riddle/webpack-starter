import React, { useState } from 'react';
import { Button } from '@material-ui/core';

import styles from './index.css';

const randomKey = () =>
  Math.random()
    .toString(36)
    .slice(2);

const RandomKey = () => {
  const [key, setKey] = useState(randomKey());
  const changeKey = () => {
    setKey(randomKey());
  };

  return (
    <div className={styles.content}>
      <code className={styles.code}>{key}</code>
      <Button variant="contained" color="primary" onClick={changeKey}>
        change key
      </Button>
    </div>
  );
};

export { RandomKey };
