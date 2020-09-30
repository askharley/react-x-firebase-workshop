import React, { useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import './scss/style.scss';
import { UserContext } from './shared/context';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const TheLayout = React.lazy(() => import('./containers/TheLayout'));

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route path="/" name="Home" render={props => <TheLayout {...props} />} />
          </Switch>
        </React.Suspense>
      </HashRouter>
    </UserContext.Provider>
  );
}
