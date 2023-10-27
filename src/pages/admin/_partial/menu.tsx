import React from 'react';
import styled from 'styled-components';
import { Menu, Link } from '@/components';
import COLOR_MAP from '@/styles/colors';

import { BlocksAndArrows, Config, } from '@icon-park/react';

const LM = styled.div`
  margin-top: 10px;
  height: calc(100vh - 70px);
  width: 250px;
  min-width: 250px;
  background-color: ${COLOR_MAP.white};
  a.active {
    color: ${COLOR_MAP.blue};
  }
`;

export default function LeftMenu() {
  return (
    <LM className="admin-navigator">
      <Menu mode="inline">
        <Menu.Item>
          <Link to={'/admin'}>Home</Link>
        </Menu.Item>
        <Menu.SubMenu
          title="内容管理"
          isOpen
          icon={<BlocksAndArrows theme="outline" size="20" fill="#333" strokeWidth={2}/>}
        >
          {
            [
              <div className=''>Post</div>
            ]
          }
        </Menu.SubMenu>
        <Menu.SubMenu
          title="系统管理"
          isOpen
          icon={<Config theme="outline" size="20" fill="#333" strokeWidth={2}/>}
        >
          { ['hello', 'heelo'] }
        </Menu.SubMenu>
      </Menu>
    </LM>
  );
}