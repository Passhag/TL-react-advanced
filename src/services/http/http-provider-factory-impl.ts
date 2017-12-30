import { HttpProviderFactory, HttpProviderType } from './http-provider-factory';
import { HttpProvider } from './http-provider';
import { FirebaseProvider } from './providers/firebase-provider';

export default class HttpFactoryImpl implements HttpProviderFactory {
  createHttpProvider(providerType: HttpProviderType): HttpProvider {
    switch (providerType) {
      case HttpProviderType.Xhr: {
        return new FirebaseProvider(); // -> temp
      }
      case HttpProviderType.Firebase: {
        return new FirebaseProvider();
      }
      default: {
        throw new Error('The specified provider is missing.');
      }
    }
  }
}
