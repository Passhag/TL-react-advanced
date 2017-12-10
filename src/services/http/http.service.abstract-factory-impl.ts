import { HttpServiceAbstractFactory } from './http.service.abstract-factory';
import { HttpService } from './http.service';
import { BeConnectorFireBase } from './be-connectors';
import HttpServiceImpl from './http.service.impl';

export default class HttpServiceAbstractFactoryImpl implements HttpServiceAbstractFactory {
  createFireBaseService(): HttpService {
    const connector = new BeConnectorFireBase();

    return new HttpServiceImpl(connector);
  }
}
