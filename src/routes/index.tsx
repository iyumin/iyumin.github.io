import React, { Suspense } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import { Loading } from '@/components';
import { RightNavi } from '@/pages/_partial';
import { adminHomeRoute, generalRouteItems, editRouteItems } from './admin';
import { rootRouteItems } from './root';
import { IRouteItem } from '@/types';

export default function Routes () :React.ReactElement {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          { rootRouteItems.map(renderRoute) }
          <Redirect from="/" to="/gallery" />
        </Switch>
      </Suspense>
      <RightNavi menus={rootRouteItems} />
    </Router>
  );
}

const renderRoute = (r: IRouteItem) => {
  return (
    <Route
      exact={r.exact}
      path={r.paths.join('/')}
      component={r.component}
      key={r.key}
    />
  );
};

export {
  adminHomeRoute, generalRouteItems, editRouteItems,
  rootRouteItems,
};
