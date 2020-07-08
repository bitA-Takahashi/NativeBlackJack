import { createSlice } from '@reduxjs/toolkit';
import { getInitialCards } from '../../domain/logics/getInitialCards';
import { CardState } from '../../domain/declarations/models';

export const initialState: CardState = {
  deck: getInitialCards(),
};

const slice = createSlice({
  name: 'card',
  initialState,
  reducers: {},
});

export default slice.reducer;
