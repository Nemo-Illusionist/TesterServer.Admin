import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { ITest } from '../../api/dto/TestDto';
import {
  getTest,
  getTests,
  createTest,
  deleteTest,
  editTest,
} from './testActions';

export interface ITestState {
  loadState: boolean;
  error: Error | null;
  test: ITest[] | ITest | null;
}

const initialState: ITestState = {
  test: null,
  error: null,
  loadState: false,
};

export const testReducer = reducerWithInitialState<ITestState>(
  initialState,
)
  .case(getTests.started, (state) => ({
    ...state,
    loadState: true,
    error: null,
  }))
  .case(getTests.done, (state, { result }) => ({
    ...state,
    test: result,
    loadState: false,
    error: null,
  }))
  .case(getTests.failed, (state, { error }) => ({
    ...state,
    loadState: false,
    error,
  }))
  .case(getTest.started, (state) => ({
    ...state,
    loadState: true,
    error: null,
  }))
  .case(getTest.done, (state, { result }) => ({
    ...state,
    test: result,
    loadState: false,
    error: null,
  }))
  .case(getTest.failed, (state, { error }) => ({
    ...state,
    loadState: false,
    error,
  }))
  .case(createTest.started, (state) => ({
    ...state,
    loadState: true,
    error: null,
  }))
  .case(createTest.done, (state, { result }) => ({
    ...state,
    test: result,
    loadState: false,
    error: null,
  }))
  .case(createTest.failed, (state, { error }) => ({
    ...state,
    loadState: false,
    error,
  }))
  .case(editTest.started, (state) => ({
    ...state,
    loadState: true,
    error: null,
  }))
  .case(editTest.done, (state, { result }) => ({
    ...state,
    test: result,
    loadState: false,
    error: null,
  }))
  .case(editTest.failed, (state, { error }) => ({
    ...state,
    loadState: false,
    error,
  }))
  .case(deleteTest.started, (state) => ({
    ...state,
    loadState: true,
    error: null,
  }))
  .case(deleteTest.done, (state) => ({
    ...state,
    loadState: false,
    error: null,
  }))
  .case(deleteTest.failed, (state, { error }) => ({
    ...state,
    loadState: false,
    error,
  }));
