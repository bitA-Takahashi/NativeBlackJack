import React, { FC } from 'react';
import styled from 'styled-components/native';
import { Card } from '../atoms/Card';
import { CardType } from '../../domain/declarations/models';
import { Button } from '../atoms/Button';

interface Props {
  playerHands: CardType[];
  onPressHit: () => void;
  onPressStand: () => void;
}

export const PlayerPanel: FC<Props> = ({ playerHands, onPressHit, onPressStand }) => {
  return (
    <Component>
      <Position>Player</Position>
      <Hands>
        {playerHands.map((value, index) => (
          // TODO: keyにindex以外当てるものがないので一旦仮あて
          <Card key={index} value={value} />
        ))}
      </Hands>
      <ButtonWrapper>
        <Button onPress={onPressHit}>hit</Button>
        <Button onPress={onPressStand}>stand</Button>
      </ButtonWrapper>
    </Component>
  );
};

const Component = styled.View`
  margin-top: 30px;
`;

const Position = styled.Text`
  font-size: 20px;
`;

const Hands = styled.View`
  margin: 10px 0;
  flex-direction: row;
`;

const ButtonWrapper = styled.View`
  flex-direction: row;
`;
