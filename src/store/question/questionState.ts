import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { IQuestion } from '../../api/dto/QuestionDto';
import { getQuestion, getQuestions } from './questionActions';

export interface IQuestionState {
  loadState: boolean;
  error: Error | null;
  questions: IQuestion[];
  question: IQuestion | null;
}

const initialState: IQuestionState = {
  questions: [],
  question: null,
  error: null,
  loadState: false,
};

export const questionReducer = reducerWithInitialState<
  IQuestionState
>(initialState)
  .case(getQuestions.async.started, (state) => ({
    ...state,
    loadState: true,
    error: null,
  }))
  .case(getQuestions.async.done, (state, { result }) => ({
    ...state,
    questions: result,
    loadState: false,
    error: null,
  }))
  .case(getQuestions.async.failed, (state, { error }) => ({
    ...state,
    loadState: false,
    error,
  }))
  .case(getQuestion.async.started, (state) => ({
    ...state,
    loadState: true,
    error: null,
  }))
  .case(getQuestion.async.done, (state, { result }) => ({
    ...state,
    question: result,
    loadState: false,
    error: null,
  }))
  .case(getQuestion.async.failed, (state, { error }) => ({
    ...state,
    loadState: false,
    error,
  }));
