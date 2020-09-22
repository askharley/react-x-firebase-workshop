import { combineReducers, compose, createStore } from 'redux';
import { connectRouter } from 'connected-react-router';
import persistState from 'redux-localstorage';
import { reducer as authReducer } from './shared/state/authStore';
import { reducer as movieReducer } from './shared/state/movieStore';

export default function configureStore(history, initialState) {
  const reducers = {
    auth: authReducer,         
    movie: movieReducer
  }

  const enhancers = [compose(persistState())];

  const rootReducer = combineReducers({
    ...reducers,
    router: connectRouter(history)
  });

  return createStore(
    rootReducer,
    initialState,
    compose(...enhancers)
  );
}
