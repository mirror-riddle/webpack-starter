import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';

import styles from './index.css';

const RandomKey = () => {
  const [key, setKey] = useState('');

  const changeKey = () => {
    axios.get('http://localhost:8000/random-key').then(
      res => {
        setKey(res.data);
      },
      error => {
        setKey(error.message);
      }
    );
  };

  useEffect(() => {
    changeKey();
  }, []);

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
