import React from 'react';
import { IRouteItem } from '@/types';

const AdminPage = React.lazy(() => import('@/pages/admin'));
const ArticlePage = React.lazy(() => import('@/pages/articles/article'));
const ArticlesPage = React.lazy(() => import('@/pages/articles'));
const GalleryPage = React.lazy(() => import('@/pages/gallery'));

const rootRouteItems: IRouteItem[] = [
  {
    key: 1,
    paths: ['', 'admin'],
    name: 'root-admin',
    title: '管理',
    component: AdminPage,
    exact: false,
    type: 'hash',
  },
  {
    key: 2,
    paths: ['', 'article', ':uid'],
    name: 'root-article',
    title: '文章详情',
    component: ArticlePage,
    exact: false,
    type: 'hash',
  },
  {
    key: 3,
    paths: ['', 'articles'],
    name: 'root-articles',
    title: '文章',
    component: ArticlesPage,
    exact: true,
    type: 'hash',
  },
  {
    key: 4,
    paths: ['', 'gallery'],
    name: 'root-gallery',
    title: '相册',
    component: GalleryPage,
    exact: true,
    type: 'hash',
  },
];

export { rootRouteItems };
