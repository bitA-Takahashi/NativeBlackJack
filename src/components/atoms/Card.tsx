import React, { FC } from 'react';
import styled from 'styled-components/native';
import { cardSuitScreen } from '../../domain/const/cardSuits';
import { cardNumberScreen } from '../../domain/const/cardNumbers';
import { CardType } from '../../domain/declarations/models';

interface Props {
  value: CardType;
  isHidden?: boolean;
}

export const Card: FC<Props> = ({ value, isHidden }) => {
  const [suit, number] = value;
  return (
    <Component>
      <Suit suitColor={suit} isHidden={isHidden}>
        {isHidden ? '?' : cardSuitScreen[suit]}
      </Suit>
      <Number suitColor={suit} isHidden={isHidden}>
        {isHidden ? '?' : cardNumberScreen[number]}
      </Number>
    </Component>
  );
};

const Component = styled.View`
  width: 40px;
  height: 60px;
  border: 1px solid;
  position: relative;
  align-items: center;
  justify-content: center;
`;

const Suit = styled.Text<{ suitColor: number; isHidden?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 15px;
  color: ${({ suitColor, isHidden }) => (!isHidden && 2 < suitColor ? `#f00` : '#000')};
`;

const Number = styled.Text<{ suitColor: number; isHidden?: boolean }>`
  font-size: 15px;
  color: ${({ suitColor, isHidden }) => (!isHidden && 2 < suitColor ? `#f00` : '#000')};
`;
