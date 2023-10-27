import React, { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import { login, LoginForm } from '@/apis/auth';
import Navbar from './_partial/navbar';
import LeftMenu from './_partial/menu';

import PostAdmin from './posts';
import UserAdmin from './users';
import HomeAdmin from './home';
import CoverAdmin from './cover';

const Admin = styled.div`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  .main-container {
    width: 100vw;
    display: flex;
    .admin-content {
      background-color: #ffffff;
      margin: 10px 0 0 10px;
      padding: 16px 32px;
      height: calc(100vh - 70px);
      overflow-y: scroll;
      flex-grow: 1;
    }
  }
`;

/**
 * 取出存放在 localStorage 中的值
 * @returns {object} {token: string, name: string}
 */
export const getLocalStorage = () :{token: string, name: string} => {
  const token = localStorage.getItem('token');
  const name = localStorage.getItem('name');
  return { token, name };
};

export default function AdminPage () :ReactElement {
  const [isLogin, setIsLogin] = React.useState(false);
  const [isLoginDialogVisible, setIsDialogVisible] = React.useState(false);

  /**
   * 集中清理 localStorage 中存储的值
   */
  const clearLocalStorage = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
  };

  /**
   * 集中将值存储到 localStorage 中
   * @param token 用户登录 token
   * @param name 用户名
   */
  const setLocalStorage = (token: string, name: string) => {
    localStorage.setItem('token', token);
    localStorage.setItem('name', name);
  };

  /**
   * 处理点击【提交】按钮事件
   * @param e 鼠标事件
   * @param form 用户信息表单
   */
  const handleSubmit = (e: React.MouseEvent<HTMLElement>, form: LoginForm) => {
    (async() => {
      const data = await login(form);
      if (typeof data !== 'string') {
        setLocalStorage(data.data.token, form.username);
        setIsDialogVisible(false);
        setIsLogin(true);
        history.go(0);
      } else {
        window.alert('登录失败');
      }
    })();
  };

  /**
   * 处理点击右上角【登录】按钮事件
   * @param event 鼠标事件
   */
  const handleLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsDialogVisible(true);
  };

  /**
   * 处理点击右上角【登出】按钮事件
   * @param event 鼠标事件
   */
  const handleLogout = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsLogin(false);
    clearLocalStorage();
    history.go(0);
  };

  /**
   * 处理点击登录框【取消】&右上角【x】事件，
   * @param event 鼠标事件
   */
  const handleCancel = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsDialogVisible(false);
  };

  /**
   * 组件挂载时，判断是否登录
   */
  React.useEffect(() => {
    const { token, name } = getLocalStorage();
    if (token && name) setIsLogin(true);
  }, []);

  return (
    <Admin className="admin">
      <Navbar
        isLogin={isLogin}
        isLoginDialogVisible={isLoginDialogVisible}
        onSubmit={(e, form) => handleSubmit(e, form)}
        onLogin={handleLogin}
        onLogout={handleLogout}
        onCancel={handleCancel}
      />
      <div className="main-container">
        <div className='menu-content'>
          <LeftMenu />
        </div>
        <div className="admin-content">
          <Routes>
            <Route path='home' element={<HomeAdmin />} />
            <Route path='post' element={<PostAdmin />} />
            <Route path='user' element={<UserAdmin />} />
            <Route path='cover' element={<CoverAdmin />} />
          </Routes>
        </div>
      </div>
    </Admin>
  );
}
