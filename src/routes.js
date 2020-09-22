import React from 'react'
import { routeKeys } from './shared/utils/constants';

const LoginForm = React.lazy(() => import('./modules/auth/components/LoginForm'));
const MovieList = React.lazy(() => import('./modules/movies/components/MovieList'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: routeKeys.LOGIN, name: 'Login', component: LoginForm },  
  { path: routeKeys.MOVIES, name: 'Movies', component: MovieList, exact: true }  
]

export default routes;
