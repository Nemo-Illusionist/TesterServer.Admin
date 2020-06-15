import { asyncFactory } from 'typescript-fsa-redux-thunk';
import { actionCreatorFactory } from 'typescript-fsa';
import { baseFetch } from '../../api/BaseFetch';
import { IAuthRequest, IAuthResponse } from '../../api/dto/AuthDto';

const create = actionCreatorFactory('AUTHORIZATION');
const createAsync = asyncFactory(create);

export const authorization = createAsync<
  IAuthRequest,
  IAuthResponse,
  Error
>('AUTH', async (params: IAuthRequest, dispatch) => {
  const url = 'admin/v1/Authorization';
  const res = await baseFetch(url, params, 'POST');
  if (!res.error) {
    //set cookies
  }
  return res.result as IAuthResponse;
});
