import React from 'react';
import { HashRouter } from 'react-router-dom';
import { RootRouter } from '@/routes';
import { Navbar } from './components/navbar';

const ITEMS = [
  {
    title: 'Gallery',
    to: '/gallery',
  },
  {
    title: 'Article',
    to: '/articles',
  },
  {
    title: 'Admin',
    to: '/admin',
  }
]

export default function App() {
  return (
    <React.StrictMode>
      <HashRouter>
        <RootRouter />
        <Navbar menus={ITEMS} />
      </HashRouter>
    </React.StrictMode>
  );
}
