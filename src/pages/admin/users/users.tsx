import React from 'react';
import { fetchUsers } from '@/apis';
import { UserInfo, UserSke } from './user';
import { IUser } from '@/types';
import { Header } from '../_partial/layout';
import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export function UserAdmin() :React.ReactElement {
  const [users, setUsers] = React.useState<IUser[]>();

  React.useEffect(() => {
    (async() => {
      const data = await fetchUsers();
      if (data) setUsers(data.users);
    })();
  }, []);

  return (
    <>
      <Header>
        <Header.Title>用户管理</Header.Title>
      </Header>
      <Content>
        {
          users
            ? users.map(u => <UserInfo key={u.uid} user={u} />)
            : <><UserSke /><UserSke /><UserSke /></>
        }
      </Content>
    </>
  )
}