import React from 'react';
import styled from 'styled-components';

const D = styled.div``;

const I = styled.div``;

export interface DatePickerProps {
  onSelect?(date: number): void;
}

export function DatePicker() {
  // const { onSelect } = props;

  return (
    <D>
      <DateInput />
    </D>
  )
}

function DateInput() {
  return (
    <I>
      <input />
    </I>
  )
}