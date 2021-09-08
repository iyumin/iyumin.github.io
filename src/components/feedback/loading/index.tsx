import React from 'react';
import styled from 'styled-components';

import { Spin } from '../spin';

const Container = styled.div`
  width: 100%;
  text-align: center;
`;

interface IProps {
  type?: 'dot-circle'
}

export function Loading (props: IProps) :React.ReactElement {
  const { type = 'dot-circle' } = props;

  const render = (t: string) => {
    let final;

    switch (t) {
    case 'dot-circle':
      final = <Spin />;
      break;
    default:
      final = <Spin />;
    }

    return final;
  };

  return (
    <Container>
      { render(type) }
    </Container>
  );
}
