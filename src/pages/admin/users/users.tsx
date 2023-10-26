import React from 'react';
import { fetchUsers } from '@/apis';
import { UserInfo } from './user';
import { IUser } from '@/types';
import { Header } from '../_partial/layout';

export function UserAdmin() :React.ReactElement {
  const [users, setUsers] = React.useState<IUser[]>(null);

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
      { users?.map(u => <UserInfo key={u.uid} user={u} />) }
    </>
  )
}