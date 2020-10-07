import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Spin } from 'antd';

const TheLayout = React.lazy(() => import('./containers/TheLayout'));

export default function App() {
  return (
    <HashRouter>
      <React.Suspense fallback={<Spin />}>
        <Switch>
          <Route path="/" name="Home" render={props => <TheLayout {...props} />} />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
}
