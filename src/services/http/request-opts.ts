export type RequestGetParams = string | URLSearchParams | { [key: string]: any | any[] } | null;

export interface RequestOptsBase {
}

export interface RequestOptsXhr extends RequestOptsBase {
  body?: any;
  headers?: Headers | null;
  withCredentials?: boolean | null;
  responseType?: string | null;
}

export interface RequestOptsFirebase extends RequestOptsBase {
  params?: { [key: string]: any };
  body?: any;
}

export type RequestOpts = RequestOptsXhr | RequestOptsFirebase;
