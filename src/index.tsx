import React from 'react';
import { createRoot } from 'react-dom/client';
import Routes from '@/routes';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Routes />);
