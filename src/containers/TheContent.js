import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd';

import routes from '../routes';
import { routeKeys } from '../shared/utils/constants';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const TheContent = () => {
  return (
    <Layout.Content style={{ margin: '25px' }}>
      <Suspense fallback={loading}>
        <Switch>
          {routes.map((route, idx) => {
            return route.component && (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={props => (
                  <route.component {...props} />
                )} />
            );
          })}
          <Redirect from="/" to={routeKeys.LOGIN} />
        </Switch>
      </Suspense>
    </Layout.Content>
  )
}

export default React.memo(TheContent);
