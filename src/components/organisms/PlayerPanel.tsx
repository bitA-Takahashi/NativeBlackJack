import React, { FC } from 'react';
import styled from 'styled-components/native';
import { Card } from '../atoms/Card';
import { Button } from '../atoms/Button';
import { setDrawDeck, setPlayerIncrementHand, setStandPlayer } from '../../redux/modules/card';
import { dispatch } from '../../redux/store';
import { CardType } from '../../domain/declarations/models';

interface Props {
  playerHands: CardType[];
}

export const PlayerPanel: FC<Props> = ({ playerHands }) => {
  const handleHitPlayer = () => {
    dispatch(setPlayerIncrementHand());
    dispatch(setDrawDeck());
  };

  const handleStandPlayer = () => {
    dispatch(setStandPlayer(true));
  };

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
        <Button onPress={handleHitPlayer}>hit</Button>
        <Button onPress={handleStandPlayer}>stand</Button>
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
