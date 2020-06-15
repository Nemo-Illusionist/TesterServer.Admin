import { asyncFactory } from 'typescript-fsa-redux-thunk';
import { actionCreatorFactory } from 'typescript-fsa';
import { baseFetch } from '../../api/BaseFetch';
import { IRole } from '../../api/dto/RoleDto';

const create = actionCreatorFactory('ROLE');
const createAsync = asyncFactory(create);

export const getRoles = createAsync<{}, IRole[], Error>(
  'GET_ROLES',
  async (params, dispatch) => {
    const url = 'admin​/v1​/Role';
    const res = await baseFetch(url, {}, 'GET');
    if (res.error) {
      return [];
    }
    return res.result as IRole[];
  },
);
export const getRole = createAsync<string, IRole | null, Error>(
  'GET_ROLE',
  async (id) => {
    const url = `admin​/v1​/Role/${id}`;
    const res = await baseFetch(url, {}, 'GET');
    if (res.error) {
      return null;
    }
    return res.result as IRole;
  },
);
