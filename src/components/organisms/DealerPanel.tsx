import React, { FC, useEffect } from 'react';
import styled from 'styled-components/native';
import { Card } from '../atoms/Card';
import { calcHandsValue } from '../../domain/logics/calcHandsValue';
import { setDealerIncrementHand, setDrawDeck, setStandDealer } from '../../redux/modules/card';
import { dispatch } from '../../redux/store';
import { CardType } from '../../domain/declarations/models';

interface Props {
  dealerHands: CardType[];
  isStandPlayer: boolean;
}

export const DealerPanel: FC<Props> = ({ dealerHands, isStandPlayer }) => {
  const handleHitDealer = () => {
    dispatch(setDealerIncrementHand());
    dispatch(setDrawDeck());
  };

  const handleStandDealer = () => {
    dispatch(setStandDealer(true));
  };

  useEffect(() => {
    if (isStandPlayer) {
      calcHandsValue(dealerHands) <= 16 // nits: ここは再起処理になっている？
        ? handleHitDealer()
        : handleStandDealer();
    }
  }, [isStandPlayer, dealerHands]);

  return (
    <Component>
      <Position>Dealer</Position>
      <Hands>
        {dealerHands.map((value, index) => {
          const isHoleCard = Boolean(index);
          return <Card key={index} value={value} isHidden={isHoleCard && !isStandPlayer} />;
        })}
      </Hands>
    </Component>
  );
};

const Component = styled.View`
  width: 100%;
`;

const Position = styled.Text`
  font-size: 20px;
`;

const Hands = styled.View`
  margin-top: 10px;
  flex-direction: row;
`;
