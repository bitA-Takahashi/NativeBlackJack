export const CARD_SUITS = {
  SPADE: 1,
  CLUB: 2,
  DIA: 3,
  HEART: 4,
} as const;

export const cardSuitScreen: { [key in number]: string } = {
  [CARD_SUITS.SPADE]: '♠',
  [CARD_SUITS.CLUB]: '♣',
  [CARD_SUITS.DIA]: '♦',
  [CARD_SUITS.HEART]: '♥',
};
