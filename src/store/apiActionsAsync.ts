import { AsyncActionCreators } from 'typescript-fsa';
import { IThunkAction } from '../core/mainReducer';
import { baseFetch, IHttpMethods } from '../api/BaseFetch';

export interface IFetchParams {
  url: string;
  method?: IHttpMethods;
  headers?: { [key: string]: string };
}
export const callApi = <P, R>(
  params: P,
  { url, method = 'GET', headers }: IFetchParams,
  actions: AsyncActionCreators<P, R | null, Error>,
  onSuccess?: () => void,
): IThunkAction => {
  return async (dispatch, getState) => {
    dispatch(actions.started(params));
    try {
      let token = process.env.REACT_APP_PUBLIC_TOKEN || '';
      const { status, message, result } = await baseFetch<P, R>(
        url,
        params,
        method,
        token,
        headers,
      );

      if (status >= 400) {
        dispatch(
          actions.failed({
            params,
            error: {
              name: status.toString(),
              message: message ? message : '',
            },
          }),
        );
      } else {
        dispatch(actions.done({ params, result }));
        if (onSuccess != null) {
          onSuccess();
        }
      }
    } catch (error) {
      dispatch(actions.failed({ params, error }));
    }
  };
};
