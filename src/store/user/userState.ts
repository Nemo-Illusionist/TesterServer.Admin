import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { getUsers, getUser } from './userActions';
import { IUser } from '../../api/dto/UserDto';

export interface ITopicState {
  loadState: boolean;
  error: Error | null;
  users: IUser[];
  user: IUser | null;
}

const initialState: ITopicState = {
  users: [],
  user: null,
  error: null,
  loadState: false,
};

export const userReducer = reducerWithInitialState<ITopicState>(
  initialState,
)
  .case(getUsers.async.started, (state) => ({
    ...state,
    loadState: true,
    error: null,
  }))
  .case(getUsers.async.done, (state, { result }) => ({
    ...state,
    users: result,
    loadState: false,
    error: null,
  }))
  .case(getUsers.async.failed, (state, { error }) => ({
    ...state,
    loadState: false,
    error,
  }))
  .case(getUser.async.started, (state) => ({
    ...state,
    loadState: true,
    error: null,
  }))
  .case(getUser.async.done, (state, { result }) => ({
    ...state,
    user: result,
    loadState: false,
    error: null,
  }))
  .case(getUser.async.failed, (state, { error }) => ({
    ...state,
    loadState: false,
    error,
  }));
