import React, { FC, useEffect } from 'react';
import styled from 'styled-components/native';
import { Card } from '../atoms/Card';
import { CardType } from '../../domain/declarations/models';
import { calcHandsValue } from '../../domain/logics/calcHandsValue';

interface Props {
  playerHands: CardType[];
  dealerHands: CardType[];
  isPlayerStand: boolean;
  actionHit: () => void; // nits: hitやstandくらい短くしてしまうと、grepするときにノイズが混じりそうなので、一旦このままでも良いかなと思っておりますが、いかがでしょう？？
  actionStand: () => void;
}

export const DealerPanel: FC<Props> = (props) => {
  useEffect(() => {
    if (props.isPlayerStand) {
      calcHandsValue(props.dealerHands) <= 16 // nits: ここは再起処理になっている？
        ? props.actionHit()
        : props.actionStand();
    }
  }, [props.isPlayerStand, props.dealerHands]);

  return (
    <Component>
      <Position>Dealer</Position>
      <Hands>
        {props.dealerHands.map((value, index) => {
          const isHoleCard = Boolean(index);
          return <Card key={index} value={value} isHidden={isHoleCard && !props.isPlayerStand} />;
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
