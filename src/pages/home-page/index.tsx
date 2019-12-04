import { Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'services/redux/root-reducer';
import { getRandomKey } from './index.slice';

import styles from './index.module.css';

const HomePage: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const { key } = useSelector((state: RootState) => state.homePage);

  const changeKey = (): void => {
    dispatch(getRandomKey());
  };

  useEffect(changeKey, []);

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
