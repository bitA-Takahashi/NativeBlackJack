import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

interface Props {
  onPress: () => void;
}

export const Button: React.FC<Props> = ({ onPress, children }) => {
  return (
    <Component onPress={onPress}>
      <Text>{children}</Text>
    </Component>
  );
};

const Component = styled.TouchableWithoutFeedback`
  padding: 5px 20px;
  border: 1px solid #000;
  &:not(:first-of-type) {
    margin-left: 5px;
  }
`;
