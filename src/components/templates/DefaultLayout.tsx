import React from 'react';
import styled from 'styled-components/native';
import { GameTable } from '../Screen/GameTable';

export const DefaultLayout: React.FC = () => {
  return (
    <DefaultLayoutView>
      <GameTable />
    </DefaultLayoutView>
  );
};

const DefaultLayoutView = styled.View`
  height: 100%;
  align-items: center;
  justify-content: center;
`;
