import React, { FC } from 'react';
import styled from 'styled-components/native';
import { gameResult } from '../../domain/logics/gameResult';
import { Button } from '../atoms/Button';
import { setInitializeGame } from '../../redux/modules/card';
import { dispatch } from '../../redux/store';

interface Props {
  playerScore: number;
  dealerScore: number;
}

export const ShowDownPanel: FC<Props> = ({ playerScore, dealerScore }) => {
  const reloadGame = () => {
    dispatch(setInitializeGame());
  };

  return (
    <Component>
      <Position>ShowDown</Position>
      <Result>
        <ResultItem>Player {playerScore}</ResultItem>
        <ResultItem>Dealer {dealerScore}</ResultItem>
        <ResultItem>{gameResult(playerScore, dealerScore)}</ResultItem>
      </Result>
      <Button onPress={reloadGame}>one more</Button>
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
