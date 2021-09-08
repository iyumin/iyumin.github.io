import React from 'react';
import styled from 'styled-components';
import COLOR_MAP from '@/styles/colors';

type InputProps = {
  label?: string,
  style?: React.CSSProperties,
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputStyled = styled.div`
  display: flex;
  align-items: center;
  margin: 4px 0px;
  label {
    display: inline-block;
  }
  input {
    display: inline-block;
    height: 24px;
    padding: 0px 8px;
    margin: 4px 8px;
    border: 1px solid ${COLOR_MAP.white5};
    border-radius: 0;
    flex-grow: 1;
    :focus {
      border-color: ${COLOR_MAP.blue};
      outline: none;
    }
  }
`;

function Input (props: InputProps) :React.ReactElement {
  const { label, style, ...restProps } = props;

  return (
    <InputStyled style={style}>
      <label>{ label }</label>
      <input {...restProps} />
    </InputStyled>
  );
}

export {
  Input,
  InputProps,
};