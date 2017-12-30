import { RequestOpts } from './request-opts';
import { Response } from './response';

export interface HttpProvider {
  get(url: string, requestOpts?: RequestOpts): Promise<Response>;
  post(url: string, requestOpts: RequestOpts): Promise<Response>;
  put(url: string, requestOpts: RequestOpts): Promise<Response>;
  patch(url: string, requestOpts: RequestOpts): Promise<Response>;
  delete(url: string): Promise<Response>;
}
