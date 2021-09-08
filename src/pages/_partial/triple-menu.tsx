import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
position: relative;
  display: inline-block;
  cursor: pointer;
  width: 44px;
  height: 44px;
  //overflow: hidden;
  .triple-menu-line {
    position: absolute;
    width: 88px;
    left: 0;
    top: 0;
    border: none;
    border-top: 2px solid #000;
  }
`;

interface IProps {
  onOpen: React.MouseEventHandler<HTMLElement>,
  onClose: React.MouseEventHandler<HTMLElement>,
}

export default function TripleMenu (props: IProps) :React.ReactElement {
  const { onOpen, onClose, } = props;

  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (isOpen) {
      onClose(e);
      setIsOpen(false);
    } else {
      onOpen(e);
      setIsOpen(true);
    }
  };

  return (
    <Container onClick={handleClick} className="mint-partial-triple-menu">
      <div className="triple-menu-line"></div>
      <div className="triple-menu-line" style={{top:21}}></div>
      <div
        className="triple-menu-line"
        style={{marginTop:42,transform:isOpen ? 'rotate(-45deg)' : 'rotate(0)',width:isOpen ? Math.sqrt(44*44*2)*2 : 44*2}}
      ></div>
    </Container>
  );
}
