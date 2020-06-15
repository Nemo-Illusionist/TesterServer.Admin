import { Action, combineReducers } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { testReducer } from '../store/test/testState';
import { questionReducer } from '../store/question/questionState';
import { userReducer } from '../store/user/userState';
import { topicReducer } from '../store/topic/topicState';
import { roleReducer } from '../store/role/roleState';

export const createMainReducer = () =>
  combineReducers({
    test: testReducer,
    question: questionReducer,
    user: userReducer,
    topic: topicReducer,
    role: roleReducer,
  });

export interface IAppState
  extends ReturnType<ReturnType<typeof createMainReducer>> {}

export interface IAppDispatch
  extends ThunkDispatch<IAppState, Error, Action> {}

export interface IThunkAction
  extends ThunkAction<Promise<void>, IAppState, {}, Action> {}
