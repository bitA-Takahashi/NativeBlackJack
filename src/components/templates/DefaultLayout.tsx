import React from 'react';
import styled from 'styled-components/native';

export const DefaultLayout: React.FC = () => {
  return (
    <DefaultLayoutView>
      <HelloWorld>HelloWorld</HelloWorld>
    </DefaultLayoutView>
  );
};

const DefaultLayoutView = styled.View`
  background-color: #00f;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const HelloWorld = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;
