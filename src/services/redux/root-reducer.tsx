import { combineReducers } from '@reduxjs/toolkit';

import { gridPageReducer, gridPageName } from 'pages/grid-page/index.slice';

const rootReducer = combineReducers({
  [gridPageName]: gridPageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export { rootReducer };
