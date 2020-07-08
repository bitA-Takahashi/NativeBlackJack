import React, { FC, useState } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { CardType } from '../../domain/declarations/models';
import { PlayerPanel } from '../molecules/PlayerPanel';
import { DealerPanel } from '../molecules/DealerPanel';
import { ShowDownPanel } from '../molecules/ShowDownPanel';
import { judgeHandStatus } from '../../domain/logics/judgeHandStatus';
import { calcHandsValue } from '../../domain/logics/calcHandsValue';
import { useSelector } from 'react-redux';
import { deckSelector } from '../../redux/selectors/card';

export const GameTable: FC = () => {
  const deck = useSelector(deckSelector);
  // TODO: マジックナンバーなんとかしたい
  // imo: deck.shift() が使えるかと。そうすればhitCountの管理は不要になる
  const [playerHands, setPlayerHands] = useState<CardType[]>([deck[0]]);
  const [dealerHands, setDealerHands] = useState<CardType[]>([deck[1], deck[2]]);
  const [hitCount, setHitCount] = useState(3);
  const [isPlayerStand, setIsPlayerStand] = useState(false);
  const [isDealerStand, setIsDealerStand] = useState(false);

  return (
    <Component>
      <DealerPanel
        playerHands={playerHands}
        dealerHands={dealerHands}
        isPlayerStand={isPlayerStand}
        actionHit={() => {
          setDealerHands([...dealerHands, deck[hitCount]]);
          setHitCount(hitCount + 1);
        }}
        actionStand={() => setIsDealerStand(true)}
      />

      <PlayerPanel
        playerHands={playerHands}
        onPressHit={() => {
          setPlayerHands([...playerHands, deck[hitCount]]);
          setHitCount(hitCount + 1);
        }}
        onPressStand={() => setIsPlayerStand(true)}
      />

      <Text>{judgeHandStatus(calcHandsValue(playerHands))}</Text>

      {isPlayerStand && isDealerStand && <ShowDownPanel playerHands={playerHands} dealerHands={dealerHands} />}
    </Component>
  );
};

const Component = styled.View`
  width: 90%;
`;
