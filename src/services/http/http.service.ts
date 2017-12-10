import { RequestGetParams } from './request-opts';
import {
  ResponseGet,
  ResponsePost,
  ResponseDelete,
  ResponsePatch,
  ResponsePut,
} from './response';

export interface HttpService {
  get<T>(url: string, requestOpts?: RequestGetParams): Promise<ResponseGet<T | T[]>>;
  post<T, U>(url: string, body: T): Promise<ResponsePost<U>>;
  put<T>(url: string, body: T): Promise<ResponsePut>;
  patch<T>(url: string, body: T): Promise<ResponsePatch>;
  delete(url: string): Promise<ResponseDelete>;
}
