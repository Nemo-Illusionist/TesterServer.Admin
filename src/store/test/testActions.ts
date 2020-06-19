import { asyncFactory } from 'typescript-fsa-redux-thunk';
import { actionCreatorFactory } from 'typescript-fsa';
import { ITest, ITestAdd, ITestEddit } from '../../api/dto/TestDto';
import { baseFetch } from '../../api/BaseFetch';
import tests from '../../api/mock/test.json';

const create = actionCreatorFactory('TEST');
const createAsync = asyncFactory(create);

export const getTests = createAsync<{}, ITest[], Error>(
  'GET_TESTS',
  async (params, dispatch) => {
    const url = 'admin​/v1​/Test';
    const res = await baseFetch(url, {}, 'GET');
    if (res.error) {
      return [];
    }
    return res.result as ITest[];
  },
);
export const getTest = createAsync<string, ITest | null, Error>(
  'GET_TEST',
  async (id) => {
    const url = `admin​/v1​/Test/${id}`;
    const res = await baseFetch(url, {}, 'GET');
    if (res.error) {
      return null;
    }
    return res.result as ITest;
  },
);
export const createTest = createAsync<ITestAdd, ITest, Error>(
  'CREATE_TEST',
  async (params: ITestAdd) => {
    const url = `admin​/v1​/Test/`;
    const res = await baseFetch(url, params, 'POST');

    return res.result as ITest;
  },
);
export const editTest = createAsync<ITestEddit, ITest, Error>(
  'EDIT_TEST',
  async (params: ITestEddit) => {
    const url = `admin​/v1​/Test/${params.id}`;
    const res = await baseFetch(url, params, 'PUT');
    return res.result as ITest;
  },
);
export const deleteTest = createAsync<void, void, Error>(
  'DELETE_TEST',
  async (id) => {
    const url = `admin​/v1​/Test/${id}`;
    const res = await baseFetch(url, {}, 'DELETE');
    return res.result;
  },
);
