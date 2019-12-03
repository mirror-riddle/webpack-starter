import React from 'react';
import classNames from 'classnames';

import { GridCell } from './grid-cell';

import styles from './index.module.css';

interface GridDisplayerProps {
  className?: string;
  cellCount?: number;
  style?: Record<string, string>;
}

const GridDisplayer: React.FunctionComponent<GridDisplayerProps> = props => {
  const { className, cellCount, style } = props;
  const gridClassName = classNames(className, styles.grid);
  const cellArray = Array.from(Array(cellCount || 20).keys());
  return (
    <div className={gridClassName} style={style}>
      {cellArray.map(cell => (
        <GridCell key={cell}>{cell}</GridCell>
      ))}
    </div>
  );
};

export { GridDisplayer };
