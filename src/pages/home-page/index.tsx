import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';

import styles from './index.module.css';

const HomePage: React.FunctionComponent = () => {
  const [key, setKey] = useState('');

  const changeKey = async (): Promise<void> => {
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
    <div className={styles.page}>
      <pre className={styles.pre}>
        <code>{key}</code>
      </pre>
      <Button variant="contained" color="primary" onClick={changeKey}>
        change
      </Button>
    </div>
  );
};

export { HomePage };
