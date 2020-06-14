import { callApi } from '../apiActionsAsync';
import {
  getTest,
  getTests,
  createTest,
  deleteTest,
  editTest,
} from './testActions';
import { ITestAdd } from '../../api/dto/TestAdd';
import { ITestEddit } from '../../api/dto/TestEddit';

export const callApiGetTests = (params: void) =>
  callApi(
    params,
    { url: 'admin​/v1​/Test', method: 'GET' },
    getTests,
  );

export const callApiGetTest = (params: string) =>
  callApi(params, { url: 'admin​/v1​/Test', method: 'GET' }, getTest);

export const callApiAddTest = (params: ITestAdd) =>
  callApi(
    params,
    { url: 'admin​/v1​/Test', method: 'POST' },
    createTest,
  );

export const callApiEditAddTest = (params: ITestEddit) =>
  callApi(
    params,
    { url: `admin​/v1​/Test/${params.id}`, method: 'PUT' },
    editTest,
  );

export const callApiDeleteTest = (id: string) =>
  callApi(
    {},
    { url: `admin​/v1​/Test/${id}`, method: 'DELETE' },
    deleteTest,
  );
