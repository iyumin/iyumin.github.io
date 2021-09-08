import React from 'react';
import styled from 'styled-components';
import { Menu, Link } from '@/components';
import COLOR_MAP from '@/styles/colors';

import { BlocksAndArrows, Config, } from '@icon-park/react';

import { adminHomeRoute, generalRouteItems, editRouteItems } from '@/routes';
import { IRouteItem } from '@/types';

const NavigatorStyled = styled.div`
  margin-top: 10px;
  height: calc(100vh - 70px);
  width: 250px;
  min-width: 250px;
  background-color: ${COLOR_MAP.white};
  a.active {
    color: ${COLOR_MAP.blue};
  }
`;

export default function Navigator () :React.ReactElement {
  const renderMenuItem = (item: IRouteItem) => (
    <Menu.Item icon={item.icon} key={item.key}>
      <Link to={item.paths.join('/')}>{ item.title }</Link>
    </Menu.Item>
  );

  return (
    <NavigatorStyled className="admin-navigator">
      <Menu mode="inline">
        <Menu.Item icon={adminHomeRoute.icon}>
          <Link to={adminHomeRoute.paths.join('/')}>{adminHomeRoute.title}</Link>
        </Menu.Item>
        <Menu.SubMenu
          title="概览"
          isOpen
          icon={<BlocksAndArrows theme="outline" size="20" fill="#333" strokeWidth={2}/>}
        >
          { generalRouteItems.map(renderMenuItem) }
        </Menu.SubMenu>
        <Menu.SubMenu
          title="管理"
          isOpen
          icon={<Config theme="outline" size="20" fill="#333" strokeWidth={2}/>}
        >
          { editRouteItems.map(renderMenuItem) }
        </Menu.SubMenu>
      </Menu>
    </NavigatorStyled>
  );
}