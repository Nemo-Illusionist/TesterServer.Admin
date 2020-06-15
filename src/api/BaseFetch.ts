export type IHttpMethods = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface IResponse<R> {
  result: R | null;
  status: number;
  error: Error | null;
  message: string | null;
}

export const baseFetch = async <P, R>(
  url: string,
  params: P,
  method: IHttpMethods = 'GET',
  headers: { [key: string]: string } = {},
): Promise<IResponse<R>> => {
  try {
    const bodyObj =
      method !== 'GET' ? { body: JSON.stringify(params) } : {};
    const response = await fetch(`/api/${url}`, {
      method,
      ...bodyObj,
      headers: {
        Accept: 'application/json, text/plain',
        'Content-Type': 'application/json;charset=UTF-8',
        ...headers,
      },
    });
    if (response.status === 401) {
      throw new Error("No auth");
    } else if (!response.status || response.status < 200 || response.status >= 300) {
      throw await response.json();
    }
    return await response.json()
  } catch (error) {
    return {
      error: error,
      message: error.message,
      result: null,
      status: error.status,
    }
  }
};
