import COLOR_MAP from '@/styles/colors';
import React from 'react';
import styled from 'styled-components';

import { IVerse } from '@/types';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center center;
`;

const Desc = styled.div`
  position: absolute;
  font-size: 48px;
  top: 10%;
  right: 5%;
  color: ${COLOR_MAP.white1};
  opacity: 0.25;
  writing-mode: vertical-rl;
  line-height: 1;
  letter-spacing: 16px;
  p {
    &:nth-child(1) {
      margin-top: 0;
    }
    &:nth-child(2) {
      margin-top: 64px;
    }
  }
`;

interface IProps {
  cover: string,
  verse: IVerse,
}

export default function Background (props: IProps) :React.ReactElement {
  const { cover, verse } = props;

  return (
    <Container style={{backgroundImage:`url(${cover})`}} className="gallery-cover">
      <Desc>
        { verse && verse.content.map((c,i) => <p key={i}>{c}</p>) }
      </Desc>
    </Container>
  );
}
