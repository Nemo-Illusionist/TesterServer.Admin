import {reducerWithInitialState} from "typescript-fsa-reducers";
import {ITest, ITests} from "../../api/dto/TestDto";
import {getTest, getTests} from "./testActions";

export interface ITestState {
    loadState: boolean;
    error: Error | null;
    tests: ITests | null;
    test: ITest | null;
}

const initialState: ITestState = {
    tests: {data: [], meta: {count: 0, page: 0, pageSize: 0}},
    test: null,
    error: null,
    loadState: false,
};

export const testReducer = reducerWithInitialState<ITestState>(initialState)
    .case(getTests.async.started, (state) => ({
        ...state,
        loadState: true,
        error: null,
    }))
    .case(getTests.async.done, (state, {result}) => ({
        ...state,
        tests: result,
        loadState: false,
        error: null,
    }))
    .case(getTests.async.failed, (state, {error}) => ({
        ...state,
        loadState: false,
        error,
    }))
    .case(getTest.async.started, (state) => ({
        ...state,
        loadState: true,
        error: null,
    }))
    .case(getTest.async.done, (state, {result}) => ({
        ...state,
        test: result,
        loadState: false,
        error: null,
    }))
    .case(getTest.async.failed, (state, {error}) => ({
        ...state,
        loadState: false,
        error,
    }));
