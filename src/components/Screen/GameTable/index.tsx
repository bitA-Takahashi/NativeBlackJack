import React, { FC, useEffect } from 'react';
import styled from 'styled-components/native';
import { dispatch } from '../../../redux/store';
import { setInitializeGame } from '../../../redux/modules/card';
import { GameTableScreen } from './GameTableScreen';
import { useSelector } from 'react-redux';
import {
  dealerHandSelector,
  isStandDealerSelector,
  isStandPlayerSelector,
  playerHandSelector,
} from '../../../redux/selectors/card';

export const GameTable: FC = () => {
  const playerHands = useSelector(playerHandSelector);
  const dealerHands = useSelector(dealerHandSelector);
  const isStandPlayer = useSelector(isStandPlayerSelector);
  const isStandDealer = useSelector(isStandDealerSelector);

  useEffect(() => {
    dispatch(setInitializeGame());
  }, []);

  return (
    <Component>
      <GameTableScreen
        playerHands={playerHands}
        dealerHands={dealerHands}
        isStandPlayer={isStandPlayer}
        isStandDealer={isStandDealer}
      />
    </Component>
  );
};

const Component = styled.View`
  width: 90%;
`;
