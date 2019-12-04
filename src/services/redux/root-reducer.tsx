import { combineReducers } from '@reduxjs/toolkit';

import { gridPageReducer } from 'pages/grid-page/index.slice';
import { homePageReducer } from 'pages/home-page/index.slice';

const rootReducer = combineReducers({
  homePage: homePageReducer,
  gridPage: gridPageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export { rootReducer };
