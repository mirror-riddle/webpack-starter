import React from 'react';
import { HomePage, GridPage, CanvasPage } from 'pages';
import { LinkItem } from '../app-header';
import { RouteItem } from '../app-content';

const items = [
  {
    name: 'home',
    path: '/',
    page: <HomePage />,
  },
  {
    name: 'grid',
    path: '/grid',
    page: <GridPage />,
  },
  {
    name: 'canvas',
    path: '/canvas',
    page: <CanvasPage />,
  },
];

const links: LinkItem[] = items.map(item => ({
  name: item.name,
  path: item.path,
}));
const routes: RouteItem[] = items.map(item => ({
  path: item.path,
  page: item.page,
}));

export { links, routes };
