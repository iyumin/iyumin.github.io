import React from 'react';
import styled from 'styled-components';

import { Header } from '../_partial/layout';

const Container = styled.div`
  padding-bottom: 64px;
`;

export default function LogViewer () :React.ReactElement {
  return (
    <Container className="admin-log-viewer-container">
      <Header>
        <Header.Title>Log Viewer</Header.Title>
      </Header>
      <h1>Welcome to view logs.</h1>
    </Container>
  );
}
