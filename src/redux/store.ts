import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './modules/card';

const rootReducer = combineReducers({
  card: cardReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const store = configureStore<RootState>({ reducer: rootReducer });
