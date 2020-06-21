import {reducerWithInitialState} from "typescript-fsa-reducers";
import {getUsers, getUser} from "./userActions";
import {IUser, IUsers} from "../../api/dto/UserDto";

export interface IUserState {
    loadState: boolean;
    error: Error | null;
    users: IUsers | null;
    user: IUser | null;
}

const initialState: IUserState = {
    users: null,
    user: null,
    error: null,
    loadState: false,
};

export const userReducer = reducerWithInitialState<IUserState>(initialState)
    .case(getUsers.async.started, (state) => ({
        ...state,
        loadState: true,
        error: null,
    }))
    .case(getUsers.async.done, (state, {result}) => ({
        ...state,
        users: result,
        loadState: false,
        error: null,
    }))
    .case(getUsers.async.failed, (state, {error}) => ({
        ...state,
        loadState: false,
        error,
    }))
    .case(getUser.async.started, (state) => ({
        ...state,
        loadState: true,
        error: null,
    }))
    .case(getUser.async.done, (state, {result}) => ({
        ...state,
        user: result,
        loadState: false,
        error: null,
    }))
    .case(getUser.async.failed, (state, {error}) => ({
        ...state,
        loadState: false,
        error,
    }));
