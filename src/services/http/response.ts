export interface ResponseBase {
  status: number | null;
}

export interface ResponseXhr extends ResponseBase {
  body?: any;
  headers?: Headers | null;
  type?: ResponseType | null;
  url?: string | null;
}

export interface ResponseFirebase extends ResponseBase {
  body?: any;
}

export type Response = ResponseFirebase | ResponseXhr;
