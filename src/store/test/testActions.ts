import { actionCreatorFactory } from 'typescript-fsa';
import { ITest } from '../../api/dto/TestDto';
import { ITestAdd } from '../../api/dto/TestAdd';
import { ITestEddit } from '../../api/dto/TestEddit';

const testActionCreator = actionCreatorFactory('Test');

export const getTests = testActionCreator.async<void, ITest[], Error>(
  'TESTS',
);
export const getTest = testActionCreator.async<string, ITest, Error>(
  'TEST',
);
export const createTest = testActionCreator.async<
  ITestAdd,
  ITest,
  Error
>('CREATE');
export const editTest = testActionCreator.async<
  ITestEddit,
  ITest,
  Error
>('EDIT');
export const deleteTest = testActionCreator.async<{}, {}, Error>(
  'DELETE',
);
