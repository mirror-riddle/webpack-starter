import { Button } from '@material-ui/core';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'services/redux/root-reducer';
import { Page } from 'components';
import { getRandomKey } from './index.slice';
import styles from './index.module.css';

const HomePage: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const { key } = useSelector((state: RootState) => state.homePage);

  const changeKey = useCallback(() => {
    dispatch(getRandomKey());
  }, [dispatch, getRandomKey]);

  useEffect(changeKey, [changeKey]);

  return (
    <Page className={styles.page}>
      <pre className={styles.pre}>
        <code>{key}</code>
      </pre>
      <Button variant="contained" color="primary" onClick={changeKey}>
        change
      </Button>
    </Page>
  );
};

export { HomePage };
