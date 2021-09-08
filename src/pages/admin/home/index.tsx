import React from 'react';
import styled from 'styled-components';
import VisitData from './visit-data';

const Container = styled.div``;

export default function AdminHomePage(): React.ReactElement {

  return (
    <Container className="admin-home-container">
      <VisitData />
    </Container>
  );
}
