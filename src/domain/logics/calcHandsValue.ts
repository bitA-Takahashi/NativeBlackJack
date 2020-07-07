import { CARD_NUMBERS } from '../const/cardNumbers';
import { CARD_ARRAY_ROLE } from '../const/cardArrayRole';
import { CardType } from '../declarations/models';
// imo: logicsには全部テストを書いてみてほしいです。
// テスト駆動の気持ちを味わってほしいので、一回頭をまっさらな状態にしてから書いてほしいですね

const formatSoftCount = (result: number) => {
  return result <= 10 ? 11 : 1;
};

const formatFaceCard = (cardValue: number) => {
  return Math.min(10, cardValue);
};

export const calcHandsValue = (hands: CardType[]) => {
  const handsValue = hands.map((hand) => hand[CARD_ARRAY_ROLE.NUMBER]);
  const handsInAces = handsValue.filter((value) => value === CARD_NUMBERS.ACE);
  const notHandsInAces = handsValue.filter((value) => value !== CARD_NUMBERS.ACE);
  const preHands = notHandsInAces.reduce((result, cardValue) => (result += formatFaceCard(cardValue)), 0);
  return handsInAces.reduce((result) => (result += formatSoftCount(result)), preHands);
};
