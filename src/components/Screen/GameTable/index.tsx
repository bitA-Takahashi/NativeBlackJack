import React, { FC, useEffect } from 'react';
import styled from 'styled-components/native';
import { store } from '../../../redux/store';
import {
  setHitDealer,
  setHitPlayer,
  setStandDealer,
  setStandPlayer,
  setInitializeGame,
} from '../../../redux/modules/card';
import { GameTableScreen } from './GameTableScreen';
import { useDispatch, useSelector } from 'react-redux';
import {
  dealerHandSelector,
  isStandDealerSelector,
  isStandPlayerSelector,
  playerHandSelector,
} from '../../../redux/selectors/card';

export const GameTable: FC = () => {
  type AppDispatch = typeof store.dispatch;
  const dispatch: AppDispatch = useDispatch();
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
        handleHitPlayer={() => {
          dispatch(setHitPlayer());
        }}
        handleHitDealer={() => {
          dispatch(setHitDealer());
        }}
        handleStandPlayer={() => {
          dispatch(setStandPlayer(true));
        }}
        handleStandDealer={() => {
          dispatch(setStandDealer(true));
        }}
        handleReloadGame={() => {
          dispatch(setInitializeGame());
        }}
        isStandPlayer={isStandPlayer}
        isStandDealer={isStandDealer}
      />
    </Component>
  );
};

const Component = styled.View`
  width: 90%;
`;
