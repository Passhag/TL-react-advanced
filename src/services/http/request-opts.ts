export type RequestGetParams = string | URLSearchParams | { [key: string]: any | any[] } | null;

export interface RequestOptsBase {
}

export interface RequestOptsXhrBase extends RequestOptsBase {
  headers?: Headers | null;
  withCredentials?: boolean | null;
  responseType?: string | null;
}

export interface RequestOptsXhrGet extends RequestOptsXhrBase {
  params?: RequestGetParams;
}

export interface RequestOptsXhrPost<T> extends RequestOptsXhrBase {
  body: T | null;
}

export interface RequestOptsXhrPut<T> extends RequestOptsXhrBase {
  body: T | null;
}

export interface RequestOptsXhrPatch<T> extends RequestOptsXhrBase {
  body: T | null;
}

export interface RequestOptsXhrDelete extends RequestOptsXhrBase {
}

export type RequestOptsXhr<T> =
  RequestOptsXhrGet |
  RequestOptsXhrPost<T> |
  RequestOptsXhrDelete |
  RequestOptsXhrPut<T> |
  RequestOptsXhrPatch<T>;

export interface RequestOptsFireBaseBase extends RequestOptsBase { }

export interface RequestOptsFireBaseGet extends RequestOptsFireBaseBase {
  params?: { [key: string]: string };
}

export interface RequestOptsFireBasePost<T> extends RequestOptsFireBaseBase {
  body: T | null;
}

export interface RequestOptsFireBasePatch<T> extends RequestOptsFireBaseBase {
  body: T | null;
}

export interface RequestOptsFireBasePut<T> extends RequestOptsFireBaseBase {
  body: T | null;
}

export interface RequestOptsFireBaseDelete extends RequestOptsFireBaseBase { }

export type RequestOptsFireBase<T> =
  RequestOptsFireBaseGet |
  RequestOptsFireBasePost<T> |
  RequestOptsFireBasePatch<T> |
  RequestOptsFireBasePut<T> |
  RequestOptsFireBaseDelete;

export type RequestGet = RequestOptsXhrGet | RequestOptsFireBaseGet;

export type RequestPost<T> = RequestOptsXhrPost<T> | RequestOptsFireBasePost<T>;

export type RequestPut<T> = RequestOptsXhrPut<T> | RequestOptsFireBasePut<T>;

export type RequestPatch<T> = RequestOptsXhrPatch<T> | RequestOptsFireBasePatch<T>;

export type RequestDelete = RequestOptsXhrDelete | RequestOptsFireBaseDelete;

export type RequestOpts<T> = RequestOptsFireBase<T> | RequestOptsXhr<T>;
