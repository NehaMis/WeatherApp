import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../src/features/weatherSlice';
import languageReducer from '../src/features/languageSlice';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    language: languageReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
