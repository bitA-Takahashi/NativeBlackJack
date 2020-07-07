import { CARD_NUMBERS } from '../const/cardNumbers';
import { CARD_SUITS } from '../const/cardSuits';
import { CardType } from '../declarations/models';

export const getInitialCards = () => {
  return Object.values(CARD_NUMBERS).map((number) =>
    Object.values(CARD_SUITS).flatMap((suit) => [suit, number]),
  ) as CardType[];
};
