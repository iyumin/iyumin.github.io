import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import PhotoEdit from './photo';
import COLOR_MAP from '@/styles/colors';
import Photos from './photos';
import { useNavigate, useLocation } from 'react-router-dom';
import Articles from './articles';
import Users from './users';
import { Down } from '@icon-park/react';

const HEIGHT = 56;

const F = styled.div`
  height: 100vh;
`;

const RouteArea = styled.div`
  padding: 16px 0;
`;

const TitleArea = styled.div`
  height: ${HEIGHT}px;
  background-color: ${COLOR_MAP.dark};
  color: ${COLOR_MAP.white3};
  transition: height .15s ease-in-out;
`;

const NavItem = styled.div`
  height: ${HEIGHT}px;
  color: ${COLOR_MAP.white3};
  text-align: center;
  span {
    color: inherit;
    text-decoration: none;
    line-height: ${HEIGHT}px;
    > .icon {
      position: relative;
      top: 2px;
      left: 2px;
    }
  }
`;

const ITEMS = [
  {
    title: (
      <>
        <span>后台管理</span>
        <span className='icon'><Down theme="outline" size="16" fill="#fff"/></span>
      </>
    ),
    to: '',
  },
  {
    title: '照片',
    to: 'photos',
  },
  {
    title: '文章',
    to: 'articles',
  },
  {
    title: '用户',
    to: 'users',
  }
]

export function MobileAdmin() {
  const navigate = useNavigate();
  const location = useLocation();
  const [items, setItems] = React.useState(ITEMS);
  const [navH, setNavH] = React.useState(HEIGHT);

  const renderItem = (item: {title: string, to: string}) => {
    return (
      <NavItem key={item.title}>
        <span onClick={(e) => {
          navigate(item.to);
          e.stopPropagation();
          if (navH !== HEIGHT ) setNavH(HEIGHT);
          else setNavH(HEIGHT * ITEMS.length + 8);
        }}>{item.title}</span>
      </NavItem>
    )
  }

  React.useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <F className='mobile-admin'>
      <TitleArea
        style={{height: navH}}
        onBlur={() => setNavH(HEIGHT)}
        tabIndex={0}
      >
        { items.map(i => renderItem(i)) }
      </TitleArea>
      <RouteArea>
        <Routes>
          <Route path='photo/:uid' element={<PhotoEdit />} />
          <Route path='photos' element={<Photos />} />
          <Route path='articles' element={<Articles />} />
          <Route path='users' element={<Users />} />
        </Routes>
      </RouteArea>
    </F>
  )
}

