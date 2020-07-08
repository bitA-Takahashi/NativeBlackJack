import { createSlice } from '@reduxjs/toolkit';
import { getInitialCards } from '../../domain/logics/getInitialCards';
import { CardState } from '../../domain/declarations/models';
import { shuffle } from '../../domain/logics/shuffle';

// TODO: あとでスライスをバラす
export const initialState: CardState = {
  deck: shuffle(getInitialCards()),
  playerHands: [],
  isStandPlayer: false,
  dealerHands: [],
  isStandDealer: false,
};

const slice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setPlayerIncrementHand: (state) => {
      state.playerHands = [...state.playerHands, state.deck[0]];
    },
    setDealerIncrementHand: (state) => {
      state.dealerHands = [...state.dealerHands, state.deck[0]];
    },
    setDrawDeck: (state) => {
      state.deck = state.deck.filter((card, index) => index !== 0);
    },
    setInitializeGame: (state) => {
      state.playerHands = [state.deck[0], state.deck[2]];
      state.dealerHands = [state.deck[1], state.deck[3]];
      state.deck = state.deck.filter((card, index) => index > 3);
    },
    setStandPlayer: (state, { payload }: { payload: boolean }) => {
      state.isStandPlayer = payload;
    },
    setStandDealer: (state, { payload }: { payload: boolean }) => {
      state.isStandDealer = payload;
    },
  },
});

export default slice.reducer;
export const {
  setPlayerIncrementHand,
  setDealerIncrementHand,
  setDrawDeck,
  setInitializeGame,
  setStandPlayer,
  setStandDealer,
} = slice.actions;
