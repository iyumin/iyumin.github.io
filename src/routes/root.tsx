import React from 'react';
import { useRoutes } from 'react-router-dom';

const AdminPage = React.lazy(() => import('@/pages/admin'));
const ArticlePage = React.lazy(() => import('@/pages/posts/post'));
const ArticlesPage = React.lazy(() => import('@/pages/posts'));
const GalleryPage = React.lazy(() => import('@/pages/gallery'));
const EditPage = React.lazy(() => import('@/pages/admin/edit'));

const ArticleAdmin = React.lazy(() => import('../pages/admin/posts'));
const HomeAdmin = React.lazy(() => import('../pages/admin/home'));
const CoverAdmin = React.lazy(() => import('../pages/admin/cover'));
const UserAdmin = React.lazy(() => import('../pages/admin/users'));

export const RootRouter = () => useRoutes(
  [
    {
      path: 'admin',
      element: <AdminPage />,
      children: [
        {
          path: 'article',
          element: <ArticleAdmin />
        },
        {
          path: 'home',
          element: <HomeAdmin />
        },
        {
          path: 'cover',
          element: <CoverAdmin />
        },
        {
          path: 'user',
          element: <UserAdmin />
        }
      ]
    },
    {
      path: 'article/:uid',
      element: <ArticlePage />,
    },
    {
      path: 'articles',
      element: <ArticlesPage />,
    },
    {
      path: 'gallery',
      element: <GalleryPage />,
    },
    {
      path: 'edit',
      element: <EditPage />,
    }
  ]
);
