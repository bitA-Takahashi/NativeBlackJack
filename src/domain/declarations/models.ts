import { CARD_NUMBERS } from '../const/cardNumbers';
import { CARD_SUITS } from '../const/cardSuits';

export type Suit = typeof CARD_SUITS[keyof typeof CARD_SUITS];
export type Number = typeof CARD_NUMBERS[keyof typeof CARD_NUMBERS];
export type CardType = [Suit, Number];

export interface CardState {
  deck: CardType[];
  playerHands: CardType[];
  isStandPlayer: boolean;
  dealerHands: CardType[];
  isStandDealer: boolean;
}
