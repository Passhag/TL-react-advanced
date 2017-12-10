import {
  RequestGet,
  RequestPost,
  RequestDelete,
  RequestPatch,
  RequestPut,
} from '../request-opts';
import {
  ResponseGet,
  ResponsePost,
  ResponsePatch,
  ResponsePut,
  ResponseDelete,
} from '../response';

export interface BeConnector {
  sendGetRequest<T>(url: string, requestOpts: RequestGet): Promise<ResponseGet<T | T[]>>;
  sendPostRequest<T, U>(url: string, requestOpts: RequestPost<T>): Promise<ResponsePost<U>>;
  sendPatchRequest<T>(url: string, requestOpts: RequestPatch<T>): Promise<ResponsePatch>;
  sendPutRequest<T>(url: string, requestOpts: RequestPut<T>): Promise<ResponsePut>;
  sendDeleteRequest(url: string, requestOpts?: RequestDelete): Promise<ResponseDelete>;
}
