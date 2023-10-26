import React from 'react';
import { fetchUsers } from '@/apis';
import { UserInfo, UserSke } from './user';
import { IUser } from '@/types';
import { Header } from '../_partial/layout';
import styled from 'styled-components';
import { UserEdit } from './edit';

const Us = styled.div``;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  .preview {
    flex-grow: 1;
  }
  .user-edit {
    width: 300px;
  }
`;

export function UserAdmin() :React.ReactElement {
  const [users, setUsers] = React.useState<IUser[]>();
  const [pickUser, setPickUser] = React.useState<IUser>(null);

  const getAndSetUsers = () => {
    (async() => {
      const data = await fetchUsers();
      if (data) setUsers(data.users);
    })();
  }

  React.useEffect(() => getAndSetUsers(), []);

  const handleClickUser = (u: IUser) => {
    setPickUser(null);
    setTimeout(() => setPickUser(u), 100);
  }

  return (
    <Us>
      <Header>
        <Header.Title>用户管理</Header.Title>
      </Header>
      <Content>
        <div className='preview'>
          {
            users
              ? users.map(u => <UserInfo key={u.uid} user={u} onClick={handleClickUser} />)
              : <><UserSke /><UserSke /><UserSke /></>
          }
        </div>
        <div className='user-edit'>
          { pickUser && <UserEdit user={pickUser} onSuccess={getAndSetUsers}/> }
        </div>
      </Content>
    </Us>
  )
}