import React from 'react';
import {
  Api,
  DataUser,
  DocumentFolder,
  HomeTwo,
  Log,
} from '@icon-park/react';

import { IRouteItem } from '@/types';

const AdminArticlePage = React.lazy(() => import('../pages/admin/posts'));
const AdminHomePage = React.lazy(() => import('../pages/admin/home'));
const AdminLoggerViewer = React.lazy(() => import('../pages/admin/logs-view'));
const CoverEdit = React.lazy(() => import('../pages/admin/cover'));
const UserAdmin = React.lazy(() => import('../pages/admin/users'));

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
    paths: ['', 'admin', 'posts'],
    name: 'admin-posts-view',
    title: '发表',
    component: AdminArticlePage,
    exact: true,
    type: 'hash',
  },
  {
    key: 2,
    icon: <DocumentFolder theme="outline" size="16" fill="#333" strokeWidth={2}/>,
    paths: ['', 'admin', 'cover'],
    name: 'admin-cover-eidt',
    title: '封面',
    component: CoverEdit,
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
    title: 'API 管理',
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
    component: UserAdmin,
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
];

export {
  adminHomeRoute,
  generalRouteItems,
  editRouteItems,
};