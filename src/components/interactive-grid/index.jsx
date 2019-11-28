import { Slider, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

import styles from './index.css';

import { GridItem } from './grid-item';

const InteractiveGrid = () => {
  const [gap, setGap] = useState(16);
  const [templateRow, setTemplateRow] = useState(4);
  const [templateColumn, setTemplateColumn] = useState(8);
  const items = Array.from(Array(20).keys());
  const gridStyles = {
    gap: `${gap}px`,
    gridTemplateColumns: `repeat(${templateColumn}, 1fr)`,
    gridTemplateRows: `repeat(${templateRow}, 1fr)`,
  };

  const handleGapChange = (event, value) => {
    setGap(value);
  };

  const handleTemplateColumnChange = (event, value) => {
    setTemplateColumn(value);
  };

  const handleTemplateRowChange = (event, value) => {
    setTemplateRow(value);
  };

  return (
    <div className={styles.content}>
      <div className={styles.gridContainer} style={gridStyles}>
        {items.map(item => (
          <GridItem key={item}>{item}</GridItem>
        ))}
      </div>
      <SyntaxHighlighter language="css" showLineNumbers>
        {`{\n  gap: ${gap}px;\n  grid-template-columns: repeat(${templateColumn}, 1fr);\n  grid-template-rows: repeat(${templateRow}, 1fr);\n}`}
      </SyntaxHighlighter>
      <div className={styles.sliderContainer}>
        <Typography id="grid-gap-slider" gutterBottom>
          gap
        </Typography>
        <Slider
          getAriaValueText={value => `${value}px`}
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
          getAriaValueText={value => `${value}`}
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
          getAriaValueText={value => `${value}`}
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

export { InteractiveGrid };
