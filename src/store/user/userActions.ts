import { asyncFactory } from 'typescript-fsa-redux-thunk';
import { actionCreatorFactory } from 'typescript-fsa';
import { baseFetch } from '../../api/BaseFetch';
import { IUser, IUserAdd, IUserEdit } from '../../api/dto/UserDto';

const create = actionCreatorFactory('USER');
const createAsync = asyncFactory(create);

export const getUsers = createAsync<{}, IUser[], Error>(
  'GET_USERS',
  async (params, dispatch) => {
    const url = 'admin/v1/User';
    const res = await baseFetch(url, {}, 'GET');
    if (res.error) {
      return [];
    }
    return res.result as IUser[];
  },
);
export const getUser = createAsync<string, IUser | null, Error>(
  'GET_USER',
  async (id) => {
    const url = `admin​/v1​/User/${id}`;
    const res = await baseFetch(url, {}, 'GET');
    if (res.error) {
      return null;
    }
    return res.result as IUser;
  },
);
export const createUser = createAsync<IUserAdd, IUser, Error>(
  'CREATE_USER',
  async (params: IUserAdd) => {
    const url = `admin​/v1​/User/`;
    const res = await baseFetch(url, params, 'POST');

    return res.result as IUser;
  },
);
export const editUser = createAsync<IUserEdit, IUser, Error>(
  'EDIT_USER',
  async (params: IUserEdit) => {
    const url = `admin​/v1​/User/${params.id}`;
    const res = await baseFetch(url, params, 'PUT');
    return res.result as IUser;
  },
);
