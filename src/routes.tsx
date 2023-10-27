import React from 'react';
import { useRoutes } from 'react-router-dom';

const AdminPage = React.lazy(() => import('@/pages/admin'));
const ArticlePage = React.lazy(() => import('@/pages/posts/post'));
const ArticlesPage = React.lazy(() => import('@/pages/posts'));
const GalleryPage = React.lazy(() => import('@/pages/gallery'));
const EditPage = React.lazy(() => import('@/pages/admin/edit'));

const PostsAdmin = React.lazy(() => import('./pages/admin/posts'));
const HomeAdmin = React.lazy(() => import('./pages/admin/home'));
const CoverAdmin = React.lazy(() => import('./pages/admin/cover'));
const UserAdmin = React.lazy(() => import('./pages/admin/users'));

export const RootRouter = () => useRoutes(
  [
    {
      path: 'admin',
      element: <React.Suspense><AdminPage /></React.Suspense>,
      children: [
        {
          path: 'post',
          element: <React.Suspense><PostsAdmin /></React.Suspense>
        },
        {
          path: 'home',
          element: <React.Suspense><HomeAdmin /></React.Suspense>
        },
        {
          path: 'cover',
          element: <React.Suspense><CoverAdmin /></React.Suspense>
        },
        {
          path: 'user',
          element: <React.Suspense><UserAdmin /></React.Suspense>
        },
        {
          path: 'edit',
          element: <React.Suspense><EditPage /></React.Suspense>,
        }
      ]
    },
    {
      path: 'article/:uid',
      element: <React.Suspense><ArticlePage /></React.Suspense>,
    },
    {
      path: 'articles',
      element: <React.Suspense><ArticlesPage /></React.Suspense>,
    },
    {
      path: 'gallery',
      element: <React.Suspense><GalleryPage /></React.Suspense>,
    },
  ]
);
