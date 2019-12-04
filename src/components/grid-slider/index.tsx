import React from 'react';
import { useDispatch } from 'react-redux';
import { Mark, Slider } from '@material-ui/core';

import { CommonContainer } from 'components';

interface GridSliderProps {
  title?: string;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  marks?: boolean | Mark[];
  onChange?: (value: number) => void;
}

const GridSlider: React.FunctionComponent<GridSliderProps> = props => {
  const { title, defaultValue, min, max, step, marks, onChange } = props;
  const dispatch = useDispatch();

  const handleChange = (
    _event: React.ChangeEvent<{}>,
    value: number | number[]
  ): void => {
    if (typeof value === 'number' && onChange !== undefined) {
      dispatch(onChange(value));
    }
  };

  return (
    <CommonContainer title={title}>
      <Slider
        defaultValue={defaultValue}
        min={min}
        max={max}
        step={step}
        marks={marks}
        onChange={handleChange}
      />
    </CommonContainer>
  );
};

export { GridSlider };
