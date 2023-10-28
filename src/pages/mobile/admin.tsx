import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import PhotoEdit from './photo';
import COLOR_MAP from '@/styles/colors';

const F = styled.div`
  height: 100vh;
`;

const RouteArea = styled.div`
  padding: 16px 0;
`;

const TitleArea = styled.div`
  height: 64px;
  background-color: ${COLOR_MAP.dark};
`;

export function MobileAdmin() {
  return (
    <F className='mobile-admin'>
      <TitleArea>
        <NavLink to={'/mobile/photo'}>Photo</NavLink>
      </TitleArea>
      <RouteArea>
        <Routes>
          <Route path='photo/:uid' element={<PhotoEdit />} />
        </Routes>
      </RouteArea>
    </F>
  )
}