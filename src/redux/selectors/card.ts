import { createSelector } from 'reselect';
import { RootState } from '../store';
import { CardState, CardType } from '../../domain/declarations/models';

export const playerHandSelector = createSelector<RootState, CardState, CardType[]>(
  (state) => state.card,
  (card) => card.playerHands,
);

export const dealerHandSelector = createSelector<RootState, CardState, CardType[]>(
  (state) => state.card,
  (card) => card.dealerHands,
);

export const isStandPlayerSelector = createSelector<RootState, CardState, boolean>(
  (state) => state.card,
  (card) => card.isStandPlayer,
);

export const isStandDealerSelector = createSelector<RootState, CardState, boolean>(
  (state) => state.card,
  (card) => card.isStandDealer,
);
