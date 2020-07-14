import React, { FC } from 'react';
import styled from 'styled-components/native';
import { gameResult } from '../../domain/logics/gameResult';
import { Button } from '../atoms/Button';

interface Props {
  playerScore: number;
  dealerScore: number;
  handleReloadGame: () => void;
}

export const ShowDownPanel: FC<Props> = ({ playerScore, dealerScore, handleReloadGame }) => {
  return (
    <Component>
      <Position>ShowDown</Position>
      <Result>
        <ResultItem>Player {playerScore}</ResultItem>
        <ResultItem>Dealer {dealerScore}</ResultItem>
        <ResultItem>{gameResult(playerScore, dealerScore)}</ResultItem>
      </Result>
      <Button onPress={handleReloadGame}>one more</Button>
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
