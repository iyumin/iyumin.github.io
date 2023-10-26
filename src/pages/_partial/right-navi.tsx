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
  isOpen?: boolean,
  onClick?: React.MouseEventHandler<HTMLElement>,
  menus: IRouteItem[],
}

export default function RightNavi (props: IProps) :React.ReactElement {
  const { isOpen=false, onClick , menus } = props;
  const [visible, setVisible] = React.useState(isOpen);

  const rightNaviWidth = 300;
  const rightNavMenuWidth = 44;

  const location = useLocation();

  const classnames = (menu: IRouteItem) => {
    const url = menu.paths.join('/');

    if (url === location.pathname && visible) {
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

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setVisible(!visible);
    if (onClick) onClick(e);
  };

  React.useEffect(() => {
    const handleScroll = (e: Event) => {
      visible && e.preventDefault();
    };

    window.addEventListener('wheel', handleScroll, {passive: false});

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [visible]);

  return (
    <>
      <Right
        className="page-article-right-navi"
        style={{
          width: rightNaviWidth,
          right:visible ? 0 : rightNavMenuWidth - rightNaviWidth,
          backgroundColor: visible ? '#fff' : 'transparent',
        }}
      >
        <div style={{
          marginLeft:visible ? 16 : 0,
          transition:'all .5s ease-in-out',
          cursor:'pointer',
        }}>
          {
            visible
              ?
              <MenuUnfold
                theme="outline"
                size="32"
                fill="#555555"
                strokeWidth={2}
                onClick={handleClick}
              />
              :
              <MenuFold
                theme="outline"
                size="32"
                fill="#d1d1d1"
                strokeWidth={2}
                onClick={handleClick}
              />
          }
        </div>
        <RightMenus style={{visibility: visible ? 'visible' : 'hidden'}}>
          {
            menus.map(menu => {
              if (menu.paths.length === 2 && !(menu.show===false)) {
                return (
                  <div className={classnames(menu)} key={menu.key} onClick={handleClick}>
                    <a href={_judegPaths(menu)}>{menu.title}</a>
                  </div>
                );
              }
            })
          }
        </RightMenus>
      </Right>
      { visible && <Mask style={{zIndex:998}} onClick={() => setVisible(false)} /> }
    </>
  );
}
