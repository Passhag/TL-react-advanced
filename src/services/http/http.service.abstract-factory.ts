import { HttpService } from './http.service';

export interface HttpServiceAbstractFactory {
  createFireBaseService(): HttpService;
}
