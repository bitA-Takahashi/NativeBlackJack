import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

interface Props {
  onPress: () => void;
}

export const Button: React.FC<Props> = ({ onPress, children }) => {
  return (
    <Component onPress={onPress}>
      <ButtonStyle>
        <Text>{children}</Text>
      </ButtonStyle>
    </Component>
  );
};

const Component = styled.TouchableWithoutFeedback``;

const ButtonStyle = styled.View`
  max-width: 70px;
  width: 100%;
  height: 30px;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
`;
