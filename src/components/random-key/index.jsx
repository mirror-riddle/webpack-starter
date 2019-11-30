import axios from 'axios';
import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import styles from './index.css';

const RandomKey = () => {
  const [key, setKey] = useState('');

  const changeKey = async () => {
    try {
      const res = await axios.get('http://localhost:8000/random-key');
      setKey(res.data);
    } catch (error) {
      setKey(error.message);
    }
  };

  useEffect(() => {
    changeKey();
  }, []);

  return (
    <div className={styles.content}>
      <pre className={styles.pre}>
        <code>{key}</code>
      </pre>
      <Button variant="contained" color="primary" onClick={changeKey}>
        change
      </Button>
    </div>
  );
};

export { RandomKey };
