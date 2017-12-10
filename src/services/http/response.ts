export interface ResponseBase {
  status: number | null;
}

export interface ResponseXhrBase extends ResponseBase {
  headers?: Headers | null;
  type?: ResponseType | null;
  url?: string | null;
}

export interface ResponseXhrGet<T> extends ResponseXhrBase {
  body: T | null;
}

export interface ResponseXhrPost<T> extends ResponseXhrBase {
  body: T | null;
}

export interface ResponseXhrPut extends ResponseXhrBase {
}

export interface ResponseXhrPatch extends ResponseXhrBase {
}

export interface ResponseXhrDelete extends ResponseXhrBase {
}

export type ResponseXhr<T> =
  ResponseXhrGet<T> |
  ResponseXhrPost<T> |
  ResponseXhrPut |
  ResponseXhrPatch |
  ResponseXhrDelete;

export interface ResponseFireBaseBase extends ResponseBase {
}

export interface ResponseFireBaseGet<T> extends ResponseFireBaseBase {
  body: T | null;
}

export interface ResponseFireBasePost<T> extends ResponseFireBaseBase {
  body: T | null;
}

export interface ResponseFireBasePatch extends ResponseFireBaseBase { }

export interface ResponseFireBasePut extends ResponseFireBaseBase { }

export interface ResponseFireBaseDelete extends ResponseFireBaseBase { }

export type ResponseFireBase<T> =
  ResponseFireBaseGet<T> |
  ResponseFireBasePost<T> |
  ResponseFireBasePatch |
  ResponseFireBasePut |
  ResponseFireBaseDelete;

export type ResponseGet<T> = ResponseFireBaseGet<T> | ResponseXhrGet<T>;

export type ResponsePost<T> = ResponseFireBasePost<T> | ResponseXhrPost<T>;

export type ResponsePatch = ResponseFireBasePatch | ResponseXhrPatch;

export type ResponsePut = ResponseFireBasePut | ResponseXhrPut;

export type ResponseDelete = ResponseFireBaseDelete | ResponseXhrDelete;

export type Response<T> = ResponseXhr<T> | ResponseFireBase<T>;
