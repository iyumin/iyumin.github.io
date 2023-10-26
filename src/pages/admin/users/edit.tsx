import React from 'react';
import styled from 'styled-components';
import { IUser } from '@/types';
import { Input, Button } from '@/components';
import { Select, Option } from '@/components/inputs/select';
import COLOR_MAP from '@/styles/colors';
import Upload from '@/components/inputs/upload';
import { BASE_URL } from '@/configs';
import { updateUser } from '@/apis/user';

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 8px 16px;
  border-radius: 5px;
  border: 1px solid ${COLOR_MAP.blue};
  .item {
    display: flex;
    align-items: center;
    margin: 4px 0;
    label {
      margin-right: 8px;
      width: 68px;
      text-align: justify;
      text-align-last: justify;
    }
  }
  .submit {
    margin: 8px 0;
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .upload-avatar {
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
`;

export interface UserEditProps {
  user?: IUser
  onSuccess?(): void;
}

interface Action {
  type: string;
  payload: Partial<IUser>;
}

const reducer = (state: IUser, action: Action) => {
  return { ...state, ...action.payload };
};

export function UserEdit({user, onSuccess}: UserEditProps) :React.ReactElement {
  const [state, dispatch] = React.useReducer(reducer, user)

  const setValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.dataset['name'];
    const value = e.target.value;
    dispatch({ type: '', payload: { [name]: value } });
  }

  const handleSubmit = () => {
    (async() => {
      const data = await updateUser(state.uid, state);
      if (data) {
        window.alert('更新成功');
        if (onSuccess) onSuccess();
      }
    })();
  }

  return (
    <>
      <Content>
        <div className='edit-form'>
          <div className='item'>
            <label>头像</label>
            <div className='upload-avatar' style={{width: 110, height: 110, overflow: 'hidden'}}>
              {
                !state.avatar
                  ?
                  <Upload
                    url={BASE_URL + '/upload'}
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    onFinish={(data: any) => dispatch({type: '', payload: {avatar: data.url}})}
                    allowExtensions={['jpg', 'png', 'jpeg', 'gif', 'webp']}
                  />
                  :
                  <img src={BASE_URL + state.avatar} alt={state.username} />
              }
            </div>
          </div>
          <div className='item'>
            <label>用户编码</label>
            <Input
              data-name='uid'
              defaultValue={user.uid}
              value={state.uid}
              onChange={setValue}
              disabled
            />
          </div>
          <div className='item'>
            <label>邀请码</label>
            <Input
              data-name='invitation'
              defaultValue={user.invitation}
              value={state.invitation}
              onChange={setValue}
              disabled
            />
          </div>
          <div className='item'>
            <label>用户名</label>
            <Input
              data-name='username'
              defaultValue={user.username}
              value={state.username}
              onChange={setValue}
            />
          </div>
          <div className='item'>
            <label>密码</label>
            <Input
              data-name='password'
              defaultValue={''}
              value={state.password}
              onChange={setValue}
            />
          </div>
          <div className='item'>
            <label>昵称</label>
            <Input
              data-name='nickname'
              defaultValue={user.nickname}
              value={state.nickname}
              onChange={setValue}
            />
          </div>
          <div className='item'>
            <label>性别</label>
            <div style={{width: 188}}>
              <Select defaultValue={user.gender} onChange={v => dispatch({ type: '', payload: { gender: v } })}>
                <Option value={''} name='未知性别' />
                <Option value={'male'} name='男性' />
                <Option value={'female'} name='女性' />
              </Select>
            </div>
          </div>
          <div className='item'>
            <label>生日</label>
            <Input
              data-name='birthday'
              defaultValue={user.birthday}
              value={state.birthday}
              onChange={setValue}
            />
          </div>
          <div className='item'>
            <label>所在地</label>
            <Input
              data-name='location'
              defaultValue={user.location}
              value={state.location}
              onChange={setValue}
            />
          </div>
          <div className='item'>
            <label>用户描述</label>
            <Input
              data-name='description'
              defaultValue={user.description}
              value={state.description}
              onChange={setValue}
            />
          </div>
          <div className='item'>
            <label>格言</label>
            <Input
              data-name='motto'
              defaultValue={user.motto}
              value={state.motto}
              onChange={setValue}
            />
          </div>
          <div className='item'>
            <label>角色</label>
            <Input
              data-name='role'
              defaultValue={user.role}
              value={state.role}
              onChange={setValue}
            />
          </div>
          <div className='item'>
            <label>用户组</label>
            <Input
              data-name='group'
              defaultValue={user.group}
              value={state.group}
              onChange={setValue}
            />
          </div>
        </div>
        <div className='submit'>
          <Button
            type='primary'
            style={{width: 200, height: 40}}
            onClick={handleSubmit}
          >更新</Button>
        </div>
      </Content>
    </>
  )
}