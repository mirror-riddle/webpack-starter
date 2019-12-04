import React from 'react';

import { GridSlider } from 'components';

interface GridTemplateSliderProps {
  title?: string;
  defaultValue?: number;
  onChange?: (value: number) => void;
}

const GridTemplateSlider: React.FunctionComponent<GridTemplateSliderProps> = props => {
  const { title, defaultValue, onChange } = props;

  return (
    <GridSlider
      title={title}
      defaultValue={defaultValue}
      onChange={onChange}
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
    />
  );
};

export { GridTemplateSlider };
