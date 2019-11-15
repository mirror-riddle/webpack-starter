import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import styles from './app.css';

const randomKey = () =>
  Math.random()
    .toString(36)
    .slice(2);

const App = () => {
  const [key, setKey] = useState(randomKey());
  const changeKey = () => {
    setKey(randomKey());
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <code className={styles.code}>{`console.log("${key}");`}</code>
        <button className={styles.button} onClick={changeKey} type="button">
          change key
        </button>
      </div>
    </div>
  );
};

App.propTypes = {};

App.defaultProps = {};

export { App };
