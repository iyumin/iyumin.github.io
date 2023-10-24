import React from 'react';
import styled from 'styled-components';
import { MenuFold, MenuUnfold, } from '@icon-park/react';
import { useLocation } from 'react-router-dom';

import { IRouteItem } from '@/types';

import Mask from './mask';

const Right = styled.div`
  transition: all .5s ease-in-out;
  position: fixed;
  top: 0;
  height: 100vh;
  padding: 8px 0;
  z-index: 999;
`;

const RightMenus = styled.div`
  padding: 32px 0;
  text-align: center;
  .right-navi-menu-item {
    padding: 16px 0;
    transition: all .1s ease-in-out;
    &.actived {
      background-color: #777;
      a { color: #f1f1f1; }
    }
    &:hover {
      background-color: #333;
      a { color: #f1f1f1; }
    }
    a {
      text-decoration: none;
      color: #000;
    }
  }
`;

interface IProps {
  isOpen: boolean,
  onClick: React.MouseEventHandler<HTMLElement>,
  menus: IRouteItem[],
}

export default function RightNavi (props: IProps) :React.ReactElement {
  const { isOpen, onClick, menus } = props;

  const rightNaviWidth = 300;
  const rightNavMenuWidth = 44;

  const location = useLocation();

  const classnames = (menu: IRouteItem) => {
    const url = menu.paths.join('/');

    if (url === location.pathname && isOpen) {
      return 'right-navi-menu-item actived';
    } else {
      return 'right-navi-menu-item';
    }
  };

  const _judegPaths = (menu: IRouteItem) => {
    if (menu.type === 'hash') {
      return '/#' + menu.paths.join('/');
    } else {
      return menu.paths.join('/');
    }
  };

  React.useEffect(() => {
    const handleScroll = (e: Event) => {
      isOpen && e.preventDefault();
    };

    window.addEventListener('wheel', handleScroll, {passive: false});

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [isOpen]);

  return (
    <>
      <Right
        className="page-article-right-navi"
        style={{
          width: rightNaviWidth,
          right:isOpen ? 0 : rightNavMenuWidth - rightNaviWidth,
          backgroundColor: isOpen ? '#fff' : 'transparent',
        }}
      >
        <div style={{
          marginLeft:isOpen ? 16 : 0,
          transition:'all .5s ease-in-out',
          cursor:'pointer',
        }}>
          {
            isOpen
              ?
              <MenuUnfold
                theme="outline"
                size="32"
                fill="#555555"
                strokeWidth={2}
                onClick={onClick}
              />
              :
              <MenuFold
                theme="outline"
                size="32"
                fill="#d1d1d1"
                strokeWidth={2}
                onClick={onClick}
              />
          }
        </div>
        <RightMenus style={{visibility: isOpen ? 'visible' : 'hidden'}}>
          {
            menus.map(menu => {
              if (menu.paths.length === 2) {
                return (
                  <div className={classnames(menu)} key={menu.key}>
                    <a href={_judegPaths(menu)}>{menu.title}</a>
                  </div>
                );
              }
            })
          }
        </RightMenus>
      </Right>
      { isOpen && <Mask style={{zIndex:998}} /> }
    </>
  );
}
