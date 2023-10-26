import React from 'react';
import { Header } from '../_partial/layout';
import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export function UserEdit() :React.ReactElement {
  React.useEffect(() => {
    (async() => {
    })();
  }, []);

  return (
    <>
      <Header>
        <Header.Title>用户编辑</Header.Title>
      </Header>
      <Content>
      </Content>
    </>
  )
}