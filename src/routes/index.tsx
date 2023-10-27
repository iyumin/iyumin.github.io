import React from 'react';
import { HashRouter } from 'react-router-dom';
import { RootRouter } from './root';

export default function Routes() {
  return (
    <React.StrictMode>
      <HashRouter>
        <RootRouter />
      </HashRouter>
    </React.StrictMode>
  );
}
