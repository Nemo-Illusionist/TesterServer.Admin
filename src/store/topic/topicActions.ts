import { asyncFactory } from 'typescript-fsa-redux-thunk';
import { actionCreatorFactory } from 'typescript-fsa';
import { baseFetch } from '../../api/BaseFetch';
import {
  ITopic,
  ITopicAdd,
  ITopicEdit,
} from '../../api/dto/TopicDto';

const create = actionCreatorFactory('TOPIC');
const createAsync = asyncFactory(create);

export const getTopics = createAsync<{}, ITopic[], Error>(
  'GET_TOPICS',
  async (params, dispatch) => {
    const url = 'admin/v1/Topic';
    const res = await baseFetch(url, {}, 'GET');
    if (res.error) {
      return [];
    }
    return res.result as ITopic[];
  },
);
export const getTopic = createAsync<string, ITopic | null, Error>(
  'GET_TOPIC',
  async (id) => {
    const url = `admin​/v1​/Topic/${id}`;
    const res = await baseFetch(url, {}, 'GET');
    if (res.error) {
      return null;
    }
    return res.result as ITopic;
  },
);
export const createTopic = createAsync<ITopicAdd, ITopic, Error>(
  'CREATE_TOPIC',
  async (params: ITopicAdd) => {
    const url = `admin​/v1​/Topic/`;
    const res = await baseFetch(url, params, 'POST');

    return res.result as ITopic;
  },
);
export const editTopic = createAsync<ITopicEdit, ITopic, Error>(
  'EDIT_TOPIC',
  async (params: ITopicEdit) => {
    const url = `admin​/v1​/Topic/${params.id}`;
    const res = await baseFetch(url, params, 'PUT');
    return res.result as ITopic;
  },
);
export const deleteTopic = createAsync<void, void, Error>(
  'DELETE_TOPIC',
  async (id) => {
    const url = `admin​/v1​/Topic/${id}`;
    const res = await baseFetch(url, {}, 'DELETE');
    return res.result;
  },
);
