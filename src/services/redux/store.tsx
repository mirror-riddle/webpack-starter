import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './root-reducer';

const store = configureStore({
  reducer: rootReducer,
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./root-reducer', async () => {
    const { rootReducer: newRootReducer } = await import('./root-reducer');
    store.replaceReducer(newRootReducer);
  });
}

export type AppDispatch = typeof store.dispatch;

export { store };
