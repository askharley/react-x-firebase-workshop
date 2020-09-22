import { createActions } from "redux-actions";
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  list: []
};

export const actionCreators = createActions({}, 'SET_MOVIES');

export const reducer = createReducer(initialState, {
  [actionCreators.setMovies]: (state, action) => {
    state.list = action.payload;
  }
});
