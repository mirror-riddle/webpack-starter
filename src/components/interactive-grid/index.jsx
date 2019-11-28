import {
  // FormControlLabel,
  // FormLabel,
  // Radio,
  // RadioGroup,
  Slider,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';

import styles from './index.css';

import { GridItem } from './grid-item';

const InteractiveGrid = () => {
  const [gap, setGap] = useState(16);
  const [templateColumn, setTemplateColumn] = useState(8);
  const items = Array.from(Array(50).keys());
  const gridStyles = {
    gap: `${gap}px`,
    gridTemplateColumns: `repeat(${templateColumn}, 1fr)`,
  };

  const handleGapChange = (event, value) => {
    setGap(value);
  };

  const handleTemplateColumnChange = (event, value) => {
    setTemplateColumn(value);
  };

  return (
    <div className={styles.content}>
      <div className={styles.gridContainer} style={gridStyles}>
        {items.map(item => (
          <GridItem key={item}>{item}</GridItem>
        ))}
      </div>
      <div className={styles.form}>
        <Typography id="grid-gap-slider" gutterBottom>
          grid-gap
        </Typography>
        <Slider
          getAriaValueText={value => `${value}px`}
          aria-labelledby="grid-gap-slider"
          defaultValue={gap}
          valueLabelDisplay="on"
          step={4}
          min={0}
          max={24}
          marks={[
            { value: 0, label: '0' },
            { value: 8, label: '8' },
            { value: 16, label: '16' },
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
          valueLabelDisplay="on"
          step={1}
          min={4}
          max={12}
          marks={[
            { value: 4, label: '4' },
            { value: 8, label: '8' },
            { value: 12, label: '12' },
          ]}
          onChange={handleTemplateColumnChange}
        />
        {/* <FormLabel>grid-gap</FormLabel>
        <RadioGroup
          row
          value={gap}
          defaultValue="8"
          name="grid-gap"
          onChange={handleGapChange}>
          <FormControlLabel value="8" label="8px" control={<Radio />} />
          <FormControlLabel value="16" label="16px" control={<Radio />} />
          <FormControlLabel value="24" label="24px" control={<Radio />} />
        </RadioGroup> */}
      </div>
    </div>
  );
};

export { InteractiveGrid };
