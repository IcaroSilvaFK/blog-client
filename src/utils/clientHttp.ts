const baseUrl = "http://localhost:8000/api";

function castingUri(uri: string) {
  return uri.startsWith("/") ? uri : `/${uri}`;
}

async function _get<T>(uri: string, headers?: HeadersInit): Promise<T> {
  const validUri = castingUri(uri);

  const data = await fetch(`${baseUrl}${validUri}`, {
    method: "GET",
    headers,
  });
  const json = (await data.json()) as T;

  return json;
}

async function _post<T>(
  uri: string,
  payload: unknown,
  headers?: HeadersInit
): Promise<T> {
  const validUri = castingUri(uri);

  const data = await fetch(`${baseUrl}${validUri}`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers,
  });

  const json = (await data.json()) as T;

  return json;
}

async function _put<T>(
  uri: string,
  payload: unknown,
  headers?: HeadersInit
): Promise<T> {
  const validUri = castingUri(uri);

  const data = await fetch(`${baseUrl}${validUri}`, {
    method: "PUT",
    body: JSON.stringify(payload),
    headers,
  });
  const json = (await data.json()) as T;

  return json;
}

async function _patch<T>(
  uri: string,
  payload: unknown,
  headers?: HeadersInit
): Promise<T> {
  const validUri = castingUri(uri);

  const data = await fetch(`${baseUrl}${validUri}`, {
    method: "PATCH",
    body: JSON.stringify(payload),
    headers,
  });
  const json = (await data.json()) as T;

  return json;
}

async function _delete<T>(uri: string, headers?: HeadersInit): Promise<T> {
  const validUri = castingUri(uri);

  const data = await fetch(`${baseUrl}${validUri}`, {
    method: "DELETE",
    headers,
  });
  const json = (await data.json()) as T;

  return json;
}

export const httpClient = {
  get: _get,
  post: _post,
  put: _put,
  patch: _patch,
  delete: _delete,
};
