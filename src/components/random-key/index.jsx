import React, { useState } from 'react';

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
      <button className={styles.button} onClick={changeKey} type="button">
        change key
      </button>
    </div>
  );
};

export { RandomKey };
