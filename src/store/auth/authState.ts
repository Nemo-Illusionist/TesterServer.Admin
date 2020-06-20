import {reducerWithInitialState} from "typescript-fsa-reducers";
import {authorization} from "./authActions";

export interface IAuthState {
    loadState: boolean;
    error: Error | null;
}

const initialState: IAuthState = {
    error: null,
    loadState: false,
};

export const authReducer = reducerWithInitialState<IAuthState>(initialState)
    .case(authorization.async.started, (state) => ({
        ...state,
        loadState: true,
        error: null,
    }))
    .case(authorization.async.done, (state) => ({
        ...state,
        loadState: false,
        error: null,
    }))
    .case(authorization.async.failed, (state, {error}) => ({
        ...state,
        loadState: false,
        error,
    }));
