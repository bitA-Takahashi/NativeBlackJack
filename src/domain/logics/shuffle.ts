import { CardType } from '../declarations/models';

export const shuffle = (array: CardType[]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array; // imo: 引数に受け取ったオブジェクトをそのまま混ぜたのであれば、returnする必要は無いかも。破壊的メソッド、非破壊的メソッドについて考える
};
