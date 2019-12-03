import React, { useState } from 'react';
import { Slider, Typography } from '@material-ui/core';

import { GridItem, CssHighlighter } from 'components';

import styles from './index.module.css';

const GridPage: React.FunctionComponent = () => {
  const [gap, setGap] = useState(16);
  const [templateRow, setTemplateRow] = useState(4);
  const [templateColumn, setTemplateColumn] = useState(8);
  const items = Array.from(Array(20).keys());
  const gridStyles = {
    gap: `${gap}px`,
    gridTemplateColumns: `repeat(${templateColumn}, 1fr)`,
    gridTemplateRows: `repeat(${templateRow}, 1fr)`,
  };

  const handleChange = (
    dispatch: React.Dispatch<React.SetStateAction<number>>
  ) => {
    return (_event: React.ChangeEvent<{}>, value: number | number[]): void => {
      if (typeof value === 'number') {
        dispatch(value);
      }
    };
  };

  const handleGapChange = handleChange(setGap);
  const handleTemplateColumnChange = handleChange(setTemplateColumn);
  const handleTemplateRowChange = handleChange(setTemplateRow);

  return (
    <div className={styles.page}>
      <div className={styles.grid} style={gridStyles}>
        {items.map(item => (
          <GridItem key={item}>{item}</GridItem>
        ))}
      </div>
      <CssHighlighter codeObject={gridStyles} />
      <div className={styles.slider}>
        <Typography id="grid-gap-slider" gutterBottom>
          gap
        </Typography>
        <Slider
          getAriaValueText={(value: number): string => `${value}px`}
          aria-labelledby="grid-gap-slider"
          defaultValue={gap}
          valueLabelDisplay="off"
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
          onChange={handleGapChange}
        />
        <Typography id="template-column-slider" gutterBottom>
          grid-template-columns
        </Typography>
        <Slider
          getAriaValueText={(value: number): string => `${value}`}
          aria-labelledby="template-column-slider"
          defaultValue={templateColumn}
          valueLabelDisplay="off"
          step={1}
          min={4}
          max={12}
          marks={[
            { value: 4, label: '4' },
            { value: 6, label: '6' },
            { value: 8, label: '8' },
            { value: 10, label: '10' },
            { value: 12, label: '12' },
          ]}
          onChange={handleTemplateColumnChange}
        />
        <Typography id="template-row-slider" gutterBottom>
          grid-template-rows
        </Typography>
        <Slider
          getAriaValueText={(value: number): string => `${value}`}
          aria-labelledby="template-row-slider"
          defaultValue={templateRow}
          valueLabelDisplay="off"
          step={1}
          min={4}
          max={12}
          marks={[
            { value: 4, label: '4' },
            { value: 6, label: '6' },
            { value: 8, label: '8' },
            { value: 10, label: '10' },
            { value: 12, label: '12' },
          ]}
          onChange={handleTemplateRowChange}
        />
      </div>
    </div>
  );
};

export { GridPage };
