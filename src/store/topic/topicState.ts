import {reducerWithInitialState} from "typescript-fsa-reducers";
import {ITopic, ITopics} from "../../api/dto/TopicDto";
import {getTopics, getTopic} from "./topicActions";

export interface ITopicState {
    loadState: boolean;
    error: Error | null;
    topics: ITopics | null;
    topic: ITopic | null;
}

const initialState: ITopicState = {
    topics: null,
    topic: null,
    error: null,
    loadState: false,
};

export const topicReducer = reducerWithInitialState<ITopicState>(initialState)
    .case(getTopics.async.started, (state) => ({
        ...state,
        loadState: true,
        error: null,
    }))
    .case(getTopics.async.done, (state, {result}) => ({
        ...state,
        topics: result,
        loadState: false,
        error: null,
    }))
    .case(getTopics.async.failed, (state, {error}) => ({
        ...state,
        loadState: false,
        error,
    }))
    .case(getTopic.async.started, (state) => ({
        ...state,
        loadState: true,
        error: null,
    }))
    .case(getTopic.async.done, (state, {result}) => ({
        ...state,
        topic: result,
        loadState: false,
        error: null,
    }))
    .case(getTopic.async.failed, (state, {error}) => ({
        ...state,
        loadState: false,
        error,
    }));
