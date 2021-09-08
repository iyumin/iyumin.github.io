import React from 'react';
import {
  Api,
  DataUser,
  DocumentFolder,
  HomeTwo,
  Log,
  Permissions,
  PictureOne,
  Topic,
} from '@icon-park/react';

import { IRouteItem } from '@/types';

const AdminArticlePage = React.lazy(() => import('../pages/admin/articles'));
const AdminPicturePage = React.lazy(() => import('../pages/admin/pictures'));
const AdminHomePage = React.lazy(() => import('../pages/admin/home'));
const AdminLoggerViewer = React.lazy(() => import('../pages/admin/logs-view'));

const adminHomeRoute: IRouteItem = {
  key: 0,
  icon: <HomeTwo theme="outline" size="20" fill="#333" strokeWidth={2}/>,
  paths: ['', 'admin', 'home'],
  name: 'admin-home',
  title: '首页',
  component: AdminHomePage,
  exact: true,
  type: 'hash',
};

const generalRouteItems: IRouteItem[] = [
  {
    key: 1,
    icon: <DocumentFolder theme="outline" size="16" fill="#333" strokeWidth={2}/>,
    paths: ['', 'admin', 'articles'],
    name: 'admin-articles-view',
    title: '文章列表',
    component: AdminArticlePage,
    exact: true,
    type: 'hash',
  },
  {
    key: 2,
    icon: <PictureOne theme="outline" size="16" fill="#333" strokeWidth={2}/>,
    paths: ['', 'admin', 'pictures'],
    name: 'admin-pictures-view',
    title: '图库',
    component: AdminPicturePage,
    exact: true,
    type: 'hash',
  },
  {
    key: 3,
    icon: <Topic theme="outline" size="16" fill="#333" strokeWidth={2}/>,
    paths: ['', 'admin', 'questions'],
    name: 'admin-questions',
    title: '题库',
    component: null,
    exact: true,
    type: 'hash',
  },
];

const editRouteItems: IRouteItem[] = [
  {
    key: 4,
    icon: <Api theme="outline" size="16" fill="#333" strokeWidth={2}/>,
    paths: ['', 'admin', 'apis'],
    name: 'admin-apis',
    title: 'API设置',
    component: null,
    exact: true,
    type: 'hash',
  },
  {
    key: 5,
    icon: <DataUser theme="outline" size="16" fill="#333" strokeWidth={2}/>,
    paths: ['', 'admin', 'users'],
    name: 'admin-users',
    title: '用户管理',
    component: null,
    exact: true,
    type: 'hash',
  },
  {
    key: 6,
    icon: <Log theme="outline" size="16" fill="#333" strokeWidth={2}/>,
    paths: ['', 'admin', 'logs-view'],
    name: 'admin-logs-view',
    title: '日志查看',
    component: AdminLoggerViewer,
    exact: true,
    type: 'hash',
  },
  {
    key: 7,
    icon: <Permissions theme="outline" size="16" fill="#333" strokeWidth={2}/>,
    paths: ['', 'admin', 'permission'],
    name: 'admin-permission',
    title: '权限管理',
    component: null,
    exact: true,
    type: 'hash',
  },
];

export {
  adminHomeRoute,
  generalRouteItems,
  editRouteItems,
};