import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'services/redux/root-reducer';
import { CssHighlighter, GridDisplayer, GridSlider, Page } from 'components';
import { GridTemplateSlider } from './grid-template-slider';
import { setGap, setRow, setColumn } from './index.slice';

import styles from './index.module.css';

const GridPage: React.FunctionComponent = () => {
  const { gap, row, column } = useSelector(
    (state: RootState) => state.gridPage
  );
  const gridStyles = {
    gap: `${gap}px`,
    gridTemplateRows: `repeat(${row}, 1fr)`,
    gridTemplateColumns: `repeat(${column}, 1fr)`,
  };

  return (
    <Page>
      <GridDisplayer className={styles.grid} style={gridStyles} />
      <CssHighlighter codeObject={gridStyles} />
      <div className={styles.slider}>
        <GridSlider
          title="gap"
          onChange={setGap}
          defaultValue={gap}
          step={4}
          min={0}
          max={24}
          marks={[
            { value: 0, label: '0' },
            { value: 4, label: '4' },
            { value: 8, label: '8' },
            { value: 12, label: '12' },
            { value: 16, label: '16' },
            { value: 20, label: '20' },
            { value: 24, label: '24' },
          ]}
        />
        <GridTemplateSlider
          title="grid-template-columns"
          onChange={setColumn}
          defaultValue={column}
        />
        <GridTemplateSlider
          title="grid-template-rows"
          onChange={setRow}
          defaultValue={row}
        />
      </div>
    </Page>
  );
};

export { GridPage };
