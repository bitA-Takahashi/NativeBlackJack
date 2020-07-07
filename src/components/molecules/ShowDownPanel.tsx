import React, { FC } from 'react';
import styled from 'styled-components/native';
import { calcHandsValue } from '../../domain/logics/calcHandsValue';
import { gameResult } from '../../domain/logics/gameResult';
import { CardType } from '../../domain/declarations/models';
import { Button } from '../atoms/Button';

interface Props {
  playerHands: CardType[];
  dealerHands: CardType[];
}

export const ShowDownPanel: FC<Props> = ({ playerHands, dealerHands }) => {
  // TODO: 親で計算してから渡せばここが消えそう
  const playerScore = calcHandsValue(playerHands);
  const dealerScore = calcHandsValue(dealerHands);
  return (
    <Component>
      <Position>ShowDown</Position>
      <Result>
        <ResultItem>Player {playerScore}</ResultItem>
        <ResultItem>Dealer {dealerScore}</ResultItem>
        <ResultItem>{gameResult(playerScore, dealerScore)}</ResultItem>
      </Result>
      <Button onPress={() => alert('もう一回的な処理書く')}>one more</Button>
    </Component>
  );
};

const Component = styled.View`
  margin-top: 30px;
`;

const Position = styled.Text`
  font-size: 20px;
`;

const Result = styled.View`
  margin: 10px 0;
`;

const ResultItem = styled.Text`
  margin-right: 10px;
`;
