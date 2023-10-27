import React from 'react';
import styled from 'styled-components';
import { Up, Down } from '@icon-park/react';
import COLOR_MAP from '@/styles/colors';
import { useSpring, animated } from 'react-spring';
import {
  ITEM_HEIGHT,
  ITEM_LEFT_PADDING,
  SUB_ITEM_CONTAINER_PADDING,
} from './config';

export type SubMenuProps = {
  children: React.ReactNode[],
  title: string,
  isOpen?: boolean,
  icon?: React.ReactNode
}

const SubMenuStyled = styled.div`
  .title {
    padding: 16px ${ITEM_LEFT_PADDING}px;
    display: flex;
    align-items: center;
  }
  .items {
    background-color: ${COLOR_MAP.white3};
  }
  .i-icon {
    height: 16px;
  }
  .menu-item {
    padding-left: ${ITEM_LEFT_PADDING + 12}px;
  }
`;

export default function SubMenu (props: SubMenuProps) :React.ReactElement {
  const { children, title, icon, isOpen = false } = props;

  const [isItemsVisible, setIsItemsVisible] = React.useState(isOpen);

  // react spring
  const { x } = useSpring({
    from: { x: 0, p: 0 },
    x: isItemsVisible ? ITEM_HEIGHT * children.length + SUB_ITEM_CONTAINER_PADDING * 2 : 0,
  });

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsItemsVisible(!isItemsVisible);
  };

  return (
    <SubMenuStyled>
      <div className="title" role="button" onClick={handleClick}>
        { icon }
        <span style={{marginLeft: 8}}>{ title }</span>
        {
          isItemsVisible
            ? <Up theme="outline" size="16" fill="#333" strokeWidth={2}/>
            : <Down theme="outline" size="16" fill="#333" strokeWidth={2}/>
        }
      </div>
      <animated.div
        className="items"
        style={{
          height: x,
          overflow: 'hidden',
        }}
      >
        { children }
      </animated.div>
    </SubMenuStyled>
  );
}