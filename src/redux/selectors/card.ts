import { createSelector } from 'reselect';
import { RootState } from '../store';
import { CardState, CardType } from '../../domain/declarations/models';

export const deckSelector = createSelector<RootState, CardState, CardType[]>(
  (state) => state.card,
  (card) => card.deck,
);
