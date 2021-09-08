import React, { Suspense } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import { Loading } from '@/components';

import { adminHomeRoute, generalRouteItems, editRouteItems } from './admin';
import { rootRouteItems } from './root';

export default function Routes () :React.ReactElement {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          {
            rootRouteItems.map(r => {
              return (
                <Route
                  exact={r.exact}
                  path={r.paths.join('/')}
                  component={r.component}
                  key={r.key}
                />
              );
            })
          }
          <Redirect from="/" to="/gallery" />
        </Switch>
      </Suspense>
    </Router>
  );
}

export {
  adminHomeRoute, generalRouteItems, editRouteItems,
  rootRouteItems,
};
