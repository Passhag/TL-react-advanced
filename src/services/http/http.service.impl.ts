import { HttpService } from './http.service';
import { BeConnector } from './be-connectors/be-connector';
import { RequestGetParams } from './request-opts';
import {
  ResponseGet,
  ResponsePost,
  ResponsePut,
  ResponsePatch,
  ResponseDelete,
} from './response';

export default class HttpServiceImpl implements HttpService {
  constructor(private _beConnector: BeConnector) { }

  get<T>(url: string, params?: RequestGetParams): Promise<ResponseGet<T | T[]>> {
    return this._beConnector.sendGetRequest<T>(url, {
      params,
    });
  }

  post<T, U>(url: string, body: T): Promise<ResponsePost<U>> {
    return this._beConnector.sendPostRequest<T, U>(url, {
      body,
    });
  }

  put<T>(url: string, body: T): Promise<ResponsePut> {
    return this._beConnector.sendPutRequest<T>(url, {
      body,
    });
  }

  patch<T>(url: string, body: T): Promise<ResponsePatch> {
    return this._beConnector.sendPatchRequest<T>(url, {
      body,
    });
  }

  delete(url: string): Promise<ResponseDelete> {
    return this._beConnector.sendDeleteRequest(url);
  }
}
