import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { IRole } from '../../api/dto/RoleDto';
import { getRole, getRoles } from './roleActions';

export interface IRoleState {
  loadState: boolean;
  error: Error | null;
  roles: IRole[];
  role: IRole | null;
}

const initialState: IRoleState = {
  roles: [],
  role: null,
  error: null,
  loadState: false,
};

export const roleReducer = reducerWithInitialState<IRoleState>(
  initialState,
)
  .case(getRoles.async.started, (state) => ({
    ...state,
    loadState: true,
    error: null,
  }))
  .case(getRoles.async.done, (state, { result }) => ({
    ...state,
    roles: result,
    loadState: false,
    error: null,
  }))
  .case(getRoles.async.failed, (state, { error }) => ({
    ...state,
    loadState: false,
    error,
  }))
  .case(getRole.async.started, (state) => ({
    ...state,
    loadState: true,
    error: null,
  }))
  .case(getRole.async.done, (state, { result }) => ({
    ...state,
    role: result,
    loadState: false,
    error: null,
  }))
  .case(getRole.async.failed, (state, { error }) => ({
    ...state,
    loadState: false,
    error,
  }));
