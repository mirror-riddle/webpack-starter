import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GridPageState {
  gap: number;
  row: number;
  column: number;
}

const initialState: GridPageState = {
  gap: 16,
  row: 4,
  column: 8,
};

const gridPageSlice = createSlice({
  name: 'gridPage',
  initialState,
  reducers: {
    /* eslint-disable no-param-reassign */
    setGap(state, action: PayloadAction<number>): void {
      state.gap = action.payload;
    },
    setRow(state, action: PayloadAction<number>): void {
      state.row = action.payload;
    },
    setColumn(state, action: PayloadAction<number>): void {
      state.column = action.payload;
    },
    /* eslint-enable no-param-reassign */
  },
});

export const { reducer: gridPageReducer } = gridPageSlice;
export const { setGap, setRow, setColumn } = gridPageSlice.actions;
