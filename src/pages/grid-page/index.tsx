import React, { useState } from 'react';

import { CssHighlighter, GridDisplayer, GridSlider } from 'components';
import { GridTemplateSlider } from './grid-template-slider';

import styles from './index.module.css';

const GridPage: React.FunctionComponent = () => {
  const [gap, setGap] = useState(16);
  const [templateRow, setTemplateRow] = useState(4);
  const [templateColumn, setTemplateColumn] = useState(8);
  const gridStyles = {
    gap: `${gap}px`,
    gridTemplateColumns: `repeat(${templateColumn}, 1fr)`,
    gridTemplateRows: `repeat(${templateRow}, 1fr)`,
  };

  return (
    <div className={styles.page}>
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
          onChange={setTemplateColumn}
          defaultValue={templateColumn}
        />
        <GridTemplateSlider
          title="grid-template-rows"
          onChange={setTemplateRow}
          defaultValue={templateRow}
        />
      </div>
    </div>
  );
};

export { GridPage };
