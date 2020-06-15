import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { IAuthResponse } from '../../api/dto/AuthDto';
import { authorization } from './authActions';

export interface IAuthState {
  loadState: boolean;
  error: Error | null;
  auth: IAuthResponse | null;
}

const initialState: IAuthState = {
  auth: null,
  error: null,
  loadState: false,
};

export const userReducer = reducerWithInitialState<IAuthState>(
  initialState,
)
  .case(authorization.async.started, (state) => ({
    ...state,
    loadState: true,
    error: null,
  }))
  .case(authorization.async.done, (state, { result }) => ({
    ...state,
    auth: result,
    loadState: false,
    error: null,
  }))
  .case(authorization.async.failed, (state, { error }) => ({
    ...state,
    loadState: false,
    error,
  }));
