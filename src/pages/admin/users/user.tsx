import { IUser } from '@/types';
import React from 'react';
import styled from 'styled-components';
import { Skeleton } from '@/components';

const U = styled.div``;

export interface UserProps {
  user: IUser;
}

export function UserInfo({user}: UserProps) :React.ReactElement {
  if (!user) {
    return (
      <U>
        <Skeleton />
      </U>
    )
  }

  return (
    <U>
      <div className='left'>
        <div className='avatar'>{ user.avatar }</div>
      </div>
      <div className='right'>
        <div className='nickname'>{ user.nickname }</div>
        <div className='username'>{ user.username }</div>
        <div className='birthday'>{ user.birthday }</div>
      </div>
    </U>
  )
}