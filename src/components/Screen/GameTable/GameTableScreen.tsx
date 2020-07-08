import React, { FC } from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { PlayerPanel } from '../../organisms/PlayerPanel';
import { DealerPanel } from '../../organisms/DealerPanel';
import { ShowDownPanel } from '../../organisms/ShowDownPanel';
import { CardType } from '../../../domain/declarations/models';
import { calcHandsValue } from '../../../domain/logics/calcHandsValue';
import { judgeHandStatus } from '../../../domain/logics/judgeHandStatus';

interface Props {
  playerHands: CardType[];
  dealerHands: CardType[];
  isStandPlayer: boolean;
  isStandDealer: boolean;
}

export const GameTableScreen: FC<Props> = ({ playerHands, dealerHands, isStandPlayer, isStandDealer }) => {
  return (
    <Component>
      <DealerPanel dealerHands={dealerHands} isStandPlayer={isStandPlayer} />
      <PlayerPanel playerHands={playerHands} />

      <Text>{judgeHandStatus(calcHandsValue(playerHands))}</Text>

      {isStandPlayer && isStandDealer && (
        <ShowDownPanel playerScore={calcHandsValue(playerHands)} dealerScore={calcHandsValue(dealerHands)} />
      )}
    </Component>
  );
};

const Component = styled.View`
  width: 90%;
`;
