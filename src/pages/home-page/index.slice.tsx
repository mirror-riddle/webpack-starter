import axios from 'axios';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from 'services/redux/store';

interface HomePageState {
  key: string;
}

const initialState: HomePageState = {
  key: '',
};

const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    /* eslint-disable no-param-reassign */
    setKey(state, action: PayloadAction<string>): void {
      state.key = action.payload;
    },
    /* eslint-enable no-param-reassign */
  },
});

export const { setKey } = homePageSlice.actions;

export const { reducer: homePageReducer } = homePageSlice;

const getRandomKey = (): AppThunk => async (dispatch): Promise<void> => {
  try {
    const res = await axios.get('http://localhost:8000/random-key');
    dispatch(setKey(res.data));
  } catch (error) {
    dispatch(setKey(error.message));
  }
};

export { getRandomKey };
