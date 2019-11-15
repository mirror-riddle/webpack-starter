import React from 'react';
import PropTypes from 'prop-types';

const App = props => {
  const { title } = props;
  return (
    <div className="app-container">
      <div className="app-content">
        <h2 className="title">{title}</h2>
      </div>
    </div>
  );
};

App.propTypes = {
  title: PropTypes.string,
};

App.defaultProps = {
  title: 'webpack starter',
};

export { App };
