import { Action, combineReducers } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { testReducer } from '../store/test/testState';

export const createMainReducer = () =>
  combineReducers({
    test: testReducer,
  });

export interface IAppState
  extends ReturnType<ReturnType<typeof createMainReducer>> {}

export interface IAppDispatch
  extends ThunkDispatch<IAppState, Error, Action> {}

export interface IThunkAction
  extends ThunkAction<Promise<void>, IAppState, {}, Action> {}
