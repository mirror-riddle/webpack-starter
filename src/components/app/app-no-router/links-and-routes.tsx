import { LinkItem } from 'components/app/app-header';
import { RouteItem } from 'components/app/app-content';
import { HomePage, GridPage } from 'pages';

const items = [
  {
    name: 'home',
    path: '/',
    page: HomePage,
  },
  {
    name: 'grid',
    path: '/grid',
    page: GridPage,
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
